import { Image, ScrollView, StyleSheet, Text, View } from "react-native";
import React from "react";
import GradientVarientOneBtn from "../../Components/Gradient/GradientVariantOneBtn";
import GradientVarientTwoBtn from "../../Components/Gradient/GradientVariantTwoBtn";

const VerificationPending = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollContent}>
        <Text
          style={{
            color: "rgba(245, 118, 118, 1)",
            fontSize: 30,
            fontWeight: "bold",
            textAlign: "center",
            marginTop: "10%",
            textDecorationLine: "underline",
          }}
        >
          Verification Pending !
        </Text>
        <View style={{ marginTop: "4%" }}>
          <Image
            style={{ minWidth: "100%", maxWidth: "100%", height: 450 }}
            source={require("../../../assets/Images/verificationpending.png")}
          />
        </View>
        <View
          style={{
            width: "100%",
            paddingVertical: 30,
            paddingHorizontal: 25,
            borderWidth: 1,
            borderColor: "rgba(255, 255, 255, 1)",
            borderStyle: "solid",
          }}
        >
          <Text
            style={{
              color: "#fff",
              fontSize: 25,
              textAlign: "center",
              fontWeight: 500,
            }}
          >
            Your profile is under process of verification Relax! we will let you
            know once it’s Done!
          </Text>
        </View>
          <GradientVarientTwoBtn
        onPress={() => navigation.navigate("LoginPage")}
        btnText={"Back to Login"}
        style={styles.btn}
      />
      </ScrollView>
      </View>
  );
};

export default VerificationPending;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#2A2E2E",
    alignItems: "center",
  },
  scrollContent: {
    flexGrow: 1,
    justifyContent: "center",
    padding: 20,
  },
  btn: {
    minWidth: "90%",
    borderWidth: 1,
    borderColor: "#DDBBE6",
    borderRadius: 15,
    overflow: "hidden",
    marginTop: "7%",
  },
});
