import {
  StyleSheet,
  Text,
  View,
  TextInput,
  Button,
  TouchableOpacity,
} from "react-native";
import { StackActions } from "@react-navigation/native";
import React, { useContext, useState } from "react";
import { Context as VenueContext } from "../../context/VenueContext";
import { Context as AuthContext } from "../../context/AuthContext";

import Spacer from "../../components/Spacer";
import { AntDesign } from "@expo/vector-icons";
import BackButton from "../../components/BackButton";
import Title from "../../components/Title";

const VenuePageEditScreen = ({ navigation }) => {
  const { state: user } = useContext(AuthContext);

  const { state: venue, editVenue, deleteVenue } = useContext(VenueContext);

  let {
    venue_id,
    venue_name,
    venue_location,
    venue_business_hours,
    venue_description,
    venue_website,
  } = venue[0];

  const [name, setName] = useState(venue_name);
  const [location, setLocation] = useState(venue_location);
  const [businessHours, setBusinessHours] = useState(venue_business_hours);
  const [description, setDescription] = useState(venue_description);
  const [website, setWebsite] = useState(venue_website);

  const popAction = StackActions.pop(1);

  return (
    <View>
      <TouchableOpacity
        onPress={() => {
          navigation.dispatch(popAction);
        }}
        style={styles.backIcon}
      >
        <AntDesign name="back" size={24} color="black" />
        <Text>Back</Text>
      </TouchableOpacity>
      <Title titleText="My Venues" />
      <Spacer />

      <View style={styles.inputRow}>
        <Text style={styles.label}>Venue Name:</Text>
        <TextInput
          style={styles.input}
          value={name}
          onChangeText={(name) => setName(name)}
        />
      </View>

      <View style={styles.inputRow}>
        <Text style={styles.label}>Venue Location:</Text>
        <TextInput
          style={styles.input}
          value={location}
          onChangeText={(location) => setLocation(location)}
        />
      </View>

      <View style={styles.inputRow}>
        <Text style={styles.label}>Venue Business Hours:</Text>
        <TextInput
          style={styles.input}
          value={businessHours}
          onChangeText={(businessHours) => setBusinessHours(businessHours)}
        />
      </View>

      <View style={styles.inputRow}>
        <Text style={styles.label}>Venue Description:</Text>
        <TextInput
          style={styles.input}
          value={description}
          onChangeText={(description) => setDescription(description)}
        />
      </View>

      <View style={styles.inputRow}>
        <Text style={styles.label}>Venue Website:</Text>
        <TextInput
          style={styles.input}
          value={website}
          onChangeText={(website) => setWebsite(website)}
        />
      </View>
      <Spacer />
      <Button
        title="Update Venue"
        onPress={() => {
          const business_hours = businessHours;
          editVenue({
            venue_id,
            name,
            location,
            business_hours,
            description,
            website,
          });
          navigation.navigate("Venue Page");
        }}
      />

      <Button
        title="Delete Venue"
        onPress={() => {
          deleteVenue({ venue_id });
          navigation.navigate("My Stuff Page");
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  inputRow: {
    flexDirection: "row",
    marginLeft: 20,
  },
  input: {
    fontSize: 18,
    borderWidth: 1,
    borderColor: "black",
    marginLeft: 15,
    width: 200,
  },
  backIcon: {
    alignSelf: "flex-start",
    color: "grey",
    padding: 10,
  },
  label: {
    fontSize: 20,
    marginBottom: 5,
    marginLeft: 5,
  },
  headerTitle: {
    fontSize: 30,
    letterSpacing: 5,
    fontWeight: "bold",
    textAlign: "center",
  },
});

export default VenuePageEditScreen;
