import { StyleSheet, Text, View } from "react-native";
import React, { useContext } from "react";
import { DesignButton, OnboardingButton } from "../../components/Buttons";
import { Context as AuthContext } from "../../context/AuthContext";
import { TextHeader, TextBody } from "../../components/Text";
import { DefaultBackground } from "../../components/PageFormats";

const OnboardingScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <DefaultBackground />
      <View style={styles.card}>
        <View style={styles.cardHeader}>
          <TextHeader WriteText="I am an:" />
        </View>

        <View style={styles.cardBody}>
          <OnboardingButton
            ButtonText="Artist"
            OnPress={() => {
              navigation.navigate("Create Artist");
            }}
          />
          <OnboardingButton
            ButtonText="Venue"
            OnPress={() => {
              navigation.navigate("Create Venue");
            }}
          />
          <OnboardingButton
            ButtonText="Fan"
            OnPress={() => {
              navigation.navigate("My Stuff Page");
            }}
          />
        </View>
      </View>
    </View>
  );
};

export default OnboardingScreen;

const styles = StyleSheet.create({
  container: {
    height: "100%",
    alignItems: "center",
    flex: 1,
  },
  card: {
    paddingTop: 30,
    width: "100%",
    justifyContent: "center",
    alignItems: "center",
    flex: 1,
  },
  cardHeader: {
    width: "85%",
    flex: 1,
    // borderColor: "red",
    // borderWidth: 1,
    justifyContent: "flex-end",
    marginBottom: 20,
  },
  cardBody: {
    width: "85%",
    flex: 3,
    // borderColor: "blue",
    // borderWidth: 1,
  },
  onboardingButton: {
    alignSelf: "center",
    height: 40,
    paddingHorizontal: 10,
    // width: 100,
    borderRadius: 10,
    backgroundColor: "#8a2be2",
    //663399 (purple), 1e90ff (blue),
    justifyContent: "center",
    //indigo, darkviolet, blueviolet
    shadowColor: "#ebeff5",
    shadowOffset: { width: 4, height: 4 },
    shadowOpacity: 50,
    shadowRadius: 4,
  },
});
