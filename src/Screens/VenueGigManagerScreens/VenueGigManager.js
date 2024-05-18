import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import React, { useState, useContext } from "react";
import { Calendar, LocaleConfig } from "react-native-calendars";
import Title from "../../components/Title";
import { Context as VenueContext } from "../../context/VenueContext";

import { AntDesign } from "@expo/vector-icons";

const VenueGigManager = ({ route, navigation }) => {
  const { state: venue, getVenue } = useContext(VenueContext);
  const [selected, setSelected] = useState("");

  const {
    venue_id,
    venue_name,
    venue_location,
    venue_businessHours,
    venue_description,
    venue_website,
  } = venue[0];

  return (
    <View>
      <TouchableOpacity
        onPress={() => {
          getVenue(venue_id);
          navigation.navigate("Venue Page");
        }}
        style={styles.backIcon}
      >
        <AntDesign name="back" size={24} color="black" />
        <Text>My Stuff</Text>
      </TouchableOpacity>
      {/* <BackButton navigateTo={} navigateToText="Artist Page" /> */}
      <View style={styles.header}>
        <Title titleText="Venue Gig Manager" />
        {/* <Text style={styles.headerText}>Gig Manager</Text> */}
      </View>
      <View style={styles.calendarView}>
        <Calendar
          style={styles.calendar}
          onDayPress={(day) => {
            setSelected(console.log(day.dateString));
          }}
          markedDates={{
            [selected]: {
              selected: true,
              disableTouchEvent: true,
              selectedDotColor: "orange",
            },
          }}
        />
      </View>
      <View style={styles.gigButtons}>
        <TouchableOpacity
          style={styles.buttons}
          onPress={() => navigation.navigate("Venue Gig Manager Settings")}
        >
          <Text style={styles.text}>Default</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.buttons}
          onPress={() => navigation.navigate("Create Gig Slot")}
        >
          <Text style={styles.text}>+ Gig Slot</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  headerText: {
    fontSize: 30,
  },
  header: {
    marginVertical: 40,
    alignItems: "center",
  },
  calendarView: {},
  calendar: {
    height: 450,
    borderRadius: 30,
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

export default VenueGigManager;
