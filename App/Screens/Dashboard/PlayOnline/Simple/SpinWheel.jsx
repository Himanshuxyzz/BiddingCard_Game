import React, { useEffect, useRef, useState } from "react";
import {
  Animated,
  StyleSheet,
  View,
  Easing,
  Text,
  TouchableOpacity,
} from "react-native";
import { BlurView } from "expo-blur";
import LottieView from "lottie-react-native";
import WhiteText from "../../../../Components/WhiteText/WhiteText";
import Header from "../../../../Components/DashboardHeader/Header";
import FortuneWheel from "../../../../Components/FortuneWheel/FortuneWheel";
import GradientVarientOneBtn from "../../../../Components/Gradient/GradientVariantOneBtn";
import Colors from "../../../../Utils/Colors";

const initialSegmentOptions = [
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
];

// const initialSegmentOptions = ["Option 1", "Option 2", "Option 3"];

const SpinWheel = ({ route, navigation }) => {
  const { totalAmount } = route.params;
  const [winner, setWinner] = useState(null);
  const [finished, setFinished] = useState(false);
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [gameFlow, setGameFlow] = useState({
    state: "waitingForMembers",
    msg: "Waiting for all the members to join. Check entries.",
  });
  const [opacity] = useState(new Animated.Value(0));
  const wheelRef = useRef(null);
  const animationRef = useRef(null);
  const [timer, setTimer] = useState(60);
  const timerIntervalRef = useRef(null);

  // Flags to track whether each state has been triggered
  const hasJoinedMembersTriggered = useRef(false);
  const hasTimerExpiredTriggered = useRef(false);

  const animateStateChange = () => {
    Animated.sequence([
      Animated.timing(opacity, {
        toValue: 0,
        duration: 350,
        easing: Easing.inOut(Easing.ease),
        useNativeDriver: true,
      }),
      Animated.timing(opacity, {
        toValue: 1,
        duration: 350,
        useNativeDriver: true,
      }),
    ]).start();
  };
  const [segmentOptions, setSegmentOptions] = useState(initialSegmentOptions);

  const handleSpinStart = () => setWinner(null);

  const handleSpinEnd = (winner) => {
    setWinner(winner);
    // Remove the winner from the segmentOptions
    setSegmentOptions((prevOptions) =>
      prevOptions.filter((option) => option !== winner)
    );
    setTimeout(() => setFinished(true), 1000);
  };

  const spinWheel = () => wheelRef.current?.spinWheel();

  const formatTime = (time) => {
    const minutes = String(Math.floor(time / 60)).padStart(2, "0");
    const seconds = String(time % 60).padStart(2, "0");
    return `${minutes}:${seconds}`;
  };

  const startTimer = (duration) => {
    setTimer(duration);
    clearInterval(timerIntervalRef.current);
    timerIntervalRef.current = setInterval(() => {
      setTimer((prev) => {
        if (prev <= 1) {
          clearInterval(timerIntervalRef.current);
          return 0;
        }
        return prev - 1;
      });
    }, 1000);
  };

  useEffect(() => {
    if (!hasJoinedMembersTriggered.current) {
      const handleFirstEvent = () => {
        setGameFlow({
          state: "allMembersJoined",
          msg: "All members joined. Game starts in 15 mins.",
        });
        animateStateChange();
        setIsModalVisible(true);
        startTimer(60);
        hasJoinedMembersTriggered.current = true;
      };

      const timeoutId = setTimeout(handleFirstEvent, 4000);
      return () => {
        clearTimeout(timeoutId);
        clearInterval(timerIntervalRef.current);
      };
    }
  }, []);

  useEffect(() => {
    if (!hasTimerExpiredTriggered.current && timer === 0) {
      setGameFlow({
        state: "PreSpinState",
        msg: "Let's see who is lucky today.",
      });
      animateStateChange();
      setIsModalVisible(true);

      setTimeout(() => {
        setIsModalVisible(false);
        setGameFlow({
          state: "SpinState",
          msg: "Spinning",
        });
        spinWheel();
      }, 2000);

      hasTimerExpiredTriggered.current = true;
    }
  }, [timer]);

  return (
    <View style={styles.container}>
      <Header />
      <View style={styles.subContainer}>
        {gameFlow.state === "waitingForMembers" ? (
          <WhiteText style={styles.waitingText}>{gameFlow.msg}</WhiteText>
        ) : (
          <Animated.View style={{ opacity }}>
            <WhiteText style={styles.timerText}>{formatTime(timer)}</WhiteText>
            <WhiteText style={styles.timeRemainingText}>
              Time Remaining
            </WhiteText>
          </Animated.View>
        )}
        <View style={styles.wheelContainer}>
          <FortuneWheel
            totalAmount={totalAmount}
            segmentOptions={segmentOptions}
            onSpinStart={handleSpinStart}
            onSpinEnd={handleSpinEnd}
            ref={wheelRef}
          />
          {isModalVisible && (
            <Animated.View style={[styles.modalContainer, { opacity }]}>
              {gameFlow.state !== "waitingForMembers" && (
                <BlurModal style={styles.blurModal} intensity={4}>
                  <WhiteText style={styles.modalText}>{gameFlow.msg}</WhiteText>
                </BlurModal>
              )}
            </Animated.View>
          )}
          {!isModalVisible && finished && (
            <Animated.View
              style={{
                opacity,
                flex: 1,
                justifyContent: "center",
                alignItems: "center",
                position: "absolute",
                zIndex: 10,
                width: "100%",
                height: "100%",
              }}
            >
              <Text
                style={{
                  fontWeight: "700",
                  fontSize: 40,
                  textAlign: "center",
                  color: "#FFC5C5",
                  textShadowColor: "black",
                  textShadowRadius: 5,
                  textShadowOffset: {
                    width: 5,
                    height: 2,
                  },
                  width: "99%",
                }}
              >
                Congratulations {winner} Your BC amount is Rs. {totalAmount}
              </Text>

              <LottieView
                autoPlay
                ref={animationRef}
                style={styles.lottieView}
                source={require("../../../../../assets/Images/confetti.json")}
              />
            </Animated.View>
          )}
        </View>
        <WhiteText style={styles.winnerText}>Winner is: {winner}</WhiteText>
        <TouchableOpacity onPress={spinWheel}>
          <WhiteText>Spin</WhiteText>
        </TouchableOpacity>
        <View style={styles.buttonContainer}>
          <GradientVarientOneBtn
            onPress={() => navigation.navigate("UserEntries")}
            style={styles.button}
            btnText={"Entries"}
          />
          <GradientVarientOneBtn
            onPress={() => navigation.navigate("Result")}
            style={styles.button}
            btnText={"Result"}
          />
        </View>
      </View>
    </View>
  );
};

const BlurModal = ({ style, children, intensity }) => (
  <BlurView intensity={intensity} style={[styles.blurView, style]}>
    {children}
  </BlurView>
);

export default SpinWheel;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    backgroundColor: "#2A2E2E",
    padding: 20,
  },
  subContainer: {
    flex: 1,
    marginTop: 10,
    alignItems: "center",
  },
  waitingText: {
    fontWeight: "600",
    fontSize: 25,
    textAlign: "center",
  },
  timerText: {
    fontWeight: "600",
    fontSize: 25,
    textAlign: "center",
  },
  timeRemainingText: {
    fontWeight: "700",
    fontSize: 20,
    textAlign: "center",
    color: Colors.RED,
  },
  wheelContainer: {
    position: "relative",
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  modalContainer: {
    position: "absolute",
    width: "100%",
    height: "100%",
    justifyContent: "center",
    alignItems: "center",
  },
  blurModal: {
    backgroundColor: "rgba(0, 0, 0, 0.36)",
    borderRadius: 12,
    borderWidth: 1.5,
    borderColor: Colors.BLACK,
    justifyContent: "center",
    alignItems: "center",
  },
  modalText: {
    fontSize: 26,
    fontWeight: "700",
    maxWidth: "90%",
    textAlign: "center",
  },
  congratsText: {
    fontWeight: "600",
    fontSize: 25,
    textAlign: "center",
    position: "absolute",
    top: 50,
    left: 0,
    right: 0,
    zIndex: 999,
  },
  lottieView: {
    width: "200%",
    height: "200%",
    position: "absolute",
  },
  winnerText: {
    fontWeight: "600",
    fontSize: 25,
    textAlign: "center",
  },
  buttonContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    width: "90%",
    marginVertical: 10,
  },
  button: {
    borderColor: "#fff",
    borderRadius: 12,
    borderWidth: 1,
    minWidth: "40%",
  },
  blurView: {
    width: "95%",
    height: "50%",
  },
});
