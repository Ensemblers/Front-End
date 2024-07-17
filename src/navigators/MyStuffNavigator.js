import React, { useContext, useEffect, useState } from "react";
import "react-native-gesture-handler";
import { createStackNavigator } from "@react-navigation/stack";
import { Context as AuthContext } from "../context/AuthContext";

//SCREENS
import MyStuff from "../Screens/BottomTab/MyStuff";
import ArtistPage from "../Screens/ArtistScreens/ArtistPage";
import CreateArtist from "../Screens/ArtistScreens/CreateArtist";
import ArtistPageEditScreen from "../Screens/ArtistScreens/ArtistPageEditScreen";
import VenuePage from "../Screens/VenueScreens/VenuePage";
import CreateVenue from "../Screens/VenueScreens/CreateVenue";
import VenuePageEditScreen from "../Screens/VenueScreens/VenuePageEditScreen";
import VenueGoogleAuth from "../Screens/VenueScreens/VenueGoogleAuth";
import OnboardingScreen from "../Screens/AuthStack/OnboardingScreen";

//NAVIGATORS
import ArtistGigManagerNavigator from "./ArtistGigManagerNavigator";
import VenueGigManagerNavigator from "./VenueGigManagerNavigator";

export default MyStuffNavigator = () => {
  const Stack = createStackNavigator();
  const { state: user, getUser } = useContext(AuthContext);

  const { user_new } = user;

  return (
    <Stack.Navigator
      initialRouteName={
        user_new === true ? "Onboarding Screen" : "My Stuff Page"
      }
      screenOptions={{
        headerShown: false,
      }}
    >
      <Stack.Screen name="Onboarding Screen" component={OnboardingScreen} />

      <Stack.Screen name="My Stuff Page" component={MyStuff} />
      <Stack.Screen name="Create Artist" component={CreateArtist} />
      <Stack.Screen name="Create Venue" component={CreateVenue} />
      <Stack.Screen name="Venue Google Auth" component={VenueGoogleAuth} />
      <Stack.Screen name="Artist Page" component={ArtistPage} />
      <Stack.Screen name="Venue Page" component={VenuePage} />
      <Stack.Screen name="Edit Artist Page" component={ArtistPageEditScreen} />
      <Stack.Screen name="Edit Venue Page" component={VenuePageEditScreen} />
      <Stack.Screen
        name="Artist Gig Manager"
        component={ArtistGigManagerNavigator}
      />
      <Stack.Screen
        name="Venue Gig Manager"
        component={VenueGigManagerNavigator}
      />
    </Stack.Navigator>
  );
};
