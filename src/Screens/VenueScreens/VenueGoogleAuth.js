import { StyleSheet, View, ScrollView } from "react-native";
import React, { useContext, useState, useEffect } from "react";
import { StackActions } from "@react-navigation/native";
import { Context as VenueContext } from "../../context/VenueContext";
import { Context as AuthContext } from "../../context/AuthContext";
import AddressParser from "parse-google-address";
import countryToCurrency from "country-to-currency";
import lookup from "country-code-lookup";

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

const VenueGoogleAuth = ({ navigation, route }) => {
  const { state: venue, addVenue } = useContext(VenueContext);
  const { state: user } = useContext(AuthContext);

  useEffect(() => {
    async function fetchData() {
      const res = await fetch(
        `https://maps.googleapis.com/maps/api/place/photo?maxwidth=800&photo_reference=${venue_google_photo}&key=AIzaSyCuFsKofy_0ovUjWiO7yk6TKk6y7BnNHCc`
      );
      const data = await res.blob();
      AddressParser.Parse_Reverse_GeoCode_Address(
        venueSearch.address_components,
        function (err, ParsedData) {
          if (err) console.error(err);
          const countryShortname = countryCode(`${ParsedData.Country}`);
          setCurrency(countryToCurrency[`${countryShortname}`]);
          setLocation(`${ParsedData.Locality}, ${ParsedData.Country}`);
        }
      );
      setImage(URL.createObjectURL(data));
      setPhoto(data);
    }
    fetchData();
  }, []);

  const popAction = StackActions.pop(1);
  const { venueSearch } = route.params;
  const { user_id } = user;
  const countryCode = (x) => lookup.byCountry(x).iso2;

  let venue_google_photo = venueSearch.photos[0].photo_reference
    ? venueSearch.photos[0].photo_reference
    : "";
  let venue_google_name = venueSearch.name ? venueSearch.name : "";
  let venue_google_url = venueSearch.url ? venueSearch.url : "";
  let venue_google_summary = venueSearch.editorial_summary
    ? venueSearch.editorial_summary.overview
    : "";
  let venue_google_phone = venueSearch.international_phone_number
    ? venueSearch.international_phone_number
    : "";
  let google_venue_website = venueSearch.website ? venueSearch.website : "";
  // let venue_google_place_id = venueSearch.place_id ? venueSearch.place_id : "";
  // let venue_google_rating = venueSearch.rating ? venueSearch.rating : "";
  // let venue_operational = venueSearch.business_status
  //   ? venueSearch.business_status
  //   : "";

  const [imagePlace, setImage] = useState("");
  const [venue_photo, setPhoto] = useState("");
  const [venue_name, setName] = useState(venue_google_name);
  const [venue_location, setLocation] = useState("");
  const [venue_website, setWebsite] = useState(google_venue_website);
  const [venue_description, setDescription] = useState(venue_google_summary);
  const [venue_type, setType] = useState("");
  const [venue_phone_number, setPhone] = useState(venue_google_phone);
  const [venue_google_maps_url, setGoogleMapsURL] = useState(venue_google_url);
  const [venue_instagram, setInstagram] = useState("");
  const [venue_facebook, setFacebook] = useState("");
  const [venue_youtube, setYoutube] = useState("");
  const [venue_currency, setCurrency] = useState("");

  return (
    <View style={styles.container}>
      <DefaultBackground />
      <HeaderButtons
        OnPressLeft={() => navigation.dispatch(popAction)}
        IconLeft={<BackIcon />}
        IconRight={""}
      />
      <View style={styles.card}>
        <TextHeader WriteText={`${venue_name}`} />
        <ScrollView>
          {imagePlace ? <VenuePicture Source={{ uri: imagePlace }} /> : <></>}
          <View style={styles.cardBody}>
            <InputInfo
              Content="Venue Name:"
              InputHere={
                <InputTemplate
                  Value={venue_name}
                  OnChangeText={(venue_name) => setName(venue_name)}
                />
              }
            />
            <InputInfo
              Content="Location:"
              InputHere={
                <InputTemplate
                  Value={venue_location}
                  OnChangeText={(venue_location) => setLocation(venue_location)}
                />
              }
            />
            <InputInfo
              Content="Type of Venue: [MAKE INTO A DROPDOWN]"
              InputHere={
                <InputTemplate
                  Value={venue_type}
                  OnChangeText={(venue_type) => setType(venue_type)}
                />
              }
            />
            <InputDescription
              Content="Description:"
              InputHere={
                <InputTemplate
                  MultiLine={true}
                  Value={venue_description}
                  OnChangeText={(venue_description) =>
                    setDescription(venue_description)
                  }
                />
              }
            />
            <InputLinks
              LinkLogo={<PhoneLink />}
              Content="Phone Number"
              InputHere={
                <InputTemplate
                  Value={venue_phone_number}
                  OnChangeText={(venue_phone_number) =>
                    setWebsite(venue_phone_number)
                  }
                />
              }
            />
            <TextSection WriteText={"Links:"} />
            <InputLinks
              LinkLogo={<WebsiteLink />}
              Content="URL"
              InputHere={
                <InputTemplate
                  Value={venue_website}
                  OnChangeText={(venue_website) => setWebsite(venue_website)}
                />
              }
            />
            <InputLinks
              LinkLogo={<GoogleMapsLink />}
              Content="URL"
              InputHere={
                <InputTemplate
                  Value={venue_google_maps_url}
                  OnChangeText={(venue_google_maps_url) =>
                    setGoogleMapsURL(venue_google_maps_url)
                  }
                />
              }
            />
            <InputLinks
              LinkLogo={<InstagramLink />}
              Content="URL"
              InputHere={
                <InputTemplate
                  OnChangeText={(venue_instagram) =>
                    setInstagram(venue_instagram)
                  }
                />
              }
            />
            <InputLinks
              LinkLogo={<FacebookLink />}
              Content="URL"
              InputHere={
                <InputTemplate
                  OnChangeText={(venue_facebook) => setFacebook(venue_facebook)}
                />
              }
            />
            <InputLinks
              LinkLogo={<YoutubeLink />}
              Content="URL"
              InputHere={
                <InputTemplate
                  OnChangeText={(venue_youtube) => setYoutube(venue_youtube)}
                />
              }
            />
            <DesignButton
              ButtonText="Create Venue"
              OnPress={() => {
                addVenue({
                  user_id,
                  venue_name,
                  venue_location,
                  venue_description,
                  venue_website,
                  venue_type,
                  venue_phone_number,
                  venue_google_maps_url,
                  venue_instagram,
                  venue_facebook,
                  venue_youtube,
                  // venue_photo,
                  venue_currency,
                });
                navigation.navigate("Venue Page");
              }}
            />
          </View>
        </ScrollView>
      </View>
    </View>
  );
};
export default VenueGoogleAuth;

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
});
