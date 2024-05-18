import { StyleSheet, TouchableOpacity, View, Text } from "react-native";
import React, { useContext } from "react";
import Title from "../../components/Title";
import BackButton from "../../components/BackButton";
import { Context as GigSlotContext } from "../../context/GigSlotContext";
import { StackActions } from "@react-navigation/native";

const GigSlot = ({ navigation }) => {
  const { state: gigSlot } = useContext(GigSlotContext);
  console.log(gigSlot);
  const popAction = StackActions.pop(1);
  return (
    <View>
      <BackButton
        onPress={() => {
          navigation.dispatch(popAction);
        }}
        navigateToText={"Back"}
      />
      <Title titleText="Gig Slot" />
      <TouchableOpacity onPress={() => navigation.navigate("Edit Gig Slot")}>
        <Text>Edit Gig Slot</Text>
      </TouchableOpacity>
    </View>
  );
};

export default GigSlot;

const styles = StyleSheet.create({});
