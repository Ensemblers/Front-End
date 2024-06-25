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
  const { state: artist, editArtist, deleteArtist } = useContext(ArtistContext);
  const { state: user } = useContext(AuthContext);

  const popAction = StackActions.pop(1);
  const { user_id } = user;

  const {
    artist_id,
    artist_name,
    artist_type,
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
                  deleteArtist({ artist_id });
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

// import { StyleSheet, View } from "react-native";
// import React, { useContext, useState } from "react";
// import { Context as ArtistContext } from "../../context/ArtistContext";
// import { Context as AuthContext } from "../../context/AuthContext";
// import { StackActions } from "@react-navigation/native";
// import CreatePage from "../../components/CreatePage";

// const CreateArtist = ({ navigation }) => {
//   const { addArtist } = useContext(ArtistContext);
//   const { state: user } = useContext(AuthContext);

//   const [artist_name, setartist_name] = useState("");
//   const [artist_genre, setartist_genre] = useState("");

//   const { user_id } = user;

//   const popAction = StackActions.pop(1);

//   return (
//     <View>
//       <CreatePage
//         backOnPress={() => {
//           navigation.dispatch(popAction);
//         }}
//         navigateToText="Back"
//         TitleText="Create Artist"
//         FirstCategory="Artist Name"
//         SecondCategory="Genre"
//         value={artist_name}
//         setValue={setartist_name}
//         value2={artist_genre}
//         setValue2={setartist_genre}
//         CreateButton="Create Artist"
//         createOnPress={async () => {
//           await addArtist({
//             user_id,
//             artist_name,
//             artist_genre,
//           });
//           navigation.navigate("Artist Page");
//         }}
//       />
//     </View>
//   );
// };

// export default CreateArtist;

// const styles = StyleSheet.create({});

// import {
//   StyleSheet,
//   Text,
//   View,
//   TextInput,
//   Button,
//   TouchableOpacity,
// } from "react-native";
// import { StackActions } from "@react-navigation/native";
// import React, { useContext, useState } from "react";
// import { Context as ArtistContext } from "../../context/ArtistContext";
// import { Context as AuthContext } from "../../context/AuthContext";

// import Spacer from "../../components/Spacer";
// import { AntDesign } from "@expo/vector-icons";
// import BackButton from "../../components/BackButton";
// import Title from "../../components/Title";

// const ArtistPageEditScreen = ({ navigation }) => {
//   const { state: user } = useContext(AuthContext);
//   const { state: artist, editArtist, deleteArtist } = useContext(ArtistContext);

//   let {
//     artist_id,
//     artist_name,
//     artist_genre,
//     artist_email,
//     artist_location,
//     artist_description,
//     artist_instagram,
//     artist_spotify,
//     artist_youtube,
//     artist_website,
//   } = artist[0];

//   const [name, setName] = useState(artist_name);
//   const [genre, setGenre] = useState(artist_genre);
//   const [email, setEmail] = useState(artist_email);
//   const [location, setLocation] = useState(artist_location);
//   const [description, setDescription] = useState(artist_description);
//   const [insta, setInsta] = useState(artist_instagram);
//   const [spotify, setSpotify] = useState(artist_spotify);
//   const [youtube, setYoutube] = useState(artist_youtube);
//   const [website, setWebsite] = useState(artist_website);

//   const popAction = StackActions.pop(1);

//   return (
//     <View>
//       <TouchableOpacity
//         onPress={() => {
//           navigation.dispatch(popAction);
//         }}
//         style={styles.backIcon}
//       >
//         <AntDesign name="back" size={24} color="black" />
//         <Text>Back</Text>
//       </TouchableOpacity>
//       <Title titleText="My Artists" />
//       <Spacer />

//       <View style={styles.inputRow}>
//         <Text style={styles.label}>Artist Name:</Text>
//         <TextInput
//           style={styles.input}
//           value={name}
//           onChangeText={(name) => setName(name)}
//         />
//       </View>

//       <View style={styles.inputRow}>
//         <Text style={styles.label}>Artist Genre:</Text>
//         <TextInput
//           style={styles.input}
//           value={genre}
//           onChangeText={(genre) => setGenre(genre)}
//         />
//       </View>

//       <View style={styles.inputRow}>
//         <Text style={styles.label}>Artist Email:</Text>
//         <TextInput
//           style={styles.input}
//           value={email}
//           onChangeText={(email) => setEmail(email)}
//         />
//       </View>

//       <View style={styles.inputRow}>
//         <Text style={styles.label}>Artist Location:</Text>
//         <TextInput
//           style={styles.input}
//           value={location}
//           onChangeText={(location) => setLocation(location)}
//         />
//       </View>

//       <View style={styles.inputRow}>
//         <Text style={styles.label}>Artist Description:</Text>
//         <TextInput
//           style={styles.input}
//           value={description}
//           onChangeText={(description) => setDescription(description)}
//         />
//       </View>

//       <View style={styles.inputRow}>
//         <Text style={styles.label}>Artist Instagram:</Text>
//         <TextInput
//           style={styles.input}
//           value={insta}
//           onChangeText={(insta) => setInsta(insta)}
//         />
//       </View>

//       <View style={styles.inputRow}>
//         <Text style={styles.label}>Artist Spotify:</Text>
//         <TextInput
//           style={styles.input}
//           value={spotify}
//           onChangeText={(spotify) => setSpotify(spotify)}
//         />
//       </View>

//       <View style={styles.inputRow}>
//         <Text style={styles.label}>Artist Youtube:</Text>
//         <TextInput
//           style={styles.input}
//           value={youtube}
//           onChangeText={(youtube) => setYoutube(youtube)}
//         />
//       </View>

//       <View style={styles.inputRow}>
//         <Text style={styles.label}>Artist Website:</Text>
//         <TextInput
//           style={styles.input}
//           value={website}
//           onChangeText={(website) => setWebsite(website)}
//         />
//       </View>
//       <Spacer />
//       <Button
//         title="Update Artist"
//         onPress={() => {
//           editArtist({
//             artist_id,
//             name,
//             genre,
//             email,
//             location,
//             description,
//             insta,
//             spotify,
//             youtube,
//             website,
//           });
//           navigation.navigate("Artist Page");
//         }}
//       />

//       <Button
//         title="Delete Artist"
//         onPress={() => {
//           deleteArtist({ artist_id });
//           navigation.navigate("My Stuff Page");
//         }}
//       />
//     </View>
//   );
// };

// const styles = StyleSheet.create({
//   inputRow: {
//     flexDirection: "row",
//     marginLeft: 20,
//   },
//   input: {
//     fontSize: 18,
//     borderWidth: 1,
//     borderColor: "black",
//     marginLeft: 15,
//     width: 200,
//   },
//   backIcon: {
//     alignSelf: "flex-start",
//     color: "grey",
//     padding: 10,
//   },
//   label: {
//     fontSize: 20,
//     marginBottom: 5,
//     marginLeft: 5,
//   },
//   headerTitle: {
//     fontSize: 30,
//     letterSpacing: 5,
//     fontWeight: "bold",
//     textAlign: "center",
//   },
// });

// export default ArtistPageEditScreen;
