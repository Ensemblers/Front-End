import {
  StyleSheet,
  Text,
  View,
  TextInput,
  Button,
  TouchableOpacity,
} from "react-native";
import React, { useContext, useState } from "react";
import { Context as ArtistContext } from "../../context/ArtistContext";
import { Context as AuthContext } from "../../context/AuthContext";
import Spacer from "../../components/Spacer";
import { StackActions } from "@react-navigation/native";
import { AntDesign } from "@expo/vector-icons";
import BackButton from "../../components/BackButton";
import Title from "../../components/Title";

const CreateArtist = ({ navigation }) => {
  const { addArtist } = useContext(ArtistContext);
  const { state } = useContext(AuthContext);

  const [artist_name, setartist_name] = useState("");
  const [artist_genre, setartist_genre] = useState("");

  const user_id = state.user_id;
  const popAction = StackActions.pop(1);

  return (
    <View>
      <TouchableOpacity
        onPress={() => {
          navigation.dispatch(popAction);
        }}
        style={styles.backIcon}
      >
        <AntDesign name="back" size={24} color="black" />
        <Text>Back</Text>
      </TouchableOpacity>
      <Title titleText="My Artists" />
      <Text style={styles.label}>Artist Name:</Text>
      <TextInput
        style={styles.input}
        value={artist_name}
        onChangeText={setartist_name}
      />

      <Text style={styles.label}>Genre:</Text>
      <TextInput
        style={styles.input}
        value={artist_genre}
        onChangeText={setartist_genre}
      />
      <Spacer>
        <Button
          title="Create Artist"
          onPress={() => {
            addArtist({
              user_id,
              artist_name,
              artist_genre,
            });
            navigation.navigate("Artist Page");
          }}
        />
      </Spacer>
    </View>
  );
};

export default CreateArtist;

const styles = StyleSheet.create({
  input: {
    fontSize: 18,
    borderWidth: 1,
    borderColor: "black",
    marginBottom: 15,
    padding: 5,
    margin: 5,
  },
  label: {
    fontSize: 20,
    marginBottom: 5,
    marginLeft: 5,
  },
  backIcon: {
    alignSelf: "flex-start",
    color: "grey",
    padding: 10,
  },
  headerTitle: {
    fontSize: 30,
    letterSpacing: 5,
    fontWeight: "bold",
  },
});
