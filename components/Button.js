import React from "react";
import { useState } from "react";
import { StyleSheet, TouchableOpacity, Text, View } from "react-native";

const CustomizedButton = ({ text, onPress, buttonStyle }) => {
  const STYLES = ["btn", "btnSecondary"];
  const checkButtonStyle = STYLES.includes(
    buttonStyle ? buttonStyle : STYLES[0]
  );
  return (
    <TouchableOpacity onPress={onPress}>
      <View style={styles.btn}>
        <Text style={styles.btnText}>{text}</Text>
      </View>
    </TouchableOpacity>
  );
};

const SecondaryButton = ({ text, onPress, buttonStyle }) => {
  const STYLES = ["btn", "btnSecondary"];
  const checkButtonStyle = STYLES.includes(
    buttonStyle ? buttonStyle : STYLES[0]
  );
  return (
    <TouchableOpacity onPress={onPress}>
      <View style={styles.btnSecondary}>
        <Text style={styles.btnText}>{text}</Text>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  btn: {
    marginTop: 15,
    paddingVertical: 8,
    width: 300,
    borderRadius: 15,
    borderColor: "#fff",
    borderWidth: 3,
    backgroundColor: "rgba(0,0,0,0.35)",
  },
  btnSecondary: {
    marginTop: 15,
    paddingVertical: 12,
    paddingHorizontal: 80,
    borderRadius: 15,
    backgroundColor: "#fff",
  },
  btnText: {
    color: "#fff",
    fontWeight: "bold",
    fontSize: 24,
    textAlign: "center",
  },
});

export { CustomizedButton };
export { SecondaryButton };
