import { StyleSheet, View, ScrollView } from "react-native";
import React, { useContext, useState } from "react";
import { StackActions } from "@react-navigation/native";
import { Context as VenueContext } from "../../context/VenueContext";
import { Context as AuthContext } from "../../context/AuthContext";

//COMPONENTS
import { VenuePicture } from "../../components/Images";
import { DefaultBackground, HeaderButtons } from "../../components/PageFormats";
import {
  BackIcon,
  FacebookLink,
  InstagramLink,
  YoutubeLink,
  GoogleMapsLink,
  PhoneLink,
  WebsiteLink,
} from "../../components/IconsAndLogos";
import { DesignButton } from "../../components/Buttons";
import { TextHeader, TextSection } from "../../components/Text";
import {
  InputInfo,
  InputDescription,
  InputLinks,
} from "../../components/Input";
import { InputTemplate } from "../../components/InputTemplate";

const VenuePageEditScreen = ({ navigation, route }) => {
  const { state: venue, editVenue, deleteVenue } = useContext(VenueContext);
  const { state: user } = useContext(AuthContext);

  // useEffect(() => {
  //   async function fetchData() {
  //     const res = await fetch(
  //       `https://maps.googleapis.com/maps/api/place/photo?maxwidth=800&photo_reference=${venue_google_photo}&key=AIzaSyCuFsKofy_0ovUjWiO7yk6TKk6y7BnNHCc`
  //     );
  //     const data = await res.blob();
  //     setImage(URL.createObjectURL(data));
  //     setPhoto(data);
  //   }
  //   fetchData();
  // }, []);

  const {
    venue_id,
    venue_name,
    venue_location,
    venue_business_hours,
    venue_description,
    venue_website,
    venue_type,
    venue_phone_number,
    venue_google_maps_url,
    venue_instagram,
    venue_facebook,
    venue_youtube,
    venue_photo,
  } = venue[0];

  const popAction = StackActions.pop(1);
  const { user_id } = user;

  const [imagePlace, setImage] = useState("");
  const [photo, setPhoto] = useState("");
  const [name, setName] = useState(venue_name);
  const [location, setLocation] = useState(venue_location);
  const [website, setWebsite] = useState(venue_website);
  const [description, setDescription] = useState(venue_description);
  const [type, setType] = useState(venue_type);
  const [phone_number, setPhone] = useState(venue_phone_number);
  const [google_maps_url, setGoogleMapsURL] = useState(venue_google_maps_url);
  const [instagram, setInstagram] = useState(venue_instagram);
  const [facebook, setFacebook] = useState(venue_facebook);
  const [youtube, setYoutube] = useState(venue_youtube);

  return (
    <View style={styles.container}>
      <DefaultBackground />
      <HeaderButtons
        OnPressLeft={() => navigation.dispatch(popAction)}
        IconLeft={<BackIcon />}
        IconRight={""}
      />
      <View style={styles.card}>
        <TextHeader WriteText={`${name}`} />
        <ScrollView>
          {/* {imagePlace ? <VenuePicture Source={{ uri: imagePlace }} /> : <></>} */}
          <View style={styles.cardBody}>
            <InputInfo
              Content="Venue Name:"
              InputHere={
                <InputTemplate
                  Value={name}
                  OnChangeText={(name) => setName(name)}
                />
              }
            />
            <InputInfo
              Content="Location:"
              InputHere={
                <InputTemplate
                  Value={location}
                  OnChangeText={(location) => setLocation(location)}
                />
              }
            />
            <InputInfo
              Content="Type of Venue: [MAKE INTO A DROPDOWN]"
              InputHere={
                <InputTemplate
                  Value={type}
                  OnChangeText={(type) => setType(type)}
                />
              }
            />
            <InputDescription
              Content="Description:"
              InputHere={
                <InputTemplate
                  MultiLine={true}
                  Value={description}
                  OnChangeText={(description) => setDescription(description)}
                />
              }
            />
            <InputLinks
              LinkLogo={<PhoneLink />}
              Content="Phone Number"
              InputHere={
                <InputTemplate
                  Value={phone_number}
                  OnChangeText={(phone_number) => setWebsite(phone_number)}
                />
              }
            />
            <TextSection WriteText={"Links:"} />
            <InputLinks
              LinkLogo={<WebsiteLink />}
              Content="URL"
              InputHere={
                <InputTemplate
                  Value={website}
                  OnChangeText={(website) => setWebsite(website)}
                />
              }
            />
            <InputLinks
              LinkLogo={<GoogleMapsLink />}
              Content="URL"
              InputHere={
                <InputTemplate
                  Value={google_maps_url}
                  OnChangeText={(google_maps_url) =>
                    setGoogleMapsURL(google_maps_url)
                  }
                />
              }
            />
            <InputLinks
              LinkLogo={<InstagramLink />}
              Content="URL"
              InputHere={
                <InputTemplate
                  Value={instagram}
                  OnChangeText={(instagram) => setInstagram(instagram)}
                />
              }
            />
            <InputLinks
              LinkLogo={<FacebookLink />}
              Content="URL"
              InputHere={
                <InputTemplate
                  Value={facebook}
                  OnChangeText={(facebook) => setFacebook(facebook)}
                />
              }
            />
            <InputLinks
              LinkLogo={<YoutubeLink />}
              Content="URL"
              InputHere={
                <InputTemplate
                  Value={youtube}
                  OnChangeText={(youtube) => setYoutube(youtube)}
                />
              }
            />
            <View style={styles.buttonView}>
              <DesignButton
                ButtonText="Delete"
                OnPress={() => {
                  deleteVenue({ venue_id });
                  navigation.navigate("My Stuff Page");
                }}
              />
              <DesignButton
                ButtonText="Save"
                OnPress={() => {
                  editVenue({
                    venue_id,
                    name,
                    location,
                    description,
                    website,
                    type,
                    phone_number,
                    google_maps_url,
                    instagram,
                    facebook,
                    youtube,
                    // photo,
                    // currency,
                  });
                  navigation.navigate("Venue Page");
                }}
              />
            </View>
          </View>
        </ScrollView>
      </View>
    </View>
  );
};
export default VenuePageEditScreen;

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
