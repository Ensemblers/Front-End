import React from "react";
import "react-native-gesture-handler";
import { createStackNavigator } from "@react-navigation/stack";

//SCREENS
import ShowAllConcertsScreen from "../Screens/BottomTab/Concerts";

import ConcertPage from "../Screens/ConcertScreens/ConcertPage";
import EditConcertPage from "../Screens/ConcertScreens/EditConcertPage";

export default ConcertsNavigator = () => {
  const Stack = createStackNavigator();
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      <Stack.Screen name="All Concerts" component={ShowAllConcertsScreen} />

      <Stack.Screen name="Concert Page" component={ConcertPage} />
      <Stack.Screen name="Edit Concert Page" component={EditConcertPage} />
    </Stack.Navigator>
  );
};
