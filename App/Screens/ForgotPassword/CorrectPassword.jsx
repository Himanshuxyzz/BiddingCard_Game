import { StyleSheet, Text, View } from "react-native";
import React from "react";
import WhiteText from "../../Components/WhiteText/WhiteText";
import Colors from "../../Utils/Colors";
import GradientVarientOneBtn from "../../Components/Gradient/GradientVariantOneBtn";

const CorrectPassword = () => {
  return (
    <View style={styles.successContainer}>
      <WhiteText style={styles.Heading}>New Password Created</WhiteText>
      <GradientVarientOneBtn style={styles.btn} btnText={"Back to Log in"} />
    </View>
  );
};

export default CorrectPassword;

const styles = StyleSheet.create({
  successContainer: {
    backgroundColor: Colors.PRIMARY,
    alignItems: "center",
    justifyContent: "center",
    flex: 1,
    padding: 20,
    gap: 20,
  },
  Heading: {
    fontSize: 30,
    fontWeight: "bold",
    padding: 17,
    textAlign: "center",
  },
  btn: {
    minWidth: "90%",
    borderWidth: 1,
    borderColor: "#DDBBE6",
    borderRadius: 10,
    overflow: "hidden",
  },
});
