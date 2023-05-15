import React from "react";
import { Text } from "react-native-elements";
import { StyleSheet } from "react-native";

function Logo({ firstColor, secondColor }) {
  return (
    <Text style={[styles.text, firstColor]}>
      EASY{""}
      <Text style={[styles.text, secondColor]}>TENNIS</Text>
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
