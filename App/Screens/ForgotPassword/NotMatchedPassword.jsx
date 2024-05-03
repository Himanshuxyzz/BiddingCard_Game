import { StyleSheet, TextInput, View } from "react-native";
import React, { useState } from "react";
import Colors from "../../Utils/Colors";
import WhiteText from "../../Components/WhiteText/WhiteText";
import GradientVarientOneBtn from "../../Components/GradientBtn/GradientVariantOneBtn";

const NewPassword = ({ navigation }) => {
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const handlePassword = () => {
    if (newPassword !== undefined && (newPassword || newPassword !== "")) {
      console.log({ newPass: newPassword, confirmPass: confirmPassword });
      navigation.navigate(
        confirmPassword === newPassword
          ? "correctPassword"
          : "inCorrectPassword"
      );
      setNewPassword("");
      setConfirmPassword("");
      return;
    }
    console.log("please enter password");
  };

  return (
    <View style={styles.container}>
      <View style={styles.subContainer}>
        <WhiteText style={styles.Heading}>
          Your password doesn't match
        </WhiteText>

        <View style={styles.inputContainer}>
          <WhiteText style={styles.subHeading}>Enter New Password</WhiteText>
          <TextInput
            value={newPassword}
            //   onChangeText={(text) => setEmailMobile(text)}
            onChangeText={(text) => setNewPassword(text)}
            style={styles.input}
            placeholder="new password"
            keyboardType="default"
            placeholderTextColor={Colors.INPUT_PLACEHOLDER}
            autoCapitalize={"none"}
            secureTextEntry
          />

          <WhiteText style={styles.subHeading}>Confirm Password</WhiteText>
          <TextInput
            value={confirmPassword}
            //   onChangeText={(text) => setEmailMobile(text)}
            onChangeText={(text) => setConfirmPassword(text)}
            style={styles.input}
            placeholder="confirm password"
            placeholderTextColor={Colors.INPUT_PLACEHOLDER}
            autoCapitalize={"none"}
            secureTextEntry
          />
        </View>

        <GradientVarientOneBtn
          btnText={"Submit"}
          style={styles.btn}
          //   onPress={() => navigation.navigate("correctPassword")}
          onPress={handlePassword}
        />
      </View>
    </View>
  );
};

export default NewPassword;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    backgroundColor: Colors.PRIMARY,
    padding: 20,
  },
  subContainer: {
    marginTop: "30%",
    alignItems: "center",
  },
  subHeading: {
    fontSize: 20,
    // fontFamily: "Inter-Medium",
    fontWeight: "700",
  },
  Heading: {
    fontSize: 30,
    fontWeight: "bold",
    color: Colors.INVALIDTEXT_COLOR,
    textAlign: "center",
  },
  inputContainer: {
    marginVertical: 25,
    gap: 5,
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
    borderWidth: "1",
    borderColor: "#DDBBE6",
    borderRadius: 10,
    overflow: "hidden",
  },
});
