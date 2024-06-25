import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import React, { useContext, useState, useCallback, useEffect } from "react";
import { SelectList } from "react-native-dropdown-select-list";
import { useFocusEffect } from "@react-navigation/native";
import Title from "../../components/Title";
import BackButton from "../../components/BackButton";
import { StackActions } from "@react-navigation/native";
import { Calendar } from "react-native-calendars";
import dateFormat, { masks } from "dateformat";
import { Context as ArtistContext } from "../../context/ArtistContext";
import { Context as GigSlotContext } from "../../context/GigSlotContext";
import { Context as GigRequestContext } from "../../context/GigRequestContext";
import { Context as ConcertContext } from "../../context/ConcertContext";

const ArtistGigManager = ({ navigation }) => {
  const { state: artist, getArtist } = useContext(ArtistContext);
  const { state: gigSlot, getAllGigSlots } = useContext(GigSlotContext);
  const { state: gigRequest, getAllGigRequests } =
    useContext(GigRequestContext);
  const {
    state: concert,
    getConcert,
    getAllConcerts,
  } = useContext(ConcertContext);

  const [selected, setSelected] = useState("Everywhere");

  const thisArtist = artist[0];
  const { artist_name, artist_id } = thisArtist;

  useFocusEffect(
    useCallback(() => {
      async function fetchData() {
        const getSlots = await getAllGigSlots();
        const getGigRequests = await getAllGigRequests();
        const getConcerts = await getAllConcerts();
      }
      fetchData();
    }, [locations, dates])
  );

  //SET OPTIONS FOR DROPDOWN
  const locations = [...new Set(gigSlot.map((i) => i.gig_slot_location))];

  let dropdownInfo = [{ key: [0], value: "Everywhere" }];

  locations.forEach((i) => {
    dropdownInfo.push({
      key: `${locations.indexOf(i)}`,
      value: i,
    });
  });

  //MARK DATES ON CALENDAR
  //AVAILABLE (NOT DECLINED) GIG SLOTS
  const unavailableGigRequests = gigRequest.filter(
    (i) =>
      i.artist_id === `${artist_id}` &&
      i.gig_request_status === ("declined" || "concert")
  );

  const unavailableGigSlotIds = [
    ...new Set(unavailableGigRequests.map((i) => i.gig_slot_id)),
  ];

  const availableSlotsEverywhere = gigSlot.filter(
    (i) =>
      !unavailableGigSlotIds.includes(`${i.gig_slot_id}`) &&
      i.gig_slot_status === "pending"
  );

  const availableSlotsBySelectedLocation = gigSlot.filter(
    (i) =>
      i.gig_slot_location.includes(selected) &&
      !unavailableGigSlotIds.includes(`${i.gig_slot_id}`)
  );

  let slotDates = [];

  {
    selected === "Everywhere"
      ? slotDates.push(availableSlotsEverywhere.map((i) => i.gig_slot_date))
      : slotDates.push(
          availableSlotsBySelectedLocation.map((i) => i.gig_slot_date)
        );
  }

  //BOOKED GIG SLOTS
  const bookedGigRequests = gigRequest.filter(
    (i) => i.artist_id === `${artist_id}` && i.gig_request_status === "concert"
  );

  const bookedGigSlotIds = [
    ...new Set(bookedGigRequests.map((i) => i.gig_slot_id)),
  ];

  const bookedSlotsEverywhere = gigSlot.filter((i) =>
    bookedGigSlotIds.includes(`${i.gig_slot_id}`)
  );

  const bookedlotsBySelectedLocation = gigSlot.filter(
    (i) =>
      i.gig_slot_location.includes(selected) &&
      bookedGigSlotIds.includes(`${i.gig_slot_id}`)
  );

  let bookedSlotDates = [];

  {
    selected === "Everywhere"
      ? bookedSlotDates.push(bookedSlotsEverywhere.map((i) => i.gig_slot_date))
      : bookedSlotDates.push(
          bookedlotsBySelectedLocation.map((i) => i.gig_slot_date)
        );
  }

  //MARK CALENDAR
  let dates = {};

  slotDates[0].forEach((i) => {
    dates[i] = {
      selected: true,
      marked: true,
      selectedColor: "blue",
    };
  });

  bookedSlotDates[0].forEach((i) => {
    dates[i] = {
      selected: true,
      marked: true,
      selectedColor: "red",
    };
  });

  const gigSlotLocation = selected;

  const popAction = StackActions.pop(1);

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
      <View style={styles.findLocation}>
        <Text style={styles.createSlotMessage}>Find a Gig:</Text>

        <Text>Location:</Text>
        <SelectList
          setSelected={(val) => setSelected(val)}
          data={dropdownInfo}
          save="value"
          placeholder="Everywhere"
        />
      </View>
      <Calendar
        style={styles.calendar}
        onDayPress={(day) => {
          const date = new Date(day.dateString);
          const gigSlotDate = dateFormat(date, "isoDate");
          getArtist(artist_id);

          const goToConcert = async () => {
            const thisConcert = concert.filter(
              (i) =>
                i.gig_slot_date === `${gigSlotDate}` &&
                i.artist_id === `${artist_id}`
            );
            const { concert_id } = thisConcert[0];
            await getConcert(concert_id);
            navigation.navigate("Concert Page");
          };
          // const thisConcert = concert.filter(
          //   (i) =>
          //     i.gig_slot_date === `${gigSlotDate}` &&
          //     i.artist_id === `${artist_id}`
          // );
          // const { concert_id } = thisConcert[0];
          // console.log(concert_id);

          {
            if (bookedSlotDates[0].includes(`${gigSlotDate}`) === true) {
              goToConcert();
            } else if (slotDates[0].includes(`${gigSlotDate}`)) {
              navigation.navigate("Artist Gig Search Results", {
                gigSlotDate,
                gigSlotLocation,
              });
            } else {
              null;
            }
          }

          // const goToGigSlot = async () => {
          //   const { gig_slot_id } = thisGigSlot[0];
          //   await getGigSlot(gig_slot_id);
          //   navigation.navigate("Gig Slot");
          // };

          // const goToConcert = async () => {
          //   const { gig_slot_id } = thisGigSlot[0];
          //   const thisConcert = concert.filter(
          //     (i) => i.gig_slot_id === `${gig_slot_id}`
          //   );
          //   const { concert_id } = thisConcert[0];
          //   await getConcert(concert_id);
          //   navigation.navigate("Concert Page");
          // };

          // const goToCreateSlot = async () => {
          //   await getVenue(venue_id);
          //   navigation.navigate("Create Gig Slot", {
          //     formattedDate,
          //   });
          // };

          // const gigSlotStatusSwitch = () => {
          //   const { gig_slot_status } = thisGigSlot[0];
          //   switch (gig_slot_status) {
          //     case "pending":
          //       goToGigSlot();
          //       break;
          //     case "concert":
          //       goToConcert();
          //       break;
          //   }
          // };
          // {
          //   thisGigSlot[0] === undefined
          //     ? goToCreateSlot()
          //     : gigSlotStatusSwitch();
          // }
        }}
        markedDates={dates}
      />
      <View style={styles.gigButtons}>
        <TouchableOpacity
          style={styles.buttons}
          // onPress={() => navigation.navigate("Venue Gig Manager Settings")}
        >
          <Text style={styles.text}>Default Schedule</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  findLocation: {
    flexDirection: "row",
    justifyContent: "flex-end",
  },
  dropdownButtonStyle: {
    width: 200,
    height: 50,
    backgroundColor: "#E9ECEF",
    borderRadius: 12,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    paddingHorizontal: 12,
  },
  dropdownButtonTxtStyle: {
    flex: 1,
    fontSize: 18,
    fontWeight: "500",
    color: "#151E26",
  },
  dropdownButtonArrowStyle: {
    fontSize: 28,
  },
  dropdownButtonIconStyle: {
    fontSize: 28,
    marginRight: 8,
  },
  dropdownMenuStyle: {
    backgroundColor: "#E9ECEF",
    borderRadius: 8,
  },
  dropdownItemStyle: {
    width: "100%",
    flexDirection: "row",
    paddingHorizontal: 12,
    justifyContent: "center",
    alignItems: "center",
    paddingVertical: 8,
  },
  dropdownItemTxtStyle: {
    flex: 1,
    fontSize: 18,
    fontWeight: "500",
    color: "#151E26",
  },
  dropdownItemIconStyle: {
    fontSize: 28,
    marginRight: 8,
  },
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
