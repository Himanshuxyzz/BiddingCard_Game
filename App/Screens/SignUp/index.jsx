import {
  StyleSheet,
  Text,
  View,
  ImageBackground,
  Image,
  TouchableOpacity,
} from "react-native";
import React from "react";

const FirstPage = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <ImageBackground
        source={require("../../../assets/background.jpg")}
        resizeMode="cover"
        style={styles.image}
      >
        <Image source={require("../../../assets/BC.png")} style={styles.img} />
        <Text style={styles.txt}>BC game</Text>
        <View style={{ gap: 20 }}>
          <TouchableOpacity onPress={() => navigation.navigate("SignUpPage")}>
            <View style={[styles.wrapper, styles.simpleButton]}>
              <Text style={styles.text}>Create Account</Text>
            </View>
          </TouchableOpacity>

          <TouchableOpacity onPress={() => navigation.navigate("LoginPage")}>
            <View style={[styles.wrapper, styles.simpleButton]}>
              <Text style={styles.text1}>Log In</Text>
            </View>
          </TouchableOpacity>
        </View>
      </ImageBackground>
    </View>
  );
};

export default FirstPage;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  image: {
    flex: 1,
    justifyContent: "center",
    width: "100%",
    height: "100%",
  },
  img: {
    width: 207,
    height: 247,
    top: -120,
    marginHorizontal: "auto",
  },
  txt: {
    fontFamily: "",
    fontSize: 25,
    left: 150,
    top: -140,
  },
  wrapper: {
    borderRadius: 10,
    paddingVertical: 15,
    paddingHorizontal: 20,
    minWidth: "80%",
    maxWidth: "80%",
    marginHorizontal: "auto",
  },
  simpleButton: {
    backgroundColor: "#FFFFFF",
    color: "black",
    // marginLeft: 80,
    bottom: 70,
  },

  text: {
    justifyContent: "center",
    textAlign: "center",
    fontSize: 20,
  },

  wrap: {
    borderRadius: 10,
    paddingVertical: 10,
    paddingHorizontal: 20,
    maxWidth: 250,
    backgroundColor: "#FFFFFF",
    color: "black",
    marginLeft: 80,
    bottom: 40,
  },
  text1: {
    fontSize: 20,
    justifyContent: "center",
    textAlign: "center",
  },
});
