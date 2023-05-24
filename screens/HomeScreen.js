import { View, Text, StyleSheet } from "react-native";
import React from "react";
import { TouchableOpacity } from "react-native-gesture-handler";
import { Card } from "react-native-elements";
import Header from "../components/Header";

const localCourtImagePath = require("../assets/images/BgImg.jpg");
const localCoachImagePath = require("../assets/images/CoachChinoRocha.jpg");
const localMatchImagePath = require("../assets/images/CoachJaySchiemann.jpg");

const HomeScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Header />
      <View style={{ paddingLeft: 15, paddingVertical: 15 }}>
        <Text style={{ fontSize: 20, fontWeight: "300" }}>
          Hey, Juanjo! Let's play tennis!
        </Text>
        <TouchableOpacity onPress={() => navigation.navigate("Book Courts")}>
          <Card
            containerStyle={{
              marginRight: 15,
              marginLeft: 0,
              padding: 0,
              borderRadius: 10,
            }}
          >
            <Card.Image
              source={localCourtImagePath}
              style={{ borderRadius: 10 }}
            >
              <View
                style={{
                  borderTopRightRadius: 10,
                  borderTopLeftRadius: 10,
                }}
              >
                <Text
                  style={{
                    padding: 15,
                    fontWeight: "bold",
                    letterSpacing: -0.8,
                    fontSize: 16,
                  }}
                >
                  BOOK COURTS
                </Text>
              </View>
            </Card.Image>
          </Card>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate("Book Lessons")}>
          <Card
            containerStyle={{
              marginRight: 15,
              marginLeft: 0,
              padding: 0,
              borderRadius: 10,
            }}
          >
            <Card.Image
              source={localCoachImagePath}
              style={{ borderRadius: 10 }}
            >
              <View
                style={{
                  borderTopRightRadius: 10,
                  borderTopLeftRadius: 10,
                }}
              >
                <Text
                  style={{
                    padding: 15,
                    textAlign: "right",
                    fontWeight: "bold",
                    letterSpacing: -0.8,
                    fontSize: 16,
                  }}
                >
                  BOOK LESSONS
                </Text>
              </View>
            </Card.Image>
          </Card>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate("Join Matches")}>
          <Card
            containerStyle={{
              marginRight: 15,
              marginLeft: 0,
              padding: 0,
              borderRadius: 10,
            }}
          >
            <Card.Image
              source={localMatchImagePath}
              style={{ borderRadius: 10 }}
            >
              <View
                style={{
                  borderTopRightRadius: 10,
                  borderTopLeftRadius: 10,
                }}
              >
                <Text
                  style={{
                    padding: 15,
                    fontWeight: "bold",
                    letterSpacing: -0.8,
                    fontSize: 16,
                  }}
                >
                  JOIN MATCHES
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
