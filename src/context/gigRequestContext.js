import createDataContext from "./createDataContext";
import ensemblersApi from "../api/ensemblers";

const gigRequestReducer = (state, action) => {
  switch (action.type) {
    case "add_gigRequest":
      return action.payload;
    case "get_allGigRequests":
      return action.payload;
    case "get_gigRequest":
      return action.payload;
    case "get_userGigRequests":
      return action.payload;
    case "edit_gigRequest":
      return action.payload;
    case "delete_gigRequest":
      return action.payload;
    default:
      return state;
  }
};

const addGigRequest =
  (dispatch) =>
  async ({
    gig_request_cost,
    gig_request_status,
    gig_slot_id,
    artist_id,
    artist_number_of_members,
    artist_name,
    artist_solo_instrument,
    artist_tech_rider,
    artist_genre,
    artist_email,
    artist_location,
    artist_description,
    artist_followers,
    artist_instagram,
    artist_spotify,
    artist_youtube,
    artist_website,
  }) => {
    const response = await ensemblersApi.post("/gig_requests", {
      gig_request_cost,
      gig_request_status,
      gig_slot_id,
      artist_id,
      artist_number_of_members,
      artist_name,
      artist_solo_instrument,
      artist_tech_rider,
      artist_genre,
      artist_email,
      artist_location,
      artist_description,
      artist_followers,
      artist_instagram,
      artist_spotify,
      artist_youtube,
      artist_website,
    });

    dispatch({ type: "add_gigRequest", payload: response.data });
  };

const getAllGigRequests = (dispatch) => async () => {
  try {
    const response = await ensemblersApi.get("/gig_requests");
    dispatch({ type: "get_allGigRequests", payload: response.data });
  } catch (err) {
    console.log(err);
  }
};

const getGigRequest = (dispatch) => async (gig_request_id) => {
  try {
    const response = await ensemblersApi.get(
      `/gig_requests/gig_request${gig_request_id}`
    );
    dispatch({ type: "get_gigRequest", payload: response.data });
  } catch (err) {
    console.log(err);
  }
};

const getUserGigRequests = (dispatch) => async (user_id) => {
  try {
    const response = await ensemblersApi.get(`/gig_requests/user${user_id}`);
    dispatch({ type: "get_userGigRequests", payload: response.data });
  } catch (err) {
    console.log(err);
  }
};

const editGigRequest =
  (dispatch) =>
  async ({
    gig_request_id,
    // gig_request_cost,
    gig_request_status,
    // gig_slot_id,
    // artist_id,
    // artist_number_of_members,
    // artist_name,
    // artist_solo_instrument,
    // artist_tech_rider,
    // artist_genre,
    // artist_email,
    // artist_location,
    // artist_description,
    // artist_followers,
    // artist_instagram,
    // artist_spotify,
    // artist_youtube,
    // artist_website,
  }) => {
    try {
      const response = await ensemblersApi.put(
        `/gig_requests/gig_request${gig_request_id}`,
        {
          // gig_request_cost,
          gig_request_status,
          // gig_slot_id,
          // artist_id,
          // artist_number_of_members,
          // artist_name,
          // artist_solo_instrument,
          // artist_tech_rider,
          // artist_genre,
          // artist_email,
          // artist_location,
          // artist_description,
          // artist_followers,
          // artist_instagram,
          // artist_spotify,
          // artist_youtube,
          // artist_website,
        }
      );
      dispatch({ type: "edit_gigRequest", payload: response.data });
    } catch (err) {
      console.log(err);
    }
  };

const deleteGigRequest =
  (dispatch) =>
  async ({ gig_request_id }) => {
    try {
      const response = await ensemblersApi.delete(
        `/gig_requests/${gig_request_id}`
      );
      dispatch({ type: "delete_gigRequest", payload: response.data });
    } catch (err) {
      console.log(err);
    }
  };

export const { Context, Provider } = createDataContext(
  gigRequestReducer,
  {
    addGigRequest,
    getAllGigRequests,
    getGigRequest,
    getUserGigRequests,
    editGigRequest,
    deleteGigRequest,
  },
  []
);
