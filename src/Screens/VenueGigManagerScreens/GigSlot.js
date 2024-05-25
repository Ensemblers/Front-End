import { StyleSheet, TouchableOpacity, View, Text } from "react-native";
import React, { useContext } from "react";
import Title from "../../components/Title";
import { Context as GigSlotContext } from "../../context/GigSlotContext";
import { Context as VenueContext } from "../../context/VenueContext";
import { AntDesign } from "@expo/vector-icons";
import dateFormat, { masks } from "dateformat";

const GigSlot = ({ navigation }) => {
  const { state: venue } = useContext(VenueContext);
  const { state: gigSlot, getGigSlot } = useContext(GigSlotContext);

  const { venue_id } = venue[0];
  const thisGigSlot = gigSlot[0];
  const { gigslot_id } = gigSlot[0];
  const gigSlot_id = gigslot_id;

  const {
    gigslot_date,
    gigslot_startTime,
    gigslot_endTime,
    gigslot_description,
    gigrequest_id,
  } = gigSlot[0];
  const displayDate = dateFormat(gigslot_date, "d mmm yyyy");
  return (
    <View>
      <TouchableOpacity
        onPress={() => navigation.navigate("Venue Gig Manager Home")}
        style={styles.backIcon}
      >
        <AntDesign name="back" size={24} color="black" />
        <Text>Gig Manager</Text>
      </TouchableOpacity>
      <View style={styles.gigSlotView}>
        <View style={styles.editGigSlot}>
          <TouchableOpacity
            onPress={() => {
              getGigSlot(gigSlot_id);
              navigation.navigate("Edit Gig Slot");
            }}
            style={styles.editIcon}
          >
            <AntDesign name="edit" size={24} color="grey" />
          </TouchableOpacity>
        </View>
        <Title titleText="Gig Slot" />
        <Title titleText={displayDate} />
        <Text>
          from {gigslot_startTime} to {gigslot_endTime}
        </Text>
        <Text>{gigslot_description}</Text>
      </View>
    </View>
  );
};

export default GigSlot;

const styles = StyleSheet.create({
  editGigSlot: {
    alignSelf: "right",
  },
  gigSlotView: {
    alignItems: "center",
  },
});
