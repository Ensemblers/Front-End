import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import React, { useState } from "react";

import { StackActions } from "@react-navigation/native";
import BackButton from "../../components/BackButton";

const EditGigSlot = ({ navigation }) => {
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
    </View>
  );
};

export default EditGigSlot;

const styles = StyleSheet.create({});
