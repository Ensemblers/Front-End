import React, { useContext } from "react";
import "react-native-gesture-handler";
import { Provider as AuthProvider } from "./src/context/AuthContext";
import App from "./src/navigators/LoginNavigator";

export default () => {
  return (
    <AuthProvider>
      <App />
    </AuthProvider>
  );
};
