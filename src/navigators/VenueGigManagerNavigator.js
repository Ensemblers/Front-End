import React from "react";
import "react-native-gesture-handler";
import { createStackNavigator } from "@react-navigation/stack";
import { Provider as GigRequestProvider } from "../context/GigRequestContext";
import { Provider as GigSlotProvider } from "../context/GigSlotContext";

//SCREENS
import VenueGigManager from "../Screens/VenueGigManagerScreens/VenueGigManager";
import CreateGigSlot from "../Screens/VenueGigManagerScreens/CreateGigSlot";
import GigSlot from "../Screens/VenueGigManagerScreens/GigSlot";
import ConcertPage from "../Screens/ConcertScreens/ConcertPage";

export default VenueGigManagerNavigator = () => {
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
            name="Venue Gig Manager Home"
            component={VenueGigManager}
          />
          <Stack.Screen name="Create Gig Slot" component={CreateGigSlot} />
          <Stack.Screen name="Gig Slot" component={GigSlot} />

          <Stack.Screen name="Concert Page" component={ConcertPage} />
        </Stack.Navigator>
      </GigRequestProvider>
    </GigSlotProvider>
  );
};
