import { useState } from "react";
import {
  Text,
  TextInput,
  View,
  StyleSheet,
  ImageBackground,
} from "react-native";
import { CheckBox } from "react-native-elements";
import CustomButton from "../components/Button";
import Logo from "../components/Logo";

const RegistrationForm = ({ navigation }) => {
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [telephone, setTelephone] = useState("");
  const [password, setPassword] = useState("");

  const [isSelected, setSelection] = useState(false);
  const toggleCheck = () => setSelection(!isSelected);

  const handleRegistration = () => {};

  const localImagePath = require("../assets/images/ModalCover.jpg");

  return (
    <View style={styles.container}>
      <ImageBackground source={localImagePath} style={styles.backgroundImage}>
        <View>
          <Logo firstColor={{ color: "#fb0" }} />
        </View>
        <View>
          <Text style={[styles.subTitle, styles.marginTop]}>Full name</Text>
          <TextInput
            style={styles.input}
            placeholder="Your full name"
            value={fullName}
            onChangeText={(text) => setFullName(text)}
          />
          <Text style={styles.subTitle}>Email</Text>
          <TextInput
            style={styles.input}
            placeholder="Your email address"
            value={email}
            onChangeText={(text) => setEmail(text)}
          />
          <Text style={styles.subTitle}>Telephone</Text>
          <TextInput
            style={styles.input}
            placeholder="Your telephone number"
            value={telephone}
            onChangeText={(text) => setTelephone(text)}
          />
          <Text style={styles.subTitle}>Password</Text>
          <TextInput
            style={styles.input}
            placeholder="Creat your password"
            value={password}
            onChangeText={(text) => setPassword(text)}
          />
          <CheckBox
            title="Agree to our terms?"
            checked={isSelected}
            onPress={toggleCheck}
            containerStyle={{
              color: "red",
              width: 350,
              backgroundColor: "rgba(0,0,0,0.1)",
              borderWidth: 0,
              paddingVertical: 0,
              marginLeft: 0,
              borderRadius: 10,
            }}
            textStyle={{
              fontSize: 13,
            }}
            checkedColor="black"
          />
        </View>
        <View>
          <CustomButton
            btnCustomStyles={{
              borderColor: "#fff",
              borderWidth: 3,
              backgroundColor: "rgba(0,0,0,0.35)",
            }}
            text="register"
            onPress={() => navigation.navigate("Explore")}
          />
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
  checkBox: {
    alignSelf: "center",
  },
});

export default RegistrationForm;
