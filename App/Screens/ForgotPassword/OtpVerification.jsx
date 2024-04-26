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
import React, { useEffect, useRef } from "react";
import Colors from "../../Utils/Colors";
import WhiteText from "../../Components/WhiteText/WhiteText";
import { OtpInput } from "react-native-otp-entry";
import GradientVarientOneBtn from "../../Components/GradientBtn/GradientVariantOneBtn";
import { useState } from "react";
import Modal from "react-native-modal";

let TestOtp = 4321;

const OtpVerification = ({ navigation }) => {
  const [otpMatched, setOtpMatched] = useState(null);
  const [otp, setOtp] = useState(null);
  const [resendText, setResendText] = useState(false);
  const [isModalVisible, setModalVisible] = useState(false);
  const otpInputRef = useRef(null);

  const toggleModal = () => {
    setModalVisible(!isModalVisible);
  };

  const verifyOtp = (otpValue) => {
    const otpNumber = parseInt(otpValue);
    setOtp(otpNumber);
    // Check if the parsed value is a valid number
    if (!isNaN(otpNumber)) {
      // Check if otpNumber matches TestOtp
      setOtpMatched(otpNumber === TestOtp);
    } else {
      // Handle case where otpValue is not a valid number
      console.log("Invalid OTP:", otpValue);
      // Optionally, you can handle this case by setting otpMatched to false
      setOtpMatched(false);
    }
  };

  const handleBackModal = () => {
    setModalVisible(false);
  };

//   console.log(`otp - ${otp}`);
//   console.log(`otp is valid or not - ${otpMatched}`);
//   console.log(`modal is visble or not - ${isModalVisible}`);

//   console.log(
//     `if otp is ${otp} and otpMatched is also  ${otpMatched} then modal should not be opened `
//   );

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
            ref={otpInputRef}
            autoFocus={false}
            numberOfDigits={4}
            focusColor={"white"}
            onFilled={(otp) => verifyOtp(otp)}
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
            style={{
              flexDirection: "column",
              gap: 2.5,
              alignItems: "center",
            }}
          >
            <View
              style={{ flexDirection: "row", gap: 2.5, alignItems: "center" }}
            >
              <Text
                style={{ color: Colors.WHITE, fontSize: 18, fontWeight: "700" }}
              >
                If you didn’t receive a code!
              </Text>
              <TouchableOpacity onPress={() => setResendText(true)}>
                <Text
                  style={{
                    color: Colors.LINK_COLOR,
                    fontSize: 18,
                    fontWeight: "700",
                    textDecorationLine: "underline",
                  }}
                >
                  Resend
                </Text>
              </TouchableOpacity>
            </View>
          </View>

          <Text
            style={{
              color: Colors.WHITE,
              fontSize: 14,
              fontWeight: "700",
              textAlign: "center",
              lineHeight: 20,
              display: resendText ? "flex" : "none",
            }}
          >
            We have sent you <Text>One Time Password</Text> to your mail /
            mobile number
          </Text>

          <Modal
            isVisible={isModalVisible}
            onBackdropPress={() => handleBackModal()}
            backdropOpacity={0.9}
          >
            <View
              style={{
                justifyContent: "center",
                alignItems: "center",
                gap: 15,
                width: "95%",
                marginLeft: "auto",
                marginRight: "auto",
              }}
            >
              <Text
                style={{ fontSize: 32, fontWeight: "800", color: "#F57676" }}
              >
                Try again!
              </Text>
              <Text
                style={{ fontSize: 18, fontWeight: "600", color: Colors.WHITE }}
              >
                Oops, Seems like something is{" "}
                <Text style={{ color: "#F57676" }}>wrong</Text>
              </Text>
              <OtpInput
                autoFocus={false}
                numberOfDigits={4}
                // onTextChange={(text) => console.log(text)}
                focusColor={"white"}
                // onFilled={(text) => console.log(`OTP is ${text}`)}
                onFilled={(otp) => verifyOtp(otp)}
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
                style={{
                  flexDirection: "column",
                  gap: 2.5,
                  alignItems: "center",
                }}
              >
                <View
                  style={{
                    flexDirection: "row",
                    gap: 2.5,
                    alignItems: "center",
                  }}
                >
                  <Text
                    style={{
                      color: Colors.WHITE,
                      fontSize: 18,
                      fontWeight: "700",
                    }}
                  >
                    If you didn’t receive a code!
                  </Text>
                  <TouchableOpacity onPress={() => setResendText(true)}>
                    <Text
                      style={{
                        color: Colors.LINK_COLOR,
                        fontSize: 18,
                        fontWeight: "700",
                        textDecorationLine: "underline",
                      }}
                    >
                      Resend
                    </Text>
                  </TouchableOpacity>
                </View>
              </View>
              <TouchableOpacity
                style={[styles.btn, styles.btnTwoVarientStyle]}
                onPress={
                  otp !== null && otp !== ""
                    ? otpMatched !== null && !otpMatched
                      ? toggleModal
                      : () => {
                          navigation.navigate("WalletMain");
                          setOtp(null);
                          otpInputRef.current.clear();
                          setModalVisible(false);
                        }
                    : () => console.log("Please enter a valid OTP")
                }
                isDisabled={otp == ""}
              >
                <Text
                  style={{
                    textAlign: "center",
                    fontSize: 20,
                    color: Colors.WHITE,
                    fontWeight: "600",
                  }}
                >
                  Verify
                </Text>
              </TouchableOpacity>
            </View>
          </Modal>

          <GradientVarientOneBtn
            btnText={"Verify"}
            style={styles.btn}
            onPress={
              otp !== null && otp !== ""
                ? otpMatched !== null && !otpMatched
                  ? toggleModal
                  : () => {
                      navigation.navigate("WalletMain");
                      setOtp(null);
                      otpInputRef.current.clear();
                    }
                : () => console.log("Please enter a valid OTP")
            }
            isDisabled={otp == ""}
          />
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
    width: "95%",
    marginTop: "15%",
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
  btn: {
    minWidth: "90%",
    borderWidth: "1",
    borderColor: "#DDBBE6",
    borderRadius: 10,
    overflow: "hidden",
  },
  btnTwoVarientStyle: {
    backgroundColor: "#2ED813",
    padding: 15,
  },
});
