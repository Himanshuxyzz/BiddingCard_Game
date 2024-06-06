import React, { useEffect, useRef, useState } from "react";
import {
  Animated,
  StyleSheet,
  View,
  Easing,
  Text,
  TouchableOpacity,
  Button,
} from "react-native";
import { BlurView } from "expo-blur";
import LottieView from "lottie-react-native";
import WhiteText from "../../../../Components/WhiteText/WhiteText";
import Header from "../../../../Components/Dashboard/Header";
import FortuneWheel from "../../../../Components/FortuneWheel/FortuneWheel";
import GradientVarientOneBtn from "../../../../Components/Gradient/GradientVariantOneBtn";
import AsyncStorage from "@react-native-async-storage/async-storage";
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
  const { totalAmount, cardId } = route.params;
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

  // getNextMonthTime
  const getNextMonthDate = (currentDate) => {
    const nextMonthDate = new Date(currentDate);
    nextMonthDate.setMonth(currentDate.getMonth() + 1);

    // Handle cases where the next month has fewer days than the current month
    if (nextMonthDate.getMonth() !== (currentDate.getMonth() + 1) % 12) {
      nextMonthDate.setDate(0); // Set to last day of previous month
    }

    return nextMonthDate;
  };

  // storing the date and time
  const updateLastSpinTime = async () => {
    try {
      const currentDate = new Date();
      const nextMonthDate = getNextMonthDate(currentDate);

      await AsyncStorage.setItem("lastSpinTime", currentDate.toISOString());
      await AsyncStorage.setItem("nextSpinTime", nextMonthDate.toISOString());

      console.log(
        "Last spin time updated successfully:",
        currentDate.toISOString()
      );
      console.log(
        "Next spin time updated successfully:",
        nextMonthDate.toISOString()
      );
    } catch (error) {
      console.error("Error updating last spin time:", error);
    }
  };

  const getNextSpinTime = async () => {
    try {
      const nextSpinTimeString = await AsyncStorage.getItem("nextSpinTime");
      if (nextSpinTimeString) {
        const nextSpinTime = new Date(nextSpinTimeString);
        if (!isNaN(nextSpinTime)) {
          return nextSpinTime;
        } else {
          console.error("Invalid nextSpinTime date:", nextSpinTimeString);
        }
      } else {
        console.log("No next spin time found.");
      }
    } catch (error) {
      console.error("Error retrieving next spin time:", error);
    }
    return null;
  };

  useEffect(() => {
    const checkSpinTime = async () => {
      const nextSpinTime = await getNextSpinTime();
      if (nextSpinTime && new Date() >= nextSpinTime) {
        // Time to spin the wheel again
        spinWheel();
      }
    };

    checkSpinTime();
  }, []);

  // @TODO to make countdown timer and display it in  ui

  const [countdown, setCountdown] = useState("");

  const calculateCountdown = (targetDate) => {
    const now = new Date();
    const difference = targetDate - now;

    if (difference <= 0) {
      return "0d:0h:0min";
    }

    const days = Math.floor(difference / (1000 * 60 * 60 * 24));
    const hours = Math.floor(
      (difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
    );
    const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));

    return `${days}d:${hours}h:${minutes}min`;
  };

  useEffect(() => {
    let timerInterval;

    const updateCountdown = async () => {
      try {
        const nextSpinTime = await getNextSpinTime();
        if (nextSpinTime) {
          setCountdown(calculateCountdown(nextSpinTime));

          timerInterval = setInterval(() => {
            setCountdown(calculateCountdown(nextSpinTime));
          }, 60000); // Update every minute
        }
      } catch (error) {
        console.error("Error retrieving next spin time:", error);
      }
    };

    updateCountdown();

    return () => {
      if (timerInterval) {
        clearInterval(timerInterval);
      }
    };
  }, []);

  // winner list
  const [winnersList, setWinnersList] = useState([]); // State to manage winners list

  // Function to update winners list
  const updateWinnersList = async (newWinner) => {
    try {
      // Get current winners list from AsyncStorage
      const currentWinnersList = await AsyncStorage.getItem("winnersList");
      let updatedList = [];

      if (currentWinnersList) {
        updatedList = JSON.parse(currentWinnersList);
      }

      // Add new winner to the list
      updatedList.push(newWinner);

      // Update state and AsyncStorage with the updated list
      setWinnersList(updatedList);
      await AsyncStorage.setItem("winnersList", JSON.stringify(updatedList));
    } catch (error) {
      console.error("Error updating winners list:", error);
    }
  };

  const handleSpinEnd = async (winner) => {
    setWinner(winner);
    // Remove the winner from the segmentOptions
    setSegmentOptions((prevOptions) =>
      prevOptions.filter((option) => option !== winner)
    );
    setTimeout(() => setFinished(true), 500);
    await updateWinnersList(winner); // Add the winner to the list and update AsyncStorage
    const nextSpinTime = await updateLastSpinTime(); // Update last spin time and get next spin time
    if (nextSpinTime) {
      setCountdown(calculateCountdown(nextSpinTime)); // Update the countdown immediately
    }
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
    const checkInitialSpinTimes = async () => {
      const lastSpinTime = await AsyncStorage.getItem("lastSpinTime");
      const nextSpinTime = await AsyncStorage.getItem("nextSpinTime");

      if (lastSpinTime && nextSpinTime) {
        const nextSpinDate = new Date(nextSpinTime);
        const currentTime = new Date();

        if (currentTime < nextSpinDate) {
          setGameFlow({
            state: "halted",
            msg: "Next spin time is in the future. Game is halted.",
          });
          return;
        }
      }

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
    };

    checkInitialSpinTimes();
  }, []);

  useEffect(() => {
    if (
      !hasTimerExpiredTriggered.current &&
      timer === 0 &&
      gameFlow.state !== "halted"
    ) {
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
  }, [timer, gameFlow.state]);

  // Function to clear AsyncStorage
  const clearAsyncStorage = async () => {
    try {
      await AsyncStorage.clear();
      console.log("AsyncStorage cleared successfully.");
    } catch (error) {
      console.error("Error clearing AsyncStorage:", error);
    }
  };

  const handleClearStorage = () => {
    clearAsyncStorage();
  };

  // @TODO to add winners in result screen and also the bc participants in the enteries ✅

  // @TODO - to make sure spin only happens for either 12 or 20 getting from the bc card

  // @TODO - to fix the lottie animation not getting triggered when countdown does exist

  // @TODO - to persist the wheel state

  //   @TODO - store information for each different card so that every bc game has different things stored in it

  return (
    <View style={styles.container}>
      <Header />
      <View style={styles.subContainer}>
        {countdown && (
          <>
            <WhiteText style={styles.countdownText}>{countdown}</WhiteText>
            <WhiteText style={styles.timeRemainingText}>
              Time Remaining
            </WhiteText>
          </>
        )}
        {gameFlow.state === "waitingForMembers" ? (
          <WhiteText style={styles.waitingText}>{gameFlow.msg}</WhiteText>
        ) : (
          <Animated.View style={{ opacity }}>
            {!finished && (
              <>
                <WhiteText style={styles.timerText}>
                  {formatTime(timer)}
                </WhiteText>
                <WhiteText style={styles.timeRemainingText}>
                  Time Remaining
                </WhiteText>
              </>
            )}
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
        {/* <WhiteText style={styles.winnerText}>Winner is: {winner}</WhiteText> */}
        <TouchableOpacity style={{ zIndex: 9999 }} onPress={spinWheel}>
          <WhiteText>Spin</WhiteText>
        </TouchableOpacity>
        <TouchableOpacity style={{ zIndex: 9999 }} onPress={handleClearStorage}>
          <WhiteText>Clear storage</WhiteText>
        </TouchableOpacity>
        <View style={styles.buttonContainer}>
          <GradientVarientOneBtn
            onPress={() =>
              navigation.navigate("UserEntries", {
                userEntries: initialSegmentOptions,
                winnerList: winnersList,
              })
            }
            style={styles.button}
            btnText={"Entries"}
          />
          <GradientVarientOneBtn
            onPress={() => navigation.navigate("Result", { winnersList })}
            style={styles.button}
            btnText={"Result"}
          />
        </View>
        {/* Display the countdown timer move this countdown on the above also  */}
        {/* <WhiteText style={styles.countdownText}>{countdown}</WhiteText> */}
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
    justifyContent: "center",
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
    marginTop: "15%",
    marginBottom: 20,
    zIndex: 99999,
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
  countdownText: {
    fontWeight: "600",
    fontSize: 30,
    textAlign: "center",
    // color: Colors.RED,
    marginTop: 20,
  },
});
