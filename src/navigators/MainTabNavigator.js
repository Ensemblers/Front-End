import "react-native-gesture-handler";
import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
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
  const Tab = createBottomTabNavigator();

  return (
    <VenueProvider>
      <ArtistProvider>
        <ConcertProvider>
          <Tab.Navigator
            initialRouteName="My Stuff"
            screenOptions={({ route }) => ({
              tabBarHideOnKeyboard: true,
              tabBarIcon: ({ color, size }) => {
                let iconName;
                switch (route.name) {
                  case "My Stuff":
                    iconName = "account-circle";
                    return (
                      <MaterialCommunityIcons
                        name={iconName}
                        size={30}
                        color={color}
                      />
                    );
                  case "Venues":
                    iconName = "curtains";
                    return (
                      <MaterialCommunityIcons
                        name={iconName}
                        size={30}
                        color={color}
                      />
                    );
                  case "Artists":
                    iconName = "account-music";
                    return (
                      <MaterialCommunityIcons
                        name={iconName}
                        size={30}
                        color={color}
                      />
                    );
                  case "Concerts":
                    iconName = "ticket-confirmation";
                    return (
                      <MaterialCommunityIcons
                        name={iconName}
                        size={30}
                        color={color}
                      />
                    );
                }
              },
              headerShown: false,
              tabBarShowLabel: false,
              tabBarStyle: { backgroundColor: "black" },
              tabBarActiveTintColor: "white",
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
