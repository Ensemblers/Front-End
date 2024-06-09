import React from "react";
import "react-native-gesture-handler";
import { createStackNavigator } from "@react-navigation/stack";
import { Provider as GigRequestProvider } from "../context/GigRequestContext";
import { Provider as GigSlotProvider } from "../context/GigSlotContext";

//SCREENS
import ArtistGigManager from "../Screens/ArtistGigManagerScreens/ArtistGigManager";
import ArtistGigSearchResults from "../Screens/ArtistGigManagerScreens/ArtistGigSearchResults";
import ConcertPage from "../Screens/ConcertScreens/ConcertPage";

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
            name="Artist Gig Search Results"
            component={ArtistGigSearchResults}
          />
          <Stack.Screen name="Concert Page" component={ConcertPage} />
        </Stack.Navigator>
      </GigRequestProvider>
    </GigSlotProvider>
  );
};
