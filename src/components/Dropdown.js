import { StyleSheet, Text, View } from "react-native";
import React from "react";
import SelectDropdown from "react-native-select-dropdown";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";

const Dropdown = () => {
  const items = [];
  for (var hour = 0; hour < 24; hour++) {
    items.push([hour, 0]);
    items.push([hour, 30]);
  }

  const date = new Date();
  const formatter = new Intl.DateTimeFormat("en-US", {
    hour: "numeric",
    minute: "numeric",
    hour12: false,
  });

  const range = items.map((time) => {
    const [hour, minute] = time;
    date.setHours(hour);
    date.setMinutes(minute);

    return formatter.format(date);
  });

  return (
    <View>
      <Text>Dropdown</Text>
      <SelectDropdown
        data={range}
        // onSelect={(selectedItem, index) => {
        //   console.log(selectedItem, index);
        // }}
        renderButton={(selectedItem, isOpened) => {
          return (
            <View style={styles.dropdownButtonStyle}>
              {/* {selectedItem && (
                <Icon
                  name={selectedItem.icon}
                  style={styles.dropdownButtonIconStyle}
                />
              )} */}
              <Text style={styles.dropdownButtonTxtStyle}>
                {(selectedItem && selectedItem.title) || "Select your mood"}
              </Text>
              <Icon
                name={isOpened ? "chevron-up" : "chevron-down"}
                style={styles.dropdownButtonArrowStyle}
              />
            </View>
          );
        }}
        renderItem={(item, index, isSelected) => {
          return (
            <View
              style={{
                ...styles.dropdownItemStyle,
                ...(isSelected && { backgroundColor: "#D2D9DF" }),
              }}
            >
              <Icon name={item.icon} style={styles.dropdownItemIconStyle} />
              <Text style={styles.dropdownItemTxtStyle}>{item.title}</Text>
            </View>
          );
        }}
        showsVerticalScrollIndicator={false}
        dropdownStyle={styles.dropdownMenuStyle}
      />
      {/* {venue.map((l, i) => (
            <ListItem key={i} bottomDivider style={styles.listItem}>
              <ListItem.Content>
                <TouchableOpacity
                  onPress={() => {
                    const venue_id = l.venue_id;
                    getVenue(venue_id);
                    navigation.navigate("Venue Page");
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
          ))} */}
    </View>
  );
};

export default Dropdown;

const styles = StyleSheet.create({
  dropdownButtonStyle: {
    width: 200,
    height: 50,
    backgroundColor: "#E9ECEF",
    borderRadius: 12,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    paddingHorizontal: 12,
  },
  dropdownButtonTxtStyle: {
    flex: 1,
    fontSize: 18,
    fontWeight: "500",
    color: "#151E26",
  },
  dropdownButtonArrowStyle: {
    fontSize: 28,
  },
  dropdownButtonIconStyle: {
    fontSize: 28,
    marginRight: 8,
  },
  dropdownMenuStyle: {
    backgroundColor: "#E9ECEF",
    borderRadius: 8,
  },
  dropdownItemStyle: {
    width: "100%",
    flexDirection: "row",
    paddingHorizontal: 12,
    justifyContent: "center",
    alignItems: "center",
    paddingVertical: 8,
  },
  dropdownItemTxtStyle: {
    flex: 1,
    fontSize: 18,
    fontWeight: "500",
    color: "#151E26",
  },
  dropdownItemIconStyle: {
    fontSize: 28,
    marginRight: 8,
  },
});
