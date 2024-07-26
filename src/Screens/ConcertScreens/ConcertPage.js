import { StyleSheet, View, ScrollView, TouchableOpacity } from "react-native";
import React, { useContext, useState, useEffect } from "react";
import { Context as VenueContext } from "../../context/VenueContext";
import { StackActions } from "@react-navigation/native";

import { Context as ConcertContext } from "../../context/ConcertContext";

import { DefaultBackground, HeaderButtons } from "../../components/PageFormats";
import {
  BackIcon,
  EditIcon,
  GoogleMapsLink,
  WebsiteTouchableOpacity,
  InstagramTouchableOpacity,
  YoutubeTouchableOpacity,
  FacebookTouchableOpacity,
  PhoneTouchableOpacity,
} from "../../components/IconsAndLogos";
import { DesignButton } from "../../components/Buttons";
import { TextHeader, TextBody } from "../../components/Text";

const ConcertPage = ({ navigation }) => {
  const { state: concert, getConcert } = useContext(ConcertContext);

  // const [imagePlace, setImage] = useState("");

  const {
    concert_id,
    concert_terms,
    concert_followers,
    venue_id,
    venue_name,
    artist_id,
    artist_number_of_members,
    artist_name,
    artist_solo_instrument,
    artist_tech_rider,
    artist_genre,
    artist_email,
    artist_description,
    artist_followers,
    gig_request_id,
    gig_request_cost,
    gig_slot_id,
    gig_slot_title,
    gig_slot_location,
    gig_slot_date,
    gig_slot_start_time,
    gig_slot_end_time,
    gig_slot_description,
  } = concert[0];

  const popAction = StackActions.pop(1);

  return (
    <View style={styles.container}>
      <DefaultBackground />
      <HeaderButtons
        OnPressLeft={() => navigation.dispatch(popAction)}
        OnPressRight={() => {
          getConcert({ concert_id });
          navigation.navigate("Edit Concert Page");
        }}
        IconLeft={<BackIcon />}
        IconRight={<EditIcon />}
      />
      <View style={styles.card}>
        <ScrollView>
          {/* <VenuePicture
            Source={{ uri: URL.createObjectURL(venue_google_photo) }}
          /> */}
          <TextHeader WriteText={`${gig_slot_title}`} />
          {/* <TouchableOpacity style={styles.googleLocation}> */}
          {/* <GoogleMapsLink /> */}
          <TextBody WriteText={`${gig_slot_location}`} />
          {/* </TouchableOpacity> */}
          <TextBody WriteText={`${venue_name}`} />
          {/* {venue_user_id === user_id ? (
            <DesignButton
              ButtonText="Sell Tickets!"
              OnPress={() => {
                getVenue(venue_id);
                navigation.navigate("Venue Gig Manager");
              }}
            />
          ) : null} */}
          <View style={styles.cardBody}>
            <View style={styles.description}>
              <TextBody WriteText={"About:"} />
              <TextBody WriteText={`${gig_slot_description}`} />
            </View>
            <View style={styles.mediaLinksView}>
              {/* {venue_website !== "" ? <WebsiteTouchableOpacity /> : ""}
              {venue_instagram !== "" ? <InstagramTouchableOpacity /> : ""}
              {venue_youtube !== "" ? <YoutubeTouchableOpacity /> : ""}
              {venue_facebook !== "" ? <FacebookTouchableOpacity /> : ""}
              {venue_phone_number !== "" ? <PhoneTouchableOpacity /> : ""} */}
            </View>
          </View>
        </ScrollView>
      </View>
    </View>
  );
};

export default ConcertPage;

const styles = StyleSheet.create({
  container: {
    height: "100%",
    alignItems: "center",
  },
  card: {
    paddingTop: 30,
    flex: 1,
    width: "100%",
  },
  cardBody: {
    flex: 1,
    width: "85%",
    alignSelf: "center",
  },
  googleLocation: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    width: 150,
    alignSelf: "center",
  },
  mediaLinksView: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    width: "100%",
    height: 70,
  },
  description: {
    textAlign: "left",
    margin: 20,
  },
});
