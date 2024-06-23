import { StyleSheet, Image } from "react-native";
import React from "react";
import { VenueProfilePicture } from "./IconsAndLogos";

export const ProfilePicture = ({ UserImage }) => {
  return (
    <>
      <Image
        resizeMode="stretch"
        source={UserImage}
        style={styles.profileImage}
      />
    </>
  );
};

export const VenuePicture = ({ Source }) => {
  return (
    <>
      <Image resizeMode="contain" source={Source} style={styles.venueImage} />
    </>
  );
};

export const VenuePicturePlaceholder = (Source) => {
  return (
    <>
      <Image resizeMode="contain" source={Source} style={styles.venueImage} />
    </>
  );
};

const styles = StyleSheet.create({
  profileImage: {
    height: 150,
    width: 150,
    borderRadius: 100,
    marginLeft: 40,
    marginRight: 30,
  },
  venueImage: {
    height: 250,
    width: "100%",
    marginVertical: 20,
  },
});
