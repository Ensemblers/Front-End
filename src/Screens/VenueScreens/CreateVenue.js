import { StyleSheet, View } from "react-native";
import React, { useContext, useState } from "react";
import { Context as VenueContext } from "../../context/VenueContext";
import { Context as AuthContext } from "../../context/AuthContext";
import { StackActions } from "@react-navigation/native";
import CreatePage from "../../components/CreatePage";

const CreateVenue = ({ navigation }) => {
  const { state: venue, addVenue } = useContext(VenueContext);
  const { state: user, getUser } = useContext(AuthContext);

  const [venue_name, setvenue_name] = useState("");
  const [venue_location, setvenue_location] = useState("");

  const { user_id } = user;
  const popAction = StackActions.pop(1);

  return (
    <View>
      <CreatePage
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
      />
    </View>
  );
};

export default CreateVenue;

const styles = StyleSheet.create({});
