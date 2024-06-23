import { StyleSheet, Text, View, Button, TouchableOpacity } from "react-native";
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
  buttonText: {
    color: "white",
    fontFamily: "",
    textAlign: "center",
    fontSize: 18,
    fontWeight: "700",
  },
});
