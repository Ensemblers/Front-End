import { StyleSheet, View, ScrollView, TouchableOpacity } from "react-native";
import React, { useContext, useState, useEffect } from "react";
import { Context as VenueContext } from "../../context/VenueContext";
import { StackActions } from "@react-navigation/native";
import AddressParser from "parse-google-address";

import { Context as AuthContext } from "../../context/AuthContext";

import Spacer from "../../components/Spacer";
import Title from "../../components/Title";
import countryToCurrency, { Currencies, Countries } from "country-to-currency";
import lookup from "country-code-lookup";

import { VenuePicture, VenuePicturePlaceholder } from "../../components/Images";
import { DefaultBackground, HeaderButtons } from "../../components/PageFormats";
import {
  UserProfilePicture,
  BackIcon,
  EditIcon,
  GoogleMapsLink,
  SpotifyLink,
  FacebookLink,
  InstagramLink,
  YoutubeLink,
  PhoneLink,
  WebsiteLink,
  VenueProfilePicture,
  WebsiteToubableOpacity,
  InstagramToubableOpacity,
  YoutubeToubableOpacity,
  FacebookToubableOpacity,
  PhoneTouchableOpacity,
} from "../../components/IconsAndLogos";
import { DesignButton } from "../../components/Buttons";
import { TextHeader, TextBody, TextSection } from "../../components/Text";
import {
  InputInfo,
  InputDescription,
  InputLinks,
} from "../../components/Input";
import { InputTemplate } from "../../components/InputTemplate";

const VenuePage = ({ navigation }) => {
  const { state: venue, getVenue } = useContext(VenueContext);

  const { state: user } = useContext(AuthContext);

  const { user_id } = user;

  const [imagePlace, setImage] = useState("");
  console.log(venue);
  const venue_user_id = venue[0].user_id;
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

// import React, { useContext, ScrollView } from "react";
// import { StackActions } from "@react-navigation/native";
// import { View, Text, StyleSheet } from "react-native";
// import { Context as VenueContext } from "../../context/VenueContext";
// import { Context as AuthContext } from "../../context/AuthContext";

// const VenuePage = ({ navigation }) => {
//   const { state: user, getUser } = useContext(AuthContext);
//   const { state: venue, getVenue } = useContext(VenueContext);

//   const userID = user.user_id;
//   const venueUser = venue[0];
//   console.log(JSON.stringify(venue, undefined, 4));

//   const venueID = venueUser.user_id;

//   const {
//     venue_name,
//     venue_location,
//     venue_description,
//     venue_website,
//     venue_type,
//     venue_phone_number,
//     venue_instagram,
//     venue_facebook,
//     venue_youtube,
//     venue_photo,
//   } = venue[0];

//   const popAction = StackActions.pop(1);

//   return (
//     <View>
//       <Text>Hello</Text>
//     </View>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     padding: 30,
//     backgroundColor: "#fff",
//     alignItems: "center",
//     justifyContent: "center",
//   },
//   backIcon: {
//     alignSelf: "flex-start",
//     color: "grey",
//     padding: 10,
//   },
//   editIcon: {
//     alignSelf: "flex-end",
//     color: "grey",
//   },
//   title: {
//     fontSize: 18,
//   },
//   icon: {
//     fontSize: 24,
//   },
// });

// export default VenuePage;

// {
//   /* <TouchableOpacity
//         onPress={() => navigation.navigate("My Stuff Page")}
//         style={styles.backIcon}
//       >
//         <AntDesign name="back" size={24} color="black" />
//         <Text>My Stuff</Text>
//       </TouchableOpacity>
//       <View style={styles.container}>
//         {venue_user_id === user_id ? (
//           <TouchableOpacity
//             onPress={() => {
//               getVenue(venue_id);
//               navigation.navigate("Edit Venue Page");
//             }}
//             style={styles.editIcon}
//           >
//             <AntDesign name="edit" size={24} color="grey" />
//           </TouchableOpacity>
//         ) : null}
//         <Title titleText={venue_name} />
//         <Text style={{ fontSize: 20 }}>{venue_location}</Text>
//         {/* <Text style={{ fontSize: 20 }}>{venue_business_hours}</Text> */
// }
// // <Text style={{ fontSize: 20 }}>{venue_description}</Text>
// // <Text style={{ fontSize: 20 }}>{venue_website}</Text>
// // {venue_user_id === user_id ? (
// //   <Button
// //     title="Manage Gigs"
// //     buttonStyle={{
// //       backgroundColor: "rgba(78, 116, 289, 1)",
// //       borderRadius: 3,
// //     }}
// //     containerStyle={{
// //       width: 200,
// //       marginHorizontal: 50,
// //       marginVertical: 10,
// //       borderRadius: 30,
// //     }}
// //     onPress={() => {
// //       getVenue(venue_id);
// //       navigation.navigate("Venue Gig Manager");
// //     }}
// //   />
// // ) : null}
// // </View> */}
