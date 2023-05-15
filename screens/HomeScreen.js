import { View, Text, StyleSheet } from "react-native";
import React from "react";
import { TouchableOpacity } from "react-native-gesture-handler";
import { Icon } from "@rneui/themed";
import { Card } from "react-native-elements";
import LinearGradient from "react-native-linear-gradient";

const localCourtImagePath = require("../assets/images/BgImg.jpg");
const localCoachImagePath = require("../assets/images/CoachChinoRocha.jpg");
const localMatchImagePath = require("../assets/images/CoachJaySchiemann.jpg");

const HomeScreen = () => {
  return (
    <View style={styles.container}>
      <View
        style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-between",
          paddingTop: 10,
        }}
      >
        <View style={{ left: 15 }}>
          <TouchableOpacity>
            <Text
              style={{ fontSize: 35, fontWeight: "300", letterSpacing: -4 }}
            >
              EASY<Text style={{ color: "gray" }}>TENNIS</Text>
            </Text>
          </TouchableOpacity>
        </View>
        <View
          style={{
            display: "flex",
            flexDirection: "row",
            right: 15,
          }}
        >
          <Icon
            name="envelope-o"
            type="font-awesome"
            style={{ paddingTop: 12 }}
          />
          <Icon
            name="bell-o"
            type="font-awesome"
            style={{ paddingTop: 12, paddingLeft: 20 }}
          />
        </View>
      </View>
      <View
        style={{
          display: "flex",
          paddingHorizontal: 15,
          paddingVertical: 15,
          borderWidth: 0.5,
          borderColor: "gray",
        }}
      >
        <TouchableOpacity>
          <View style={{ flexDirection: "row" }}>
            <View style={{ width: 320 }}>
              <Text style={{ fontWeight: "bold", paddingBottom: 8 }}>
                ENJOY THE ULTIMATE EXPERIENCE
              </Text>
              <Text>
                Become premium and receive notifications about available courts,
                make your matches more visible and get amazing offers.
              </Text>
            </View>
            <View style={{ alignSelf: "center", paddingLeft: 15 }}>
              <Icon name="angle-right" type="font-awesome" />
            </View>
          </View>
        </TouchableOpacity>
      </View>
      <View style={{ paddingLeft: 15, paddingVertical: 15 }}>
        <Text style={{ fontSize: 20, fontWeight: "300" }}>
          Hey, Juanjo! Let's play tennis!
        </Text>
        <TouchableOpacity>
          <Card
            containerStyle={{
              marginRight: 15,
              marginLeft: 0,
              padding: 0,
            }}
          >
            <Card.Image source={localCourtImagePath}>
              <View style={{ backgroundColor: "rgba(255,255,255,.5)" }}>
                <Text style={{ padding: 5, fontWeight: "bold" }}>
                  BOOK A COURT
                </Text>
              </View>
            </Card.Image>
          </Card>
        </TouchableOpacity>
        <TouchableOpacity>
          <Card containerStyle={{ marginRight: 15, marginLeft: 0, padding: 0 }}>
            <Card.Image source={localCoachImagePath}>
              <View style={{ backgroundColor: "rgba(255,255,255,.5)" }}>
                <Text style={{ padding: 5, fontWeight: "bold" }}>
                  BOOK LESSONS
                </Text>
              </View>
            </Card.Image>
          </Card>
        </TouchableOpacity>
        <TouchableOpacity>
          <Card containerStyle={{ marginRight: 15, marginLeft: 0, padding: 0 }}>
            <Card.Image source={localMatchImagePath}>
              <View style={{ backgroundColor: "rgba(255,255,255,.5)" }}>
                <Text style={{ padding: 5, fontWeight: "bold" }}>
                  JOIN A MATCH
                </Text>
              </View>
            </Card.Image>
          </Card>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
export default HomeScreen;
