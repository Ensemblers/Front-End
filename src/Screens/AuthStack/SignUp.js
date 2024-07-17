import React, { useContext, useState } from "react";
import { View, StyleSheet, TouchableOpacity, Text, Button } from "react-native";
import { Context as AuthContext } from "../../context/AuthContext";
import Spacer from "../../components/Spacer";
import TextLink from "react-native-text-link";
import { InputInfo } from "../../components/Input";
import { InputTemplate } from "../../components/InputTemplate";
import { DefaultBackground } from "../../components/PageFormats";
import { TextHeader } from "../../components/Text";
import { DesignButton } from "../../components/Buttons";
import { EnsemblersLogo } from "../../components/IconsAndLogos";

const SignUpScreen = ({ navigation }) => {
  const { state, signup } = useContext(AuthContext);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  return (
    <View style={styles.container}>
      <DefaultBackground />
      <View style={styles.card}>
        <View style={styles.header}>
          <EnsemblersLogo />

          <TextHeader WriteText={`Sign Up`} />
        </View>
        <View style={styles.cardBody}>
          <View>
            <InputInfo
              Content="Email:"
              InputHere={
                <InputTemplate
                  Value={email}
                  OnChangeText={(email) => setEmail(email)}
                />
              }
            />
            <InputInfo
              Content="Password:"
              InputHere={
                <InputTemplate
                  Value={password}
                  OnChangeText={(password) => setPassword(password)}
                  SecureTextEntry
                />
              }
            />
            <InputInfo
              Content="Confirm Password:"
              InputHere={
                <InputTemplate
                  Value={confirmPassword}
                  OnChangeText={(confirmPassword) =>
                    setConfirmPassword(confirmPassword)
                  }
                  SecureTextEntry
                />
              }
            />
          </View>
          <Spacer />
          <View style={styles.termsText}>
            <TextLink
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
              By checking this box you agree to our Terms & Conditions and
              Privacy Policy.
            </TextLink>
          </View>
          <Spacer />

          <View style={styles.buttonView}>
            <DesignButton
              ButtonText="Sign Up"
              OnPress={
                password === confirmPassword
                  ? () => {
                      // console.log(email, password);
                      signup({ email, password });
                      navigation.navigate("SignIn", {email});
                    }
                  : console.log("Passwords don't match")
              }
            />
            <Spacer />
          </View>
          <Spacer />

          <TouchableOpacity onPress={() => navigation.navigate("SignIn")}>
            <Text style={styles.link}>
              Already have an account? Sign in here.
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    height: "100%",
    alignItems: "center",
  },

  card: {
    paddingTop: 30,
    width: "100%",
    justifyContent: "center",

    flex: 1,
  },
  header: {
    flex: 7,
    alignItems: "center",
    justifyContent: "center",
  },
  cardBody: {
    width: "85%",
    alignSelf: "center",
    flex: 12,
  },
  termsText: {
    alignItems: "center",
  },
  buttonView: {
    flexDirection: "row",
    alignItems: "space-around",
    justifyContent: "center",
  },
  link: {
    textAlign: "center",
    color: "blue",
  },
});

export default SignUpScreen;
