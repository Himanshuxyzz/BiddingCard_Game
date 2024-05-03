import {
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import React from "react";
import GradientVarientOneBtn from "../../Components/GradientBtn/GradientVariantOneBtn";

const Start = ({navigation}) => {
  return (
    <View style={styles.container}>
      <Text style={[styles.h1, { color: "#EA59E4" }]}>Almost there!</Text>
      <Text
        style={{
          color: "#fff",
          fontSize: 23,
          fontWeight: 600,
        }}
      >
        User123, Would you like to complete your profile?
      </Text>
      <View
        style={{
          display: "flex",
          flexDirection: "column",
          gap: 30,
          width: "100%",
          marginTop: "4%",
        }}
      >
        <GradientVarientOneBtn
          btnText={"Complete Profile"}
          onPress={() => navigation.navigate("Createurprofile")}
          style={styles.btn}
        />

        {/* <GradientVarientOneBtn
          btnText={"Skip"}
          style={styles.btn}
        /> */}
        <GradientVarientOneBtn
          btnText={"Skip"}
          onPress={() => navigation.navigate("Maindashboard")}
          style={styles.btn}
        />
      </View>
    </View>
  );
};

export default Start;

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#2A2E2E",
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "column",
    gap: 20,
    padding: 20,
  },
  h1: {
    fontSize: 40,
    fontWeight: "bold",
    textDecorationLine: "underline",
  },
  btn: {
    minWidth: "90%",
    borderWidth: "1",
    borderColor: "#DDBBE6",
    borderRadius: 10,
    overflow: "hidden",
  },
});
