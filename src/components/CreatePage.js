import {
  StyleSheet,
  Text,
  View,
  TextInput,
  Button,
  TouchableOpacity,
} from "react-native";
import React, { useState } from "react";
import Spacer from "./Spacer";
import BackButton from "./BackButton";
import Title from "./Title";

const CreatePage = ({
  backOnPress,
  navigateToText,
  TitleText,
  FirstCategory,
  SecondCategory,
  value,
  setValue,
  value2,
  setValue2,
  CreateButton,
  createOnPress,
}) => {
  return (
    <View>
      <BackButton onPress={backOnPress} navigateToText={navigateToText} />
      <Spacer />

      <Title titleText={TitleText} />
      <Spacer />
      <Spacer />

      <Text style={styles.label}>{FirstCategory}</Text>
      <TextInput style={styles.input} value={value} onChangeText={setValue} />

      <Text style={styles.label}>{SecondCategory}</Text>
      <TextInput style={styles.input} value={value2} onChangeText={setValue2} />
      <Spacer />
      <Spacer />

      <Button title={CreateButton} onPress={createOnPress} />
    </View>
  );
};

export default CreatePage;

const styles = StyleSheet.create({
  input: {
    fontSize: 18,
    borderWidth: 1,
    borderColor: "black",
    marginBottom: 15,
    padding: 5,
    marginHorizontal: 100,
  },
  label: {
    fontSize: 20,
    marginBottom: 5,
    marginHorizontal: 100,
  },
  backIcon: {
    alignSelf: "flex-start",
    color: "grey",
    padding: 10,
  },
});
