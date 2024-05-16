import { useContext } from "react";
import { Context as ArtistContext } from "../context/ArtistContext";
import { Context as AuthContext } from "../context/AuthContext";

export default () => {
  const { addArtist } = useContext(ArtistContext);
  const {
    state: { user_id },
  } = useContext(AuthContext);

  const createArtist = () => {
    addArtist(user_id);
  };
  return [createArtist];
};
