import { StyleSheet, Text, View } from "react-native";
import React from "react";

export default Title = ({ titleText }) => {
  return (
    <>
      <Text style={styles.headerTitle}>{titleText}</Text>
    </>
  );
};

const styles = StyleSheet.create({
  headerTitle: {
    fontSize: 30,
    letterSpacing: 5,
    fontWeight: "bold",
    textAlign: "center",
    alignItems: "center",
  },
});
