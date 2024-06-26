import { StyleSheet, View, ScrollView, TouchableOpacity } from "react-native";
import React, { useContext, useState, useEffect } from "react";
import { Context as ArtistContext } from "../../context/ArtistContext";

import { Context as AuthContext } from "../../context/AuthContext";

import { DefaultBackground, HeaderButtons } from "../../components/PageFormats";
import {
  BackIcon,
  EditIcon,
  WebsiteToubableOpacity,
  InstagramToubableOpacity,
  YoutubeToubableOpacity,
  FacebookToubableOpacity,
  SpotifyTouchableOpacity,
} from "../../components/IconsAndLogos";
import { DesignButton } from "../../components/Buttons";
import { TextHeader, TextBody } from "../../components/Text";

const ArtistPage = ({ navigation }) => {
  const { state: artist, getArtist } = useContext(ArtistContext);

  const { state: user } = useContext(AuthContext);

  const { user_id } = user;
  // console.log(artist);

  // const [imagePlace, setImage] = useState("");
  // const artist_user_id = artist[0].user_id;
  // const {
  // artist_id,
  // artist_name,
  // artist_genre,
  // artist_number_of_members,
  // artist_solo_instrument,
  // artist_email,
  // artist_location,
  // artist_description,
  // artist_tech_rider,
  // artist_instagram,
  // artist_spotify,
  // artist_youtube,
  // artist_facebook,
  // artist_website,
  // artist_admin_users,
  // } = artist[0];

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
          getArtist({ artist_id });
          navigation.navigate("Edit Artist Page");
        }}
        IconLeft={<BackIcon />}
        IconRight={<EditIcon />}
      />
    </View>
  );
};

/* <View style={styles.card}>
        <ScrollView>
          <TextHeader WriteText={`${artist_name}`} />
          {artist_user_id === user_id ? (
            <DesignButton
              ButtonText="Gig Manager"
              OnPress={() => {
                getArtist(artist_id);
                navigation.navigate("Artist Gig Manager");
              }}
            />
          ) : null}
          <View style={styles.cardBody}>
            <View style={styles.description}>
              <TextBody WriteText={"About:"} />
              {/* <TextBody WriteText={`${artist_description}`} /> */
//       </View>
//       <View style={styles.mediaLinksView}>
//         {artist_website !== "" ? <WebsiteToubableOpacity /> : ""}
//         {artist_instagram !== "" ? <InstagramToubableOpacity /> : ""}
//         {artist_youtube !== "" ? <YoutubeToubableOpacity /> : ""}
//         {artist_facebook !== "" ? <FacebookToubableOpacity /> : ""}
//         {artist_spotify !== "" ? <SpotifyTouchableOpacity /> : ""}
//       </View>
//     </View>
//   </ScrollView>
// </View>

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
