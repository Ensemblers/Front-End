import { StyleSheet, View } from "react-native";
import React, { useState } from "react";
import { StackActions } from "@react-navigation/native";
import { GooglePlacesAutocomplete } from "react-native-google-places-autocomplete";
import { DefaultBackground, HeaderButtons } from "../../components/PageFormats";
import { BackIcon, GoogleLogo } from "../../components/IconsAndLogos";
import { DesignButton } from "../../components/Buttons";

const CreateVenue = ({ navigation }) => {
  const [venueSearch, setVenueSearch] = useState("");
  const popAction = StackActions.pop(1);

  const {} = venueSearch;

  return (
    <View style={styles.container}>
      <DefaultBackground />
      <HeaderButtons
        OnPressLeft={() => navigation.dispatch(popAction)}
        IconLeft={<BackIcon />}
      />
      <View style={styles.card}>
        <View style={styles.cardBody}>
          <View style={styles.body}>
            <GoogleLogo />
            <View style={styles.searchBar}>
              <GooglePlacesAutocomplete
                placeholder="Find Your Venue"
                onPress={(data, details = null) => {
                  const results = (data, details);
                  setVenueSearch(results);
                }}
                fetchDetails={true}
                query={{
                  key: "AIzaSyCuFsKofy_0ovUjWiO7yk6TKk6y7BnNHCc", // ${{GOOGLE_PLACES_API_KEY}}
                  language: "en",
                  // components: "country:nl",
                }}
                onFail={(error) => console.log(error)}
                styles={{
                  container: {
                    flex: 0,
                  },
                  textInput: {
                    backgroundColor: "white",
                    fontSize: 20,
                    flex: 1,
                  },
                }}
              />
            </View>
            <DesignButton
              ButtonText="Search"
              OnPress={() => {
                venueSearch
                  ? navigation.navigate("Venue Google Auth", { venueSearch })
                  : null;
              }}
            />
          </View>
        </View>
      </View>
    </View>
  );
};

export default CreateVenue;

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
    flex: 1,
    justifyContent: "center",
    paddingBottom: "30%",
  },
  searchBar: {
    height: 70,
    fontSize: 16,
    borderWidth: 0.5,
    borderColor: "grey",
    borderRadius: 15,
    marginVertical: 30,
    // marginHorizontal: 10,
    justifyContent: "center",
  },
});
