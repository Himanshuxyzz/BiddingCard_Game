import { StyleSheet, Text, View } from "react-native";
import React from "react";
import Colors from "../../Utils/Colors";
import WhiteText from "../../Components/WhiteText/WhiteText";

const ForgotPassword = () => {
  return (
    <View style={styles.container}>
      <Text>ForgotPassword</Text>
      <WhiteText style={{ fontSize: 18 }}>White</WhiteText>
    </View>
  );
};

export default ForgotPassword;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.PRIMARY,
  },
});
