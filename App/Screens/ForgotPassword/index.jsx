import {
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import React, { useState } from "react";
import Colors from "../../Utils/Colors";
import WhiteText from "../../Components/WhiteText/WhiteText";
import { Feather } from "@expo/vector-icons";
import { AntDesign } from "@expo/vector-icons";
import { Entypo } from "@expo/vector-icons";
import GradientVarientOneBtn from "../../Components/Gradient/GradientVariantOneBtn";

const ForgotPassword = ({ navigation }) => {
  const [emailMobile, setEmailMobile] = useState("");
  return (
    <View style={styles.container}>
      <View style={styles.subContainer}>
        <WhiteText style={styles.forgotPasswordHeading}>
          Forgot Password
        </WhiteText>
        <View style={{ gap: 20 }}>
          <WhiteText style={styles.subHeading}>
            Enter Email id/ Mobile number
          </WhiteText>
          <TextInput
            value={emailMobile}
            //   onChangeText={(text) => setEmailMobile(text)}
            onChangeText={setEmailMobile}
            style={styles.input}
            placeholder="Email id/ Mobile number"
            keyboardType="default"
            placeholderTextColor={Colors.INPUT_PLACEHOLDER}
            autoCapitalize={"none"}
          />
        </View>

        <GradientVarientOneBtn
          btnText={"Send"}
          style={styles.btn}
          onPress={() => navigation.navigate("otpVerification")}
        />

        <View
          style={{
            width: "90%",
            flexDirection: "row",
            justifyContent: "flex-end",
            gap: 8,
          }}
        >
          <Text
            style={{ color: Colors.WHITE, fontSize: 18, fontWeight: "bold" }}
          >
            Back to
          </Text>
          <TouchableOpacity onPress={() => navigation.navigate("LoginPage")}>
            <Text
              style={{
                fontSize: 18,
                color: Colors.LINK_COLOR,
                fontWeight: "bold",
                textDecorationLine: "underline",
              }}
            >
              Login
            </Text>
          </TouchableOpacity>
        </View>

        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "center",
            marginVertical: 15,
            gap: 10,
            maxWidth: "90%",
          }}
        >
          <View
            style={{ flex: 1, height: 1.5, backgroundColor: Colors.WHITE }}
          />
          <Text
            style={{ color: Colors.WHITE, fontSize: 17, fontWeight: "bold" }}
          >
            Or
          </Text>
          <View
            style={{ flex: 1, height: 1.5, backgroundColor: Colors.WHITE }}
          />
        </View>

        <View style={styles.signUpWith}>
          <TouchableOpacity>
            <AntDesign name="mail" size={35} color={Colors.ICON_COLOR} />
          </TouchableOpacity>
          <TouchableOpacity>
            <Feather name="facebook" size={35} color={Colors.ICON_COLOR} />
          </TouchableOpacity>
          <TouchableOpacity>
            <Entypo name="instagram" size={35} color={Colors.ICON_COLOR} />
          </TouchableOpacity>
        </View>

        <Text
          style={{
            color: "rgba(177, 177, 177, 1)",
            fontSize: 18,
            fontWeight: "bold",
          }}
        >
          Don’t have an account?
        </Text>

        <GradientVarientOneBtn
          onPress={() => navigation.navigate("SignUpPage")}
          btnText={"Sign up"}
          style={styles.btn}
        />
      </View>
    </View>
  );
};

export default ForgotPassword;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    backgroundColor: Colors.PRIMARY,
    padding: 20,
  },
  subContainer: {
    marginTop: "18%",
    flex: 1,
    flexDirection: "column",
    gap: 20,
    alignItems: "center",
  },
  forgotPasswordHeading: {
    fontSize: 35,
    fontWeight: "bold",
    marginBottom: 20,
  },
  subHeading: {
    fontSize: 25,
    fontWeight: "500",
    textAlign: "center",
  },
  input: {
    color: Colors.WHITE,
    minWidth: "90%",
    height: 57,
    marginVertical: 15,
    padding: 20,
    backgroundColor: "rgba(255, 255, 255, 0.1)",
    fontSize: 18,
    borderRadius: 10,
  },
  btn: {
    minWidth: "90%",
    borderWidth: 1,
    borderColor: "#DDBBE6",
    borderRadius: 10,
    overflow: "hidden",
  },
  signUpWith: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginBottom: 20,
    minWidth: "65%",
    maxWidth: "70%",
  },
  marginTopFix: {
    marginTop: 20,
  },
});
