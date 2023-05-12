import { Platform, View } from "react-native";
import Constants from "expo-constants";
import LoginScreen from "./LoginScreen";
import RegistrationForm from "./RegistrationForm";
import LoginForm from "./LoginForm";
import { createStackNavigator } from "@react-navigation/stack";

const LoginNavigator = () => {
  const Stack = createStackNavigator();
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Login Home"
        component={LoginScreen}
        options={{ headerShown: false }}
      />
      <Stack.Screen name="Registration" component={RegistrationForm} />
      <Stack.Screen name="Login" component={LoginForm} />
    </Stack.Navigator>
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
