import React, { useContext } from "react";
import { StackActions } from "@react-navigation/native";
import { Button } from "@rneui/themed";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { AntDesign } from "@expo/vector-icons";
import { Context as VenueContext } from "../../context/VenueContext";
import { Context as AuthContext } from "../../context/AuthContext";

const VenuePage = ({ navigation }) => {
  const { state: user, getUser } = useContext(AuthContext);
  const { state: venue, getVenue } = useContext(VenueContext);

  const { user_id } = user;
  const venueUser = venue[0];

  const venue_user_id = venueUser.user_id;

  const {
    venue_id,
    venue_name,
    venue_location,
    venue_businessHours,
    venue_description,
    venue_website,
  } = venue[0];

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
        {venue_user_id === user_id ? (
          <TouchableOpacity
            onPress={() => {
              getVenue(venue_id);
              navigation.navigate("Edit Venue Page");
            }}
            style={styles.editIcon}
          >
            <AntDesign name="edit" size={24} color="grey" />
          </TouchableOpacity>
        ) : null}
        <Text style={{ marginVertical: 20, fontSize: 30 }}>{venue_name}</Text>
        <Text style={{ fontSize: 20 }}>{venue_location}</Text>
        <Text style={{ fontSize: 20 }}>{venue_businessHours}</Text>
        <Text style={{ fontSize: 20 }}>{venue_description}</Text>
        <Text style={{ fontSize: 20 }}>{venue_website}</Text>
        {venue_user_id === user_id ? (
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
              navigation.navigate("Venue Gig Manager");
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

export default VenuePage;
