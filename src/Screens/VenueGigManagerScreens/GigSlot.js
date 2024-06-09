import { StyleSheet, TouchableOpacity, View, Text } from "react-native";
import React, { useState, useContext, useCallback } from "react";
import Title from "../../components/Title";
import { Context as GigSlotContext } from "../../context/GigSlotContext";
import { Context as VenueContext } from "../../context/VenueContext";
import { AntDesign } from "@expo/vector-icons";
import dateFormat, { masks } from "dateformat";
import { Context as ArtistContext } from "../../context/ArtistContext";
import { Context as GigRequestContext } from "../../context/GigRequestContext";
import { StackActions, useFocusEffect } from "@react-navigation/native";
import { ListItem } from "@rneui/themed";
import { Context as ConcertContext } from "../../context/ConcertContext";

const GigSlot = ({ navigation }) => {
  const { state: venue } = useContext(VenueContext);
  const {
    state: gigSlot,
    getGigSlot,
    editGigSlotStatus,
  } = useContext(GigSlotContext);
  const { state: artist, getAllArtists } = useContext(ArtistContext);
  const { state: concert, addConcert } = useContext(ConcertContext);

  const {
    venue_id,
    venue_name,
    venue_location,
    // venue_businessHours,
    // venue_description,
    // venue_website,
  } = venue[0];

  const {
    state: gigRequest,
    getAllGigRequests,
    editGigRequest,
    deleteGigRequest,
  } = useContext(GigRequestContext);

  const [requests, setRequests] = useState("");

  const thisGigSlot = gigSlot[0];

  const {
    gig_slot_id,
    gig_slot_title,
    gig_slot_location,
    gig_slot_date,
    gig_slot_start_time,
    gig_slot_end_time,
    gig_slot_description,
  } = gigSlot[0];
  const displayDate = dateFormat(gig_slot_date, "d mmm yyyy");

  useFocusEffect(
    useCallback(() => {
      const fetchData = async () => {
        const getRequests = await getAllGigRequests();
      };
      fetchData();
    }, [requests])
  );
  const popAction = StackActions.pop(1);

  const gigSlotRequests = gigRequest.filter(
    (i) =>
      i.gig_slot_id === `${gig_slot_id}` && i.gig_request_status === "pending"
  );

  return (
    <View>
      <View style={styles.header}>
        <TouchableOpacity
          onPress={() => navigation.dispatch(popAction)}
          style={styles.backIcon}
        >
          <AntDesign name="back" size={24} color="black" />
          <Text>Gig Manager</Text>
        </TouchableOpacity>
        <View style={styles.gigSlotView}>
          <View style={styles.editGigSlot}>
            <TouchableOpacity
              onPress={() => {
                getGigSlot(gig_slot_id);
                navigation.navigate("Edit Gig Slot");
              }}
              style={styles.editIcon}
            >
              <AntDesign name="edit" size={24} color="grey" />
            </TouchableOpacity>
          </View>
        </View>
      </View>
      <Title titleText={gig_slot_title} />
      <Title titleText={displayDate} />
      <Text>
        from {gig_slot_start_time} to {gig_slot_end_time}
      </Text>
      <Text>{gig_slot_description}</Text>

      <View>
        {gigSlotRequests.map((l, i) => (
          <ListItem key={i} bottomDivider style={styles.listItem}>
            <ListItem.Content style={styles.inputRow}>
              <View>
                <ListItem.Title style={styles.listTitle}>
                  {l.artist_name}
                </ListItem.Title>
                <ListItem.Subtitle style={styles.listSubtitle}>
                  {l.artist_genre}
                </ListItem.Subtitle>
              </View>
              <View>
                <Text>{l.artist_email}</Text>
                <Text>Cost: {l.gig_request_cost}</Text>
              </View>
              <View style={styles.fee}>
                <TouchableOpacity
                  style={styles.button}
                  onPress={async () => {
                    const {
                      artist_id,
                      artist_number_of_members,
                      artist_name,
                      artist_solo_instrument,
                      artist_tech_rider,
                      artist_genre,
                      artist_email,
                      artist_description,
                      artist_followers,
                      gig_request_id,
                      gig_request_cost,
                    } = l;

                    const gig_request_status = "concert";
                    const gig_slot_status = "concert";
                    await editGigRequest({
                      gig_request_id,
                      gig_request_status,
                    });
                    // SET STATUS OF ALL OTHER GIG REQUESTS TO "DECLINED"
                    // gigSlotRequests.forEach ((i) => { i.gig_request_id != gig_request_id ? editGigRequest(i.gig_request_id, )})
                    await editGigSlotStatus({ gig_slot_id, gig_slot_status });
                    await addConcert({
                      venue_id,
                      venue_name,
                      artist_id,
                      artist_number_of_members,
                      artist_name,
                      artist_solo_instrument,
                      artist_tech_rider,
                      artist_genre,
                      artist_email,
                      artist_description,
                      artist_followers,
                      gig_request_id,
                      gig_request_cost,
                      gig_slot_id,
                      gig_slot_title,
                      gig_slot_location,
                      gig_slot_date,
                      gig_slot_start_time,
                      gig_slot_end_time,
                      gig_slot_description,
                    });
                    navigation.navigate("Concert Page", {
                      gig_slot_id,
                      gig_request_id,
                    });
                  }}
                >
                  <Text style={styles.buttonText}>Accept</Text>
                </TouchableOpacity>
                <TouchableOpacity
                  style={styles.button}
                  onPress={async () => {
                    const { gig_request_id } = l;
                    const gig_request_status = "declined";
                    await editGigRequest({
                      gig_request_id,
                      gig_request_status,
                    });
                    setRequests(gigRequest);
                    // const gig_slot_status = "concert";
                  }}
                >
                  <Text style={styles.buttonText}>Decline</Text>
                </TouchableOpacity>
              </View>
            </ListItem.Content>
          </ListItem>
        ))}
      </View>
    </View>
  );
};

export default GigSlot;

const styles = StyleSheet.create({
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
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
    marginHorizontal: 4,
  },
  buttonText: {
    fontWeight: "bold",

    padding: 4,
  },
  fee: {
    flexDirection: "row",
    alignItems: "center",
  },
  editGigSlot: {
    alignSelf: "right",
  },
  gigSlotView: {
    alignItems: "center",
  },
});
