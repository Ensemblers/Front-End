import React, { useEffect, useContext, useCallback, useState } from "react";
import { useFocusEffect } from "@react-navigation/native";
import { DefaultBackground, HeaderButtons } from "../../components/PageFormats";

import {
  View,
  Text,
  StyleSheet,
  FlatList,
  Button,
  TouchableOpacity,
  ScrollView,
  Image,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { Context as ArtistContext } from "../../context/ArtistContext";
import { Context as VenueContext } from "../../context/VenueContext";
import { Context as AuthContext } from "../../context/AuthContext";
import Spacer from "../../components/Spacer";
import { ListItem } from "@rneui/themed";

const MyStuff = ({ navigation }) => {
  const { state: user } = useContext(AuthContext);
  const {
    state: artist,
    getUserArtists,
    getArtist,
  } = useContext(ArtistContext);

  const { state: venue, getUserVenues, getVenue } = useContext(VenueContext);

  const { user_id } = user;

  const [userArtists, setUserArtists] = useState([]);

  const [userVenues, setUserVenues] = useState([]);

  useEffect(() => {
    const fetchdata = navigation.addListener("focus", async () => {
      const setArtists = await getUserArtists(user_id);
      const setVenues = await getUserVenues(user_id);

      setUserArtists(setArtists);
      setUserVenues(setVenues);
    });
    return fetchdata;
  }, [navigation]);

  return (
    <View style={styles.container}>
      <DefaultBackground />
      <View style={styles.page}>
        <View style={styles.row}>
          <View style={styles.headerRow}>
            <Text style={styles.headerTitle}>Your Artists</Text>
            <TouchableOpacity
              style={styles.editIcon}
              onPress={() => {
                navigation.navigate("Create Artist");
              }}
            >
              <Ionicons name="add-circle-outline" size={30} color="black" />
            </TouchableOpacity>
          </View>
          <View style={styles.flatlist}>
            <FlatList
              data={artist}
              horizontal={true}
              showsHorizontalScrollIndicator={false}
              renderItem={({ item }) => (
                <TouchableOpacity
                  style={styles.flatlistItem}
                  onPress={() => {
                    const artist_id = item.artist_id;
                    getArtist(artist_id);
                    navigation.navigate("Artist Page");
                  }}
                >
                  <Image style={styles.image} />
                  <Text style={styles.listTitle}>{item.artist_name}</Text>
                  <Text style={styles.listSubtitle}>{item.artist_genre}</Text>
                </TouchableOpacity>
              )}
            />
          </View>
        </View>

        <Spacer />
        <View style={styles.row}>
          <View style={styles.headerRow}>
            <Text style={styles.headerTitle}>Your Venues</Text>
            <TouchableOpacity
              style={styles.editIcon}
              onPress={() => navigation.navigate("Create Venue")}
            >
              <Ionicons name="add-circle-outline" size={30} color="black" />
            </TouchableOpacity>
          </View>
          <View style={styles.flatlist}>
            <FlatList
              data={venue}
              showsHorizontalScrollIndicator={false}
              horizontal={true}
              renderItem={({ item }) => (
                <TouchableOpacity
                  style={styles.flatlistItem}
                  onPress={() => {
                    const venue_id = item.venue_id;
                    getVenue(venue_id);
                    navigation.navigate("Venue Page");
                  }}
                >
                  <Image style={styles.image} />

                  <Text style={styles.listTitle}>{item.venue_name}</Text>
                  <Text style={styles.listSubtitle}>{item.venue_location}</Text>
                </TouchableOpacity>
              )}
            />
          </View>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    height: "100%",
    alignItems: "center",
  },
  page: {
    paddingVertical: 15,
  },
  row: {
    flex: 1,
    width: "100%",
  },
  headerRow: {
    flexDirection: "row",
    alignItems: "center",
    flex: 1,
    justifyContent: "space-between",
    paddingHorizontal: 10,
  },
  headerTitle: {
    fontSize: 25,
    fontWeight: "bold",
    letterSpacing: 1,
  },
  editIcon: {
    marginRight: 20,
  },
  flatlist: {
    flex: 7,
  },
  flatlistItem: {
    width: 250,
    // height: 270,
    flex: 1,
    margin: 10,
    borderRadius: 20,
    backgroundColor: "#9eb1cf",
    padding: 15,
    justifyContent: "space-around",
  },
  listTitle: {
    fontSize: 20,
    fontWeight: "bold",
  },
  image: {
    height: 200,
    width: 220,
    borderColor: "red",
    borderWidth: 1,
    borderRadius: 20,
  },
  title: {
    fontSize: 18,
  },
  icon: {
    fontSize: 24,
  },
});

export default MyStuff;
