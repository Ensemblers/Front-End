import {
  StyleSheet,
  Text,
  View,
  TextInput,
  Button,
  TouchableOpacity,
} from "react-native";
import React, { useContext, useState, useEffect } from "react";
import { Context as VenueContext } from "../../context/VenueContext";
import { Context as AuthContext } from "../../context/AuthContext";
import Spacer from "../../components/Spacer";
import { AntDesign } from "@expo/vector-icons";
import { StackActions } from "@react-navigation/native";
import BackButton from "../../components/BackButton";
import Title from "../../components/Title";

const CreateVenue = ({ navigation }) => {
  const { state: venue, addVenue } = useContext(VenueContext);
  const { state: user, getUser } = useContext(AuthContext);

  const [venue_name, setvenue_name] = useState("");
  const [venue_location, setvenue_location] = useState("");

  const user_id = user.user_id;
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
      <Text style={styles.label}>Venue Name:</Text>
      <TextInput
        style={styles.input}
        value={venue_name}
        onChangeText={setvenue_name}
      />

      <Text style={styles.label}>Location:</Text>
      <TextInput
        style={styles.input}
        value={venue_location}
        onChangeText={setvenue_location}
      />
      <Spacer>
        <Button
          title="Create Venue"
          onPress={() => {
            addVenue({
              user_id,
              venue_name,
              venue_location,
            });
            navigation.navigate("Venue Page");
          }}
        />
      </Spacer>
    </View>
  );
};

export default CreateVenue;

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
  backIcon: {
    alignSelf: "flex-start",
    color: "grey",
    padding: 10,
  },
  headerTitle: {
    fontSize: 30,
    letterSpacing: 5,
    fontWeight: "bold",
  },
});
