import { StyleSheet, Text, View, TextInput } from "react-native";
import React from "react";
import { TextBody, InputText } from "../components/Text";

export const InputTemplate = ({
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
  Value,
  InputStyle,
  OnChangeText,
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
        onChangeText={OnChangeText}
        //onBlur is a function
        //onFocus=({nativeEvent: LayoutEvent}) => void
        //onSelectionChange=({nativeEvent: {selection: {start, end} }}) => void
        placeholder={Placeholder}
        placeholderTextColor={PlaceholderTextColor}
        readOnly={ReadOnly}
        //readOnly - If true, text is not editable. The default value is false.
        //returnKeyType=('done', 'go', 'next', 'search', 'send', 'none', 'previous', 'default', 'emergency-call', 'google', 'join', 'route', 'yahoo')
        secureTextEntry={SecureTextEntry}
        value={Value}
        style={InputStyle}
        //secureTextEntry - For passwords
        //textAlign
        //passwordRules (iOS)
        //isFocused() -Returns true if the input is currently focused; false otherwise.
      />
    </>
  );
};

const styles = StyleSheet.create({});
