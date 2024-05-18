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

import Title from "./Title";

const CreatePage = ({
  TitleText,
  FirstCategory,
  SecondCategory,
  value,
  setValue,
  value2,
  setValue2,
  CreateButton,
  onPress,
}) => {
  return (
    <View>
      <Title titleText={TitleText} />
      <Text style={styles.label}>{FirstCategory}</Text>
      <TextInput style={styles.input} value={value} onChangeText={setValue} />

      <Text style={styles.label}>{SecondCategory}</Text>
      <TextInput style={styles.input} value={value2} onChangeText={setValue2} />
      <Spacer>
        <Button title={CreateButton} onPress={onPress} />
      </Spacer>
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
    margin: 5,
  },
  label: {
    fontSize: 20,
    marginBottom: 5,
    marginLeft: 5,
  },
  backIcon: {
    alignSelf: "flex-start",
    color: "grey",
    padding: 10,
  },
  headerTitle: {
    fontSize: 30,
    letterSpacing: 5,
    fontWeight: "bold",
  },
});
