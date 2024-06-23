import { StyleSheet, View, ScrollView } from "react-native";
import React from "react";
import { StackActions } from "@react-navigation/native";

import { DefaultBackground, HeaderButtons } from "../../components/PageFormats";
import { TextHeader, TextBody } from "../../components/Text";
import { DesignButton } from "../../components/Buttons";
import {
  UserProfilePicture,
  BackIcon,
  SettingsIcon,
} from "../../components/IconsAndLogos";
import { InputInfo, InputDescription } from "../../components/Input";

const EditConcertPage = ({ navigation }) => {
  const popAction = StackActions.pop(1);

  return (
    <View style={styles.container}>
      <DefaultBackground />
      <HeaderButtons
        OnPressLeft={() => navigation.dispatch(popAction)}
        IconLeft={<BackIcon />}
        IconRight={<SettingsIcon />}
      />
      <View style={styles.card}>
        <TextHeader WriteText={"Edit Concert Page"} />
        <TextBody WriteText={`ARTIST playing at VENUE (LOCATION)\non DATE`} />
        <View style={styles.cardBody}>
          <ScrollView>
            <UserProfilePicture />
            <InputInfo Content="Concert Name:" />
            <InputInfo Content="Start-Time:" />
            <InputInfo Content="End-Time:" />
            <InputDescription Content="Description:" />
            <DesignButton ButtonText="Save" />
          </ScrollView>
        </View>
      </View>
    </View>
  );
};

export default EditConcertPage;

const styles = StyleSheet.create({
  container: {
    height: "100%",
    alignItems: "center",
  },
  card: {
    paddingTop: 15,
    paddingHorizontal: 10,
    flex: 1,
    width: "90%",
  },
  cardBody: {
    marginTop: 10,
  },
});
