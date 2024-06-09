import createDataContext from "./createDataContext";
import ensemblersApi from "../api/ensemblers";

const artistReducer = (state, action) => {
  switch (action.type) {
    case "add_artist":
      return action.payload;
    case "get_allArtists":
      return action.payload;
    case "get_artist":
      return action.payload;
    case "get_userArtists":
      return action.payload;
    case "edit_artist":
      return action.payload;
    case "delete_artist":
      return action.payload;
    default:
      return state;
  }
};

const addArtist =
  (dispatch) =>
  async ({
    user_id,
    artist_name,
    artist_genre,
    artist_number_of_members,
    artist_solo_instrument,
    artist_email,
    artist_location,
    artist_description,
    artist_tech_rider,
    artist_instagram,
    artist_spotify,
    artist_youtube,
    artist_website,
    artist_admin_users,
  }) => {
    const response = await ensemblersApi.post("/artists", {
      user_id,
      artist_name,
      artist_genre,
      artist_number_of_members,
      artist_solo_instrument,
      artist_email,
      artist_location,
      artist_description,
      artist_tech_rider,
      artist_instagram,
      artist_spotify,
      artist_youtube,
      artist_website,
      artist_admin_users,
    });
    dispatch({ type: "add_artist", payload: response.data });
  };

const getAllArtists = (dispatch) => async () => {
  try {
    const response = await ensemblersApi.get("/artists");
    dispatch({ type: "get_allArtists", payload: response.data });
  } catch (err) {
    console.log(err);
  }
};

const getArtist = (dispatch) => async (artist_id) => {
  try {
    const response = await ensemblersApi.get(`/artists/artist${artist_id}`);
    dispatch({ type: "get_artist", payload: response.data });
  } catch (err) {
    console.log(err);
  }
};

const getUserArtists = (dispatch) => async (user_id) => {
  try {
    const response = await ensemblersApi.get(`/artists/user${user_id}`);
    dispatch({ type: "get_userArtists", payload: response.data });
  } catch (err) {
    console.log(err);
  }
};

const editArtist =
  (dispatch) =>
  async ({
    artist_id,
    name,
    genre,
    number_of_members,
    solo_instrument,
    email,
    location,
    description,
    tech_rider,
    instagram,
    spotify,
    youtube,
    website,
    admin_users,
  }) => {
    try {
      const response = await ensemblersApi.put(`/artists/artist${artist_id}`, {
        name,
        genre,
        number_of_members,
        solo_instrument,
        email,
        location,
        description,
        tech_rider,
        instagram,
        spotify,
        youtube,
        website,
        admin_users,
      });
      dispatch({ type: "edit_artist", payload: response.data });
    } catch (err) {
      console.log(err);
    }
  };

const deleteArtist =
  (dispatch) =>
  async ({ artist_id }) => {
    try {
      const response = await ensemblersApi.delete(`/artists/${artist_id}`);
      dispatch({ type: "delete_artist", payload: response.data });
    } catch (err) {
      console.log(err);
    }
  };

export const { Context, Provider } = createDataContext(
  artistReducer,
  {
    addArtist,
    getAllArtists,
    getArtist,
    getUserArtists,
    editArtist,
    deleteArtist,
  },
  []
);
