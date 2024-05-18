import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React, { useEffect, useRef, useState } from "react";
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
  // console.log(totalAmount);
  const [wheelmessage, setWheelMessage] = useState(
    "Waiting for all the members to join check entries"
  );
  const [winner, setWinner] = useState(null);
  const [spinning, setSpinning] = useState(false);
  const [finished, setFinished] = useState(true); // State to track finished
  const wheelRef = useRef(null);

  // Function to handle the start of spinning and update the winner

  const handleSpinStart = () => {
    setWinner(null); // Reset the winner to null when spinning starts
  };

  // Function to handle the end of spinning and update the winner
  const handleSpinEnd = (winner) => {
    setWinner(winner);
  };

  useEffect(() => {
    console.log(`IsSpiningStopped - ${finished}`);
  }, [finished]);

  const spinWheel = () => {
    if (wheelRef.current) {
      wheelRef.current.spinWheel();
    }
  };

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
          onSpinStart={handleSpinStart} // Pass the spin start handler
          onSpinEnd={handleSpinEnd} // Pass the function as a prop
          setFinishedState={setFinished} // Pass setFinished function as prop
          ref={wheelRef}
        />
        
        {/* Conditional rendering based on spinning state */}
        <View style={{ alignItems: "center", gap: 20 }}>
          <WhiteText style={{ fontWeight: "600", fontSize: 25 }}>
            Winner is: {winner}
          </WhiteText>

          <TouchableOpacity
            style={[styles.button, !finished && styles.buttonDisabled]}
            onPress={spinWheel}
            disabled={!finished}
          >
            <Text style={styles.buttonText}>
              {finished ? "SPIN" : "SPINNING"}
            </Text>
          </TouchableOpacity>
        </View>
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
  button: {
    backgroundColor: "blue",
    padding: 20,
    borderRadius: 10,
  },
  buttonText: {
    color: "white",
    fontSize: 20,
    fontWeight: "bold",
  },
  buttonDisabled: {
    backgroundColor: "gray",
  },
});
