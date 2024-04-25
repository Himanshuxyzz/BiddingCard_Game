import {
  Image,
  StyleSheet,
  TextInput,
  View,
  KeyboardAvoidingView,
  Platform,
  Keyboard,
  TouchableWithoutFeedback,
} from "react-native";
import React from "react";
import Colors from "../../Utils/Colors";
import WhiteText from "../../Components/WhiteText/WhiteText";

const OtpVerification = () => {
  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === "ios" ? "position" : "height"}
      style={styles.container}
    >
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <View style={styles.subContainer}>
          <WhiteText style={styles.Heading}>Verification</WhiteText>

          <Image
            style={{ width: 259, height: 249 }}
            source={require("../../../assets/Images/OtpVeriScreenbg.png")}
          />

          <WhiteText style={styles.subHeading}>
            Enter Verification code sent in your mail / mobile number
          </WhiteText>

          <View style={styles.inputWrapper}>
            <TextInput
              style={styles.input}
              keyboardType="numeric"
              placeholderTextColor={Colors.INPUT_PLACEHOLDER}
              autoCapitalize={"none"}
            />
            <TextInput
              style={styles.input}
              keyboardType="numeric"
              placeholderTextColor={Colors.INPUT_PLACEHOLDER}
              autoCapitalize={"none"}
            />
            <TextInput
              style={styles.input}
              keyboardType="numeric"
              placeholderTextColor={Colors.INPUT_PLACEHOLDER}
              autoCapitalize={"none"}
            />
            <TextInput
              style={styles.input}
              keyboardType="numeric"
              placeholderTextColor={Colors.INPUT_PLACEHOLDER}
              autoCapitalize={"none"}
            />
          </View>
        </View>
      </TouchableWithoutFeedback>
    </KeyboardAvoidingView>
  );
};

export default OtpVerification;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    backgroundColor: Colors.PRIMARY,
    padding: 20,
  },
  subContainer: {
    width: "90%",
    marginTop: "20%",
    flex: 1,
    flexDirection: "column",
    gap: 20,
    alignItems: "center",
  },
  Heading: {
    fontSize: 30,
    fontWeight: "bold",
    // fontFamily: "Laila-Bold",
  },
  subHeading: {
    padding: 10,
    fontSize: 20,
    fontWeight: "700",
    // fontFamily: "Inter-Medium",
    textAlign: "center",
  },
  inputWrapper: {
    minWidth: "90%",
    minHeight: "10%",
    borderColor: Colors.WHITE,
    borderWidth: 1,
    padding: 5,
    flexDirection: "row",
    justifyContent: "space-between",
    gap: 5,
  },
  input: {
    width: 64,
    height: 64,
    borderWidth: 1,
    borderColor: Colors.WHITE,
    borderRadius: 99,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    fontSize: 20,
    fontWeight: "700",
    color: Colors.WHITE,
    padding: 10,
    textAlign: "center",
  },
});
