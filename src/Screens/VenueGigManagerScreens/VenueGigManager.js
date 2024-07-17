import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import React, { useContext, useCallback, useState } from "react";
import { Calendar } from "react-native-calendars";
import { useFocusEffect } from "@react-navigation/native";
import Title from "../../components/Title";
import { Context as VenueContext } from "../../context/VenueContext";
import { Context as GigSlotContext } from "../../context/GigSlotContext";
import dateFormat from "dateformat";
import { Context as ConcertContext } from "../../context/ConcertContext";
import { DefaultBackground, HeaderButtons } from "../../components/PageFormats";
import { BackIcon, EditIcon } from "../../components/IconsAndLogos";
import { TextHeader, TextBody } from "../../components/Text";

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
    <View style={styles.container}>
      <DefaultBackground />
      <HeaderButtons
        OnPressLeft={() => {
          getVenue(venue_id);
          navigation.navigate("Venue Page");
        }}
        // OnPressRight={() => {
        //   getVenue({ venue_id });
        //   navigation.navigate("Edit Venue Page");
        // }}
        IconLeft={<BackIcon />}
        // IconRight={<EditIcon />}
      />
      <View style={styles.header}>
        <TextHeader WriteText={`Gig Manager`} />
        <TextBody WriteText={`${venue_name}`} />
      </View>
      <View style={styles.calendarView}>
        <TextBody WriteText={`Create a Gig Slot:`} />
        <Calendar
          style={styles.calendar}
          onDayPress={(day) => {
            const gigSlotDate = new Date(day.dateString);
            const formattedDate = dateFormat(gigSlotDate, "isoDate");

            const thisGigSlot = gigSlot.filter(
              (i) =>
                i.gig_slot_date === formattedDate &&
                i.venue_id === `${venue_id}`
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
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  header: {
    marginVertical: 40,
    alignItems: "center",
    justifyContent: "space-evenly",
    flex: 1,
  },
  calendarView: {
    flex: 4,
  },
  calendar: {
    justifyContent: "center",
    height: 380,
    borderRadius: 30,
    marginTop: 10,
    paddingTop: 10,
    marginHorizontal: 20,
    borderColor: "#ebeff5",
    borderWidth: 0.5,
    shadowColor: "#ebeff5",
    shadowOffset: { width: 4, height: 4 },
    shadowOpacity: 50,
    shadowRadius: 4,
  },
});

export default VenueGigManager;
