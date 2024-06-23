import { StyleSheet, Text, View, TouchableOpacity, Image } from "react-native";
import Spotify from "../../Images/logos/Spotify.png";
import Facebook from "../../Images/logos/Facebook.png";
import Instagram from "../../Images/logos/Instagram.png";
import Youtube from "../../Images/logos/Youtube.png";
import GoogleMaps from "../../Images/logos/GoogleMaps.png";
import GoogleMapsIcon from "../../Images/logos/GoogleMapsIconLogo.png";
import Google from "../../Images/logos/Google.png";
import WebsiteIcon from "../../Images/logos/WebsiteIcon.png";
import WebsiteLogo from "../../Images/logos/website.png";
import PhonePic from "../../Images/logos/telephone.png";

import { AntDesign } from "@expo/vector-icons";
import { FontAwesome6 } from "@expo/vector-icons";
import { SimpleLineIcons } from "@expo/vector-icons";
import { FontAwesome } from "@expo/vector-icons";
import { InputText } from "./Text";
import React from "react";

export const UserProfilePicture = () => {
  return (
    <>
      <TouchableOpacity style={styles.userProfile}>
        <FontAwesome name="user-circle" size={120} color="grey" />
        <Text style={styles.userProfileText}>{`Update \nProfile Picture`}</Text>
      </TouchableOpacity>
    </>
  );
};

export const VenueProfilePicture = () => {
  return (
    <>
      <SimpleLineIcons name="picture" size={50} color="grey" />{" "}
    </>
  );
};

export const GoogleLogo = () => {
  return (
    <>
      <Image
        style={styles.googleLogo}
        resizeMode="contain"
        source={GoogleMaps}
      />
    </>
  );
};

export const BackIcon = () => {
  return (
    <>
      <AntDesign name="back" size={24} color="grey" />
    </>
  );
};

export const EditIcon = () => {
  return (
    <>
      <AntDesign name="edit" size={24} color="grey" />
    </>
  );
};

export const SettingsIcon = () => {
  return (
    <>
      <SimpleLineIcons name="settings" size={24} color="grey" />
    </>
  );
};

export const UserIcon = () => {
  return (
    <View>
      <TouchableOpacity>
        <Image style={styles.logo} source={Spotify} />
      </TouchableOpacity>
    </View>
  );
};

export const Website = () => {
  return (
    <View>
      <TouchableOpacity>
        <Image style={styles.logo} source={WebsiteIcon} />
      </TouchableOpacity>
    </View>
  );
};

export const PhoneLink = () => {
  return (
    <View>
      <Image style={styles.logo} source={PhonePic} />
    </View>
  );
};

export const WebsiteLink = () => {
  return (
    <View>
      <Image style={styles.logo} source={WebsiteLogo} />
    </View>
  );
};

export const GoogleMapsLink = () => {
  return (
    <View>
      <Image style={styles.logo} source={GoogleMapsIcon} />
    </View>
  );
};

export const SpotifyLink = () => {
  return (
    <View>
      <Image style={styles.logo} source={Spotify} />
    </View>
  );
};

export const FacebookLink = () => {
  return (
    <View>
      <Image style={styles.logo} source={Facebook} />
    </View>
  );
};

export const InstagramLink = () => {
  return (
    <View>
      <Image style={styles.logo} source={Instagram} />
    </View>
  );
};

export const YoutubeLink = () => {
  return (
    <View>
      <Image style={styles.youtube} source={Youtube} />
    </View>
  );
};

export const PhoneTouchableOpacity = ({ OnPress }) => {
  return (
    <View>
      <TouchableOpacity onPress={OnPress}>
        <Image style={styles.logo} source={PhonePic} />
      </TouchableOpacity>
    </View>
  );
};

export const WebsiteToubableOpacity = ({ OnPress }) => {
  return (
    <View>
      <TouchableOpacity onPress={OnPress}>
        <Image style={styles.logo} source={WebsiteLogo} />
      </TouchableOpacity>
    </View>
  );
};

export const SpotifyToubableOpacity = ({ OnPress }) => {
  return (
    <>
      <TouchableOpacity onPress={OnPress}>
        <Image style={styles.logo} source={Spotify} />
      </TouchableOpacity>
    </>
  );
};

export const FacebookToubableOpacity = ({ OnPress }) => {
  return (
    <>
      <TouchableOpacity onPress={OnPress}>
        <Image style={styles.logo} source={Facebook} />
      </TouchableOpacity>
    </>
  );
};

export const InstagramToubableOpacity = ({ OnPress }) => {
  return (
    <>
      <TouchableOpacity onPress={OnPress}>
        <Image style={styles.logo} source={Instagram} />
      </TouchableOpacity>
    </>
  );
};

export const YoutubeToubableOpacity = ({ OnPress }) => {
  return (
    <>
      <TouchableOpacity onPress={OnPress}>
        <Image style={styles.logo} source={Youtube} />
      </TouchableOpacity>
    </>
  );
};
export const ArtistLinks = () => {
  return (
    <View style={styles.logoView}>
      <TouchableOpacity>
        <Image style={styles.logoGroup} source={Spotify} />
      </TouchableOpacity>
      <TouchableOpacity>
        <Image style={styles.logoGroup} source={Facebook} />
      </TouchableOpacity>
      <TouchableOpacity>
        <Image style={styles.logoGroup} source={Instagram} />
      </TouchableOpacity>
      <TouchableOpacity>
        <Image style={styles.logoGroup} source={Youtube} />
      </TouchableOpacity>
    </View>
  );
};

// {
//   venue_user_id === user_id ? (
//     <DesignButton
//       ButtonText="Gig Manager"
//       OnPress={() => {
//         getVenue(venue_id);
//         navigation.navigate("Venue Gig Manager");
//       }}
//     />
//   ) : null;
// }

const styles = StyleSheet.create({
  //Tab Icons - Artists, Venues, Concerts, My Stuff

  //User Icon

  //Back Icon

  //Edit Icon

  //Settings Icon

  //ArtistLinks
  logoView: {
    flexDirection: "row",
    justifyContent: "space-around",
  },
  googleLogo: {
    height: 130,
    width: 150,

    alignSelf: "center",
    marginBottom: 45,
  },
  logoGroup: {
    height: 40,
    width: 40,
    margin: 15,
  },
  logo: {
    height: 40,
    width: 40,
    margin: 15,
  },
  youtube: {
    height: 55,
    width: 55,
    marginTop: 6,
    marginLeft: 8,
  },
  googleMaps: {
    position: "absolute",
    height: 30,
    width: 30,
    zIndex: 2,
  },
  userProfile: {
    height: 190,
    alignItems: "center",
    justifyContent: "space-between",
    padding: 15,
  },
  userProfileText: {
    marginTop: 5,
    textAlign: "center",
    // color: "grey",
    fontSize: 12,
  },
});
