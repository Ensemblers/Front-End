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
    concert_terms,
    concert_followers,
    venue_id,
    venue_name,
    artist_id,
    artist_number_of_members,
    artist_name,
    artist_solo_instrument,
    artist_tech_rider,
    artist_genre,
    artist_email,
    artist_description,
    artist_followers,
    gig_request_id,
    gig_request_cost,
    gig_slot_id,
    gig_slot_title,
    gig_slot_location,
    gig_slot_date,
    gig_slot_start_time,
    gig_slot_end_time,
    gig_slot_description,
  }) => {
    const response = await ensemblersApi.post("/concerts", {
      concert_terms,
      concert_followers,
      venue_id,
      venue_name,
      artist_id,
      artist_number_of_members,
      artist_name,
      artist_solo_instrument,
      artist_tech_rider,
      artist_genre,
      artist_email,
      artist_description,
      artist_followers,
      gig_request_id,
      gig_request_cost,
      gig_slot_id,
      gig_slot_title,
      gig_slot_location,
      gig_slot_date,
      gig_slot_start_time,
      gig_slot_end_time,
      gig_slot_description,
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
    concert_id,
    concert_terms,
    concert_followers,
    venue_id,
    venue_name,
    artist_id,
    artist_number_of_members,
    artist_name,
    artist_solo_instrument,
    artist_tech_rider,
    artist_genre,
    artist_email,
    artist_description,
    artist_followers,
    gig_request_id,
    gig_request_cost,
    gig_slot_id,
    gig_slot_title,
    gig_slot_location,
    gig_slot_date,
    gig_slot_start_time,
    gig_slot_end_time,
    gig_slot_description,
  }) => {
    try {
      const response = await ensemblersApi.put(
        `/concerts/concert${concert_id}`,
        {
          concert_terms,
          concert_followers,
          venue_id,
          venue_name,
          artist_id,
          artist_number_of_members,
          artist_name,
          artist_solo_instrument,
          artist_tech_rider,
          artist_genre,
          artist_email,
          artist_description,
          artist_followers,
          gig_request_id,
          gig_request_cost,
          gig_slot_id,
          gig_slot_title,
          gig_slot_location,
          gig_slot_date,
          gig_slot_start_time,
          gig_slot_end_time,
          gig_slot_description,
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
