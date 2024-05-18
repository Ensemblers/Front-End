import React, { useContext, useState } from "react";
import { View, StyleSheet, TouchableOpacity } from "react-native";
import { Context as AuthContext } from "../../context/AuthContext";
import Spacer from "../../components/Spacer";
import { Text, Button, Input } from "react-native-elements";
import TextLink from "react-native-text-link";

const SignUpScreen = ({ navigation }) => {
  const { state, signup } = useContext(AuthContext);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  return (
    <View style={styles.container}>
      <Spacer>
        <Text h3>Sign Up for Ensemblers</Text>
      </Spacer>
      <Spacer></Spacer>
      <View>
        <Input
          label="Email"
          value={email}
          onChangeText={setEmail}
          autoCapitalize="none"
          autoCorrect={false}
          textContentType="emailAddress"
        />

        <Input
          secureTextEntry
          label="Password"
          value={password}
          onChangeText={setPassword}
          autoCapitalize="none"
          autoCorrect={false}
        />

        <Input
          secureTextEntry
          label="Confirm Password"
          value={password}
          onChangeText={setPassword}
          autoCapitalize="none"
          autoCorrect={false}
        />
      </View>

      <View style={styles.terms}>
        <TextLink
          style={styles.termsText}
          links={[
            {
              text: "Terms & Conditions",
              onPress: () => console.log("link to terms"),
            },
            {
              text: "Privacy Policy",
              onPress: () => console.log("link to privacy"),
            },
          ]}
        >
          By checking this box you agree to our Terms & Conditions and Privacy
          Policy.
        </TextLink>
      </View>
      <View style={styles.button}>
        <Button
          title="Sign Up"
          onPress={() => {
            signup({ email, password });
            navigation.navigate("SignIn");
          }}
        />
        <Spacer></Spacer>
        <TouchableOpacity onPress={() => navigation.navigate("SignIn")}>
          <Text style={styles.link}>
            Already have an account? Sign in here.
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

SignUpScreen.navigationOptions = () => {
  return {
    header: null,
  };
};

const styles = StyleSheet.create({
  button: {
    // borderWidth: 5,
    // borderColor: "red",
    marginTop: 50,
    marginHorizontal: 75,
  },
  termsText: {
    // borderColor: "red",
  },
  terms: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginHorizontal: 40,
    // borderWidth: 5,
    // borderColor: "red",
  },
  termsCheckbox: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginHorizontal: 30,
  },
  container: {
    flex: 1,
    justifyContent: "center",
    marginBottom: 250,
  },
  link: {
    color: "blue",
  },
  errorMessage: {
    fontSize: 16,
    color: "red",
    marginLeft: 15,
    marginTop: 15,
  },
});

export default SignUpScreen;
