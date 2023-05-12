import React from "react";
import { Text } from "react-native-elements";
import { StyleSheet } from "react-native";

function Logo({ firstColorStyle, secondColorStyle }) {
  return (
    <Text style={[styles.text, firstColorStyle]}>
      EASY{""}
      <Text style={[styles.text, secondColorStyle]}>TENNIS</Text>
    </Text>
  );
}

const styles = StyleSheet.create({
  text: {
    fontSize: 60,
    fontWeight: "bold",
    letterSpacing: -5,
  },
});

export default Logo;
