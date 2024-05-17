import React from "react";
import "react-native-gesture-handler";
import { createStackNavigator } from "@react-navigation/stack";

//SCREENS
import ShowAllVenuesScreen from "../Screens/BottomTab/Venues";
import VenuePage from "../Screens/VenueScreens/VenuePage";

export default VenuesNavigator = () => {
  const Stack = createStackNavigator();

  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      <Stack.Screen name="All Venues" component={ShowAllVenuesScreen} />
      <Stack.Screen name="Venue Page" component={VenuePage} />
    </Stack.Navigator>
  );
};
