import "react-native-gesture-handler";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import React, { useContext } from "react";
import { Text, Image, TouchableOpacity } from "react-native";
import Logo from "../../assets/Logo.png";
import { Context as AuthContext } from "../context/AuthContext";

//NAVIGATORS
import AuthNavigator from "./AuthNavigator";
import MainTabNavigator from "./MainTabNavigator";

export default App = () => {
  const Stack = createStackNavigator();
  const { state: user, signout } = useContext(AuthContext);

  const { accessToken } = user;
  const email = `${user.email}`;
  const emailArray = email.split("@");
  const username = emailArray[0];

  return (
    <NavigationContainer>
      <Stack.Navigator>
        {!accessToken ? (
          // No token found, user isn't signed in
          <Stack.Screen
            options={{ headerShown: false }}
            name="AuthStack"
            component={AuthNavigator}
          />
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
