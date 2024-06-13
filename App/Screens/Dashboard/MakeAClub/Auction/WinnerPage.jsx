import { Image, Pressable, StyleSheet, Text, View } from "react-native";
import React from "react";
import LottieView from "lottie-react-native";

const WinnerPage = ({ navigation, route }) => {
  const { winner } = route.params;
  return (
    <View style={styles.container}>
      <View>
        <Text
          style={{
            color: "#D97D13",
            fontSize: 25,
            fontWeight: "600",
            textAlign: "center",
          }}
        >
          Winner
        </Text>
        <Text
          style={{
            color: "#EA59E4",
            fontSize: 30,
            fontWeight: 400,
            textAlign: "center",
            marginTop: "3%",
          }}
        >
          {`Congratulations ${winner} Amount - ₹20092000`}
        </Text>
      </View>
      <View style={styles.lottie}>
        <LottieView
          source={require("../../../../../assets/Images/AnimationConfetti.json")}
          style={{ maxWidth: "100%", minWidth: "100%", height: 400 }}
          autoPlay
          loop
        />
        <Image
          style={{ maxWidth: "50%", minWidth: "50%", height: 150,zIndex:1,position:"absolute", bottom:2,right:20 }}
          source={require("../../../../../assets/Images/giphy.gif")}
        />
      </View>
      <View style={{ marginTop: "3%" }}>
        <Text
          style={{
            color: "#F9B60C",
            fontSize: 27,
            fontWeight: 400,
            textAlign: "center",
          }}
        >
          Each member will get 25,666.66 rupees.
        </Text>
      </View>
    </View>
  );
};

export default WinnerPage;

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#2A2E2E",
    flex: 1,
    padding: 10,
  },
  lottie: {
    justifyContent: "center",
    alignItems: "center",
    position:"relative",
    // height:"100%",
    // width:"100%",
  },
});
