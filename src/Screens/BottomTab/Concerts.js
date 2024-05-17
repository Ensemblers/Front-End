import React, { useContext } from "react";
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  Button,
  TouchableOpacity,
} from "react-native";
import { Context as AuthContext } from "../../context/AuthContext";

const ShowAllConcertsScreen = () => {
  return (
    <View style={styles.screen}>
      <Text>Show All Concerts Screen</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  screen: {
    marginTop: 50,
  },
});

export default ShowAllConcertsScreen;
