import React from "react";
import { View, StyleSheet, Dimensions, Text } from "react-native";
import { Video } from "expo-av";
import { Image } from "react-native-elements";
import Logo from "../components/Logo";
import CustomButton from "../components/Button";

const localVideoPath = require("../assets/videos/coverVideo.mp4");
const googleLogoPath = require("../assets/images/google-logo.png");
const facebookLogoPath = require("../assets/images/facebook-logo.png");

const LandingScreen = ({ navigation }) => {
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
          firstColor={{ color: "#fb0" }}
          secondColor={{
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
            borderWidth: 1,
            backgroundColor: "rgba(0,0,0,0.35)",
          }}
          text="register"
        />
        <CustomButton
          onPress={() => navigation.navigate("Login")}
          btnCustomStyles={{
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
          <Image
            source={googleLogoPath}
            style={{
              width: 65,
              height: 65,
              marginRight: 20,
              borderColor: "white",
              borderRadius: 5,
              borderWidth: 1,
            }}
          />
          <Image
            source={facebookLogoPath}
            style={{
              width: 65,
              height: 65,
              borderColor: "white",
              borderRadius: 5,
              borderWidth: 1,
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
          By registering you agree to the terms of use and{"\n"}privacy policy
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

export default LandingScreen;
