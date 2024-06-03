import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
} from "react-native";
import React from "react";
import Colors from "../../Utils/Colors";
import GradientVarientOneBtn from "../../Components/Gradient/GradientVariantOneBtn";

const LoginPage = ({ navigation }) => {
  return (
    <View style={styles.whole}>
      <Text style={styles.txt}>Welcome back!</Text>
      <Text style={styles.txt1}>Please, Log In</Text>
      <TextInput
        style={styles.input}
        placeholder="Email  / Phone no."
        placeholderTextColor={Colors.INPUT_PLACEHOLDER}
      />
      <TextInput
        style={styles.input}
        placeholder="Password"
        placeholderTextColor={Colors.INPUT_PLACEHOLDER}
      />
      <TouchableOpacity onPress={() => navigation.navigate("forgotPassword")}>
        <Text style={styles.forget}>Forget Password?</Text>
      </TouchableOpacity>
      <GradientVarientOneBtn
        btnText={"Continue"}
        onPress={() => navigation.navigate("Verification")}
        style={styles.btn}
      />
      <Text style={styles.txt2}>
        _____________________ Or ____________________
      </Text>
      <GradientVarientOneBtn
        btnText={"Create Account"}
        onPress={() => navigation.navigate("SignUpPage")}
        style={styles.btn1}
      />
    </View>
  );
};

export default LoginPage;

const styles = StyleSheet.create({
  whole: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#2A2E2E",
  },
  txt: {
    fontSize: 20,
    color: "white",
    fontWeight: "200",
    textAlign: "center",
  },
  txt1: {
    color: "white",
    fontSize: 20,
    fontWeight: "900",
    textAlign: "center",
    marginTop: 10,
  },
  input: {
    backgroundColor: "#FFFFFF1A",
    width: 290,
    height: 57,
    borderRadius: 10,
    paddingLeft: 20,
    marginTop: 20,
  },
  btn: {
    marginTop: 20,
    minWidth: "90%",
    borderWidth: 1,
    borderColor: "#DDBBE6",
    borderRadius: 15,
    overflow: "hidden",
  },
  btn1: {
    marginTop: 40,
    minWidth: "90%",
    borderWidth: 1,
    borderColor: "#DDBBE6",
    borderRadius: 15,
    overflow: "hidden",
  },
  txt2: {
    color: "white",
    marginTop: 40,
    textAlign: "center",
    width: 300,
  },
  forget: {
    textDecorationLine: "underline",
    color: "white",
    marginTop: 10,
  },
});
