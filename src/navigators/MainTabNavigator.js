import "react-native-gesture-handler";
import React from "react";
import { createMaterialBottomTabNavigator } from "@react-navigation/material-bottom-tabs";
import { MaterialCommunityIcons } from "@expo/vector-icons";

//PROVIDERS
import { Provider as ArtistProvider } from "../context/ArtistContext";
import { Provider as VenueProvider } from "../context/VenueContext";
import { Provider as ConcertProvider } from "../context/ConcertContext";

//NAVIGATORS
import ConcertsNavigator from "./ConcertsNavigator";
import ArtistsNavigator from "./ArtistsNavigator";
import VenuesNavigator from "./VenuesNavigator";
import MyStuffNavigator from "./MyStuffNavigator";

export default MainTabNavigator = () => {
  const Tab = createMaterialBottomTabNavigator();

  return (
    <VenueProvider>
      <ArtistProvider>
        <ConcertProvider>
          <Tab.Navigator
            initialRouteName="My Stuff"
            screenOptions={({ route }) => ({
              tabBarIcon: ({ focused, color, size }) => {
                let iconName;

                if (route.name === "My Stuff") {
                  iconName = focused
                    ? "account-circle"
                    : "account-circle-outline";
                } else if (route.name === "Artists") {
                  iconName = focused
                    ? "account-music"
                    : "account-music-outline";
                } else if (route.name === "Venues") {
                  iconName = focused ? "curtains" : "curtains";
                } else if (route.name === "Concerts") {
                  iconName = focused
                    ? "ticket-confirmation"
                    : "ticket-confirmation-outline";
                }
                return (
                  <MaterialCommunityIcons
                    name={iconName}
                    size={30}
                    color="black"
                  />
                );
              },
              tabBarActiveTintColor: "grey",
              tabBarInactiveTintColor: "grey",
            })}
          >
            <Tab.Screen name="Artists" component={ArtistsNavigator} />
            <Tab.Screen name="Venues" component={VenuesNavigator} />
            <Tab.Screen name="Concerts" component={ConcertsNavigator} />
            <Tab.Screen name="My Stuff" component={MyStuffNavigator} />
          </Tab.Navigator>
        </ConcertProvider>
      </ArtistProvider>
    </VenueProvider>
  );
};
