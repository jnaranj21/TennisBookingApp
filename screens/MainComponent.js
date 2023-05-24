import { Platform, View } from "react-native";
import Constants from "expo-constants";
import LandingScreen from "./LandingScreen";
import HomeScreen from "./HomeScreen";
import ProfileScreen from "./ProfileScreen";
import TournamentsScreen from "./TournamentsScreen";
import CommunityScreen from "./CommunityScreen";
import RegistrationScreen from "./RegistrationScreen";
import LoginScreen from "./LoginScreen";
import BookCourtsScreen from "./BookCourtsScreen";
import BookLessonsScreen from "./BookLessonsScreen";
import JoinMatchesScreen from "./JoinMatchesScreen";
import { createStackNavigator } from "@react-navigation/stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Text } from "react-native-elements";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";

const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();

const LoginNavigator = () => {
  return (
    <Stack.Navigator initialRouteName="LandingScreen">
      <Stack.Screen
        name="LandingScreen"
        component={LandingScreen}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="Registration"
        component={RegistrationScreen}
        options={{ headerTitleAlign: "center" }}
      />
      <Stack.Screen
        name="Login"
        component={LoginScreen}
        options={{ headerTitleAlign: "center" }}
      />
      <Stack.Screen
        name="Explore"
        component={HomeTabNavigator}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="Book Courts"
        component={BookCourtsScreen}
        options={{ headerTitleAlign: "center" }}
      />
      <Stack.Screen
        name="Book Lessons"
        component={BookLessonsScreen}
        options={{ headerTitleAlign: "center" }}
      />
      <Stack.Screen
        name="Join Matches"
        component={JoinMatchesScreen}
        options={{ headerTitleAlign: "center" }}
      />
    </Stack.Navigator>
  );
};

const HomeNavigator = () => {
  return (
    <Stack.Navigator initialRouteName="Explore">
      <Stack.Screen
        name="Explore"
        component={HomeTabNavigator}
        options={{ headerShown: false }}
      />
      <Stack.Screen name="BookCourts" component={BookCourtsScreen} />
      <Stack.Screen name="BookLessons" component={BookLessonsScreen} />
      <Stack.Screen name="JoinMatches" component={JoinMatchesScreen} />
    </Stack.Navigator>
  );
};

const HomeTabNavigator = () => {
  return (
    <Tab.Navigator
      tabBarOptions={{
        showLabel: false,
        style: {
          position: "absolute",
          height: 60,
          backgroundColor: "#fff",
        },
      }}
    >
      <Tab.Screen
        name="Explore"
        component={HomeScreen}
        options={{
          tabBarIcon: ({ focused }) => (
            <View>
              <Icon
                name="tennis"
                color="black"
                style={{ fontSize: 22, textAlign: "center" }}
              />
              <Text>Explore</Text>
            </View>
          ),
        }}
      />
      <Tab.Screen
        name="Tournaments"
        component={TournamentsScreen}
        options={{
          tabBarIcon: ({ focused }) => (
            <View>
              <Icon
                name="trophy-outline"
                color="black"
                style={{ fontSize: 24, textAlign: "center" }}
              />
              <Text>League</Text>
            </View>
          ),
        }}
      />
      <Tab.Screen
        name="Social"
        component={CommunityScreen}
        options={{
          tabBarIcon: ({ focused }) => (
            <View>
              <Icon
                name="home-outline"
                color="black"
                style={{ fontSize: 26, textAlign: "center" }}
              />
              <Text>Social</Text>
            </View>
          ),
        }}
      />
      <Tab.Screen
        name="Profile"
        component={ProfileScreen}
        options={{
          tabBarIcon: ({ focused }) => (
            <View>
              <Icon
                name="account-outline"
                style={{ fontSize: 26, textAlign: "center" }}
              />
              <Text style={{ textAlign: "center" }}>Profile</Text>
            </View>
          ),
        }}
      />
    </Tab.Navigator>
  );
};

const Main = () => {
  return (
    <View
      style={{
        flex: 1,
        paddingTop: Platform.OS === "ios" ? 0 : Constants.statusBarHeight,
      }}
    >
      <LoginNavigator />
    </View>
  );
};

export default Main;
