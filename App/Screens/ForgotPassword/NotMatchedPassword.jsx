import { StyleSheet, Text, TextInput, View } from "react-native";
import React, { useState } from "react";
import Colors from "../../Utils/Colors";
import WhiteText from "../../Components/WhiteText/WhiteText";
import GradientVarientOneBtn from "../../Components/GradientBtn/GradientVariantOneBtn";


const NotMatchedPassword = () => {
  const [emailMobile, setEmailMobile] = useState("");

  return (
    <View style={styles.container}>
      <View style={styles.subContainer}>
        <WhiteText style={styles.Heading}>
          Your password doesnot match
        </WhiteText>

        <View style={styles.inputContainer}>
          <WhiteText style={styles.subHeading}>Enter New Password</WhiteText>
          <TextInput
            value={emailMobile}
            //   onChangeText={(text) => setEmailMobile(text)}
            onChangeText={setEmailMobile}
            style={styles.input}
            placeholder="8 symbols atleast"
            keyboardType="default"
            placeholderTextColor={Colors.INPUT_PLACEHOLDER}
            autoCapitalize={"none"}
          />

          <WhiteText style={styles.subHeading}>Confirm Password</WhiteText>
          <TextInput
            value={emailMobile}
            //   onChangeText={(text) => setEmailMobile(text)}
            onChangeText={setEmailMobile}
            style={styles.input}
            placeholder="********"
            placeholderTextColor={Colors.INPUT_PLACEHOLDER}
            autoCapitalize={"none"}
            secureTextEntry
          />
        </View>

        <GradientVarientOneBtn btnText={"Submit"} style={styles.btn} />
       
      </View>
    </View>
  );
};

export default NotMatchedPassword;

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
