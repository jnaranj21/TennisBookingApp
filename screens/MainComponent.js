import { Platform, View } from "react-native";
import Constants from "expo-constants";
import LoginScreen from "./LoginScreen";
import HomeScreen from "./HomeScreen";
import ProfileScreen from "./ProfileScreen";
import TournamentsScreen from "./TournamentsScreen";
import CommunityScreen from "./CommunityScreen";
import RegistrationForm from "./RegistrationForm";
import LoginForm from "./LoginForm";
import { createStackNavigator } from "@react-navigation/stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Icon, Text } from "react-native-elements";

const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();

const LoginNavigator = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Login Home"
        component={LoginScreen}
        options={{ headerShown: false }}
      />
      <Stack.Screen name="Registration" component={RegistrationForm} />
      <Stack.Screen name="Login" component={LoginForm} />
      <Stack.Screen
        name="Explore"
        component={HomeNavigator}
        options={{ headerShown: false }}
      />
    </Stack.Navigator>
  );
};

const HomeNavigator = () => {
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
              <Icon name="sports-tennis" type="materialicons" color="black" />
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
              <Icon name="trophy" type="font-awesome" color="black" />
              <Text>Torunaments</Text>
            </View>
          ),
        }}
      />
      <Tab.Screen
        name="Community"
        component={CommunityScreen}
        options={{
          tabBarIcon: ({ focused }) => (
            <View>
              <Icon name="home" type="entypo" color="black" />
              <Text>Community</Text>
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
              <Icon name="user-circle-o" type="font-awesome" />
              <Text>Profile</Text>
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
