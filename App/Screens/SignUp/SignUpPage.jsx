import {
  ImageBackground,
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
  Dimensions,
  Modal,
  Image,
} from "react-native";
import React, { useState, useRef } from "react";
import GradientVarientOneBtn from "../../Components/Gradient/GradientVariantOneBtn";
import WhiteText from "../../Components/WhiteText/WhiteText";
import { OtpInput } from "react-native-otp-entry";
import Colors from "../../Utils/Colors";
import VerifyBtn from "../../Components/Gradient/VerifyBtn";

const { width, height } = Dimensions.get("window");

const SignUpPage = ({ navigation }) => {
  const [ismodalVisible, setModalVisible] = useState(false);
  const [ismodal1Visible, setModal1Visible] = useState(false);
  const [ismodal2Visible, setModal2Visible] = useState(false);
  const otpInputRef = useRef(null);
  const [otp, setOtp] = useState(null);
  const [resendText, setResendText] = useState(false);

  const [otpMatched, setOtpMatched] = useState(null);
  let TestOtp = 1234;
  const toggleModal = () => {
    setModalVisible(!ismodalVisible);
  };

  const verifyOtp = (otpValue) => {
    const otpNumber = parseInt(otpValue);
    setOtp(otpNumber);
    if (!isNaN(otpNumber)) {
      setOtpMatched(otpNumber === TestOtp);
    } else {
      console.log("Invalid OTP:", otpValue);
      setOtpMatched(false);
    }
  };

  return (
    <View style={styles.whole}>
      <Text style={styles.txt}>Sign Up </Text>
      <Text style={styles.txt1}>Create an account!</Text>
      <TextInput
        style={styles.input}
        placeholder="First Name"
        placeholderTextColor={Colors.INPUT_PLACEHOLDER}
      />
      <TextInput
        style={styles.input}
        placeholder="Last Name"
        placeholderTextColor={Colors.INPUT_PLACEHOLDER}
      />
      <TextInput
        style={styles.input}
        placeholder="Phone no."
        placeholderTextColor={Colors.INPUT_PLACEHOLDER}
      />
      <TouchableOpacity onPress={() => setModalVisible(true)}>
        <Text style={styles.phonebtn}>verify</Text>
      </TouchableOpacity>
      <TextInput
        style={styles.input1}
        placeholder="Email"
        placeholderTextColor={Colors.INPUT_PLACEHOLDER}
      />
      <TouchableOpacity onPress={() => setModalVisible(true)}>
        <Text style={styles.phonebtn1}>verify</Text>
      </TouchableOpacity>
      <TextInput
        style={styles.input2}
        placeholder="Password"
        placeholderTextColor={Colors.INPUT_PLACEHOLDER}
        secureTextEntry={true}
      />
      <TextInput
        style={styles.input2}
        placeholder="Confirm Password"
        placeholderTextColor={Colors.INPUT_PLACEHOLDER}
        secureTextEntry={true}
      />
      <GradientVarientOneBtn
        btnText={"Submit"}
        onPress={() => navigation.navigate("LoginPage")}
        style={styles.btn1}
      />
      <Text style={styles.txt2}>Already have an account?</Text>
      <TouchableOpacity onPress={() => navigation.navigate("LoginPage")}>
        <Text style={styles.txt3}>Login</Text>
      </TouchableOpacity>
      <Modal
        theme={{ colors: { backdrop: "rgba(255, 255, 255, 0.2)" } }}
        animationType="fade"
        transparent={true}
        visible={ismodalVisible}
        backdropOpacity={0.3}
      >
        <View style={styles.modalContainer}>
          <View style={styles.modalContent}>
            <WhiteText style={styles.subHeading}>
              Enter OTP, Check your Mail
            </WhiteText>
            <View style={styles.otp}>
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
            </View>
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
                  marginTop: 40,
                }}
              >
                <Text
                  style={{
                    color: Colors.WHITE,
                    fontSize: 14,
                    fontWeight: "500",
                  }}
                >
                  If you didn't receive a code!
                </Text>
                <TouchableOpacity onPress={() => setResendText(false)}>
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
            <VerifyBtn
              btnText={"Verify"}
              onPress={() => {
                setOtp(null);
                otpInputRef.current.clear();
                if (otp === TestOtp) {
                  setModal1Visible(true);
                } else {
                  setModal2Visible(true);
                }
              }}
              isDisabled={otp == ""}
              style={styles.btn}
            />
          </View>
        </View>
      </Modal>
      <Modal
        theme={{ colors: { backdrop: "rgba(255, 255, 255, 0.2)" } }}
        animationType="fade"
        transparent={true}
        visible={ismodal2Visible}
        backdropOpacity={0.9}
      >
        <View style={styles.modalContainer}>
          <View style={styles.modalContent}>
            <Text
              style={{
                fontSize: 32,
                fontWeight: "800",
                color: Colors.INVALIDTEXT_COLOR,
                textAlign: "center",
              }}
            >
              Try again!
            </Text>
            <Text
              style={{
                fontSize: 18,
                fontWeight: "600",
                color: Colors.WHITE,
                textAlign: "center",
                marginTop: 10,
              }}
            >
              Oops, Seems like something is
              <Text style={{ color: Colors.INVALIDTEXT_COLOR }}> wrong</Text>
            </Text>
            <View style={styles.otp}>
              <OtpInput
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
            </View>
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
                  marginTop: 40,
                }}
              >
                <Text
                  style={{
                    color: Colors.WHITE,
                    fontSize: 14,
                    fontWeight: "500",
                  }}
                >
                  If you didn't receive a code!
                </Text>
                <TouchableOpacity onPress={() => setResendText(false)}>
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
            <VerifyBtn
              btnText={"Verify"}
              onPress={() => {
                setModal1Visible(true);
              }}
              isDisabled={otp == ""}
              style={styles.btn}
            />
          </View>
        </View>
      </Modal>
      <Modal
        theme={{ colors: { backdrop: "rgba(255, 255, 255, 0.2)" } }}
        animationType="fade"
        transparent={true}
        visible={ismodal1Visible}
        backdropOpacity={0.3}
      >
        <View style={styles.modalContainer}>
          <View style={styles.modalContent}>
            <WhiteText style={styles.subHeading}>Yay!</WhiteText>
            <View
              style={{
                flexDirection: "column",
                alignItems: "center",
                marginTop: 20,
              }}
            >
              <Image
                style={styles.tinyLogo}
                source={require("../../../assets/Doneverify.png")}
                resizeMode="contain"
              />
            </View>
          </View>
          <VerifyBtn
            btnText={"Next"}
            onPress={() => {
              setModal1Visible(false);
              setModal2Visible(false);
              setModalVisible(false);
            }}
            style={styles.btn}
          />
        </View>
      </Modal>
    </View>
  );
};

export default SignUpPage;

const styles = StyleSheet.create({
  whole: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#2A2E2E",
    padding: 20,
  },
  txt: {
    fontWeight: "bold",
    fontSize: 30,
    color: "white",
    textAlign: "center",
  },
  txt1: {
    color: "white",
    fontSize: 20,
    textAlign: "center",
    marginVertical: 10,
  },
  input: {
    backgroundColor: "#FFFFFF1A",
    width: width * 0.8,
    height: 57,
    borderRadius: 10,
    paddingLeft: 20,
    marginVertical: 10,
  },
  input1: {
    backgroundColor: "#FFFFFF1A",
    width: width * 0.8,
    height: 57,
    borderRadius: 10,
    paddingLeft: 20,
    marginVertical: 10,
  },
  input2: {
    backgroundColor: "#FFFFFF1A",
    width: width * 0.8,
    height: 57,
    borderRadius: 10,
    paddingLeft: 20,
    marginVertical: 10,
  },
  btn1: {
    marginVertical: 20,
    minWidth: "70%",
    borderWidth: 1,
    borderColor: "#DDBBE6",
    borderRadius: 15,
    overflow: "hidden",
  },
  txt2: {
    color: "white",
    marginVertical: 20,
    top :-20,
    textAlign: "center",
  },
  txt3: {
    color: "blue",
    top :-30,
    textDecorationLine: "underline",
    textAlign: "center",
  },
  phonebtn: {
    backgroundColor: "#2ED813",
    width: width * 0.3,
    textAlign: "center",
    padding: 10,
    borderRadius: 10,
    textTransform: "capitalize",
    color: "#FFFFFF",
    marginVertical: 10,
  },
  phonebtn1: {
    backgroundColor: "#2ED813",
    width: width * 0.3,
    textAlign: "center",
    padding: 10,
    borderRadius: 10,
    textTransform: "capitalize",
    color: "#FFFFFF",
    marginVertical: 10,
  },
  subHeading: {
    padding: 10,
    fontSize: 18,
    fontWeight: "500",
    textAlign: "center",
    marginTop: 20,
    color: "white",
  },
  main: {
    backgroundColor: "#232727",
    minHeight: height * 0.4,
    marginTop: height * 0.1,
    maxWidth: width * 0.9,
    alignSelf: "center",
    borderRadius: 10,
    padding: 20,
  },
  btn: {
    width: width * 0.7,
    marginTop: 30,
    alignSelf: "center",
    borderWidth: 1,
    borderColor: "#DDBBE6",
    borderRadius: 15,
    overflow: "hidden",
    backgroundColor: "green",
  },
  otp: {
    marginTop: 20,
    width: width * 0.8,
    alignSelf: "center",
  },
  btnTwoVarientStyle: {
    backgroundColor: "#2ED813",
    padding: 15,
  },
  tinyLogo: {
    width: width * 0.5, 
    height: width * 0.5 * (140 / 174), 
  },
  modalContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "rgba(0,0,0,0.5)",
  },
  modalContent: {
    width: width * .9,
  backgroundColor: "#232727",
  borderRadius: 10,
  paddingVertical: 10,
  paddingHorizontal: 50,
}
});
