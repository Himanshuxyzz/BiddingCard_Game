import { StyleSheet, Text, View } from "react-native";
import React, { useState } from "react";
import WhiteText from "../../../../Components/WhiteText/WhiteText";
import Header from "../../../../Components/DashboardHeader/Header";
import FortuneWheel from "../../../../Components/FortuneWheel/FortuneWheel";

const segmentOptions = [
  "Option 1",
  "Option 2",
  "Option 3",
  "Option 4",
  "Option 5",
  "Option 6",
  "Option 7",
  "Option 8",
  "Option 9",
  "Option 10",
  "Option 11",
  "Option 12",
]; // Add your custom names here

const SpinWheel = ({ route, navigation }) => {
  const { totalAmount } = route.params;
  console.log(totalAmount);
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
        <FortuneWheel
          totalAmount={totalAmount}
          segmentOptions={segmentOptions}
        />
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
