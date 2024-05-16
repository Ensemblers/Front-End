import {
  StyleSheet,
  Text,
  View,
  TextInput,
  Button,
  FlatList,
} from "react-native";
import React, { useContext, useState } from "react";
import { Dropdown } from "react-native-element-dropdown";
import { Context as VenueContext } from "../../context/VenueContext";
import { Context as AuthContext } from "../../context/AuthContext";
import Spacer from "../../components/Spacer";
import GenreDropdown from "../../components/GenreDropdown";

const CreateVenue = ({ navigation }) => {
  const [venue_name, setvenue_name] = useState("");
  const [venue_location, setvenue_location] = useState("");
  const { addVenue } = useContext(VenueContext);
  const { state } = useContext(AuthContext);
  const user_id = state.user_id;

  return (
    <View>
      <Text>Create Venue</Text>

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
            addVenue({ user_id, venue_name, venue_location });

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
});
