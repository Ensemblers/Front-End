import { StyleSheet, Text, View, TextInput, Button } from "react-native";
import React, { useState } from "react";

import Spacer from "./components/Spacer";
import BackButton from "./components/BackButton";
import Title from "./components/Title";
import { ListItem } from "@rneui/themed";

const EditPage = ({
  backOnPress,
  navigateToText,
  TitleText,
  EditButtonText,
  EditOnPress,
  DeleteButtonText,
  DeleteOnPress,
}) => {
  const info = [
    {
      InputTitle: "Test 1",
    },
    {
      InputTitle: "Test 2",
    },
    {
      InputTitle: "Test 3",
    },
    {
      InputTitle: "Test 4",
    },
    {
      InputTitle: "Test 5",
    },
  ];

  const [input, setInput] = useState();

  return (
    <View>
      <BackButton onPress={backOnPress} navigateToText={navigateToText} />
      <Title titleText={TitleText} />
      <Spacer />
      <View>
        {info.map((l, i) => (
          <ListItem key={i} bottomDivider style={styles.listItem}>
            <ListItem.Content>
              <Text style={styles.label}>{l.InputTitle}</Text>
              <TextInput
                style={styles.textInput}
                value={l.input}
                onChangeText={(input) => setInput(input)}
              />
            </ListItem.Content>
          </ListItem>
        ))}
      </View>

      <Spacer />
      <Button title={EditButtonText} onPress={EditOnPress} />

      <Button title={DeleteButtonText} onPress={{ DeleteOnPress }} />
    </View>
  );
};

export default EditPage;

const styles = StyleSheet.create({
  inputRow: {
    flexDirection: "row",
    marginLeft: 20,
  },
  textInput: {
    fontSize: 18,
    borderWidth: 1,
    borderColor: "black",
    marginLeft: 15,
    width: 200,
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
  headerTitle: {
    fontSize: 30,
    letterSpacing: 5,
    fontWeight: "bold",
    textAlign: "center",
  },
});
