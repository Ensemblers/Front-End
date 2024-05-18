import { StyleSheet, Text, View } from "react-native";
import React, { useState, useContext } from "react";
import CreatePage from "../../components/CreatePage";
import { Context as GigSlotContext } from "../../context/GigSlotContext";
import { Context as AuthContext } from "../../context/AuthContext";

const CreateGigSlot = ({ navigation }) => {
  const { addGigSlot } = useContext(GigSlotContext);
  const { state: user } = useContext(AuthContext);
  const [date, setDate] = useState();
  const [name, setName] = useState();
  const { user_id } = user;

  return (
    <View>
      <CreatePage
        TitleText="Create Gig Slot"
        FirstCategory="Date"
        SecondCategory="Title"
        value={date}
        setValue={setDate}
        value2={name}
        setValue2={setName}
        CreateButton="Create Gig Slot"
        onPress={() => {
          addGigSlot({
            user_id,
            date,
            name,
          });
          navigation.navigate("Gig Slot");
        }}
      />
    </View>
  );
};

export default CreateGigSlot;

const styles = StyleSheet.create({});
