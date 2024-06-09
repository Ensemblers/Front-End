import { StyleSheet, Text, View, useState } from "react-native";
import React from "react";
import Title from "../../components/Title";
import { CheckBox } from "@rneui/themed";
import BackButton from "../../components/BackButton";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";
import { StackActions } from "@react-navigation/native";

const VenueGigManagerSettings = ({ navigation }) => {
  const popAction = StackActions.pop(1);

  // const [check, setCheck] = useState(false);
  return (
    <View>
      <BackButton
        onPress={() => {
          navigation.dispatch(popAction);
        }}
        navigateToText={"Back"}
      />
      <Title titleText="Default Gig Schedule" />
      <Text>User should be able to toggle this function on and off</Text>
      <View>
        {/* <CheckBox
          checked={check}
          onPress={() => setCheck(!check)}
          title="Label"
        /> */}
        <Text>Sunday</Text>
      </View>
    </View>
  );
};

export default VenueGigManagerSettings;

const styles = StyleSheet.create({
  dayRow: {
    flexDirection: "row",
  },
});
