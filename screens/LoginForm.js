import { useState } from "react";
import {
  Text,
  TextInput,
  View,
  StyleSheet,
  ImageBackground,
} from "react-native";
import CustomButton from "../components/Button";
import Logo from "../components/Logo";

const LoginForm = ({ navigation }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = () => {};

  const localImagePath = require("../assets/images/LoginCover.jpg");

  return (
    <View style={styles.container}>
      <ImageBackground source={localImagePath} style={styles.backgroundImage}>
        <View>
          <Logo firstColorStyle={{ color: "#fff" }} />
        </View>
        <View>
          <Text style={styles.subTitle}>Email</Text>
          <TextInput
            style={styles.input}
            placeholder="Your email address"
            value={email}
            onChangeText={(text) => setEmail(text)}
          />
          <Text style={styles.subTitle}>Password</Text>
          <TextInput
            style={[styles.input, styles.marginBottom]}
            placeholder="Creat your password"
            value={password}
            onChangeText={(text) => setPassword(text)}
          />
        </View>
        <View>
          <CustomButton
            btnCustomStyles={{
              borderColor: "#fff",
              borderWidth: 3,
              backgroundColor: "#af0",
            }}
            btnTextCustom={{ color: "black" }}
            text="log in"
          />
          <Text style={{ marginTop: 10, alignSelf: "flex-end" }}>
            Forgot password?
          </Text>
          <View />
        </View>
      </ImageBackground>
    </View>
  );
};

const styles = StyleSheet.create({
  input: {
    width: 350,
    backgroundColor: "rgba(0,0,0,0.1)",
    borderRadius: 10,
    paddingVertical: 8,
    paddingLeft: 10,
    borderBottomWidth: 2,
    borderBottomColor: "black",
  },
  subTitle: {
    fontSize: 15,
    fontWeight: "bold",
    paddingVertical: 8,
    paddingLeft: 10,
  },
  container: {
    flex: 1,
  },
  backgroundImage: {
    flex: 1,
    resizeMode: "cover",
    justifyContent: "flex-start",
    alignItems: "center",
  },
  marginTop: {
    marginTop: 20,
  },
  marginBottom: {
    marginBottom: 20,
  },
});

export default LoginForm;
