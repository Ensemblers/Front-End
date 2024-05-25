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
    case "delete_gigSlot":
      return action.payload;
    default:
      return state;
  }
};

const addGigSlot =
  (dispatch) =>
  async ({
    venue_id,
    date,
    startTime,
    endTime,
    description,
    gigRequest_id,
  }) => {
    const response = await ensemblersApi.post("/gigSlots", {
      venue_id,
      date,
      startTime,
      endTime,
      description,
      gigRequest_id,
    });

    dispatch({ type: "add_gigSlot", payload: response.data });
  };

const getAllGigSlots = (dispatch) => async () => {
  try {
    const response = await ensemblersApi.get("/gigSlots");
    dispatch({ type: "get_allGigSlots", payload: response.data });
  } catch (err) {
    console.log(err);
  }
};

const getGigSlot = (dispatch) => async (gigSlot_id) => {
  try {
    const response = await ensemblersApi.get(`/gigSlots/gigSlot${gigSlot_id}`);
    dispatch({ type: "get_gigSlot", payload: response.data });
  } catch (err) {
    console.log(err);
  }
};

const getUserGigSlots = (dispatch) => async (user_id) => {
  try {
    const response = await ensemblersApi.get(`/gigSlots/user${user_id}`);
    dispatch({ type: "get_userGigSlots", payload: response.data });
  } catch (err) {
    console.log(err);
  }
};

const editGigSlot =
  (dispatch) =>
  async ({
    gigSlot_id,
    venue_id,
    date,
    startTime,
    endTime,
    description,
    gigRequest_id,
  }) => {
    try {
      const response = await ensemblersApi.put(
        `/gigSlots/gigSlot${gigSlot_id}`,
        {
          venue_id,
          date,
          startTime,
          endTime,
          description,
          gigRequest_id,
        }
      );
      dispatch({ type: "edit_gigSlot", payload: response.data });
    } catch (err) {
      console.log(err);
    }
  };

const deleteGigSlot =
  (dispatch) =>
  async ({ gigSlot_id }) => {
    try {
      const response = await ensemblersApi.delete(`/gigSlots/${gigSlot_id}`);
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
    deleteGigSlot,
  },
  []
);
