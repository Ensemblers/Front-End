import React, { useContext, useState, useCallback } from "react";
import { useFocusEffect } from "@react-navigation/native";
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  Button,
  TouchableOpacity,
} from "react-native";
import { Feather } from "@expo/vector-icons";
import { ListItem } from "@rneui/themed";
import { Context as ArtistContext } from "../../context/ArtistContext";
import { ScrollView } from "react-native-gesture-handler";

const ShowAllArtistsScreen = ({ navigation }) => {
  const {
    state: artist,
    getAllArtists,
    deleteArtist,
    getArtist,
  } = useContext(ArtistContext);

  useFocusEffect(
    useCallback(() => {
      async function unsubscribe() {
        const allArtists = await getAllArtists();
      }
      unsubscribe();
    }, [])
  );

  return (
    <View>
      <View style={styles.headerRow}>
        <Text style={styles.headerTitle}>ARTISTS</Text>
      </View>
      <View>
        <ScrollView>
          {artist.map((l, i) => (
            <ListItem key={i} bottomDivider style={styles.listItem}>
              {/* <Avatar source={{ uri: "" }} /> */}
              <ListItem.Content>
                <TouchableOpacity
                  onPress={() => {
                    const artist_id = l.artist_id;

                    getArtist(artist_id);
                    navigation.navigate("Artist Page");
                  }}
                >
                  <ListItem.Title style={styles.listTitle}>
                    {l.artist_name}
                  </ListItem.Title>
                  <ListItem.Subtitle style={styles.listSubtitle}>
                    {l.artist_genre}
                  </ListItem.Subtitle>
                </TouchableOpacity>
              </ListItem.Content>
            </ListItem>
          ))}
        </ScrollView>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  headerRow: {
    alignItems: "center",
    justifyContent: "center",

    height: 80,
  },
  headerTitle: {
    fontSize: 30,
    letterSpacing: 5,
    fontWeight: "bold",
  },
  listItem: {
    paddingVertical: 5,
    marginHorizontal: 20,
    // borderColor: "red",
    // borderWidth: 5,
  },
  listTitle: {
    fontSize: 20,
    fontWeight: "bold",
  },
  listSubtitle: {},
  row: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingVertical: 20,
    paddingHorizontal: 10,
    borderTopWidth: 1,
    borderBottomWidth: 1,
    borderColor: "gray",
  },
  title: {
    fontSize: 18,
  },
  icon: {
    fontSize: 24,
  },
});

export default ShowAllArtistsScreen;
