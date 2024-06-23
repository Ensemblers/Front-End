import { StyleSheet, Text, View, TextInput } from "react-native";
import React from "react";

export const Input = ({
  AutoCapitalize,
  AutoComplete,
  AutoCorrect,
  KeyboardType,
  MaxLength,
  MultiLine,
  NumberOfLines,
  OnBlur,
  Placeholder,
  PlaceholderTextColor,
  ReadOnly,
  SecureTextEntry,
}) => {
  return (
    <>
      <TextInput
        autoCapitalize={AutoCapitalize}
        //characters, words, sentences, none
        autoComplete={AutoComplete}
        //country, email, address-line1, name, current-password, new-password, username, url(iOS)
        autoCorrect={AutoCorrect}
        keyboardType={KeyboardType}
        //what type of keyboard to use
        //default, number-pad, decimal-pad, numeric, email-address, phone-pad, url
        maxLength={MaxLength}
        multiline={MultiLine}
        numberOfLines={NumberOfLines}
        onBlur={OnBlur}
        //onBlur is a function
        //onFocus=({nativeEvent: LayoutEvent}) => void
        //onSelectionChange=({nativeEvent: {selection: {start, end} }}) => void
        placeholder={Placeholder}
        placeholderTextColor={PlaceholderTextColor}
        readOnly={ReadOnly}
        //readOnly - If true, text is not editable. The default value is false.
        //returnKeyType=('done', 'go', 'next', 'search', 'send', 'none', 'previous', 'default', 'emergency-call', 'google', 'join', 'route', 'yahoo')
        secureTextEntry={SecureTextEntry}
        //secureTextEntry - For passwords
        //textAlign
        //passwordRules (iOS)
        //isFocused() -Returns true if the input is currently focused; false otherwise.
      />
    </>
  );
};

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
