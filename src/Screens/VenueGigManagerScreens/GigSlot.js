import {
  StyleSheet,
  TouchableOpacity,
  View,
  Text,
  FlatList,
} from "react-native";
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
import { DefaultBackground, HeaderButtons } from "../../components/PageFormats";
import {
  BackIcon,
  EditIcon,
  GoogleMapsLink,
  WebsiteTouchableOpacity,
  InstagramTouchableOpacity,
  YoutubeTouchableOpacity,
  FacebookTouchableOpacity,
  PhoneTouchableOpacity,
} from "../../components/IconsAndLogos";
import { DesignButton } from "../../components/Buttons";
import { TextHeader, TextBody, TextSub } from "../../components/Text";

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
  const [expanded, setExpanded] = useState();

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
    <View style={styles.container}>
      <DefaultBackground />
      <HeaderButtons
        OnPressLeft={() => navigation.dispatch(popAction)}
        OnPressRight={() => {
          getVenue({ venue_id });
          navigation.navigate("Edit Venue Page");
        }}
        IconLeft={<BackIcon />}
        IconRight={<EditIcon />}
      />
      <View style={styles.card}>
        <TextHeader WriteText={gig_slot_title} />
        <TextBody WriteText={venue_location} />
        <TextBody WriteText={displayDate} />
        <TextBody
          WriteText={`From ${gig_slot_start_time} until ${gig_slot_end_time}`}
        />
        <TextBody WriteText={`Description: ${gig_slot_description}`} />

        <View style={styles.flatlist}>
          <FlatList
            data={gigSlotRequests}
            renderItem={({ item }) => (
              <View style={styles.listItem}>
                <View style={styles.artistInfo}>
                  <TextBody WriteText={item.artist_name} />
                  <TextSub WriteText={item.artist_genre} />
                </View>
                <View style={styles.gigInfo}>
                  <TextSub WriteText={item.artist_email} />
                  <TextSub WriteText={`Cost: ${item.gig_request_cost}`} />
                </View>
                <View style={styles.buttons}>
                  <DesignButton
                    ButtonText="Accept"
                    OnPress={async () => {
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
                      } = item;
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
                  />
                  <DesignButton
                    ButtonText="Decline"
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
                  />
                </View>
              </View>
            )}
          />
        </View>
      </View>
    </View>
  );
};

export default GigSlot;

const styles = StyleSheet.create({
  container: {
    height: "100%",
    alignItems: "center",
  },
  card: {
    paddingTop: 30,
    flex: 1,
    width: "100%",
  },
  flatlist: {
    // height: 100,
    width: "100%",
  },
  listItem: {
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
  },
  artistInfo: {},
  gigInfo: {},
  buttons: {
    flexDirection: "row",
  },
});
