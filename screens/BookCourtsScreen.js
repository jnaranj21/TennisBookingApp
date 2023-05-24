import {
  ScrollView,
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
} from "react-native";
import React, { useState } from "react";
import { COURTS } from "../shared/COURTS";
import { Card } from "react-native-elements";
import { Icon } from "react-native-elements";

const CourtsList = () => {
  return (
    <View>
      {COURTS.map((item, index) => (
        <Card key={index} containerStyle={{ padding: 0, borderRadius: 10 }}>
          <Card.Image source={item.image} style={{ borderRadius: 10 }}>
            <View style={{ justifyContent: "center", flex: 1 }}>
              <Text
                style={{
                  color: "#fff",
                  textAlign: "center",
                  fontSize: 20,
                  fontWeight: "bold",
                  letterSpacing: -0.8,
                }}
              >
                {item.name}
              </Text>
            </View>
          </Card.Image>
        </Card>
      ))}
    </View>
  );
};

const BookCourtsScreen = () => {
  const [isFocused, setIsFocused] = useState(false);
  const [searchCourt, setSearchCourt] = useState("");
  const [searchResult, setSearchResult] = useState([]);

  const handleSearch = () => {
    const result = COURTS.filter((court) =>
      court.title.toLowerCase().includes(searchCourt.toLowerCase())
    );
    setSearchResult(result);
    console.log(result);
    return (
      <View>
        <FlatList
          data={searchResult}
          keyExtractor={(court, index) => index.toString()}
          renderItem={({ court }) => <Text>{court.title}</Text>}
        />
      </View>
    );
  };

  return (
    <ScrollView style={{ backgroundColor: "#fff" }}>
      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-between",
          marginLeft: 15,
          marginRight: 20,
        }}
      >
        <View
          style={[
            styles.inputContainer,
            { borderColor: isFocused ? "black" : "#f5f5f5" },
          ]}
        >
          <TextInput
            placeholder="Search courts by name"
            value={searchCourt}
            onChangeText={(text) => {
              setSearchCourt(text);
            }}
            onFocus={() => setIsFocused(true)}
            onBlur={() => setIsFocused(false)}
          />
          <Icon
            name="search"
            type="feather"
            style={{ fontWeight: 100 }}
            onPress={handleSearch}
          />
        </View>
        <View
          style={{
            height: 55,
            justifyContent: "flex-end",
          }}
        >
          <TouchableOpacity>
            <Icon name="filter" type="feather" />
            <Text style={{ fontSize: 12, color: "gray" }}>filter</Text>
          </TouchableOpacity>
        </View>
        <View
          style={{
            height: 55,
            justifyContent: "flex-end",
          }}
        >
          <TouchableOpacity>
            <Icon name="map" type="feather" />
            <Text style={{ fontSize: 12, color: "gray" }}>map</Text>
          </TouchableOpacity>
        </View>
      </View>
      <CourtsList />
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  inputContainer: {
    height: 55,
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
    backgroundColor: "#f5f5f5",
    borderWidth: 0.5,
    borderRadius: 10,
    width: 260,
  },
});

export default BookCourtsScreen;
