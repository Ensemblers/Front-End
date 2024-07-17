import { StyleSheet, View, TouchableOpacity, Text } from "react-native";
import React, { useContext, useState } from "react";
import { Context as AuthContext } from "../../context/AuthContext";

//COMPONENTS
import { DefaultBackground } from "../../components/PageFormats";
import { DesignButton } from "../../components/Buttons";
import { TextHeader } from "../../components/Text";
import { InputInfo } from "../../components/Input";
import { InputTemplate } from "../../components/InputTemplate";
import Spacer from "../../components/Spacer";
import { EnsemblersLogo } from "../../components/IconsAndLogos";

const SignInScreen = ({ navigation, route }) => {
  const { state: user, signin } = useContext(AuthContext);

  const [email, setEmail] = useState();
  const [password, setPassword] = useState("");

  return (
    <View style={styles.container}>
      <DefaultBackground />

      <View style={styles.card}>
        <View style={styles.header}>
          <EnsemblersLogo />

          <TextHeader WriteText={`Sign In`} />
        </View>
        <View style={styles.cardBody}>
          <Spacer>
            <InputInfo
              Content="Email:"
              InputHere={
                <InputTemplate
                  Value={email}
                  OnChangeText={(email) => setEmail(email)}
                />
              }
            />
          </Spacer>
          <Spacer>
            <InputInfo
              Content="Password:"
              InputHere={
                <InputTemplate
                  Value={password}
                  SecureTextEntry
                  OnChangeText={(password) => setPassword(password)}
                />
              }
            />
          </Spacer>
          <Spacer />

          <View style={styles.buttonView}>
            <DesignButton
              ButtonText="Sign In"
              OnPress={() => {
                signin({ email, password });
                navigation.navigate("MainTabs");
              }}
            />
          </View>
          <Spacer />

          <TouchableOpacity onPress={() => navigation.navigate("SignUp")}>
            <Text style={styles.link}>
              Don't have an account yet? Sign Up here.
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};
export default SignInScreen;

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
  links: {
    flexDirection: "row",
    justifyContent: "center",
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
