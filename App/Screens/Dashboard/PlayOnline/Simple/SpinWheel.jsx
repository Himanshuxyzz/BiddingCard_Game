import { StyleSheet, Text, View } from "react-native";
import React, { useState } from "react";
import WhiteText from "../../../../Components/WhiteText/WhiteText";
import Header from "../../../../Components/DashboardHeader/Header";
import FortuneWheel from "../../../../Components/FortuneWheel/FortuneWheel";

const SpinWheel = () => {
  const [wheelmessage, setWheelMessage] = useState(
    "Waiting for all the members to join check entries"
  );

  return (
    <View style={styles.container}>
      <Header />
      <View style={styles.subContainer}>
        <WhiteText
          style={{ fontWeight: "600", fontSize: 25, textAlign: "center" }}
        >
          {wheelmessage}
        </WhiteText>
        {/* Wheel  */}
        <FortuneWheel />
      </View>
    </View>
  );
};

export default SpinWheel;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    gap: 20,
    backgroundColor: "#2A2E2E",
    padding: 20,
  },
  subContainer: {
    flex: 1,
    marginTop: 10,
    gap: 5,
  },
});
