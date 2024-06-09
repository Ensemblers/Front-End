import React, { useContext } from "react";
import { StackActions } from "@react-navigation/native";
import { Button } from "@rneui/themed";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { AntDesign } from "@expo/vector-icons";
import { Context as ConcertContext } from "../../context/ConcertContext";
import { Context as AuthContext } from "../../context/AuthContext";
import BackButton from "../../components/BackButton";
import Title from "../../components/Title";

const ConcertPage = () => {
  const { state: user, getUser } = useContext(AuthContext);
  const { state: concert, getConcert } = useContext(ConcertContext);

  const { user_id } = user;
  const thisConcert = concert[0];

  // const {
  // concert_terms,
  // concert_followers,
  // venue_id,
  // venue_name,
  // artist_id,
  // artist_number_of_members,
  // artist_name,
  // artist_solo_instrument,
  // artist_tech_rider,
  // artist_genre,
  // artist_email,
  // artist_description,
  // artist_followers,
  // gig_request_id,
  // gig_request_cost,
  // gig_slot_id,
  // gig_slot_title,
  // gig_slot_location,
  // gig_slot_date,
  // gig_slot_start_time,
  // gig_slot_end_time,
  // gig_slot_description,
  // } = thisConcert;

  return (
    <View>
      <Text>ConcertPage</Text>
    </View>
  );
};

export default ConcertPage;

const styles = StyleSheet.create({});
