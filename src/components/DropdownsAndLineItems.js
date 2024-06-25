import React, { useState, useEffect } from "react";
import { StyleSheet } from "react-native";
import { Dropdown } from "react-native-element-dropdown";
import AntDesign from "@expo/vector-icons/AntDesign";

export const DropdownComponent = ({ Data, Placeholder, Value, OnChange }) => {
  return (
    <>
      <Dropdown
        style={styles.dropdown}
        placeholderStyle={styles.placeholderStyle}
        selectedTextStyle={styles.selectedTextStyle}
        inputSearchStyle={styles.inputSearchStyle}
        iconStyle={styles.iconStyle}
        data={Data}
        search
        maxHeight={300}
        labelField="label"
        valueField="value"
        placeholder={Placeholder}
        searchPlaceholder="Search..."
        value={Value}
        onChange={
          OnChange
          //     (item) => {
          //   setValue(item.Value);
          // }
        }
      />
    </>
  );
};

export const DropdownGenre = ({ Data, Placeholder, Value, OnChange }) => {
  const [value, setValue] = useState(null);

  return (
    <>
      <Dropdown
        style={styles.dropdownGenre}
        placeholderStyle={styles.placeholderStyle}
        selectedTextStyle={styles.selectedTextStyle}
        inputSearchStyle={styles.inputSearchStyle}
        iconStyle={styles.iconStyle}
        data={Data}
        search
        maxHeight={300}
        labelField="label"
        valueField="value"
        placeholder={Placeholder}
        searchPlaceholder="Search..."
        value={Value}
        onChange={
          OnChange
          //     (item) => {
          //   setValue(item.value);
          // }
        }
      />
    </>
  );
};

const styles = StyleSheet.create({
  dropdown: {
    margin: 16,
    height: 50,
    width: 130,
    borderBottomColor: "gray",
    borderBottomWidth: 0.5,
    alignSelf: "center",
  },
  dropdownGenre: {
    margin: 16,
    height: 50,
    width: 340,
    borderBottomColor: "gray",
    borderBottomWidth: 0.5,
    alignSelf: "center",
  },
  icon: {
    marginRight: 5,
  },
  placeholderStyle: {
    fontSize: 16,
  },
  selectedTextStyle: {
    fontSize: 16,
  },
  iconStyle: {
    width: 20,
    height: 20,
  },
  inputSearchStyle: {
    height: 40,
    fontSize: 16,
  },
});
