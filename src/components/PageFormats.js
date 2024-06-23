import { StyleSheet, Text, View, TouchableOpacity, Image } from "react-native";
import React from "react";
import Background from "../../Images/login-background.jpg";
import { StackActions } from "@react-navigation/native";
import { AntDesign } from "@expo/vector-icons";
import {
  ArtistLinks,
  BackIcon,
  EditIcon,
  SettingsIcon,
} from "../components/IconsAndLogos";

export function DefaultBackground({
  OnPressLeft,
  IconLeft,
  OnPressRight,
  IconRight,
}) {
  const popAction = StackActions.pop(1);

  return (
    <View style={styles.screen}>
      <Image
        source={Background}
        objectFit="center"
        style={styles.backgroundImage}
      />
      <View style={styles.topView}>
        <TouchableOpacity style={styles.icon} onPress={OnPressLeft}>
          {IconLeft}
        </TouchableOpacity>
        <TouchableOpacity style={styles.icon} onPress={OnPressRight}>
          {IconRight}
        </TouchableOpacity>
      </View>
      <View style={styles.container}></View>
    </View>
  );
}

export const HeaderButtons = ({
  OnPressLeft,
  IconLeft,
  OnPressRight,
  IconRight,
}) => {
  return (
    <>
      <View style={styles.topView}>
        <TouchableOpacity style={styles.icon} onPress={OnPressLeft}>
          {IconLeft}
        </TouchableOpacity>
        <TouchableOpacity style={styles.icon} onPress={OnPressRight}>
          {IconRight}
        </TouchableOpacity>
      </View>
      <View style={styles.container}></View>
    </>
  );
};

const styles = StyleSheet.create({
  // Background_TwoButtons
  container: {
    position: "absolute",
    alignSelf: "center",
    width: "100%",
    height: "100%",
    top: 80,
    backgroundColor: "rgba(255,255,255, 0.8)",
    // borderLeftWidth: 1,
    // borderRightWidth: 1,
    // borderColor: "grey",

    // marginHorizontal: "20%",
    // borderRadius: 10,
    // backgroundColor: "white",
    zIndex: -2,
    // shadowColor: "grey",
    // shadowOffset: { width: 2, height: 2 },
    // shadowOpacity: 10,
    // shadowRadius: 2,
  },
  screen: {
    width: "100%",
    height: "100%",
    position: "absolute",
    zIndex: -1,
  },
  backgroundImage: {
    position: "absolute",
    height: "100%",
    width: "100%",
    zIndex: -3,
  },
  topView: {
    position: "absolute",
    flexDirection: "row",
    justifyContent: "space-between",
    padding: 10,
    width: "100%",
    zIndex: 2,
  },
});

//colors
//#E50FED #E933F0 #FAFEFD #6B00A3 #D14DFF #040301
