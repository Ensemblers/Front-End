import React, { useContext } from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import AuthForm from "../../components/AuthForm";
import { Context as AuthContext } from "../../context/AuthContext";
import Spacer from "../../components/Spacer";

const SignInScreen = ({ navigation }) => {
  const { state, signin } = useContext(AuthContext);

  return (
    <View style={styles.container}>
      <AuthForm
        headerText="Sign In to Ensemblers"
        errorMessage={state.errorMessage}
        onSubmit={signin}
        submitButtonText="Sign In"
      />

      <TouchableOpacity onPress={() => navigation.navigate("SignUp")}>
        <Spacer>
          <Text style={styles.link}>Sign Up here.</Text>
        </Spacer>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    marginBottom: 250,
  },
  link: {
    textAlign: "center",
    color: "blue",
  },
});

export default SignInScreen;
