import { StyleSheet, View, ScrollView } from "react-native";
import React, { useContext, useState } from "react";
import { StackActions } from "@react-navigation/native";
import { Context as ArtistContext } from "../../context/ArtistContext";
import { Context as AuthContext } from "../../context/AuthContext";

//COMPONENTS
import { DefaultBackground, HeaderButtons } from "../../components/PageFormats";
import {
  BackIcon,
  FacebookLink,
  InstagramLink,
  YoutubeLink,
  EmailLink,
  WebsiteLink,
  SpotifyLink,
  TikTokLink,
} from "../../components/IconsAndLogos";
import { DesignButton } from "../../components/Buttons";
import { TextHeader, TextSection } from "../../components/Text";
import {
  InputInfo,
  InputDescription,
  InputLinks,
} from "../../components/Input";
import { InputTemplate } from "../../components/InputTemplate";

const ArtistPageEditScreen = ({ navigation, route }) => {
  const { state: artist, deleteArtist, editArtist } = useContext(ArtistContext);
  const { state: user } = useContext(AuthContext);

  const artist_user_id = user.user_id;

  const {
    user_id,
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
    artist_spotify,
    artist_youtube,
    artist_facebook,
    artist_tiktok,
    artist_website,
  } = artist[0];

  const [name, setName] = useState(artist_name ? artist_name : "");
  // const [type, setType] = useState("");
  const [genre, setGenre] = useState(artist_genre);
  const [number_of_members, setMemberCount] = useState(
    artist_number_of_members
  );
  const [solo_instrument, setSoloInstrument] = useState(artist_solo_instrument);
  const [email, setEmail] = useState(artist_email);
  const [location, setLocation] = useState(artist_location);
  const [description, setDescription] = useState(artist_description);
  const [tech_rider, setTechRider] = useState(artist_tech_rider);
  const [instagram, setInstagram] = useState(artist_instagram);
  const [spotify, setSpotify] = useState(artist_spotify);
  const [youtube, setYoutube] = useState(artist_youtube);
  const [facebook, setFacebook] = useState(artist_facebook);
  const [tiktok, setTikTok] = useState(artist_tiktok);
  const [website, setWebsite] = useState(artist_website);

  const popAction = StackActions.pop(1);

  return (
    <View style={styles.container}>
      <DefaultBackground />
      <HeaderButtons
        OnPressLeft={() => navigation.dispatch(popAction)}
        IconLeft={<BackIcon />}
        IconRight={""}
      />
      <View style={styles.card}>
        <TextHeader WriteText={"Create Artist:"} />
        <ScrollView>
          {/* {imagePlace ? <VenuePicture Source={{ uri: imagePlace }} /> : <></>} */}
          <View style={styles.cardBody}>
            <InputInfo
              Content="Artist Name:"
              InputHere={
                <InputTemplate
                  Value={artist_name}
                  OnChangeText={(name) => setName(name)}
                />
              }
            />
            <InputInfo
              Content="Location:"
              InputHere={
                <InputTemplate
                  Value={artist_location}
                  OnChangeText={(location) => setLocation(location)}
                />
              }
            />
            {/* <InputInfo
              Content="Type of Artist: [MAKE INTO A DROPDOWN]"
              InputHere={
                <InputTemplate
                  Value={artist_type}
                  OnChangeText={(type) => setType(type)}
                />
              }
            /> */}
            {artist_user_id === user_id ? (
              <DesignButton
                ButtonText="Gig Manager"
                OnPress={() => {
                  getArtist(artist_id);
                  navigation.navigate("Artist Gig Manager");
                }}
              />
            ) : null}
            <InputInfo
              Content="Genre: [MAKE INTO A DROPDOWN]"
              InputHere={
                <InputTemplate
                  Value={artist_genre}
                  OnChangeText={(genre) => setGenre(genre)}
                />
              }
            />
            <InputDescription
              Content="Description:"
              InputHere={
                <InputTemplate
                  MultiLine={true}
                  Value={artist_description}
                  OnChangeText={(description) => setDescription(description)}
                />
              }
            />
            <InputLinks
              LinkLogo={<EmailLink />}
              Content="Email"
              InputHere={
                <InputTemplate
                  Value={artist_email}
                  OnChangeText={(email) => setEmail(email)}
                />
              }
            />
            <TextSection WriteText={"Links:"} />
            <InputLinks
              LinkLogo={<WebsiteLink />}
              Content="URL"
              InputHere={
                <InputTemplate
                  Value={artist_website}
                  OnChangeText={(website) => setWebsite(website)}
                />
              }
            />
            <InputLinks
              LinkLogo={<InstagramLink />}
              Content="URL"
              InputHere={
                <InputTemplate
                  Value={artist_instagram}
                  OnChangeText={(instagram) => setInstagram(instagram)}
                />
              }
            />
            <InputLinks
              LinkLogo={<SpotifyLink />}
              Content="URL"
              InputHere={
                <InputTemplate
                  Value={artist_spotify}
                  OnChangeText={(spotify) => setSpotify(spotify)}
                />
              }
            />
            <InputLinks
              LinkLogo={<TikTokLink />}
              Content="URL"
              InputHere={
                <InputTemplate
                  Value={artist_tiktok}
                  OnChangeText={(tiktok) => setTikTok(tiktok)}
                />
              }
            />
            <InputLinks
              LinkLogo={<FacebookLink />}
              Content="URL"
              InputHere={
                <InputTemplate
                  Value={artist_facebook}
                  OnChangeText={(facebook) => setFacebook(facebook)}
                />
              }
            />
            <InputLinks
              LinkLogo={<YoutubeLink />}
              Content="URL"
              InputHere={
                <InputTemplate
                  Value={artist_youtube}
                  OnChangeText={(youtube) => setYoutube(youtube)}
                />
              }
            />
            <View style={styles.buttonView}>
              <DesignButton
                ButtonText="Delete"
                OnPress={() => {
                  {
                    artist_id !== "" ? deleteArtist({ artist_id }) : "";
                  }
                  navigation.navigate("My Stuff Page");
                }}
              />
              <DesignButton
                ButtonText="Save"
                OnPress={() => {
                  editArtist({
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
                    artist_spotify,
                    artist_youtube,
                    artist_facebook,
                    artist_tiktok,
                    artist_website,
                  });
                  navigation.navigate("Artist Page");
                }}
              />
            </View>
          </View>
        </ScrollView>
      </View>
    </View>
  );
};
export default ArtistPageEditScreen;

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
    width: "85%",
    alignSelf: "center",
  },
  links: {
    flexDirection: "row",
    justifyContent: "center",
  },
  buttonView: {
    flexDirection: "row",
    alignItems: "space-around",
    justifyContent: "center",
  },
});
