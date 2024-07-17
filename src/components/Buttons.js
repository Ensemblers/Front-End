import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import React from "react";

export const DesignButton = ({ ButtonText, OnPress }) => {
  return (
    <View style={styles.buttonView}>
      <TouchableOpacity style={styles.button} onPress={OnPress}>
        <Text style={styles.buttonText}>{ButtonText}</Text>
      </TouchableOpacity>
    </View>
  );
};

export const OnboardingButton = ({ ButtonText, OnPress, ButtonStyle }) => {
  return (
    <View style={styles.buttonView}>
      <TouchableOpacity style={styles.buttonOnboarding} onPress={OnPress}>
        <Text style={styles.buttonOnboardingText}>{ButtonText}</Text>
      </TouchableOpacity>
    </View>
  );
};
const styles = StyleSheet.create({
  buttonView: {
    // alignItems: "center",
    margin: 15,
  },
  button: {
    alignSelf: "center",
    height: 40,
    paddingHorizontal: 10,
    // width: 100,
    borderRadius: 10,
    backgroundColor: "#8a2be2",
    //663399 (purple), 1e90ff (blue),
    justifyContent: "center",
    //indigo, darkviolet, blueviolet
    shadowColor: "#ebeff5",
    shadowOffset: { width: 4, height: 4 },
    shadowOpacity: 50,
    shadowRadius: 4,
  },
  buttonOnboarding: {
    alignSelf: "center",
    height: 80,
    width: 200,
    paddingHorizontal: 10,
    // width: 100,
    borderRadius: 30,
    backgroundColor: "#8a2be2",
    //663399 (purple), 1e90ff (blue),
    justifyContent: "center",
    //indigo, darkviolet, blueviolet
    shadowColor: "#ebeff5",
    shadowOffset: { width: 4, height: 4 },
    shadowOpacity: 50,
    shadowRadius: 4,
  },
  buttonText: {
    color: "white",
    fontFamily: "",
    textAlign: "center",
    fontSize: 18,
    fontWeight: "700",
  },
  buttonOnboardingText: {
    color: "white",
    fontFamily: "",
    textAlign: "center",
    fontSize: 30,
    fontWeight: "700",
  },
});
