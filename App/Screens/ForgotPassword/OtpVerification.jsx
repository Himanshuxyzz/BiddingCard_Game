import {
  Image,
  StyleSheet,
  TextInput,
  View,
  KeyboardAvoidingView,
  Platform,
  Keyboard,
  TouchableWithoutFeedback,
  TouchableOpacity,
  Text,
} from "react-native";
import React from "react";
import Colors from "../../Utils/Colors";
import WhiteText from "../../Components/WhiteText/WhiteText";
import { OtpInput } from "react-native-otp-entry";
import GradientVarientOneBtn from "../../Components/GradientBtn/GradientVariantOneBtn";

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
            Enter Verification code sent in your mail / mobile number.
          </WhiteText>
          <OtpInput
            autoFocus={false}
            numberOfDigits={4}
            onTextChange={(text) => console.log(text)}
            focusColor={"white"}
            onFilled={(text) => console.log(`OTP is ${text}`)}
            textInputProps={{
              accessibilityLabel: "One-Time Password",
            }}
            theme={{
              pinCodeContainerStyle: {
                borderRadius: 99,
                width: 66,
                height: 64,
                backgroundColor: "rgba(255,255,255,0.1)",
                borderColor: "rgba(199,194,194,0.77)",
              },
              pinCodeTextStyle: {
                fontSize: 20,
                color: Colors.WHITE,
                fontWeight: "700",
              },
            }}
          />

          <View
            style={{ flexDirection: "row", gap: 2.5, alignItems: "center" }}
          >
            <Text
              style={{ color: Colors.WHITE, fontSize: 18, fontWeight: "700" }}
            >
              If you didn’t receive a code!
            </Text>
            <TouchableOpacity>
              <Text
                style={{
                  color: Colors.LINK_COLOR,
                  fontSize: 18,
                  fontWeight: "700",
                }}
              >
                Resend
              </Text>
            </TouchableOpacity>
          </View>
          <GradientVarientOneBtn btnText={"Verify"} style={styles.btn} />
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
  btn: {
    minWidth: "90%",
    borderWidth: "1",
    borderColor: "#DDBBE6",
    borderRadius: 10,
    overflow: "hidden",
  },
});