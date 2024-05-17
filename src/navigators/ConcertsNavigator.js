import React from "react";
import "react-native-gesture-handler";
import { createStackNavigator } from "@react-navigation/stack";

//SCREENS
import AllConcertsPage from "../Screens/ConcertScreens/AllConcertsPage";
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
      <Stack.Screen name="All Concerts" component={AllConcertsPage} />
      <Stack.Screen name="Concert Page" component={ConcertPage} />
      <Stack.Screen name="Edit Concert Page" component={EditConcertPage} />
    </Stack.Navigator>
  );
};
