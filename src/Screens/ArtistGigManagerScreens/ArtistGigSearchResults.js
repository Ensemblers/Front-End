import React, { useContext, useState, useCallback, useEffect } from "react";
import { StyleSheet, Text, View, TouchableOpacity, Alert } from "react-native";
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

const ArtistGigSearchResults = ({ route, navigation }) => {
  const { state: gigSlot, editGigSlot } = useContext(GigSlotContext);
  const { state: venue, getVenue } = useContext(VenueContext);
  const { state: artist } = useContext(ArtistContext);
  const {
    state: gigRequest,
    addGigRequest,
    deleteGigRequest,
  } = useContext(GigRequestContext);

  const [request, setRequest] = useState();
  const [slot, setSlot] = useState();

  const { date, location } = route.params;
  const [data, setData] = useState(null);

  const { artist_id } = artist[0];
  const gigRequest_id = artist_id;

  //GET GIG SEARCH RESULTS
  useFocusEffect(
    useCallback(() => {
      const unsubscribe = () => {
        //FILTER OUT GIG SLOTS WITH DATE CORRESPONDING TO DATE PARAM
        const gigSlotArray = gigSlot.filter((el) => {
          return el.gigslot_date === date;
        });

        //GET VENUE IDS OF REMAINING GIG SLOTS
        const venue_id_Array = gigSlotArray.map((x) => x.venue_id);

        //USE VENUE IDS TO FILTER VENUES BY CORRESPONDING VENUE IDS,
        const venue_Array = venue_id_Array.forEach(async (user_id) => {
          await getVenue(user_id);
        });
        unsubscribe();
      };
      [];
    })
  );

  //FILTER VENUES BY LOCATION PARAM
  const gigSlotVenues = venue.filter((el) => {
    return el.venue_location === location;
  });

  const popAction = StackActions.pop(1);

  return (
    <View>
      <BackButton
        onPress={() => {
          navigation.dispatch(popAction);
        }}
        navigateToText={"Back"}
      />
      <View>
        <Title titleText={`Gig Slots in ${location} on ${date}`} />
      </View>
      <Spacer />
      <View>
        {gigSlotVenues.map((l, i) => (
          <ListItem key={i} bottomDivider style={styles.listItem}>
            <ListItem.Content>
              <TouchableOpacity
                //FIND GIGSLOT_ID

                onPress={() => {
                  const getGigSlot = new Promise(async () => {
                    const targetGigSlot = gigSlot.filter((el) => {
                      return (
                        el.gigslot_date === date &&
                        el.venue_id * 1 === l.venue_id
                      );
                    });
                    const { gigslot_id } = targetGigSlot[0];
                    const gigSlot_id = gigslot_id;
                    await getGigSlot(gigSlot_id);
                    setSlot(gigSlot);
                  });

                  const newGigRequest = new Promise(async () => {
                    const { gigslot_id } = gigSlot[0];
                    const gigSlot_id = gigslot_id;
                    await addGigRequest({
                      artist_id,
                      gigSlot_id,
                    });
                    setRequest(gigRequest);
                  });

                  const editTargetGigSlot = new Promise(async () => {
                    const { gigslot_id } = gigSlot[0];
                    const gigSlot_id = gigslot_id;
                    const { gigrequest_id } = gigRequest[0];
                    const gigRequest_id = gigrequest_id;
                    await editGigSlot({ gigSlot_id, gigRequest_id });
                  });

                  getGigSlot.then(newGigRequest).finally(editTargetGigSlot);
                }}
              >
                <ListItem.Title style={styles.listTitle}>
                  {l.venue_name}
                </ListItem.Title>
                <ListItem.Subtitle style={styles.listSubtitle}>
                  {l.venue_location}
                </ListItem.Subtitle>
              </TouchableOpacity>
            </ListItem.Content>
          </ListItem>
        ))}
      </View>
    </View>
  );
};

export default ArtistGigSearchResults;

const styles = StyleSheet.create({});
