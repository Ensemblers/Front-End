import React, { useContext, useState } from "react";
import { useIsFocused, useFocusEffect } from "@react-navigation/native";
import { Button, Image } from "@rneui/themed";
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  TouchableOpacity,
} from "react-native";
import { Feather } from "@expo/vector-icons";
import { AntDesign } from "@expo/vector-icons";
import { StackActions } from "@react-navigation/native";
import { Context as VenueContext } from "../../context/VenueContext";
import { Context as AuthContext } from "../../context/AuthContext";

const VenuePage = ({ navigation }) => {
  const [data, setData] = useState(null);
  const { state: state1, getVenue, deleteVenue } = useContext(VenueContext);
  const { state: state2 } = useContext(AuthContext);
  // const user_id = state2.token.data.user_id;
  venue = state1[0];
  const venue_id = venue.user_id;
  const user_id = state2.user_id;
  const popAction = StackActions.pop(1);

  return (
    <View>
      <TouchableOpacity
        onPress={() => navigation.dispatch(popAction)}
        style={styles.backIcon}
      >
        <AntDesign name="back" size={24} color="black" />
        <Text>Back</Text>
      </TouchableOpacity>
      <View style={styles.container}>
        {venue_id === user_id ? (
          <TouchableOpacity
            onPress={() => navigation.navigate("Edit Venue Page")}
            style={styles.editIcon}
          >
            <AntDesign name="edit" size={24} color="grey" />
          </TouchableOpacity>
        ) : null}
        <Text style={{ marginVertical: 20, fontSize: 30 }}>
          {venue.venue_name}
        </Text>
        <Text style={{ fontSize: 20 }}>{venue.venue_location}</Text>
        {venue_id === user_id ? (
          <Button
            title="Manage Gigs"
            buttonStyle={{
              backgroundColor: "rgba(78, 116, 289, 1)",
              borderRadius: 3,
            }}
            containerStyle={{
              width: 200,
              marginHorizontal: 50,
              marginVertical: 10,
              borderRadius: 30,
            }}
            onPress={() => {
              navigation.navigate("Venue Gig Manager");
            }}
          />
        ) : null}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  backIcon: {
    alignSelf: "flex-start",
    color: "grey",
    padding: 10,
  },
  container: {
    padding: 30,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  editIcon: {
    alignSelf: "flex-end",
    color: "grey",
  },
  title: {
    fontSize: 18,
  },
  icon: {
    fontSize: 24,
  },
});

export default VenuePage;
