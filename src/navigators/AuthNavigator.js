import React from "react";
import "react-native-gesture-handler";
import { createStackNavigator } from "@react-navigation/stack";

//SCREENS
import SignInScreen from "../Screens/AuthStack/SignIn";
import SignUpScreen from "../Screens/AuthStack/SignUp";

export default AuthNavigator = () => {
  const Stack = createStackNavigator();
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
