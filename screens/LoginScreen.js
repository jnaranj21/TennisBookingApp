import React, { useState } from "react";
import {
  View,
  StyleSheet,
  Dimensions,
  Text,
  TouchableOpacity,
} from "react-native";
import { Video } from "expo-av";
import { Icon } from "react-native-elements";
import Logo from "../components/Logo";
import CustomButton from "../components/Button";

const localVideoPath = require("../assets/videos/coverVideo.mp4");

const LoginScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Video
        source={localVideoPath}
        rate={1.0}
        volume={1.0}
        isMuted={true}
        resizeMode="cover"
        shouldPlay
        isLooping
        style={styles.videoStyles}
      />
      <View
        style={{
          flex: 1,
          alignItems: "center",
          justifyContent: "flex-start",
          top: 200,
        }}
      >
        <Logo
          firstColorStyle={{ color: "#fb0" }}
          secondColorStyle={{
            color: "#af0",
          }}
        />
        <Text
          style={{
            color: "white",
            fontWeight: "bold",
            fontSize: 20,
            alignSelf: "flex-start",
            left: 40,
            marginBottom: 60,
          }}
        >
          #1 TENNIS APP IN SPAIN
        </Text>
        <CustomButton
          onPress={() => navigation.navigate("Registration")}
          btnCustomStyles={{
            borderColor: "#fff",
            borderWidth: 3,
            backgroundColor: "rgba(0,0,0,0.35)",
          }}
          text="register"
        />
        <CustomButton
          onPress={() => navigation.navigate("Login")}
          btnCustomStyles={{
            borderColor: "#fff",
            borderWidth: 3,
            backgroundColor: "#fff",
          }}
          btnTextCustom={{
            color: "black",
          }}
          text="log in"
        />
        <Text
          style={{
            color: "white",
            marginTop: 30,
            alignSelf: "flex-start",
            left: 40,
          }}
        >
          or continue with:
        </Text>
        <View style={{ flexDirection: "row", marginTop: 30 }}>
          <Icon
            name="google"
            type="font-awesome"
            color="white"
            style={{
              borderColor: "white",
              borderWidth: 3,
              width: 65,
              height: 65,
              borderRadius: 5,
              alignContent: "center",
              justifyContent: "center",
              marginRight: 10,
            }}
          />
          <Icon
            name="facebook"
            type="font-awesome"
            color="white"
            style={{
              borderColor: "white",
              borderWidth: 3,
              width: 65,
              height: 65,
              borderRadius: 5,
              alignContent: "center",
              justifyContent: "center",
            }}
          />
        </View>
        <Text
          style={{
            color: "white",
            fontWeight: "bold",
            marginTop: 80,
            alignSelf: "flex-start",
            left: 40,
          }}
        >
          GAME. SET. MATCH. PLAY WITH US
        </Text>
        <Text
          style={{
            color: "white",
            alignSelf: "flex-start",
            left: 40,
          }}
        >
          By registering you agree to the terms of use and {"\n"}privacy policy
          of our app
        </Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  videoStyles: {
    position: "absolute",
    width: Dimensions.get("window").width,
    height: Dimensions.get("window").height,
  },
  btnSecondary: {
    marginTop: 15,
    paddingVertical: 8,
    width: 300,
    borderRadius: 15,
    borderWidth: 3,
    borderColor: "#fff",
    backgroundColor: "#fff",
  },
  btnTextSecodary: {
    color: "black",
    fontWeight: "bold",
    fontSize: 24,
    textAlign: "center",
  },
});

export default LoginScreen;
