import createDataContext from "./createDataContext";
import ensemblersApi from "../api/ensemblers";

const concertReducer = (state, action) => {
  switch (action.type) {
    case "add_concert":
      return action.payload;
    case "get_allConcerts":
      return action.payload;
    case "get_concert":
      return action.payload;
    case "get_userConcerts":
      return action.payload;
    case "edit_concert":
      return action.payload;
    case "delete_concert":
      return action.payload;
    default:
      return state;
  }
};

const addConcert =
  (dispatch) =>
  async ({
    venue_id,
    artist_id,
    gigRequest_id,
    gigSlot_id,
    concert_startTime,
    concert_endTime,
    concert_date,
    concert_cost,
    concert_terms,
    concert_description,
  }) => {
    const response = await ensemblersApi.post("/concerts", {
      venue_id,
      artist_id,
      gigRequest_id,
      gigSlot_id,
      concert_startTime,
      concert_endTime,
      concert_date,
      concert_cost,
      concert_terms,
      concert_description,
    });

    dispatch({ type: "add_concert", payload: response.data });
  };

const getAllConcerts = (dispatch) => async () => {
  try {
    const response = await ensemblersApi.get("/concerts");
    dispatch({ type: "get_allConcerts", payload: response.data });
  } catch (err) {
    console.log(err);
  }
};

const getConcert = (dispatch) => async (concert_id) => {
  try {
    const response = await ensemblersApi.get(`/concerts/concert${concert_id}`);
    dispatch({ type: "get_concert", payload: response.data });
  } catch (err) {
    console.log(err);
  }
};

const getUserConcerts = (dispatch) => async (user_id) => {
  try {
    const response = await ensemblersApi.get(`/concerts/user${user_id}`);
    dispatch({ type: "get_userConcerts", payload: response.data });
  } catch (err) {
    console.log(err);
  }
};

const editConcert =
  (dispatch) =>
  async ({
    artist_id,
    name,
    genre,
    email,
    location,
    description,
    insta,
    spotify,
    youtube,
    website,
  }) => {
    try {
      const response = await ensemblersApi.put(
        `/concerts/concert${concert_id}`,
        {
          name,
          genre,
          email,
          location,
          description,
          insta,
          spotify,
          youtube,
          website,
        }
      );
      dispatch({ type: "edit_concert", payload: response.data });
    } catch (err) {
      console.log(err);
    }
  };

const deleteConcert =
  (dispatch) =>
  async ({ concert_id }) => {
    try {
      const response = await ensemblersApi.delete(`/concerts/${concert_id}`);
      dispatch({ type: "delete_concert", payload: response.data });
    } catch (err) {
      console.log(err);
    }
  };

export const { Context, Provider } = createDataContext(
  concertReducer,
  {
    addConcert,
    getAllConcerts,
    getConcert,
    getUserConcerts,
    editConcert,
    deleteConcert,
  },
  []
);
