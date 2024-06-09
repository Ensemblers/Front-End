import React, { useContext, useState, useCallback, Component } from "react";
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  Button,
  TouchableOpacity,
  Alert,
} from "react-native";
import { Context as GigSlotContext } from "../../context/GigSlotContext";
import { Context as VenueContext } from "../../context/VenueContext";
import { Context as ArtistContext } from "../../context/ArtistContext";
import { Context as GigRequestContext } from "../../context/GigRequestContext";
import Title from "../../components/Title";
import BackButton from "../../components/BackButton";
import { StackActions, useFocusEffect } from "@react-navigation/native";
import { ListItem } from "@rneui/themed";
import Spacer from "../../components/Spacer";
import dateFormat from "dateformat";
import Accordion from "react-native-collapsible/Accordion";

const ArtistGigSearchResults = ({ route, navigation }) => {
  const {
    state: gigSlot,
    editGigSlot,
    getAllGigSlots,
  } = useContext(GigSlotContext);
  const { state: venue, getVenue, getAllVenues } = useContext(VenueContext);
  const { state: artist } = useContext(ArtistContext);
  const {
    state: gigRequest,
    addGigRequest,
    deleteGigRequest,
    getAllGigRequests,
  } = useContext(GigRequestContext);

  const [slots, setSlots] = useState();
  const [requests, setRequests] = useState("");
  const [fee, setFee] = useState("");

  const { gigSlotDate, gigSlotLocation } = route.params;
  const displayDate = dateFormat(gigSlotDate, "d mmm yyyy");

  const {
    artist_id,
    artist_number_of_members,
    artist_name,
    artist_solo_instrument,
    artist_tech_rider,
    artist_genre,
    artist_email,
    artist_location,
    artist_description,
    artist_followers,
    artist_instagram,
    artist_spotify,
    artist_youtube,
    artist_website,
  } = artist[0];

  useFocusEffect(
    useCallback(() => {
      const fetchData = async () => {
        const getGigSlots = await getAllGigSlots();
        const getGigRequests = await getAllGigRequests();
      };
      fetchData();
    }, [requests])
  );
  //GIGREQUEST GIGSLOT_IDS TO CHECK IF GIGSLOT_ID OF LISTITEM IS INCLUDED (IF IT IS, THEN A GIGREQUEST HAS ALREADY BEEN SENT FOR THIS GIGSLOT AND THE FRONT END WILL PREVENT ARTIST FROM APPLYING AGAIN)
  const submittedGigRequests = gigRequest.filter(
    (i) => i.artist_id === `${artist_id}` && i.gig_request_status === "pending"
  );

  const gigSlotIdsAlreadyApplied = [
    ...new Set(submittedGigRequests.map((i) => i.gig_slot_id)),
  ];

  //FILTER GIG REQUESTS BY ARTIST_ID AND GIG REQUEST STATUS = !DECLINED
  const declinedGigRequests = gigRequest.filter(
    (i) => i.artist_id === `${artist_id}` && i.gig_request_status === "declined"
  );

  //MAP GIG REQUESTS BY GIGSLOT_ID
  const slotsIdsOfDeclinedRequests = [
    ...new Set(declinedGigRequests.map((i) => i.gig_slot_id)),
  ];

  const gigByDate = gigSlot.filter(
    (i) =>
      i.gig_slot_date === gigSlotDate &&
      i.gig_slot_status === "pending" &&
      slotsIdsOfDeclinedRequests.includes(`${i.gig_slot_id}`) === false
  );

  const gigByDateAndLocation = gigSlot.filter(
    (i) =>
      i.gig_slot_date === gigSlotDate &&
      i.gig_slot_location === gigSlotLocation &&
      i.gig_slot_status === "pending" &&
      slotsIdsOfDeclinedRequests.includes(`${i.gig_slot_id}`) === false
  );

  const gigSlots = (i) => {
    return i === "Everywhere" ? gigByDate : gigByDateAndLocation;
  };

  const gigSlotsInfo = gigSlots(gigSlotLocation);

  // const pendingGigSlots = gigSlotsInfo.filter((i) => {
  //   gigSlotRequestIDs.includes(i.gig_slot_id);
  // });

  const popAction = StackActions.pop(1);
  const gig_request_cost = fee;

  return (
    <View>
      <BackButton
        onPress={() => {
          navigation.dispatch(popAction);
        }}
        navigateToText={"Back"}
      />
      <View>
        <Title titleText={`Gig Slots on \n ${displayDate}`} />
      </View>
      <Spacer />
      <View>
        {gigSlotsInfo.map((l, i) => (
          <ListItem key={i} bottomDivider style={styles.listItem}>
            <ListItem.Content style={styles.inputRow}>
              <View>
                <ListItem.Title style={styles.listTitle}>
                  {l.venue_name}
                </ListItem.Title>
                <ListItem.Subtitle style={styles.listSubtitle}>
                  {l.gig_slot_location}
                </ListItem.Subtitle>
              </View>
              {gigSlotIdsAlreadyApplied.includes(`${l.gig_slot_id}`) ? null : (
                <View style={styles.fee}>
                  <Text>Your Fee: </Text>
                  <TextInput style={styles.input} onChangeText={setFee} />
                </View>
              )}
              {gigSlotIdsAlreadyApplied.includes(`${l.gig_slot_id}`) ? (
                <View style={styles.buttonPending}>
                  <Text>Pending</Text>
                </View>
              ) : (
                <TouchableOpacity
                  style={styles.button}
                  onPress={async () => {
                    const { gig_slot_id } = l;

                    const gig_request_status = "pending";
                    await addGigRequest({
                      gig_request_status,
                      gig_slot_id,
                      artist_id,
                      gig_request_cost,
                      artist_number_of_members,
                      artist_name,
                      artist_solo_instrument,
                      artist_tech_rider,
                      artist_genre,
                      artist_email,
                      artist_location,
                      artist_description,
                      artist_followers,
                      artist_instagram,
                      artist_spotify,
                      artist_youtube,
                      artist_website,
                    });
                    setRequests(gigRequest);
                  }}
                >
                  <Text style={styles.buttonText}>Send Request</Text>
                </TouchableOpacity>
              )}
            </ListItem.Content>
          </ListItem>
        ))}
      </View>
    </View>
  );
};

export default ArtistGigSearchResults;

const styles = StyleSheet.create({
  listItem: {
    margin: 10,
    borderWidth: 1,
    borderColor: "black",
  },
  inputRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginVertical: 10,
    alignItems: "center",
  },
  input: {
    borderWidth: 1,
    borderColor: "black",
    width: 80,
    height: 25,
  },
  button: {
    borderWidth: 3,
    borderColor: "purple",
    borderRadius: 3,
    fontWeight: "bold",
    color: "white",
  },
  buttonText: {
    fontWeight: "bold",
    padding: 4,
  },
  buttonPending: {
    borderWidth: 3,
    borderColor: "purple",
    borderRadius: 3,
    fontWeight: "bold",
    color: "grey",
  },
  fee: {
    flexDirection: "row",
    alignItems: "center",
  },
});
