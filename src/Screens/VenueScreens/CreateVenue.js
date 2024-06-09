import {
  StyleSheet,
  View,
  Text,
  TextInput,
  Button,
  TouchableOpacity,
} from "react-native";
import React, { useContext, useState } from "react";
import { Context as VenueContext } from "../../context/VenueContext";
import { Context as AuthContext } from "../../context/AuthContext";
import { StackActions } from "@react-navigation/native";
import CreatePage from "../../components/CreatePage";
import Spacer from "../../components/Spacer";
import { GooglePlacesAutocomplete } from "react-native-google-places-autocomplete";
import Title from "../../components/Title";
import { AntDesign } from "@expo/vector-icons";

const CreateVenue = ({ navigation }) => {
  const { state: venue, addVenue } = useContext(VenueContext);
  const { state: user } = useContext(AuthContext);

  const [venue_name, setvenue_name] = useState("");
  const [venue_location, setvenue_location] = useState("");
  const [venueSearch, setVenueSearch] = useState("");

  const { user_id } = user;
  const popAction = StackActions.pop(1);

  const {} = venueSearch;

  return (
    <View>
      <TouchableOpacity
        onPress={() => navigation.navigate("My Stuff Page")}
        style={styles.backIcon}
      >
        <AntDesign name="back" size={24} color="black" />
        <Text>My Stuff</Text>
      </TouchableOpacity>
      <Spacer />
      <Title titleText="Find Your Venue" />
      <Spacer />

      {/* <CreatePage
        backOnPress={() => {
          navigation.dispatch(popAction);
        }}
        navigateToText="Back"
        TitleText="Create Venue"
        FirstCategory="Name of Venue"
        SecondCategory="Location"
        value={venue_name}
        setValue={setvenue_name}
        value2={venue_location}
        setValue2={setvenue_location}
        CreateButton="Create Venue"
        createOnPress={async () => {
          await addVenue({
            user_id,
            venue_name,
            venue_location,
          });
          navigation.navigate("Venue Page");
        }}
      /> */}
      <Spacer />
      <View styles={{ heigh: 100 }}>
        <GooglePlacesAutocomplete
          placeholder="Search"
          styles={{ container: { flex: 0 } }}
          onPress={(data, details = null) => {
            const results = (data, details);
            setVenueSearch(results);
          }}
          fetchDetails={true}
          query={{
            key: "AIzaSyCuFsKofy_0ovUjWiO7yk6TKk6y7BnNHCc",
            language: "en",
            components: "country:nl",
          }}
          // renderRightButton
          onFail={(error) => console.log(error)}
          // requestUrl={{
          //   url: "https://cors-anywhere.herokuapp.com/https://maps.googleapis.com/maps/api",
          //   useOnPlatform: "web",
          // }}
        />
        <TouchableOpacity
          onPress={() => {
            navigation.navigate("Venue Google Auth", { venueSearch });
          }}
        >
          <Text>Search</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default CreateVenue;

const styles = StyleSheet.create({
  searchVenue: {
    flex: 0,
    // flexDirection: "row",
    // justifyContent: "space-around",
    // alignItems: "center",
  },
  input: {
    fontSize: 18,
    borderWidth: 1,
    borderColor: "black",
    marginBottom: 15,
    padding: 5,
    marginRight: 50,
    width: 200,
  },
  label: {
    fontSize: 20,
    marginBottom: 5,
    marginLeft: 50,
  },
});
