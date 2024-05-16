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
import { ListItem } from "@rneui/themed";
import { Context as VenueContext } from "../../context/VenueContext";

const ShowAllVenuesScreen = ({ navigation }) => {
  const [data, setData] = useState(null);

  const {
    state: state1,
    getAllVenues,
    deleteVenue,
    getVenue,
  } = useContext(VenueContext);

  useFocusEffect(
    useCallback(() => {
      async function unsubscribe() {
        const allVenues = await getAllVenues();
        setData(data);
      }
      unsubscribe();
    }, [])
  );

  return (
    <View>
      <View style={styles.headerRow}>
        <Text style={styles.headerTitle}>VENUES</Text>
      </View>
      <View>
        {state1.map((l, i) => (
          <ListItem key={i} bottomDivider style={styles.listItem}>
            {/* <Avatar source={{ uri: "" }} /> */}
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
      {/* <Text>Venue Page</Text>
      <FlatList
        data={state1}
        keyExtractor={(item) => item.venue_id}
        renderItem={({ item }) => {
          return (
            <View style={styles.row}>
              <TouchableOpacity
                onPress={() => {
                  const venue_id = item.venue_id;

                  getVenue(venue_id);
                  navigation.navigate("Venue Page");
                }}
              >
                <Text style={styles.title}>
                  {item.venue_id} - {item.venue_name}
                </Text>
              </TouchableOpacity>
              <TouchableOpacity
                onPress={() => {
                  const venue_id = item.venue_id;
                  deleteVenue(venue_id);
                }}
              >
                <Feather style={styles.icon} name="trash" />
              </TouchableOpacity>
            </View>
          );
        }}
      /> */}
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

export default ShowAllVenuesScreen;
