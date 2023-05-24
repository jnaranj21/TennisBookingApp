import { View, Text, StyleSheet, TextInput } from "react-native";
import React, { useState } from "react";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";

const Input = ({
  label,
  iconName,
  error,
  password,
  onFocus = () => {},
  ...props
}) => {
  const [isFocused, setIsFocused] = useState(false);
  const [hidePassword, setHidePassword] = useState(password);

  return (
    <View style={{ marginBottom: 20 }}>
      <Text style={style.label}>{label}</Text>
      <View
        style={[
          style.inputContainer,
          { borderColor: error ? "red" : isFocused ? "black" : "#f5f5f5" },
        ]}
      >
        <Icon
          name={iconName}
          style={{
            fontSize: 30,
            color: "black",
            marginRight: 10,
          }}
        />
        <TextInput
          autoCorrect={false}
          onFocus={() => {
            onFocus();
            setIsFocused(true);
          }}
          onBlur={() => setIsFocused(false)}
          secureTextEntry={hidePassword}
          style={{ flex: 1 }}
          {...props}
        />
        {password && (
          <Icon
            name={hidePassword ? "eye-outline" : "eye-off-outline"}
            style={{
              fontSize: 20,
              color: "black",
              marginRight: 10,
            }}
            onPress={() => setHidePassword(!hidePassword)}
          />
        )}
      </View>
      {error && (
        <Text
          style={{
            color: "red",
            fontSize: 12,
            marginTop: 7,
            marginHorizontal: 15,
          }}
        >
          {error}
        </Text>
      )}
    </View>
  );
};

const style = StyleSheet.create({
  label: {
    marginVertical: 5,
    marginHorizontal: 15,
    fontSize: 14,
    color: "grey",
  },
  inputContainer: {
    height: 55,
    backgroundColor: "#f5f5f5",
    flexDirection: "row",
    marginHorizontal: 15,
    paddingHorizontal: 15,
    borderWidth: 0.5,
    alignItems: "center",
    borderRadius: 10,
  },
});
export default Input;
