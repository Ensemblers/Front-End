import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  TextInput,
} from "react-native";
import BackButton from "../../components/BackButton";
import { StackActions } from "@react-navigation/native";
import Title from "../../components/Title";
import React, { useState, useContext } from "react";
import { Context as GigSlotContext } from "../../context/GigSlotContext";
import { Context as VenueContext } from "../../context/VenueContext";

const ArtistGigSearch = ({ navigation }) => {
  const { getAllGigSlots } = useContext(GigSlotContext);
  const { getAllVenues } = useContext(VenueContext);
  const [date, setDate] = useState();
  const [location, setLocation] = useState();
  const popAction = StackActions.pop(1);
  return (
    <View>
      <BackButton
        onPress={() => {
          navigation.dispatch(popAction);
        }}
        navigateToText={"Back"}
      />
      <View>
        <Title titleText="Find a Gig" />
        <Text style={styles.label}>Date:</Text>
        <TextInput style={styles.input} value={date} onChangeText={setDate} />

        <Text style={styles.label}>Location:</Text>
        <TextInput
          style={styles.input}
          value={location}
          onChangeText={setLocation}
        />
        <TouchableOpacity
          onPress={async () => {
            await getAllGigSlots();
            navigation.navigate("Artist Gig Search Results", {
              date,
              location,
            });
          }}
        >
          <Text>Find Gigs</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default ArtistGigSearch;

const styles = StyleSheet.create({
  input: {
    fontSize: 18,
    borderWidth: 1,
    borderColor: "black",
    marginBottom: 15,
    padding: 5,
    margin: 5,
  },
  label: {
    fontSize: 20,
    marginBottom: 5,
    marginLeft: 5,
  },
});
