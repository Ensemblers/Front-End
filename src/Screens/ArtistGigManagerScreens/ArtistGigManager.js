import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import React, { useContext, useState } from "react";
import Title from "../../components/Title";
import Spacer from "../../components/Spacer";
import BackButton from "../../components/BackButton";
import { StackActions } from "@react-navigation/native";
import { Calendar } from "react-native-calendars";
import dateFormat, { masks } from "dateformat";
import { Context as ArtistContext } from "../../context/ArtistContext";

const ArtistGigManager = ({ navigation }) => {
  const { state: artist, getArtist } = useContext(ArtistContext);
  const [selected, setSelected] = useState("");

  const artistRow = artist[0];
  const { artist_name } = artistRow;

  const popAction = StackActions.pop(1);
  //DON'T FORGET TO USE ARTIST_ID PROP PASSED ON BY ARTIST PAGE TO GET ARTIST
  return (
    <View>
      <BackButton
        onPress={() => {
          navigation.dispatch(popAction);
        }}
        navigateToText={"Back"}
      />
      <View style={styles.header}>
        <Title titleText={`${artist_name}\nGig Manager`} />
      </View>
      <Text style={styles.createSlotMessage}>Find a Gig:</Text>
      <Calendar
        style={styles.calendar}
        onDayPress={(day) => {
          const date = new Date(day.dateString);
          const gigSlotDate = dateFormat(date, "d mmm yyyy");
          setSelected(gigSlotDate);
          getArtist(artist_name);

          navigation.navigate("Artist Gig Search Page", { gigSlotDate });
        }}
        markedDates={{
          [selected]: {
            selected: true,
            disableTouchEvent: true,
            selectedDotColor: "orange",
          },
        }}
      />
      <View style={styles.gigButtons}>
        <TouchableOpacity
          style={styles.buttons}
          onPress={() => navigation.navigate("Venue Gig Manager Settings")}
        >
          <Text style={styles.text}>Default Schedule</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  createSlotMessage: {
    marginHorizontal: 25,
    fontWeight: "bold",
    fontSize: 15,
  },
  headerText: {
    fontSize: 30,
  },
  header: {
    marginVertical: 30,
    alignItems: "center",
  },
  calendarView: {
    flex: 1,
  },
  calendar: {
    height: 350,
    borderRadius: 30,
    marginTop: 10,
    paddingTop: 10,
    marginHorizontal: 20,
  },
  gigButtons: {
    marginTop: 50,
    flexDirection: "row",
    justifyContent: "space-around",
    marginHorizontal: 30,
    height: 400,
  },
  buttons: {
    height: 40,
    width: 165,
    borderRadius: 30,
    backgroundColor: "black",
    justifyContent: "center",
    alignItems: "center",
  },
  text: {
    color: "white",
    fontWeight: "bold",
  },
});

export default ArtistGigManager;
