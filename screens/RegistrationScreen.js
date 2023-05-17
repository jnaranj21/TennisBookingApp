import React, { useState } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { View, Text, Keyboard, Dimensions } from "react-native";
import Input from "../components/Input";
import CustomButton from "../components/Button";

const RegistrationScreen = ({ navigation }) => {
  const [inputs, setInputs] = useState({
    name: "",
    email: "",
    phone: "",
    password: "",
  });

  const [errors, setErrors] = useState({});
  const [loading, setLoading] = useState(false);

  const validate = () => {
    Keyboard.dismiss();
    let isValid = true;
    if (!inputs.name) {
      handleError("Please enter your full name", "name");
      isValid = false;
    }
    if (!inputs.email) {
      handleError("Please enter your email address", "email");
      isValid = false;
    } else if (!inputs.email.match(/\S+@\S+\.\S+/)) {
      handleError("Please enter a valid email", "email");
      isValid = false;
    }
    if (!inputs.phone) {
      handleError("Please enter your phone number", "phone");
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
      register();
    }
  };

  const register = () => {
    navigation.navigate("Explore");
  };

  const handleOnChange = (text, input) => {
    setInputs((prevState) => ({ ...prevState, [input]: text }));
  };

  const handleError = (error, input) => {
    setErrors((prevState) => ({ ...prevState, [input]: error }));
  };

  return (
    <View
      style={{
        width: Dimensions.get("window").width,
        height: Dimensions.get("window").height,
        backgroundColor: "#fff",
      }}
    >
      <View style={{ marginVertical: 20 }}>
        <Text style={{ fontSize: 18, fontWeight: "bold", margin: 15 }}>
          Enter your details to register
        </Text>
        <Input
          placeholder="Enter your full name"
          label="Full name"
          iconName="account-outline"
          error={errors.name}
          onFocus={() => {
            handleError(null, "name");
          }}
          onChangeText={(text) => handleOnChange(text, "name")}
        />
        <Input
          keyboardType="numeric"
          placeholder="Enter your phone number"
          label="Phone number"
          iconName="phone-outline"
          error={errors.phone}
          onFocus={() => {
            handleError(null, "phone");
          }}
          onChangeText={(text) => handleOnChange(text, "phone")}
        />
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
          onPress={validate}
        />
        <Text
          style={{ alignSelf: "flex-start", marginLeft: 50, marginTop: 10 }}
          onPress={() => navigation.navigate("Login")}
        >
          Already have an account? Login!
        </Text>
      </View>
    </View>
  );
};

export default RegistrationScreen;
