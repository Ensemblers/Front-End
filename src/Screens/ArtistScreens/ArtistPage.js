import React, { useContext, useState, useEffect } from "react";
import { StackActions } from "@react-navigation/native";
import { Button, Image } from "@rneui/themed";
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  TouchableOpacity,
} from "react-native";
import { AntDesign } from "@expo/vector-icons";
import { Context as ArtistContext } from "../../context/ArtistContext";
import { Context as AuthContext } from "../../context/AuthContext";

const ArtistPage = ({ route, navigation }) => {
  const { state: user, getUser } = useContext(AuthContext);
  const { state: artist, getArtist } = useContext(ArtistContext);
  // const [artist, setArtist] = useState([]);

  // const { artist_id } = route.params;

  // useEffect(() => {
  //   const fetchdata = navigation.addListener("focus", async () => {
  //     const artistInfo = await getArtist(artist_id);
  //     setArtist(artistInfo);
  //   });
  //   return fetchdata;
  // }, [navigation]);

  const { user_id } = user;
  const artistUser = artist[0];

  const artist_user_id = artistUser.user_id;

  const {
    artist_id,
    artist_name,
    artist_genre,
    artist_email,
    artist_location,
    artist_description,
    artist_instagram,
    artist_spotify,
    artist_youtube,
    artist_website,
  } = artist[0];

  const popAction = StackActions.pop(1);

  return (
    <View>
      <TouchableOpacity
        onPress={() => navigation.navigate("My Stuff")}
        style={styles.backIcon}
      >
        <AntDesign name="back" size={24} color="black" />
        <Text>My Stuff</Text>
      </TouchableOpacity>
      <View style={styles.container}>
        {artist_user_id === user_id ? (
          <TouchableOpacity
            onPress={() => {
              getArtist(artist_id);
              navigation.navigate("Edit Artist Page");
            }}
            style={styles.editIcon}
          >
            <AntDesign name="edit" size={24} color="grey" />
          </TouchableOpacity>
        ) : null}
        <Text style={{ marginVertical: 20, fontSize: 30 }}>{artist_name}</Text>
        <Text style={{ fontSize: 20 }}>{artist_genre}</Text>
        <Text style={{ fontSize: 20 }}>{artist_email}</Text>
        <Text style={{ fontSize: 20 }}>{artist_location}</Text>
        <Text style={{ fontSize: 20 }}>{artist_description}</Text>
        <Text style={{ fontSize: 20 }}>{artist_instagram}</Text>
        <Text style={{ fontSize: 20 }}>{artist_spotify}</Text>
        <Text style={{ fontSize: 20 }}>{artist_youtube}</Text>
        <Text style={{ fontSize: 20 }}>{artist_website}</Text>
        {artist_user_id === user_id ? (
          <Button
            title="Manage Gigs"
            buttonStyle={{
              backgroundColor: "rgba(78, 116, 289, 1)",
              borderRadius: 3,
            }}
            containerStyle={{
              width: 200,
              marginHorizontal: 50,
              marginVertical: 10,
              borderRadius: 30,
            }}
            onPress={() => {
              navigation.navigate("Artist Gig Manager");
            }}
          />
        ) : null}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 30,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  backIcon: {
    alignSelf: "flex-start",
    color: "grey",
    padding: 10,
  },
  editIcon: {
    alignSelf: "flex-end",
    color: "grey",
  },
  title: {
    fontSize: 18,
  },
  icon: {
    fontSize: 24,
  },
});

export default ArtistPage;
