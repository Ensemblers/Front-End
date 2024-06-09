import createDataContext from "./createDataContext";
import ensemblersApi from "../api/ensemblers";

const gigSlotReducer = (state, action) => {
  switch (action.type) {
    case "add_gigSlot":
      return action.payload;
    case "get_allGigSlots":
      return action.payload;
    case "get_gigSlot":
      return action.payload;
    case "get_userGigSlots":
      return action.payload;
    case "edit_gigSlot":
      return action.payload;
    case "edit_gigSlot_status":
      return action.payload;
    case "delete_gigSlot":
      return action.payload;
    default:
      return state;
  }
};

const addGigSlot =
  (dispatch) =>
  async ({
    title,
    location,
    date,
    start_time,
    end_time,
    description,
    status,
    venue_id,
    venue_name,
    gig_request_id,
  }) => {
    const response = await ensemblersApi.post("/gig_slots", {
      title,
      location,
      date,
      start_time,
      end_time,
      description,
      status,
      venue_id,
      venue_name,
      gig_request_id,
    });

    dispatch({ type: "add_gigSlot", payload: response.data });
  };

const getAllGigSlots = (dispatch) => async () => {
  try {
    const response = await ensemblersApi.get("/gig_slots");
    dispatch({ type: "get_allGigSlots", payload: response.data });
  } catch (err) {
    console.log(err);
  }
};

const getGigSlot = (dispatch) => async (gig_slot_id) => {
  try {
    const response = await ensemblersApi.get(
      `/gig_slots/gig_slot${gig_slot_id}`
    );
    dispatch({ type: "get_gigSlot", payload: response.data });
  } catch (err) {
    console.log(err);
  }
};

const getUserGigSlots = (dispatch) => async (user_id) => {
  try {
    const response = await ensemblersApi.get(`/gig_slots/user${user_id}`);
    dispatch({ type: "get_userGigSlots", payload: response.data });
  } catch (err) {
    console.log(err);
  }
};

const editGigSlot =
  (dispatch) =>
  async ({
    gig_slot_id,
    gig_slot_title,
    gig_slot_location,
    gig_slot_date,
    gig_slot_start_time,
    gig_slot_end_time,
    gig_slot_description,
    gig_slot_status,
    venue_id,
    venue_name,
    gig_request_id,
  }) => {
    try {
      const response = await ensemblersApi.put(
        `/gig_slots/gig_slot${gig_slot_id}`,
        {
          gig_slot_title,
          gig_slot_location,
          gig_slot_date,
          gig_slot_start_time,
          gig_slot_end_time,
          gig_slot_description,
          gig_slot_status,
          venue_id,
          venue_name,
          gig_request_id,
        }
      );
      dispatch({ type: "edit_gigSlot", payload: response.data });
    } catch (err) {
      console.log(err);
    }
  };

const editGigSlotStatus =
  (dispatch) =>
  async ({ gig_slot_id, gig_slot_status }) => {
    try {
      console.log(gig_slot_id, gig_slot_status);
      const response = await ensemblersApi.patch(
        `/gig_slots/slot_status${gig_slot_id}`,
        {
          gig_slot_status,
        }
      );

      dispatch({ type: "edit_gigSlot_status", payload: response.data });
    } catch (err) {
      console.log(err);
    }
  };

const deleteGigSlot =
  (dispatch) =>
  async ({ gig_slot_id }) => {
    try {
      const response = await ensemblersApi.delete(`/gig_slots/${gig_slot_id}`);
      dispatch({ type: "delete_gigSlot", payload: response.data });
    } catch (err) {
      console.log(err);
    }
  };

export const { Context, Provider } = createDataContext(
  gigSlotReducer,
  {
    addGigSlot,
    getAllGigSlots,
    getGigSlot,
    getUserGigSlots,
    editGigSlot,
    editGigSlotStatus,
    deleteGigSlot,
  },
  []
);
