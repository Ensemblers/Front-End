import "react-native-gesture-handler";
import { createStackNavigator } from "@react-navigation/stack";
import React from "react";

//SCREENS
import ShowAllArtistsScreen from "../Screens/BottomTab/Artists";
import ArtistPage from "../Screens/ArtistScreens/ArtistPage";

export default ArtistsNavigator = () => {
  const Stack = createStackNavigator();
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      <Stack.Screen name="All Artists" component={ShowAllArtistsScreen} />
      <Stack.Screen name="Artist Page" component={ArtistPage} />
    </Stack.Navigator>
  );
};
