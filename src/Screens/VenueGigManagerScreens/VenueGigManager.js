import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import React, { useContext, useCallback } from "react";
import { Calendar } from "react-native-calendars";
import { useFocusEffect } from "@react-navigation/native";

import Title from "../../components/Title";
import { Context as VenueContext } from "../../context/VenueContext";
import { Context as GigSlotContext } from "../../context/GigSlotContext";

import dateFormat from "dateformat";
import { AntDesign } from "@expo/vector-icons";

const VenueGigManager = ({ navigation }) => {
  const { state: venue, getVenue } = useContext(VenueContext);
  const {
    state: gigSlot,
    getAllGigSlots,
    getGigSlot,
  } = useContext(GigSlotContext);

  const {
    venue_id,
    venue_name,
    // venue_location,
    // venue_businessHours,
    // venue_description,
    // venue_website,
  } = venue[0];

  useFocusEffect(
    useCallback(() => {
      async function fetchData() {
        const getSlots = await getAllGigSlots();
      }
      fetchData();
    }, [])
  );

  const allDates = gigSlot.map((i) => i.gigslot_date);

  let dates = {};
  allDates.forEach((i) => {
    dates[i] = {
      selected: true,
      marked: true,
      // selectedDotColor: "blue",
    };
  });

  const findObject = (array, key, value) => {
    return array.find((obj) => obj[key] === value);
  };

  return (
    <View style={styles.calendarView}>
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
      <View style={styles.header}>
        <Title titleText={`${venue_name}\nGig Manager`} />
      </View>
      <Text style={styles.createSlotMessage}>Create a Gig Slot:</Text>
      <Calendar
        style={styles.calendar}
        onDayPress={(day) => {
          const gigSlotDate = new Date(day.dateString);
          const formattedDate = dateFormat(gigSlotDate, "isoDate");
          const selected = allDates.includes(formattedDate);
          const thisGigSlot = findObject(
            gigSlot,
            "gigslot_date",
            formattedDate
          );

          const goToGigSlot = async () => {
            const gigSlot_id = thisGigSlot.gigslot_id;
            await getGigSlot(gigSlot_id);
            navigation.navigate("Gig Slot");
          };
          const goToCreateSlot = async () => {
            await getVenue(venue_id);
            navigation.navigate("Create Gig Slot", { formattedDate });
          };

          {
            selected ? goToGigSlot() : goToCreateSlot();
          }
        }}
        markedDates={dates}
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

export default VenueGigManager;
