import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import React, { useContext, useCallback, useState } from "react";
import { Calendar } from "react-native-calendars";
import { useFocusEffect } from "@react-navigation/native";
import Title from "../../components/Title";
import { Context as VenueContext } from "../../context/VenueContext";
import { Context as GigSlotContext } from "../../context/GigSlotContext";
import dateFormat from "dateformat";
import { AntDesign } from "@expo/vector-icons";
import { Context as ConcertContext } from "../../context/ConcertContext";

const VenueGigManager = ({ navigation }) => {
  const { state: venue, getVenue } = useContext(VenueContext);

  const {
    state: gigSlot,
    getAllGigSlots,
    getGigSlot,
  } = useContext(GigSlotContext);

  const {
    state: concert,
    getConcert,
    getAllConcerts,
  } = useContext(ConcertContext);

  const { venue_id, venue_name } = venue[0];

  useFocusEffect(
    useCallback(() => {
      async function fetchData() {
        const getSlots = await getAllGigSlots();
        const getConcerts = await getAllConcerts();
      }
      fetchData();
    }, [allPendingDates])
  );
  const concerts = gigSlot.filter(
    (i) => i.venue_id === `${venue_id}` && i.gig_slot_status === "concert"
  );

  const allConcertDates = [...new Set(concerts.map((i) => i.gig_slot_date))];

  const venueGigSlots = gigSlot.filter(
    (i) => i.venue_id === `${venue_id}` && i.gig_slot_status === "pending"
  );

  const allPendingDates = [
    ...new Set(venueGigSlots.map((i) => i.gig_slot_date)),
  ];

  let dates = {};

  allConcertDates.forEach((i) => {
    dates[i] = { selected: true, marked: true, selectedColor: "red" };
  });

  allPendingDates.forEach((i) => {
    dates[i] = { selected: true, marked: true, selectedColor: "blue" };
  });

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

          const thisGigSlot = gigSlot.filter(
            (i) =>
              i.gig_slot_date === formattedDate && i.venue_id === `${venue_id}`
          );

          const goToGigSlot = async () => {
            const { gig_slot_id } = thisGigSlot[0];
            await getGigSlot(gig_slot_id);
            navigation.navigate("Gig Slot");
          };

          const goToConcert = async () => {
            const { gig_slot_id } = thisGigSlot[0];
            const thisConcert = concert.filter(
              (i) => i.gig_slot_id === `${gig_slot_id}`
            );
            const { concert_id } = thisConcert[0];
            await getConcert(concert_id);
            navigation.navigate("Concert Page");
          };

          const goToCreateSlot = async () => {
            await getVenue(venue_id);
            navigation.navigate("Create Gig Slot", {
              formattedDate,
            });
          };

          const gigSlotStatusSwitch = () => {
            const { gig_slot_status } = thisGigSlot[0];
            switch (gig_slot_status) {
              case "pending":
                goToGigSlot();
                break;
              case "concert":
                goToConcert();
                break;
            }
          };
          {
            thisGigSlot[0] === undefined
              ? goToCreateSlot()
              : gigSlotStatusSwitch();
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
