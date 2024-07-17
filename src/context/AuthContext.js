import createDataContext from "./createDataContext";
import ensemblersApi from "../api/ensemblers";
import * as SecureStore from "expo-secure-store";
import axios from "axios";

const authReducer = (state, action) => {
  switch (action.type) {
    case "signup":
      return action.payload;
    case "signin":
      return action.payload;
    case "signout":
      return { token: action.payload };
    case "getUser":
      return action.payload;
    case "edit_user":
      return action.payload;
    default:
      return "nothing";
  }
};

const signup =
  (dispatch) =>
  async ({ email, password }) => {
    try {
      const response = await ensemblersApi.post("/auth/signup", {
        email,
        password,
      });
      console.log(response.data);
      dispatch({ type: "signup", payload: response.data });
    } catch (err) {
      console.log(err);
    }
  };

//SIGN IN USER - GET & STORE BEARER TOKEN
const MY_TOKEN = "my-jwt";

const signin =
  (dispatch) =>
  async ({ email, password }) => {
    try {
      //
      const response = await ensemblersApi.post("/auth/signin", {
        email,
        password,
      });

      const user = response.data;
      user.email = email;

      const accessToken = Object.values(response.data)[0];

      axios.defaults.headers.common["Authorization"] = accessToken;
      await SecureStore.setItemAsync(MY_TOKEN, accessToken);

      dispatch({ type: "signin", payload: response.data });
    } catch (err) {
      console.log(err);
    }
  };

const signout = (dispatch) => async () => {
  try {
    await SecureStore.deleteItemAsync(MY_TOKEN);

    axios.defaults.headers.common["Authorization"] = "";

    dispatch({ type: "signout", payload: null });
  } catch (err) {
    console.log(err);
  }
};

const getUser =
  (dispatch) =>
  async ({ email }) => {
    try {
      const response = await ensemblersApi.get(`/users/${email}`);
      dispatch({ type: "get_user", payload: response.data });
    } catch (err) {
      console.log(err);
    }
  };

const editUser =
  (dispatch) =>
  async ({ user_new, id }) => {
    try {
      const response = await ensemblersApi.put(`/users/${id}`, {
        user_new,
      });
      dispatch({ type: "edit_user", payload: response.data });
    } catch (err) {
      console.log(err);
    }
  };

export const { Provider, Context } = createDataContext(
  authReducer,
  { signup, signout, signin, getUser, editUser },
  { token: null }
);
