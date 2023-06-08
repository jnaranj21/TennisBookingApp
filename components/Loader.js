import React from "react";
import {
  useWindowDimensions,
  View,
  Text,
  ActivityIndicator,
  StyleSheet,
} from "react-native";

const Loader = ({ visible = true }) => {
  const { width, height } = useWindowDimensions();
  return (
    visible && (
      <View style={[style.container, { width, height }]}>
        <View style={style.loader}>
          <ActivityIndicator size="large" color="black" />
          <Text style={{ marginLeft: 10, fontSize: 16 }}>Loading...</Text>
        </View>
      </View>
    )
  );
};

const style = StyleSheet.create({
  loader: {
    height: 70,
    backgroundColor: "#fff",
    marginHorizontal: 50,
    borderRadius: 5,
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 20,
  },
  container: {
    position: "absolute",
    zIndex: 10,
    backgroundColor: "rgba(0,0,0,0.5)",
    justifyContent: "center",
  },
});

export default Loader;
