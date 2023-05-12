import React from "react";
import { useState } from "react";
import { StyleSheet, TouchableOpacity, Text, View } from "react-native";

const CustomButton = ({ text, onPress, btnCustomStyles, btnTextCustom }) => {
  return (
    <TouchableOpacity onPress={onPress}>
      <View style={[styles.btn, btnCustomStyles]}>
        <Text style={[styles.btnText, btnTextCustom]}>{text}</Text>
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
  },
  btnText: {
    color: "#fff",
    fontWeight: "bold",
    fontSize: 24,
    textAlign: "center",
  },
});

export default CustomButton;
