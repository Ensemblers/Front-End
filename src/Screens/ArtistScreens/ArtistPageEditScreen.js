import {
  StyleSheet,
  Text,
  View,
  TextInput,
  Button,
  FlatList,
  TouchableOpacity,
} from "react-native";
import { StackActions } from "@react-navigation/native";
import React, { useContext, useState } from "react";
import { Context as ArtistContext } from "../../context/ArtistContext";
import { Context as AuthContext } from "../../context/AuthContext";

import Spacer from "../../components/Spacer";
import { AntDesign } from "@expo/vector-icons";

const ArtistPageEditScreen = ({ route, navigation }) => {
  const { state: user } = useContext(AuthContext);
  const { user_id } = user;

  const {
    state: artistState,
    editArtist,
    deleteArtist,
    getUserArtists,
    getAllArtists,
  } = useContext(ArtistContext);

  const { artist_id } = route.params;

  const artist = artistState.find((artist) => artist.artist_id === artist_id);

  let {
    artist_name,
    artist_genre,
    artist_email,
    artist_location,
    artist_description,
    artist_instagram,
    artist_spotify,
    artist_youtube,
    artist_website,
  } = artist;

  const [name, setName] = useState(artist_name);
  const [genre, setGenre] = useState(artist_genre);
  const [email, setEmail] = useState(artist_email);
  const [location, setLocation] = useState(artist_location);
  const [description, setDescription] = useState(artist_description);
  const [insta, setInsta] = useState(artist_instagram);
  const [spotify, setSpotify] = useState(artist_spotify);
  const [youtube, setYoutube] = useState(artist_youtube);
  const [website, setWebsite] = useState(artist_website);

  const popAction = StackActions.pop(1);

  // const MainField = () => {
  //   return (
  //     <View>
  //       {artist.map((l, i) => (
  //         <View key={i} style={styles.inputRow}>
  //           <Text style={styles.label}>Artist Name:</Text>
  //           <TextInput
  //             style={styles.input}
  //             placeholder={l.artist_name}
  //             onChangeText={() => {
  //               setInput();
  //             }}
  //           />
  //         </View>
  //       ))}
  //     </View>
  //   );
  // };

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
      <Text style={styles.headerTitle}>MY ARTISTS</Text>
      <Spacer />

      <View style={styles.inputRow}>
        <Text style={styles.label}>Artist Name:</Text>
        <TextInput
          style={styles.input}
          value={name}
          onChangeText={(name) => setName(name)}
        />
      </View>

      <View style={styles.inputRow}>
        <Text style={styles.label}>Artist Genre:</Text>
        <TextInput
          style={styles.input}
          value={genre}
          onChangeText={(genre) => setGenre(genre)}
        />
      </View>

      <View style={styles.inputRow}>
        <Text style={styles.label}>Artist Email:</Text>
        <TextInput
          style={styles.input}
          value={email}
          onChangeText={(email) => setEmail(email)}
        />
      </View>

      <View style={styles.inputRow}>
        <Text style={styles.label}>Artist Location:</Text>
        <TextInput
          style={styles.input}
          value={location}
          onChangeText={(location) => setLocation(location)}
        />
      </View>

      <View style={styles.inputRow}>
        <Text style={styles.label}>Artist Description:</Text>
        <TextInput
          style={styles.input}
          value={description}
          onChangeText={(description) => setDescription(description)}
        />
      </View>

      <View style={styles.inputRow}>
        <Text style={styles.label}>Artist Instagram:</Text>
        <TextInput
          style={styles.input}
          value={insta}
          onChangeText={(insta) => setInsta(insta)}
        />
      </View>

      <View style={styles.inputRow}>
        <Text style={styles.label}>Artist Spotify:</Text>
        <TextInput
          style={styles.input}
          value={spotify}
          onChangeText={(spotify) => setSpotify(spotify)}
        />
      </View>

      <View style={styles.inputRow}>
        <Text style={styles.label}>Artist Youtube:</Text>
        <TextInput
          style={styles.input}
          value={youtube}
          onChangeText={(youtube) => setYoutube(youtube)}
        />
      </View>

      <View style={styles.inputRow}>
        <Text style={styles.label}>Artist Website:</Text>
        <TextInput
          style={styles.input}
          value={website}
          onChangeText={(website) => setWebsite(website)}
        />
      </View>
      <Spacer />
      <Button
        title="Update Artist"
        onPress={() => {
          editArtist({
            artist_id,
            name,
            genre,
            email,
            location,
            description,
            insta,
            spotify,
            youtube,
            website,
          });
          navigation.navigate("Artist Page", { artist_id });
        }}
      />

      <Button
        title="Delete Artist"
        onPress={() => {
          getUserArtists(user_id);
          deleteArtist({ artist_id });

          navigation.navigate("My Stuff Tab");
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  inputRow: {
    flexDirection: "row",
    marginLeft: 20,
  },
  input: {
    fontSize: 18,
    borderWidth: 1,
    borderColor: "black",
    marginLeft: 15,
    width: 200,
  },
  backIcon: {
    alignSelf: "flex-start",
    color: "grey",
    padding: 10,
  },
  label: {
    fontSize: 20,
    marginBottom: 5,
    marginLeft: 5,
  },
  headerTitle: {
    fontSize: 30,
    letterSpacing: 5,
    fontWeight: "bold",
    textAlign: "center",
  },
});

export default ArtistPageEditScreen;
