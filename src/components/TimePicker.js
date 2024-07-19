import { TimerPickerModal } from "react-native-timer-picker";
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
} from "react-native";
import React, { useState, useContext } from "react";

// import { LinearGradient } from "expo-linear-gradient"; // or `import LinearGradient from "react-native-linear-gradient"`
// import { Audio } from "expo-av"; // for audio feedback (click sound as you scroll)
// import * as Haptics from "expo-haptics"; // for haptic feedback

const TimePicker = () => {
  const [showPicker, setShowPicker] = useState(false);
  const [timeString, setTimeString] = useState();

  const formatTime = ({ hours, minutes }) =>
    //   : {
    //     hours?: number,
    //     minutes?: number,
    //     seconds?: number,
    //   }
    {
      const timeParts = [];

      if (hours !== undefined) {
        timeParts.push(hours.toString().padStart(2, "0"));
      }
      if (minutes !== undefined) {
        timeParts.push(minutes.toString().padStart(2, "0"));
      }

      return timeParts.join(":");
    };

  return (
    <View
      style={{
        // backgroundColor: "#F1F1F1",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <Text style={{ fontSize: 18, color: "#202020" }}>
        {timeString !== null ? "Time set for" : "No time set"}
      </Text>
      <TouchableOpacity activeOpacity={0.7} onPress={() => setShowPicker(true)}>
        <View style={{ alignItems: "center" }}>
          {timeString !== null ? (
            <Text style={{ color: "#202020", fontSize: 48 }}>{timeString}</Text>
          ) : null}
          <TouchableOpacity
            activeOpacity={0.7}
            onPress={() => setShowPicker(true)}
          >
            <View style={{ marginTop: 30 }}>
              <Text
                style={{
                  paddingVertical: 10,
                  paddingHorizontal: 18,
                  borderWidth: 1,
                  borderRadius: 10,
                  fontSize: 16,
                  overflow: "hidden",
                  borderColor: "black",
                  color: "black",
                }}
              >
                Set Time
              </Text>
            </View>
          </TouchableOpacity>
        </View>
      </TouchableOpacity>
      <TimerPickerModal
        secondsPickerIsDisabled="false"
        hideSeconds="true"
        padHoursWithZero="true"
        minuteLabel=""
        hourLabel=""
        visible={showPicker}
        setIsVisible={setShowPicker}
        onConfirm={(pickedDuration) => {
          setTimeString(formatTime(pickedDuration));
          //   setTimeString(pickedDuration);
          setShowPicker(false);
        }}
        modalTitle="Set Time"
        onCancel={() => setShowPicker(false)}
        closeOnOverlayPress
        // use12HourPicker
        // Audio={Audio}
        // supply your own custom click sound asset
        // clickSoundAsset={require("./assets/custom_click.mp3")}
        // LinearGradient={LinearGradient}
        // Haptics={Haptics}
        styles={{
          theme: "light",
        }}
      />
    </View>
  );
};

export default TimePicker;

const styles = StyleSheet.create({});
