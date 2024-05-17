import "react-native-gesture-handler";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { createMaterialBottomTabNavigator } from "@react-navigation/material-bottom-tabs";
import React, { useContext, useState, useEffect } from "react";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import Logo from "./assets/Logo.png";

//MAIN TAB SCREENS
import ShowAllArtistsScreen from "./src/Screens/BottomTab/Artists";
import ShowAllVenuesScreen from "./src/Screens/BottomTab/Venues";
import ShowAllConcertsScreen from "./src/Screens/BottomTab/Concerts";
import ShowMyStuffScreen from "./src/Screens/BottomTab/MyStuff";

//MY STUFF SCREENS
//----ARTIST SCREENS
import ArtistGigManager from "./src/Screens/ArtistScreens/ArtistGigManager";
import ArtistPage from "./src/Screens/ArtistScreens/ArtistPage";
import CreateArtist from "./src/Screens/ArtistScreens/CreateArtist";
import ArtistPageEditScreen from "./src/Screens/ArtistScreens/ArtistPageEditScreen";

//----VENUE SCRENS
import VenueGigManager from "./src/Screens/VenueScreens/VenueGigManager";
import VenuePage from "./src/Screens/VenueScreens/VenuePage";
import CreateVenue from "./src/Screens/VenueScreens/CreateVenue";
import VenuePageEditScreen from "./src/Screens/VenueScreens/VenuePageEditScreen";

//SIGN IN/UP SCREENS
import SignInScreen from "./src/Screens/AuthStack/SignIn";
import SignUpScreen from "./src/Screens/AuthStack/SignUp";
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  Image,
  Button,
  TouchableOpacity,
} from "react-native";

import {
  Provider as AuthProvider,
  Context as AuthContext,
} from "./src/context/AuthContext";
import { Provider as ArtistProvider } from "./src/context/ArtistContext";
import { Provider as VenueProvider } from "./src/context/VenueContext";
import ShowMyStuff from "./src/Screens/BottomTab/MyStuff";

const Tab = createMaterialBottomTabNavigator();
const Stack = createStackNavigator();

const MainTabNavigator = () => {
  return (
    <VenueProvider>
      <ArtistProvider>
        <Tab.Navigator
          initialRouteName="My Stuff"
          // initialRouteName="Artists Tab"
          // initialRouteName="Venues Tab"
          // initialRouteName="Concerts Tab"
          screenOptions={({ route }) => ({
            tabBarIcon: ({ focused, color, size }) => {
              let iconName;

              if (route.name === "My Stuff") {
                iconName = focused
                  ? "account-circle"
                  : "account-circle-outline";
              } else if (route.name === "Artists") {
                iconName = focused ? "account-music" : "account-music-outline";
              } else if (route.name === "Venues") {
                iconName = focused ? "curtains" : "curtains";
              } else if (route.name === "Concerts") {
                iconName = focused
                  ? "ticket-confirmation"
                  : "ticket-confirmation-outline";
              }

              // You can return any component that you like here!
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
          <Tab.Screen name="Artists" component={ArtistsStackNavigator} />
          <Tab.Screen name="Venues" component={VenuesStackNavigator} />
          <Tab.Screen name="Concerts" component={ShowAllConcertsScreen} />
          <Tab.Screen name="My Stuff" component={MyStuffStackNavigator} />
        </Tab.Navigator>
      </ArtistProvider>
    </VenueProvider>
  );
};

const MyStuffStackNavigator = () => {
  return (
    <Stack.Navigator
      // initialRouteName={ShowMyStuff}
      screenOptions={{
        headerShown: false,
      }}
    >
      <Stack.Screen name="My Stuff" component={ShowMyStuff} />
      <Stack.Screen name="Create Artist" component={CreateArtist} />
      <Stack.Screen name="Artist Page" component={ArtistPage} />
      <Stack.Screen name="Artist Gig Manager" component={ArtistGigManager} />
      <Stack.Screen name="Edit Artist Page" component={ArtistPageEditScreen} />
      <Stack.Screen name="Create Venue" component={CreateVenue} />
      <Stack.Screen name="Venue Page" component={VenuePage} />
      <Stack.Screen name="Venue Gig Manager" component={VenueGigManager} />
      <Stack.Screen name="Edit Venue Page" component={VenuePageEditScreen} />
    </Stack.Navigator>
  );
};

const ArtistsStackNavigator = () => {
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

const VenuesStackNavigator = () => {
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

const AuthStackNavigator = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      <Stack.Screen name="SignIn" component={SignInScreen} />
      <Stack.Screen name="SignUp" component={SignUpScreen} />
    </Stack.Navigator>
  );
};

const App = () => {
  const { state, signout } = useContext(AuthContext);

  const token = Object.values(state)[0];
  const email = String(state.email);
  const emailArray = email.split("@");
  const username = emailArray[0];

  // const logoImage = Image.resolveAssetSource(Logo).uri;

  return (
    <NavigationContainer>
      <Stack.Navigator
      // screenOptions={{
      //   headerShown: false,
      // }}
      >
        {token === null ? (
          // No token found, user isn't signed in
          <Stack.Screen name="AuthStack" component={AuthStackNavigator} />
        ) : (
          <Stack.Screen
            name="MainTabs"
            component={MainTabNavigator}
            options={{
              // headerTitle: username,
              headerTitle: "ENSEMBLERS",
              headerTitleStyle: {
                // fontWeight: "bold",
                color: "white",
                fontSize: 23,
                letterSpacing: 4,
              },
              headerStyle: {
                backgroundColor: "black",
              },
              headerRight: () => (
                <TouchableOpacity
                  onPress={() => {
                    signout();
                  }}
                >
                  <Text
                    style={{ color: "white", marginRight: 15, fontSize: 15 }}
                  >
                    {username}
                  </Text>
                </TouchableOpacity>
              ),
              headerLeft: () => (
                <TouchableOpacity>
                  <Image
                    style={{
                      width: 40,
                      height: 40,
                      marginLeft: 15,
                      marginBottom: 5,
                    }}
                    source={Logo}
                  />
                </TouchableOpacity>
              ),
            }}
          />
        )}
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default () => {
  return (
    <AuthProvider>
      <App />
    </AuthProvider>
  );
};
