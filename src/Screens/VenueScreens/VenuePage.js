import { StyleSheet, View, ScrollView, TouchableOpacity } from "react-native";
import React, { useContext, useState, useEffect } from "react";
import { Context as VenueContext } from "../../context/VenueContext";

import { Context as AuthContext } from "../../context/AuthContext";

import { VenuePicture, VenuePicturePlaceholder } from "../../components/Images";
import { DefaultBackground, HeaderButtons } from "../../components/PageFormats";
import {
  BackIcon,
  EditIcon,
  GoogleMapsLink,
  WebsiteToubableOpacity,
  InstagramToubableOpacity,
  YoutubeToubableOpacity,
  FacebookToubableOpacity,
  PhoneTouchableOpacity,
} from "../../components/IconsAndLogos";
import { DesignButton } from "../../components/Buttons";
import { TextHeader, TextBody } from "../../components/Text";

const VenuePage = ({ navigation }) => {
  const { state: venue, getVenue } = useContext(VenueContext);

  const { state: user } = useContext(AuthContext);

  const { user_id } = user;

  // const [imagePlace, setImage] = useState("");
  const venue_user_id = venue[0].user_id;
  const {
    venue_id,
    venue_name,
    venue_location,
    venue_description,
    venue_website,
    venue_type,
    venue_phone_number,
    venue_instagram,
    venue_facebook,
    venue_youtube,
  } = venue[0];

  // useEffect(() => {
  //   function fetchData() {
  //     const data = venue_photo;
  //     setImage(URL.createObjectURL(data));
  //   }
  //   fetchData();
  // }, []);

  return (
    <View style={styles.container}>
      <DefaultBackground />
      <HeaderButtons
        OnPressRight={() => {
          getVenue({ venue_id });
          navigation.navigate("Edit Venue Page");
        }}
        IconLeft={<BackIcon />}
        IconRight={<EditIcon />}
      />
      <View style={styles.card}>
        <ScrollView>
          <VenuePicturePlaceholder />
          <TextHeader WriteText={`${venue_name}`} />
          <TouchableOpacity style={styles.googleLocation}>
            <GoogleMapsLink />
            <TextBody WriteText={`${venue_location}`} />
          </TouchableOpacity>
          <TextBody WriteText={`${venue_type}`} />
          {venue_user_id === user_id ? (
            <DesignButton
              ButtonText="Gig Manager"
              OnPress={() => {
                getVenue(venue_id);
                navigation.navigate("Venue Gig Manager");
              }}
            />
          ) : null}
          <View style={styles.cardBody}>
            <View style={styles.description}>
              <TextBody WriteText={"About:"} />
              <TextBody WriteText={`${venue_description}`} />
            </View>
            <View style={styles.mediaLinksView}>
              {venue_website !== "" ? <WebsiteToubableOpacity /> : ""}
              {venue_instagram !== "" ? <InstagramToubableOpacity /> : ""}
              {venue_youtube !== "" ? <YoutubeToubableOpacity /> : ""}
              {venue_facebook !== "" ? <FacebookToubableOpacity /> : ""}
              {venue_phone_number !== "" ? <PhoneTouchableOpacity /> : ""}
            </View>
          </View>
        </ScrollView>
      </View>
    </View>
  );
};

export default VenuePage;

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
