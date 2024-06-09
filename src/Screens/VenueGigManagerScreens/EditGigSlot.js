import { StyleSheet, Text, View, TouchableOpacity, Button } from "react-native";
import React, { useState, useContext } from "react";

import { StackActions } from "@react-navigation/native";
import BackButton from "../../components/BackButton";
import { Context as GigSlotContext } from "../../context/GigSlotContext";

const EditGigSlot = ({ navigation }) => {
  const { state: gigSlot, deleteGigSlot } = useContext(GigSlotContext);
  const [date, setDate] = useState();
  const [title, setTitle] = useState();
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
          const { gig_slot_id } = gigSlot[0];

          deleteGigSlot({ gig_slot_id });
          navigation.navigate("Venue Gig Manager Home");
        }}
      />
    </View>
  );
};

export default EditGigSlot;

const styles = StyleSheet.create({});
