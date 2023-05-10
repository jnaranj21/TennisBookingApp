import React, { useEffect } from "react";
import { View, StyleSheet, Dimensions, Text, Button } from "react-native";
import { Video } from "expo-av";
import { CustomizedButton } from "../components/Button";
import { Icon } from "react-native-elements";

const localVideoPath = require("../assets/videos/coverVideo.mp4");

const LoginScreen = () => {
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
        <Text style={{ color: "#fff", fontSize: 54, fontWeight: "bold" }}>
          EASYTENNIS
        </Text>
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
        <CustomizedButton text="register" />
        <CustomizedButton text="sign in" />
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
  btn: {
    flex: 1,
    borderRadius: 30,
    fontSize: 24,
    paddingLeft: 16,
    paddingRight: 16,
    paddingTop: 8,
    paddingBottom: 8,
    backgroundColor: "#fff",
    color: "black",
  },
  secondaryBtn: {
    fontSize: 24,
    paddingLeft: 16,
    paddingRight: 16,
    paddingTop: 8,
    paddingBottom: 8,
    backgroundColor: "black",
  },
});

export default LoginScreen;
