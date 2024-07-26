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
import { ScrollView } from "react-native-gesture-handler";

const ShowAllVenuesScreen = ({ navigation }) => {
  const [data, setData] = useState(null);

  const {
    state: venue,
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
        <ScrollView style={styles.scrollView}>
          {venue.map((l, i) => (
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
        </ScrollView>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  scrollView: {
    borderWidth: 1,
    borderColor: "red",
  },
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
