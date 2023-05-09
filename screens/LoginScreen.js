import React from "react";
import { View, StyleSheet } from "react-native";
import Video from "react-native-video";
import coverVideo from "../assets/videos/coverVideo.mp4";

const LoginScreen = () => {
  return (
    <View style={styles.container}>
      <Video
        source={coverVideo}
        style={StyleSheet.absoluteFill}
        resizeMode="cover"
        repeat
        muted
        playInBackground={false}
        playWhenInactive={false}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default LoginScreen;
