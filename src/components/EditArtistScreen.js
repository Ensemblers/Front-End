import React from "react";
import { View, StyleSheet, TextInput } from "react-native";
import { Context as ArtistContext } from "../../context/ArtistContext";

const [input, setInput] = useState();
const { state: artist } = useContext(ArtistContext);

export const MainField = () => {
  return (
    <View>
      {artist.map((l, i) => (
        <View key={i} style={styles.inputRow}>
          <Text style={styles.label}>Artist Name:</Text>
          <TextInput
            style={styles.input}
            placeholder={l.artist_name}
            onChangeText={() => {
              setInput();
            }}
          />
        </View>
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  inputRow: {
    flexDirection: "row",
    marginLeft: 20,
  },
  input: {
    fontSize: 18,
    borderWidth: 1,
    borderColor: "black",
    marginLeft: 15,
    width: 200,
  },
  label: {
    fontSize: 20,
    marginBottom: 5,
    marginLeft: 5,
  },
});

export default EditArtistPage;
