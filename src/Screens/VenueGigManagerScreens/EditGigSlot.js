import { StyleSheet, Text, View, TouchableOpacity, Button } from "react-native";
import React, { useState, useContext } from "react";

import { StackActions } from "@react-navigation/native";
import BackButton from "../../components/BackButton";
import { Context as GigSlotContext } from "../../context/GigSlotContext";

const EditGigSlot = ({ navigation }) => {
  const { state: gigSlot, deleteGigSlot } = useContext(GigSlotContext);
  const [date, setDate] = useState();
  const [title, setTitle] = useState();
  const { gigslot_id } = gigSlot[0];
  const gigSlot_id = gigslot_id;
  const popAction = StackActions.pop(1);
  return (
    <View>
      <BackButton
        onPress={() => {
          navigation.dispatch(popAction);
        }}
        navigateToText={"Back"}
      />
      <Button
        title="Delete Gig Slot"
        onPress={() => {
          deleteGigSlot({ gigSlot_id });
          navigation.navigate("Venue Gig Manager Home");
        }}
      />
    </View>
  );
};

export default EditGigSlot;

const styles = StyleSheet.create({});
