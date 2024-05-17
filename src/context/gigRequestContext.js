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
    user_id,
    gigRequest_name,
    gigRequest_genre,
    gigRequest_email,
    gigRequest_location,
    gigRequest_description,
    gigRequest_instagram,
    gigRequest_spotify,
    gigRequest_youtube,
    gigRequest_website,
  }) => {
    const response = await ensemblersApi.post("/gigRequests", {
      user_id,
      gigRequest_name,
      gigRequest_genre,
      gigRequest_email,
      gigRequest_location,
      gigRequest_description,
      gigRequest_instagram,
      gigRequest_spotify,
      gigRequest_youtube,
      gigRequest_website,
    });

    dispatch({ type: "add_gigRequest", payload: response.data });
  };

const getAllGigRequests = (dispatch) => async () => {
  try {
    const response = await ensemblersApi.get("/gigRequests");
    dispatch({ type: "get_allGigRequests", payload: response.data });
  } catch (err) {
    console.log(err);
  }
};

const getGigRequest = (dispatch) => async (gigRequest_id) => {
  try {
    const response = await ensemblersApi.get(
      `/gigRequests/gigRequest${gigRequest_id}`
    );
    dispatch({ type: "get_gigRequest", payload: response.data });
  } catch (err) {
    console.log(err);
  }
};

const getUserGigRequests = (dispatch) => async (user_id) => {
  try {
    const response = await ensemblersApi.get(`/gigRequests/user${user_id}`);
    dispatch({ type: "get_userGigRequests", payload: response.data });
  } catch (err) {
    console.log(err);
  }
};

const editGigRequest =
  (dispatch) =>
  async ({
    gigRequest_id,
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
        `/gigRequests/gigRequest${gigRequest_id}`,
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
      dispatch({ type: "edit_gigRequest", payload: response.data });
    } catch (err) {
      console.log(err);
    }
  };

const deleteGigRequest =
  (dispatch) =>
  async ({ gigRequest_id }) => {
    try {
      const response = await ensemblersApi.delete(
        `/gigRequests/${gigRequest_id}`
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
