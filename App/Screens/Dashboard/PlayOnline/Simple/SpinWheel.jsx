import {
  Animated,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  Easing,
} from "react-native";
import React, { useEffect, useRef, useState } from "react";
import WhiteText from "../../../../Components/WhiteText/WhiteText";
import Header from "../../../../Components/DashboardHeader/Header";
import FortuneWheel from "../../../../Components/FortuneWheel/FortuneWheel";
import GradientVarientOneBtn from "../../../../Components/Gradient/GradientVariantOneBtn";
import Colors from "../../../../Utils/Colors";
import { BlurView } from "expo-blur";

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

  // to track the winner from every spin
  const [winner, setWinner] = useState(null);

  // to track the spinning state of wheel
  const [spinning, setSpinning] = useState(false);

  // to track the wheel spin completion
  const [finished, setFinished] = useState(true); // State to track finished

  const wheelRef = useRef(null);

  // modalIsOpened or not

  const [isModalVisible, setIsModalVisible] = useState(false);

  //@TODO to make game flow messages initial state will be waiting for members e.g - if all members joined then state will be AllMembersJoined
  const [gameFlow, setGameFlow] = useState({
    state: "waitingForMembers",
    msg: "Waiting for all the members to join check entries",
  });

  const [opacity] = useState(new Animated.Value(0));

  const animateStateChange = () => {
    Animated.sequence([
      Animated.timing(opacity, {
        toValue: 0,
        duration: 350,
        easing: Easing.inOut(Easing.ease), // Use easing function for smooth animation
        useNativeDriver: true,
      }),
      Animated.timing(opacity, {
        toValue: 1,
        duration: 350,
        useNativeDriver: true,
      }),
    ]).start();
  };

  // Function to handle the start of spinning and update the winner
  const handleSpinStart = () => {
    setWinner(null); // Reset the winner to null when spinning starts
  };

  // Function to handle the end of spinning and update the winner
  const handleSpinEnd = (winner) => {
    setWinner(winner);
  };

  // useEffect(() => {
  //   console.log(`IsSpiningStopped - ${finished}`);
  // }, [finished]);

  const spinWheel = () => {
    if (wheelRef.current) {
      wheelRef.current.spinWheel();
    }
  };

  // game flow function kind of to simulate the flow

  // useEffect(() => {
  //   // Game flow function to simulate the flow
  //   const gameFlowEvents = () => {
  //     const timeoutId = setTimeout(() => {
  //       setGameFlow({
  //         state: "allMembersJoined",
  //         msg: "All members joined. Game starts in 15 mins",
  //       });
  //       animateStateChange();
  //       setIsModalVisible(true);
  //     }, 8000);

  //     // Cleanup function to clear the timeout
  //     return () => clearTimeout(timeoutId);
  //   };

  //   // Call gameFlowEvents to start the game flow
  //   gameFlowEvents();
  // }, []);

  // @TODO TO incoporate the timer and events

  useEffect(() => {
    let firstTimeoutId;
    let secondTimeoutId;

    const gameFlowEvents = async () => {
      try {
        // First event: waiting for members to join
        await new Promise((resolve) => {
          firstTimeoutId = setTimeout(() => {
            setGameFlow({
              state: "allMembersJoined",
              msg: "All members joined. Game starts in 15 mins",
            });
            animateStateChange();
            setIsModalVisible(true);
            resolve();
          }, 8000);
        });

        // Second event: game starting
        await new Promise((resolve) => {
          secondTimeoutId = setTimeout(() => {
            setGameFlow({
              state: "gameStarting",
              msg: "The game is starting now!",
            });
            animateStateChange();
            setIsModalVisible(true);
            resolve();
          }, 5000);
        });

        // Additional events can be added similarly
      } catch (error) {
        console.error("Error during game flow events:", error);
      }
    };

    gameFlowEvents();

    return () => {
      clearTimeout(firstTimeoutId);
      clearTimeout(secondTimeoutId);
    };
  }, []);

  // countdown timer
  const [timer, setTimer] = useState(15 * 60);

  useEffect(() => {
    const interval = setInterval(() => {
      setTimer((prevTimer) => {
        if (prevTimer <= 1) {
          clearInterval(interval);
          return 0;
        }
        return prevTimer - 1;
      });
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  const formatTime = (time) => {
    const minutes = Math.floor(time / 60);
    const seconds = time % 60;

    const formattedMinutes = minutes.toString().padStart(2, "0");
    const formattedSeconds = seconds.toString().padStart(2, "0");

    return `${formattedMinutes}:${formattedSeconds}`;
  };

  return (
    <View style={styles.container}>
      <Header />

      <View style={styles.subContainer}>
        {/* Wheel  */}
        <View
          style={{
            position: "relative",
            flex: 1,
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          {gameFlow != null &&
            gameFlow != undefined &&
            gameFlow.state === "waitingForMembers" && (
              <WhiteText
                style={{ fontWeight: "600", fontSize: 25, textAlign: "center" }}
              >
                {gameFlow.msg}
              </WhiteText>
            )}
          <FortuneWheel
            totalAmount={totalAmount}
            segmentOptions={segmentOptions}
            onSpinStart={handleSpinStart} // Pass the spin start handler
            onSpinEnd={handleSpinEnd} // Pass the function as a prop
            setFinishedState={setFinished} // Pass setFinished function as prop
            ref={wheelRef}
          />

          {isModalVisible && (
            <Animated.View style={[styles.modalContainer, { opacity }]}>
              {gameFlow.state === "allMembersJoined" && (
                <BlurModal
                  style={{
                    backgroundColor: "rgba(0, 0, 0, 0.36)",
                    borderRadius: 12,
                    borderWidth: 1.5,
                    borderColor: Colors.BLACK,
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                  intensity={4}
                >
                  <WhiteText
                    style={{
                      fontSize: 26,
                      fontWeight: 700,
                      maxWidth: "90%",
                      textAlign: "center",
                    }}
                  >
                    {gameFlow &&
                      gameFlow !== null &&
                      gameFlow !== undefined &&
                      gameFlow.msg}
                  </WhiteText>
                </BlurModal>
              )}
            </Animated.View>
          )}
        </View>
        {/* Conditional rendering based on spinning state */}
        <WhiteText
          style={{ fontWeight: "600", fontSize: 25, textAlign: "center" }}
        >
          {/* Winner is: {winner} */}
          {formatTime(timer)}
        </WhiteText>

        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "space-between",
            gap: 25,
            width: "80%",
            marginHorizontal: "auto",
            margin: 10,
          }}
        >
          {/* <TouchableOpacity
            style={[styles.button, !finished && styles.buttonDisabled]}
            onPress={spinWheel}
            disabled={!finished}
          >
            <Text style={styles.buttonText}>
              {finished ? "SPIN" : "SPINNING"}
            </Text>
          </TouchableOpacity> */}
          <GradientVarientOneBtn
            onPress={() => navigation.navigate("UserEntries", {})}
            style={styles.button}
            btnText={"Entries"}
          />
          <GradientVarientOneBtn
            onPress={() => navigation.navigate("Result", {})}
            style={styles.button}
            btnText={"Result"}
          />
        </View>
      </View>
    </View>
  );
};

export const BlurModal = ({ style, children, intensity }) => {
  return (
    <BlurView
      blurReductionFactor={4}
      experimentalBlurMethod="none"
      intensity={intensity}
      style={[
        {
          flex: 1,
          overflow: "hidden",
          width: "95%",
          height: "50%",
          maxWidth: "95%",
          maxHeight: "50%",
        },
        { ...style },
      ]}
    >
      {children}
    </BlurView>
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
    borderColor: "#DDBBE6",
    borderRadius: 12,
    overflow: "hidden",
    borderColor: "#fff",
    borderWidth: 1,
    minWidth: "40%",
    borderRadius: 12,
  },
  buttonText: {
    color: "white",
    fontSize: 20,
    fontWeight: "bold",
  },
  buttonDisabled: {
    backgroundColor: "gray",
  },
  modalContainer: {
    position: "absolute",
    width: "100%",
    height: "100%",
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});
