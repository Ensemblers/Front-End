import React, { useEffect, useContext, useCallback, useState } from "react";
import { useFocusEffect } from "@react-navigation/native";
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  Button,
  TouchableOpacity,
  ScrollView,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { Context as ArtistContext } from "../../context/ArtistContext";
import { Context as VenueContext } from "../../context/VenueContext";
import { Context as AuthContext } from "../../context/AuthContext";
import Spacer from "../../components/Spacer";
import { ListItem } from "@rneui/themed";

const ShowMyStuff = ({ navigation }) => {
  const { state: user } = useContext(AuthContext);
  const {
    state: artist,
    getUserArtists,
    getArtist,
  } = useContext(ArtistContext);

  const { state: venue, getUserVenues, getVenue } = useContext(VenueContext);

  const { user_id } = user;

  // const [userArtists, setUserArtists] = useState(() => {
  //   getUserArtists(user_id);
  // });

  // const [userVenues, setUserVenues] = useState(() => {
  //   getUserVenues(user_id);
  // });
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
    <View>
      <View style={styles.headerRow}>
        <TouchableOpacity
          style={styles.editIcon}
          onPress={() => navigation.navigate("Create Artist")}
        >
          <Ionicons name="add-circle-outline" size={30} color="black" />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>MY ARTISTS</Text>
      </View>
      <View>
        <ScrollView>
          {artist.map((l, i) => (
            <ListItem key={i} bottomDivider style={styles.listItem}>
              <ListItem.Content>
                <TouchableOpacity
                  onPress={() => {
                    const artist_id = l.artist_id;
                    getArtist(artist_id);
                    navigation.navigate("Artist Page");
                    // navigation.navigate("Artist Page", { artist_id });
                  }}
                >
                  <ListItem.Title style={styles.listTitle}>
                    {l.artist_name}
                  </ListItem.Title>
                  <ListItem.Subtitle style={styles.listSubtitle}>
                    {l.artist_genre}
                  </ListItem.Subtitle>
                </TouchableOpacity>
              </ListItem.Content>
            </ListItem>
          ))}
        </ScrollView>
      </View>

      <Spacer />
      <View style={styles.headerRow}>
        <TouchableOpacity
          onPress={() => navigation.navigate("Create Venue")}
          style={styles.editIcon}
        >
          <Ionicons name="add-circle-outline" size={30} color="black" />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>MY VENUES</Text>
      </View>
      <View>
        {venue.map((l, i) => (
          <ListItem key={i} bottomDivider style={styles.listItem}>
            <ListItem.Content>
              <TouchableOpacity
                onPress={() => {
                  const venue_id = l.venue_id;

                  getVenue(venue_id);
                  navigation.navigate("Venue Page");
                }}
              >
                <ListItem.Title style={styles.listTitle}>
                  {l.venue_name}
                </ListItem.Title>
                <ListItem.Subtitle style={styles.listSubtitle}>
                  {l.venue_location}
                </ListItem.Subtitle>
              </TouchableOpacity>
            </ListItem.Content>
          </ListItem>
        ))}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  headerRow: {
    alignItems: "center",
    justifyContent: "center",
    height: 80,
    marginBottom: 20,
  },
  headerTitle: {
    fontSize: 30,
    letterSpacing: 5,
    fontWeight: "bold",
  },
  editIcon: {
    alignSelf: "flex-end",
    marginRight: 20,
    marginTop: 15,
  },
  listItem: {
    paddingVertical: 5,
    marginHorizontal: 20,
  },
  listTitle: {
    fontSize: 20,
    fontWeight: "bold",
  },
  listSubtitle: {},
  row: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingVertical: 20,
    paddingHorizontal: 10,
    borderTopWidth: 1,
    borderBottomWidth: 1,
    borderColor: "gray",
  },
  row: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingVertical: 20,
    paddingHorizontal: 10,
    borderTopWidth: 1,
    borderBottomWidth: 1,
    borderColor: "gray",
  },
  title: {
    fontSize: 18,
  },
  icon: {
    fontSize: 24,
  },
});

export default ShowMyStuff;
