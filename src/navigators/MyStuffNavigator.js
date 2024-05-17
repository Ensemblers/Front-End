import React from "react";
import "react-native-gesture-handler";
import { createStackNavigator } from "@react-navigation/stack";

//SCREENS
import MyStuff from "../Screens/BottomTab/MyStuff";
import ArtistPage from "../Screens/ArtistScreens/ArtistPage";
import CreateArtist from "../Screens/ArtistScreens/CreateArtist";
import ArtistPageEditScreen from "../Screens/ArtistScreens/ArtistPageEditScreen";
import VenuePage from "../Screens/VenueScreens/VenuePage";
import CreateVenue from "../Screens/VenueScreens/CreateVenue";
import VenuePageEditScreen from "../Screens/VenueScreens/VenuePageEditScreen";

//NAVIGATORS
import ArtistGigManagerNavigator from "./ArtistGigManagerNavigator";
import VenueGigManagerNavigator from "./VenueGigManagerNavigator";

export default MyStuffNavigator = () => {
  const Stack = createStackNavigator();

  return (
    <Stack.Navigator
      initialRouteName={MyStuff}
      screenOptions={{
        headerShown: false,
      }}
    >
      <Stack.Screen name="My Stuff Page" component={MyStuff} />
      <Stack.Screen name="Create Artist" component={CreateArtist} />
      <Stack.Screen name="Create Venue" component={CreateVenue} />
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
