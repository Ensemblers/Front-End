import { StyleSheet, Text, View, TextInput } from "react-native";
import React from "react";

export const TextHeader = ({ WriteText }) => {
  return (
    <>
      <Text style={styles.textHeader}>{WriteText}</Text>
    </>
  );
};

export const TextSection = ({ WriteText }) => {
  return (
    <>
      <Text style={styles.textSection}>{WriteText}</Text>
    </>
  );
};

export const TextBody = ({ WriteText }) => {
  return (
    <>
      <Text style={styles.textBody}>{WriteText}</Text>
    </>
  );
};

export const InputText = ({ WriteText }) => {
  return (
    <>
      <Text style={styles.inputText}>{WriteText}</Text>
    </>
  );
};
export const TextSub = ({ WriteText }) => {
  return (
    <>
      <Text style={styles.textSub}>{WriteText}</Text>
    </>
  );
};

export default Text;

const styles = StyleSheet.create({
  inputText: {
    fontSize: 12,
    color: "grey",
    paddingVertical: 2,
  },
  textHeader: {
    fontSize: 30,
    fontWeight: "bold",
    textAlign: "center",
    marginTop: 20,
    fontFamily: "",
  },
  textSection: {
    fontSize: 20,
    fontWeight: "700",
    margin: 10,

    // textAlign: 'left',
  },
  textBody: {
    fontSize: 13,
    fontWeight: 10,
    // textAlign: "center",
  },
  textSub: {
    fontSize: 10,
    fontWeight: 10,
  },
});
