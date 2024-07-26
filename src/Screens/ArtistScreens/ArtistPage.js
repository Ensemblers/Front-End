import { StyleSheet, View, ScrollView, TouchableOpacity } from "react-native";
import React, { useContext, useState, useEffect } from "react";
import { Context as ArtistContext } from "../../context/ArtistContext";
import { Context as AuthContext } from "../../context/AuthContext";
import { StackActions } from "@react-navigation/native";

import { DefaultBackground, HeaderButtons } from "../../components/PageFormats";
import {
  BackIcon,
  EditIcon,
  WebsiteTouchableOpacity,
  InstagramTouchableOpacity,
  YoutubeTouchableOpacity,
  FacebookTouchableOpacity,
  SpotifyTouchableOpacity,
} from "../../components/IconsAndLogos";
import { DesignButton } from "../../components/Buttons";
import { TextHeader, TextBody } from "../../components/Text";

const ArtistPage = ({ navigation }) => {
  const { state: artist, getArtist } = useContext(ArtistContext);
  const { state: user } = useContext(AuthContext);

  const [thisArtist, setThisArtist] = useState("");
  const { user_id } = user;

  const artist_user_id = artist[0].user_id;

  const {
    artist_id,
    artist_name,
    artist_genre,
    artist_number_of_members,
    artist_solo_instrument,
    artist_email,
    artist_location,
    artist_description,
    artist_tech_rider,
    artist_instagram,
    artist_facebook,
    artist_tiktok,
    artist_spotify,
    artist_youtube,
    artist_website,
  } = artist[0];

  // console.log(artist_id, artist_user_id, user_id);
  // console.log(JSON.stringify(artist, undefined, 4));

  // useEffect(() => {
  //   function fetchData() {
  // const data = venue_photo;
  // setImage(URL.createObjectURL(data));
  //   }
  //   fetchData();
  // }, []);

  const popAction = StackActions.pop(1);

  return (
    <View style={styles.container}>
      <DefaultBackground />
      <HeaderButtons
        OnPressLeft={() => navigation.dispatch(popAction)}
        OnPressRight={() => {
          getArtist({ artist_id });
          navigation.navigate("Edit Artist Page");
        }}
        IconLeft={<BackIcon />}
        IconRight={<EditIcon />}
      />
      <View style={styles.card}>
        <ScrollView>
          <TextHeader WriteText={`${artist_name}`} />
          {artist_user_id === user_id ? (
            <DesignButton
              ButtonText="Book a Gig!"
              OnPress={() => {
                getArtist(artist_id);
                navigation.navigate("Artist Gig Manager");
              }}
            />
          ) : null}
          <View style={styles.cardBody}>
            <View style={styles.description}>
              <TextBody WriteText={"About:"} />
              <TextBody WriteText={`${artist_description}`} />
            </View>
            <View style={styles.mediaLinksView}>
              {/* {artist_website !== "" ? <WebsiteTouchableOpacity /> : ""}
              {artist_instagram !== "" ? <InstagramTouchableOpacity /> : ""}
              {artist_youtube !== "" ? <YoutubeTouchableOpacity /> : ""}
              {artist_facebook !== "" ? <FacebookTouchableOpacity /> : ""}
              {artist_spotify !== "" ? <SpotifyTouchableOpacity /> : ""} */}
            </View>
          </View>
        </ScrollView>
      </View>
    </View>
  );
};

export default ArtistPage;

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
