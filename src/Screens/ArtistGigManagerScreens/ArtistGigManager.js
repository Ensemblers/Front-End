import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { Button } from "react-native-paper";

const ArtistGigManager = ({ navigation }) => {
  //DON'T FORGET TO USE ARTIST_ID PROP PASSED ON BY ARTIST PAGE TO GET ARTIST
  return (
    <View>
      <Text>ArtistGigManager</Text>
      <Button onPress={() => navigation.navigate("")} />
    </View>
  );
};

const styles = StyleSheet.create({});

export default ArtistGigManager;
