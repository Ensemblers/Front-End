import {
  StyleSheet,
  View,
  ScrollView,
  Text,
  TouchableOpacity,
} from "react-native";
import React, { useContext, useState, useEffect } from "react";
import { StackActions } from "@react-navigation/native";
import { Context as ArtistContext } from "../../context/ArtistContext";
import { Context as AuthContext } from "../../context/AuthContext";
import {
  DropdownComponent,
  DropdownGenre,
} from "../../components/DropdownsAndLineItems";
import {
  instrumentsList,
  artistGroupSizeList,
  musicalGenresList,
} from "../../components/Lists";

//COMPONENTS
import { DefaultBackground, HeaderButtons } from "../../components/PageFormats";
import {
  BackIcon,
  EmailLink,
  Solo,
  Group,
} from "../../components/IconsAndLogos";
import { DesignButton } from "../../components/Buttons";
import { TextHeader } from "../../components/Text";
import { InputInfo, InputLinks } from "../../components/Input";
import { InputTemplate } from "../../components/InputTemplate";

const CreateArtist = ({ navigation }) => {
  const { createArtist } = useContext(ArtistContext);
  const { state: user } = useContext(AuthContext);

  const popAction = StackActions.pop(1);
  const { user_id } = user;

  //USESTATE FOR DROPDOWN LISTS
  const [groupSize, setGroupSize] = useState("");
  const [instrument, setInstrument] = useState("");
  const [genre, setGenre] = useState("");

  //ARTIST CHOOSE SOLO OR GROUP
  const [group, setGroup] = useState(1);

  //ARTIST ONBOARDING FIELDS
  const [artist_name, setArtistName] = useState("");
  const [artist_genre, setArtistGenre] = useState("");
  const [artist_number_of_members, setArtistGroupSize] = useState("");
  const [artist_solo_instrument, setArtistSoloInstrument] = useState("");
  const [artist_email, setArtistEmail] = useState("");

  //DROPDOWN JAVASCRIPT FOR GROUP SIZE / SOLO INSTRUMENT / MUSICAL GENRE
  let artistGroupSizeDropdown = [];
  let instrumentsDropdown = [];
  let genreDropdown = [];

  useEffect(() => {
    const fetchdata = () => {
      artistGroupSizeList.forEach((i) => {
        artistGroupSizeDropdown.push({
          label: i,
          value: `${artistGroupSizeList.indexOf(i)}`,
        });
      });
      setGroupSize(artistGroupSizeDropdown);

      instrumentsList.forEach((i) => {
        instrumentsDropdown.push({
          label: i,
          value: `${instrumentsList.indexOf(i)}`,
        });
      });
      setInstrument(instrumentsDropdown);

      musicalGenresList.forEach((i) => {
        genreDropdown.push({
          label: i,
          value: `${musicalGenresList.indexOf(i)}`,
        });
      });
      setGenre(genreDropdown);
    };

    fetchdata();
  }, []);

  console.log(artist_genre, artist_number_of_members, artist_solo_instrument);

  return (
    <View style={styles.container}>
      <DefaultBackground />
      <HeaderButtons
        OnPressLeft={() => navigation.dispatch(popAction)}
        IconLeft={<BackIcon />}
        IconRight={""}
      />
      <View style={styles.card}>
        <TextHeader WriteText={"Create Artist:"} />
        <ScrollView style={styles.ScrollView}>
          <View style={styles.artistGroup}>
            <View style={styles.cardBody}>
              <InputInfo
                Content="Artist Name:"
                InputHere={
                  <InputTemplate
                    Value={artist_name}
                    OnChangeText={(artist_name) => setName(artist_name)}
                  />
                }
              />
              <View style={styles.artistSize}>
                <TouchableOpacity
                  onPress={() => setGroup(2)}
                  style={styles.artistIcon}
                >
                  <Solo />
                  <Text>Solo Act</Text>
                  {group === 2 ? (
                    <DropdownComponent
                      Data={instrument}
                      Placeholder="Instrument"
                      Value={artist_solo_instrument.label}
                      OnChange={(i) => {
                        setArtistSoloInstrument(i.label);
                      }}
                    />
                  ) : (
                    ""
                  )}
                </TouchableOpacity>
                <TouchableOpacity
                  onPress={() => setGroup(3)}
                  style={styles.artistIcon}
                >
                  <Group />
                  <Text>Group</Text>
                  {group === 3 ? (
                    <DropdownComponent
                      Data={groupSize}
                      Placeholder="# Members"
                      Value={artist_number_of_members.label}
                      OnChange={(i) => {
                        setArtistGroupSize(i.label);
                      }}
                    />
                  ) : (
                    ""
                  )}
                </TouchableOpacity>
              </View>
              {genre ? (
                <DropdownGenre
                  Data={genre}
                  Placeholder="Genre"
                  Value={artist_genre.label}
                  OnChange={(i) => {
                    setArtistGenre(i.label);
                  }}
                />
              ) : (
                ""
              )}
              <InputLinks
                LinkLogo={<EmailLink />}
                Content="Email"
                InputHere={
                  <InputTemplate
                    Value={artist_email}
                    OnChangeText={(artist_email) => setEmail(artist_email)}
                  />
                }
              />
              <View style={styles.buttonView}>
                <DesignButton
                  ButtonText="Create"
                  OnPress={() => {
                    createArtist({
                      user_id,
                      artist_name,
                      artist_genre,
                      artist_number_of_members,
                      artist_solo_instrument,
                      artist_email,
                    });
                    navigation.navigate("Artist Page");
                  }}
                />
              </View>
            </View>
          </View>
        </ScrollView>
      </View>
    </View>
  );
};

export default CreateArtist;

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

  artistGroup: {
    // borderColor: "red",
    // borderWidth: "1",
  },
  artistSize: {
    flexDirection: "row",
    justifyContent: "space-around",
  },
  artistIcon: {
    height: 150,
    justifyContent: "center",
    alignItems: "center",
    width: 100,
    marginVertical: 25,
    top: 20,
    // borderColor: "blue",
    // borderWidth: "1",
  },
  artistInfo: {
    // borderColor: "blue",
    // borderWidth: "1",
    height: 260,
    justifyContent: "center",
    // marginVertical: 30,
    marginHorizontal: 30,
  },
  links: {
    flexDirection: "row",
    justifyContent: "center",
  },
  buttonView: {
    marginVertical: 20,
    flexDirection: "row",
    alignItems: "space-around",
    justifyContent: "center",
    // borderColor: "green",
    // borderWidth: "1",
  },
});
