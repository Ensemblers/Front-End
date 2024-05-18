import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import React from "react";
import { AntDesign } from "@expo/vector-icons";

const BackButton = ({ onPress, navigateToText }) => {
  return (
    <View>
      <TouchableOpacity onPress={onPress} style={styles.backIcon}>
        <AntDesign name="back" size={24} color="black" />
        <Text>{navigateToText}</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  backIcon: {
    alignSelf: "flex-start",
    color: "grey",
    padding: 10,
  },
});

export default BackButton;
