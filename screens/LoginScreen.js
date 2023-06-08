import React, { useState } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { View, Text, Keyboard, Dimensions, Alert } from "react-native";
import Input from "../components/Input";
import CustomButton from "../components/Button";
import Loader from "../components/Loader";

const LoginScreen = ({ navigation }) => {
  const [inputs, setInputs] = useState({
    email: "",
    password: "",
  });

  const [errors, setErrors] = useState({});
  const [loading, setLoading] = useState(false);

  const validate = () => {
    Keyboard.dismiss();
    let isValid = true;
    if (!inputs.email) {
      handleError("Please enter your email address", "email");
      isValid = false;
    } else if (!inputs.email.match(/\S+@\S+\.\S+/)) {
      handleError("Please enter a valid email", "email");
      isValid = false;
    }
    if (!inputs.password) {
      handleError("Please enter your password", "password");
      isValid = false;
    } else if (inputs.password.length < 5) {
      handleError("Your password must be at least 5 digits", "password");
      isValid = false;
    }

    if (isValid) {
      login();
    }
  };

  const login = () => {
    setLoading(true);
    setTimeout(async () => {
      setLoading(false);
      let userData = await AsyncStorage.getItem("userData");
      if (userData) {
        userData = JSON.parse(userData);
        if (
          inputs.email == userData.email &&
          inputs.password == userData.password
        ) {
          navigation.navigate("Explore");
          AsyncStorage.setItem(
            "userData",
            JSON.stringify({ ...userData, loggedIn: true })
          );
        } else {
          Alert.alert("Error", "Invalid Details");
          console.log(
            inputs.email,
            inputs.password,
            userData.email,
            userData.password
          );
        }
      } else {
        Alert.alert("Error", "User does not exist");
      }
    }, 2000);
  };

  const handleOnChange = (text, input) => {
    setInputs((prevState) => ({ ...prevState, [input]: text }));
  };

  const handleError = (error, input) => {
    setErrors((prevState) => ({ ...prevState, [input]: error }));
  };

  return (
    <View>
      <Loader visible={loading} />
      <View
        style={{
          width: Dimensions.get("window").width,
          height: Dimensions.get("window").height,
          backgroundColor: "#fff",
        }}
      >
        <View style={{ marginVertical: 20 }}>
          <Text style={{ fontSize: 18, fontWeight: "bold", margin: 15 }}>
            Enter your details to log in
          </Text>
          <Input
            placeholder="Enter your email address"
            label="Email"
            iconName="email-outline"
            error={errors.email}
            onFocus={() => {
              handleError(null, "email");
            }}
            onChangeText={(text) => handleOnChange(text, "email")}
          />
          <Input
            password
            placeholder="Enter your password"
            label="Password"
            iconName="lock-outline"
            error={errors.password}
            onFocus={() => {
              handleError(null, "password");
            }}
            onChangeText={(text) => handleOnChange(text, "password")}
          />
        </View>
        <View style={{ alignItems: "center" }}>
          <CustomButton
            activeOpacity={0.5}
            btnCustomStyles={{
              borderColor: "black",
              borderWidth: 1,
              backgroundColor: "#af0",
            }}
            btnTextCustom={{ color: "black" }}
            text="log in"
            onPress={() => {
              validate();
            }}
          />
          <Text
            style={{ alignSelf: "flex-start", marginLeft: 50, marginTop: 10 }}
          >
            Forgot your passoword? Reset it!
          </Text>
        </View>
      </View>
    </View>
  );
};

export default LoginScreen;
