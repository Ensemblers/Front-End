import React, { useContext } from "react";
import { View, Text, StyleSheet, TouchableOpacity, Image } from "react-native";
import { Context as ConcertContext } from "../../context/ConcertContext";
import { Context as AuthContext } from "../../context/AuthContext";
import DefaultImage from "../../../Images/nas.jpeg";
import DefaultBackground from "../../../Images/login-background.jpg";
import Spotify from "../../../Images/logos/Spotify.png";
import Facebook from "../../../Images/logos/Facebook.png";
import Instagram from "../../../Images/logos/Instagram.png";
import Youtube from "../../../Images/logos/Youtube.png";

const ConcertPage = ({ navigation }) => {
  const { state: user, getUser } = useContext(AuthContext);
  const { state: concert, getConcert } = useContext(ConcertContext);

  const { user_id } = user;
  const thisConcert = concert[0];

  // const {
  // concert_terms,
  // concert_followers,
  // venue_id,
  // venue_name,
  // artist_id,
  // artist_number_of_members,
  // artist_name,
  // artist_solo_instrument,
  // artist_tech_rider,
  // artist_genre,
  // artist_email,
  // artist_description,
  // artist_followers,
  // gig_request_id,
  // gig_request_cost,
  // gig_slot_id,
  // gig_slot_title,
  // gig_slot_location,
  // gig_slot_date,
  // gig_slot_start_time,
  // gig_slot_end_time,
  // gig_slot_description,
  // } = thisConcert;

  return (
    <View style={styles.screen}>
      <View style={styles.topView}>
        <TouchableOpacity style={styles.topButtons}>
          <Text>Back</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.topButtons}
          onPress={() => navigation.navigate("Edit Concert Page")}
        >
          <Text>Settings</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.manageGigsView}>
        <TouchableOpacity style={styles.manageGigsButton}>
          <Text style={styles.manageGigsButtonText}>Manage Gigs</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.headerView}>
        <Image
          resizeMode="stretch"
          source={DefaultImage}
          style={styles.profileImage}
        />
        <View style={styles.headingText}>
          <Text style={styles.headingTitle}>Nas</Text>
          <Text style={styles.headingSub}>Hip Hop</Text>
          <Text style={styles.headingSub}>Rapper</Text>
        </View>
      </View>

      <View style={styles.tabView}>
        <TouchableOpacity style={styles.tab}>
          <Text>ABOUT</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.tab}>
          <Text>CONCERTS</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.bodyView}>
        <View style={styles.bodyText}>
          <Text style={styles.descriptionTitle}>Description:</Text>
          <Text style={styles.description}>
            Interdum et malesuada fames ac ante ipsum primis in faucibus.
            Vestibulum vestibulum feugiat feugiat. Vivamus euismod sagittis
            molestie. Etiam dui magna, lacinia ac neque sagittis, ornare euismod
            est. Nullam pharetra, lorem tristique laoreet fermentum, ante urna
            pulvinar diam, in aliquam mi urna eget erat. Mauris at tellus
            ornare, faucibus arcu sit amet, egestas sem. Pellentesque quis
            finibus sem, id fringilla neque.
          </Text>
        </View>
        <View style={styles.logoView}>
          <TouchableOpacity>
            <Image style={styles.logo} source={Spotify} />
          </TouchableOpacity>
          <TouchableOpacity>
            <Image style={styles.logo} source={Facebook} />
          </TouchableOpacity>
          <TouchableOpacity>
            <Image style={styles.logo} source={Instagram} />
          </TouchableOpacity>
          <TouchableOpacity>
            <Image style={styles.logo} source={Youtube} />
          </TouchableOpacity>
        </View>
      </View>

      <Image
        source={DefaultBackground}
        resizeMode="stretch"
        style={styles.backgroundImage}
      />
    </View>
  );
};

export default ConcertPage;

const styles = StyleSheet.create({
  // screen: {
  //   flex: 1,
  //   alignItems: "center",
  // },
  // backgroundImage: {
  //   height: null,
  //   position: "absolute",
  //   width: null,
  //   zIndex: -1,
  //   top: 0,
  //   right: 0,
  //   bottom: 0,
  //   left: 0,
  // },
  screen: {
    width: "100%",
    height: "100%",
    alignItems: "center",
  },
  backgroundImage: {
    height: "100%",
    position: "absolute",
    width: "100%",
    borderColor: "red",
    borderWidth: 1,
    zIndex: -1,
  },
  topView: {
    position: "absolute",
    flexDirection: "row",
    justifyContent: "space-between",
    width: "100%",
    zIndex: 1,
  },
  topButtons: {
    margin: 20,
    // borderWidth: 1,
    // borderColor: "black",
  },
  manageGigsView: {
    position: "absolute",
    alignSelf: "flex-end",
    justifyContent: "center",
    marginTop: 190,
    paddingRight: 20,
    zIndex: 1,
    // borderWidth: 1,
    // borderColor: "black",
  },
  manageGigsButton: {
    borderWidth: 1,
    borderColor: "black",
    padding: 15,
    borderRadius: 30,
    backgroundColor: "purple",
    color: "white",
    fontWeight: 20,
  },
  manageGigsButtonText: {
    color: "white",
    fontWeight: "700",
    fontSize: 15,
  },
  headerView: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "column",
    // borderColor: "blue",
    // borderWidth: 3,
    paddingVertical: 30,
    width: "100%",
  },
  profileImage: {
    height: 150,
    width: 150,
    borderRadius: 100,
    marginLeft: 40,
    marginRight: 30,
  },
  headingText: {
    alignItems: "center",
    marginTop: 10,
  },
  headingTitle: {
    fontSize: 30,
    color: "black",
  },
  headingSub: {
    fontSize: 15,
    color: "black",
  },
  tabView: {
    flex: 0.2,
    flexDirection: "row",
    alignItems: "center",
    // borderWidth: 1,
    // borderColor: "black",
    marginHorizontal: 20,
  },
  tab: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    borderColor: "lightgrey",
    borderWidth: 1,
    height: "100%",
  },
  bodyView: {
    flex: 2,
    backgroundColor: "offwhite",
    // borderColor: "red",
    // borderWidth: 3,
    marginHorizontal: 20,
    marginBottom: 20,
    paddingHorizontal: 20,
    borderRadius: 10,
  },
  bodyText: {
    alignItems: "left",
    margin: 10,
  },

  logoView: {
    flexDirection: "row",
    alignItems: "center",
  },
  logo: {
    height: 40,
    width: 40,
    margin: 15,
  },
  descriptionTitle: {
    fontSize: 20,
    fontWeight: 10,
  },
  description: {
    fontSize: 15,
    fontWeight: 10,
    marginVertical: 10,
  },
});

//COLORS: #E50FED #E933F0 #FAFEFD #6B00A3 #D14DFF #040301
