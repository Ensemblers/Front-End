import {
  StyleSheet,
  View,
  Text,
  TextInput,
  Button,
  TouchableOpacity,
} from "react-native";
import React, { useContext, useState } from "react";
import { Context as VenueContext } from "../../context/VenueContext";
import { StackActions } from "@react-navigation/native";
import Spacer from "../../components/Spacer";
import Title from "../../components/Title";
import { AntDesign } from "@expo/vector-icons";
import { Context as AuthContext } from "../../context/AuthContext";

const VenueGoogleAuth = ({ navigation, route }) => {
  const { state: venue, addVenue } = useContext(VenueContext);
  const { state: user } = useContext(AuthContext);

  const { venueSearch } = route.params;
  const { user_id } = user;

  const venue_name = venueSearch.name;
  const venue_location = venueSearch.formatted_address;
  const venue_description = venueSearch.editorial_summary.overview;
  const venue_business_hours = venueSearch.opening_hours;
  const venue_website = venueSearch.website;

  //   const placeID = venueSearch.place_id;
  //   const rating = venueSearch.user_ratings_total;
  //   const googleURL = venueSearch.url;

  return (
    <View>
      <TouchableOpacity
        onPress={() => navigation.navigate("My Stuff Page")}
        style={styles.backIcon}
      >
        <AntDesign name="back" size={24} color="black" />
        <Text>My Stuff</Text>
      </TouchableOpacity>
      <Spacer />
      <Title titleText="Please sign in to the Google Account for this Venue" />
      <Spacer />
      <TouchableOpacity
        onPress={async () => {
          console.log(
            user_id,
            venue_name,
            venue_location,
            venue_description,
            venue_business_hours,
            venue_website
          );
          // {
          //   description.overview
          //     ? (venue_description = description.overview)
          //     : (venue_description = null);
          // }
          // {
          //   business_hours.weekday_text
          //     ? (venue_business_hours = business_hours.weekday_text)
          //     : (venue_business_hours = null);
          // }
          await addVenue({
            user_id,
            venue_name,
            venue_location,
            venue_description,
            venue_business_hours,
            venue_website,
          });
          navigation.navigate("Venue Page");
        }}
      >
        <Text>Authenticate</Text>
      </TouchableOpacity>
    </View>
  );
};

export default VenueGoogleAuth;

const styles = StyleSheet.create({});
