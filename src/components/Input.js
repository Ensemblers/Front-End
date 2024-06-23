import { StyleSheet, Text, View, TextInput } from "react-native";
import React from "react";
import { TextBody, InputText } from "../components/Text";

export const InputInfo = ({ Content, InputHere }) => {
  return (
    <>
      <View style={styles.inputInfo}>
        <InputText WriteText={Content} />
        {InputHere}
      </View>
    </>
  );
};

export const InputDescription = ({ Content, InputHere }) => {
  return (
    <>
      <View style={styles.inputDescription}>
        <InputText WriteText={Content} />
        {InputHere}
      </View>
    </>
  );
};

export const InputLinks = ({ Content, InputHere, LinkLogo }) => {
  return (
    <>
      <View style={styles.inputLinkView}>
        <View style={styles.linkLogo}>{LinkLogo}</View>
        <View style={styles.inputLinkInfo}>
          <InputText WriteText={Content} />
          {InputHere}
        </View>
      </View>
    </>
  );
};
const styles = StyleSheet.create({
  inputDescription: {
    height: 100,
    fontSize: 16,
    borderWidth: 0.5,
    borderColor: "grey",
    backgroundColor: "#ebeff5",
    borderRadius: 5,
    margin: 10,
    paddingHorizontal: 5,
    shadowColor: "#ebeff5",
    shadowOffset: { width: 4, height: 4 },
    shadowOpacity: 50,
    shadowRadius: 4,
    marginVertical: 13,
  },
  inputInfo: {
    height: 45,
    fontSize: 16,
    borderWidth: 0.5,
    borderColor: "grey",
    backgroundColor: "#ebeff5",
    borderRadius: 5,
    margin: 10,
    paddingHorizontal: 5,
    shadowColor: "#ebeff5",
    shadowOffset: { width: 4, height: 4 },
    shadowOpacity: 50,
    shadowRadius: 4,
    marginVertical: 13,
  },
  inputLinkInfo: {
    height: 45,
    fontSize: 16,
    borderWidth: 0.5,
    borderColor: "grey",
    backgroundColor: "#ebeff5",
    borderRadius: 5,
    margin: 10,
    paddingHorizontal: 5,
    shadowColor: "#ebeff5",
    shadowOffset: { width: 4, height: 4 },
    shadowOpacity: 50,
    shadowRadius: 4,
    marginVertical: 13,
    // width: "100%",
    flex: 4,
  },
  linkLogo: {
    flex: 1,
  },
  inputLinkView: {
    flexDirection: "row",
  },
});
