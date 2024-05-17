import createDataContext from "./createDataContext";
import ensemblersApi from "../api/ensemblers";

const venueReducer = (state, action) => {
  switch (action.type) {
    case "add_venue":
      return action.payload;
    case "get_allVenues":
      return action.payload;
    case "get_venue":
      return action.payload;
    case "get_userVenues":
      return action.payload;
    case "edit_venue":
      return action.payload;
    case "delete_venue":
      return action.payload;
    default:
      return "nothing";
  }
};

const addVenue =
  (dispatch) =>
  async ({
    user_id,
    venue_name,
    venue_location,
    venue_businessHours,
    venue_description,
    venue_website,
  }) => {
    try {
      const response = await ensemblersApi.post("/venues", {
        user_id,
        venue_name,
        venue_location,
        venue_businessHours,
        venue_description,
        venue_website,
      });
      dispatch({ type: "add_venue", payload: response.data });
    } catch (err) {
      console.log(err);
    }
  };

const getAllVenues = (dispatch) => async () => {
  try {
    const response = await ensemblersApi.get("/venues");

    dispatch({ type: "get_allVenues", payload: response.data });
  } catch (err) {
    console.log(err);
  }
};

const getVenue = (dispatch) => async (venue_id) => {
  try {
    const response = await ensemblersApi.get(`/venues/venue${venue_id}`);
    dispatch({ type: "get_venue", payload: response.data });
  } catch (err) {
    console.log(err);
  }
};

const getUserVenues = (dispatch) => async (user_id) => {
  try {
    const response = await ensemblersApi.get(`/venues/user${user_id}`);

    dispatch({ type: "get_userVenues", payload: response.data });
  } catch (err) {
    console.log(err);
  }
};

const editVenue =
  (dispatch) =>
  async ({ venue_id, name, location, businessHours, description, website }) => {
    try {
      const response = await ensemblersApi.put(`/venues/venue${venue_id}`, {
        name,
        location,
        businessHours,
        description,
        website,
      });
      dispatch({ type: "edit_venue", payload: response.data });
    } catch (err) {
      console.log(err);
    }
  };

const deleteVenue =
  (dispatch) =>
  async ({ venue_id }) => {
    try {
      const response = await ensemblersApi.delete(`/venues/${venue_id}`);
      dispatch({ type: "delete_venue", payload: response.data });
    } catch (err) {
      console.log(err);
    }
  };

export const { Context, Provider } = createDataContext(
  venueReducer,
  {
    addVenue,
    getAllVenues,
    getVenue,
    getUserVenues,
    editVenue,
    deleteVenue,
  },
  []
);
