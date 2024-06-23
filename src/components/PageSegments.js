import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  TextInput,
  Image,
  ImageBackground,
} from "react-native";
import React from "react";
import DefaultBackground from "../../Images/login-background.jpg";
import { SafeAreaProvider } from "react-native-safe-area-context";

export function HeaderView() {
  return (
    <View style={styles.screen}>
      <Image
        source={DefaultBackground}
        objectFit="center"
        style={styles.backgroundImage}
      />
      <View style={styles.topView}>
        <TouchableOpacity style={styles.topButtons}>
          <Text>Back</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.topButtons}
          onPress={() => navigation.navigate("Edit Concert Page")}
        >
          <Text>Settings</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

export function EditPage() {
  return (
    // <SafeAreaProvider>
    <View style={styles.screen}>
      <Text>Hello</Text>
    </View>
    // </SafeAreaProvider>
  );
}

const styles = StyleSheet.create({
  inputRow: {
    flexDirection: "row",
    marginLeft: 20,
  },
  input: {
    fontSize: 18,
    borderWidth: 1,
    borderColor: "black",
    marginLeft: 15,
    width: 200,
    borderRadius: 10,
  },
  backIcon: {
    alignSelf: "flex-start",
    color: "grey",
    padding: 10,
  },
  label: {
    fontSize: 20,
    marginBottom: 5,
    marginLeft: 5,
  },
  screen: {
    width: "100%",
    height: "100%",
    borderColor: "red",
    borderWidth: 1,
    position: "absolute",
    zIndex: -1,
  },
  backgroundImage: {
    position: "absolute",
    height: "100%",
    width: "100%",
    zIndex: -2,
  },
  // backgroundImage: {
  //   alignSelf: "flex-end",
  //   height: "100%",
  //   position: "absolute",
  //   width: 500,
  //   zIndex: -1,
  // },
  topView: {
    position: "absolute",
    flexDirection: "row",
    // alignItems: "space-between",
    justifyContent: "space-between",
    padding: 10,
    width: "100%",
    // height: "10%",
    // ...StyleSheet.absoluteFillObject,
    zIndex: -1,

    // zIndex: 1,
  },
  topButtons: {
    margin: 20,
    // borderWidth: 1,
    // borderColor: "black",
  },
});

//colors
//#E50FED #E933F0 #FAFEFD #6B00A3 #D14DFF #040301
