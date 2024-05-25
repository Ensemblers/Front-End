import { StyleSheet, View } from "react-native";
import React, { useContext, useState } from "react";
import { Context as ArtistContext } from "../../context/ArtistContext";
import { Context as AuthContext } from "../../context/AuthContext";
import { StackActions } from "@react-navigation/native";
import CreatePage from "../../components/CreatePage";

const CreateArtist = ({ navigation }) => {
  const { addArtist } = useContext(ArtistContext);
  const { state: user } = useContext(AuthContext);

  const [artist_name, setartist_name] = useState("");
  const [artist_genre, setartist_genre] = useState("");

  const { user_id } = user;

  const popAction = StackActions.pop(1);

  return (
    <View>
      <CreatePage
        backOnPress={() => {
          navigation.dispatch(popAction);
        }}
        navigateToText="Back"
        TitleText="Create Artist"
        FirstCategory="Artist Name"
        SecondCategory="Genre"
        value={artist_name}
        setValue={setartist_name}
        value2={artist_genre}
        setValue2={setartist_genre}
        CreateButton="Create Artist"
        createOnPress={async () => {
          await addArtist({
            user_id,
            artist_name,
            artist_genre,
          });
          navigation.navigate("Artist Page");
        }}
      />
    </View>
  );
};

export default CreateArtist;

const styles = StyleSheet.create({});
