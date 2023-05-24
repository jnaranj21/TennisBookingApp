import { View, Text } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";
import React from "react";

const Header = () => {
  return (
    <View style={{ backgroundColor: "#fff" }}>
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
          <TouchableOpacity>
            <Icon
              name="email-outline"
              style={{ paddingTop: 12, fontSize: 25 }}
            />
          </TouchableOpacity>
          <TouchableOpacity>
            <Icon
              name="bell-outline"
              style={{ paddingTop: 12, fontSize: 25, paddingLeft: 20 }}
            />
          </TouchableOpacity>
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
                ENJOY THE ULTIMATE TENNIS EXPERIENCE
              </Text>
              <Text>
                Become premium and receive notifications about available courts,
                make your matches more visible and get amazing offers.
              </Text>
            </View>
            <View style={{ alignSelf: "center", paddingLeft: 15 }}>
              <Icon
                name="chevron-right"
                type="font-awesome"
                style={{ fontSize: 35 }}
              />
            </View>
          </View>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Header;
