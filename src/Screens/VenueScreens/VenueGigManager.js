import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import React, { useState } from "react";
import { Calendar, LocaleConfig } from "react-native-calendars";

const VenueGigManager = () => {
  const [selected, setSelected] = useState("");

  return (
    <View>
      <View style={styles.header}>
        <Text style={styles.headerText}>Gig Manager</Text>
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
        <TouchableOpacity style={styles.buttons}>
          <Text style={styles.text}>Create Gig Slot</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.buttons}>
          <Text style={styles.text}>Weekly Gig Schedule</Text>
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
