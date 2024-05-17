import React from "react";
import "react-native-gesture-handler";
import { createStackNavigator } from "@react-navigation/stack";
import {Provider as GigRequestProvider} from "../context/GigRequestContext"
import {Provider as GigSlotProvider} from "../context/GigSlotContext"

//SCREENS
import ArtistGigManager from "../Screens/ArtistGigManagerScreens/ArtistGigManager";
import ArtistGigSearch from "../Screens/ArtistGigManagerScreens/ArtistGigSearch";

export default ArtistGigManagerNavigator = () => {
  const Stack = createStackNavigator();
  return (
    <GigSlotProvider>
      <GigRequestProvider>
        <Stack.Navigator
          screenOptions={{
            headerShown: false,
          }}
        >
          <Stack.Screen
            name="Artist Gig Manager Home"
            component={ArtistGigManager}
          />
          <Stack.Screen
            name="Artist Gig Search Page"
            component={ArtistGigSearch}
          />
        </Stack.Navigator>
      </GigRequestProvider>
    </GigSlotProvider>
  );
};
