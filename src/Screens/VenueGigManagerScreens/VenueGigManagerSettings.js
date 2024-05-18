import { StyleSheet, Text, View } from "react-native";
import React from "react";
import Title from "../../components/Title";

const VenueGigManagerSettings = () => {
  return (
    <View>
      <Title titleText="Default Gig Schedule" />
      <Text>User should be able to toggle this function on and off</Text>
    </View>
  );
};

export default VenueGigManagerSettings;

const styles = StyleSheet.create({});
