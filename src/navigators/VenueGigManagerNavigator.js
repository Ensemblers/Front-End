import React from "react";
import "react-native-gesture-handler";
import { createStackNavigator } from "@react-navigation/stack";
import { Provider as GigRequestProvider } from "../context/GigRequestContext";
import { Provider as GigSlotProvider } from "../context/GigSlotContext";

//SCREENS
import VenueGigManager from "../Screens/VenueGigManagerScreens/VenueGigManager";
import GigSlot from "../Screens/VenueGigManagerScreens/GigSlot";
import EditGigSlot from "../Screens/VenueGigManagerScreens/EditGigSlot";
import VenueGigManagerSettings from "../Screens/VenueGigManagerScreens/VenueGigManagerSettings";

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
          <Stack.Screen name="Gig Slot" component={GigSlot} />
          <Stack.Screen name="Edit Gig Slot" component={EditGigSlot} />
          <Stack.Screen
            name="Venue Gig Manager Settings"
            component={VenueGigManagerSettings}
          />
        </Stack.Navigator>
      </GigRequestProvider>
    </GigSlotProvider>
  );
};
