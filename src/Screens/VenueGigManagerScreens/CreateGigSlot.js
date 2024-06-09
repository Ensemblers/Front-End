import { StyleSheet, Text, View } from "react-native";
import React, { useState, useContext } from "react";
import CreatePage from "../../components/CreatePage";
import { Context as VenueContext } from "../../context/VenueContext";
import { StackActions } from "@react-navigation/native";
import { Context as GigSlotContext } from "../../context/GigSlotContext";
import dateFormat, { masks } from "dateformat";

const CreateGigSlot = ({ route, navigation }) => {
  const { state: venue } = useContext(VenueContext);
  const { addGigSlot } = useContext(GigSlotContext);
  const [title, setTitle] = useState();
  const [description, setDescription] = useState();
  const popAction = StackActions.pop(1);
  const { venue_id, venue_name, venue_location } = venue[0];
  const { formattedDate } = route.params;
  const location = venue_location;
  const date = formattedDate;
  const displayDate = dateFormat(formattedDate, "d mmm yyyy");

  return (
    <View>
      <CreatePage
        backOnPress={() => {
          navigation.dispatch(popAction);
        }}
        navigateToText="Back"
        TitleText={`Gig Slot:\n${displayDate}`}
        FirstCategory="Gig Name:"
        SecondCategory="Description"
        value={title}
        setValue={setTitle}
        value2={description}
        setValue2={setDescription}
        CreateButton="Create Gig Slot"
        createOnPress={async () => {
          const status = "pending";
          await addGigSlot({
            title,
            location,
            venue_id,
            venue_name,
            date,
            description,
            status,
          });
          navigation.navigate("Venue Gig Manager Home");
        }}
      />
    </View>
  );
};

export default CreateGigSlot;

const styles = StyleSheet.create({
  CreateGiGlsot: {
    alignItems: "center",
  },
});
