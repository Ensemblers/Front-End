import { StyleSheet, Text, View } from "react-native";
import React, { useState, useContext } from "react";
import CreatePage from "../../components/CreatePage";
import { Context as VenueContext } from "../../context/VenueContext";
import { StackActions } from "@react-navigation/native";
import { Context as GigSlotContext } from "../../context/GigSlotContext";
import dateFormat, { masks } from "dateformat";
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
import { TextHeader, TextSection } from "../../components/Text";
import {
  InputInfo,
  InputDescription,
  InputLinks,
} from "../../components/Input";
import { InputTemplate } from "../../components/InputTemplate";
import TimePicker from "../../components/TimePicker";
const CreateGigSlot = ({ route, navigation }) => {
  const { state: venue } = useContext(VenueContext);
  const { addGigSlot } = useContext(GigSlotContext);
  const [title, setTitle] = useState();
  const [description, setDescription] = useState();
  const popAction = StackActions.pop(1);
  const { venue_id, venue_name, venue_location } = venue[0];
  const { formattedDate } = route.params;
  const location = venue_location;
  const date = formattedDate;
  const displayDate = dateFormat(formattedDate, "d mmm yyyy");

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
        <TextHeader WriteText={`Create a Gig Slot for \n${displayDate}`} />
        {/* {imagePlace ? <VenuePicture Source={{ uri: imagePlace }} /> : <></>} */}
        <View style={styles.cardBody}>
          <InputInfo
            Content="Gig Name:"
            InputHere={
              <InputTemplate
                Value={title}
                OnChangeText={(title) => setTitle(title)}
              />
            }
          />
          <InputDescription
            Content="Description:"
            InputHere={
              <InputTemplate
                MultiLine={true}
                Value={description}
                OnChangeText={(description) => setDescription(description)}
              />
            }
          />
          <InputInfo
            Content="Start Time:"
            InputHere={
              <InputTemplate
              // Value={type}
              // OnChangeText={(type) => setType(type)}
              />
            }
          />
          <InputInfo
            Content="End Time:"
            InputHere={
              <InputTemplate
              // Value={type}
              // OnChangeText={(type) => setType(type)}
              />
            }
          />
          <TimePicker />
          <DesignButton
            ButtonText="Create Gig Slot"
            OnPress={async () => {
              const status = "pending";
              await addGigSlot({
                title,
                location,
                venue_id,
                venue_name,
                date,
                description,
                status,
              });
              navigation.navigate("Venue Gig Manager Home");
            }}
          />
        </View>
      </View>
    </View>
  );
};

export default CreateGigSlot;

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
  cardBody: {
    width: "85%",
    alignSelf: "center",
  },
  links: {
    flexDirection: "row",
    justifyContent: "center",
  },
  buttonView: {
    flexDirection: "row",
    alignItems: "space-around",
    justifyContent: "center",
  },
});
