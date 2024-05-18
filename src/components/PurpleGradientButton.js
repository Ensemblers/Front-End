import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import React from "react";

const PurpleGradientButton = ({ buttonName }) => {
  return (
    <View>
      <TouchableOpacity style={styles.button} onPress={this.props.onPress}>
        <Text>{buttonName}</Text>
      </TouchableOpacity>
    </View>
  );
};

export default PurpleGradientButton;

const styles = StyleSheet.create({
  button: {
    height: 20,
    backgroundColor: "indigo",
    //indigo, darkviolet, blueviolet
  },
});
