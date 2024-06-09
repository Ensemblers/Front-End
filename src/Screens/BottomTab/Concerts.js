import React, { useContext, useState, useCallback } from "react";
import { useFocusEffect } from "@react-navigation/native";
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  Button,
  TouchableOpacity,
} from "react-native";
import { Feather } from "@expo/vector-icons";
import { ListItem } from "@rneui/themed";
import { Context as ArtistContext } from "../../context/ArtistContext";
import { Context as AuthContext } from "../../context/AuthContext";
import { Context as ConcertContext } from "../../context/ConcertContext";
import { Context as VenueContext } from "../../context/VenueContext";

const ShowAllConcertsScreen = ({ route, navigation }) => {
  // const { gig_request_id, gig_slot_id } = route.params;
  const { state: artist } = useContext(ArtistContext);
  const { state: venue } = useContext(VenueContext);
  const {
    state: concert,
    getAllConcerts,
    getConcert,
  } = useContext(ConcertContext);
  const { state: user } = useContext(AuthContext);

  useFocusEffect(
    useCallback(() => {
      async function unsubscribe() {
        const allConcerts = await getAllConcerts();
      }
      unsubscribe();
    }, [])
  );

  return (
    <View>
      <View style={styles.headerRow}>
        <Text style={styles.headerTitle}>CONCERTS</Text>
      </View>
      <View>
        {concert.map((l, i) => (
          <ListItem key={i} bottomDivider style={styles.listItem}>
            {/* <Avatar source={{ uri: "" }} /> */}
            <ListItem.Content>
              <TouchableOpacity
                onPress={() => {
                  const concert_id = l.concert_id;

                  getConcert(concert_id);
                  navigation.navigate("Concert Page");
                }}
              >
                <ListItem.Title style={styles.listTitle}>
                  {l.venue_name}
                </ListItem.Title>
                <ListItem.Subtitle style={styles.listSubtitle}>
                  {l.gig_slot_date}
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
  },
  headerTitle: {
    fontSize: 30,
    letterSpacing: 5,
    fontWeight: "bold",
  },
  listItem: {
    paddingVertical: 5,
    marginHorizontal: 20,
    // borderColor: "red",
    // borderWidth: 5,
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
  title: {
    fontSize: 18,
  },
  icon: {
    fontSize: 24,
  },
});

export default ShowAllConcertsScreen;
