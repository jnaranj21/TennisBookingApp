import MainComponent from "./screens/MainComponent";
import { HomeNavigator } from "./screens/MainComponent";
import { NavigationContainer } from "@react-navigation/native";

export default function App() {
  return (
    <NavigationContainer>
      <MainComponent />
    </NavigationContainer>
  );
}
