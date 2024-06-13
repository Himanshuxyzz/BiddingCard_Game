import React, { useEffect, useState } from "react";
import {
  Image,
  KeyboardAvoidingView,
  StyleSheet,
  Text,
  TextInput,
  TouchableWithoutFeedback,
  View,
  Platform,
  Keyboard,
  ScrollView,
  TouchableOpacity,
} from "react-native";
import Header from "../../../../Components/Dashboard/Header";
import Colors from "../../../../Utils/Colors";
import WhiteText from "../../../../Components/WhiteText/WhiteText";

const Bidding = ({ navigation }) => {
  const [isModalVisible, setIsModalVisible] = useState(true);
  const [ModalMessage, setModalMessage] = useState("Start your first bid");
  const [countdown, setCountdown] = useState(13);
  const [timerColor, setTimerColor] = useState("#2ED813");
  const [modalCountdown, setModalCountdown] = useState(3);

  useEffect(() => {
    const modalTimers = [];

    const firstModalTimer = setTimeout(() => {
      setIsModalVisible(false);
    }, 8000);
    modalTimers.push(firstModalTimer);

    const secondModalTimer = setTimeout(() => {
      setModalMessage("user2 Bid amount - ₹20092000");
      setIsModalVisible(true);
      setModalCountdown(3);
    }, 15000);
    modalTimers.push(secondModalTimer);

    return () => {
      modalTimers.forEach((timer) => clearTimeout(timer));
    };
  }, []);

  useEffect(() => {
    if (countdown === 0) {
      return;
    }

    const timerId = setTimeout(() => {
      setCountdown((prev) => prev - 1);
    }, 1000);

    if (countdown <= 5) {
      setTimerColor("red");
    } else {
      setTimerColor("#2ED813");
    }

    return () => clearTimeout(timerId);
  }, [countdown]);

  useEffect(() => {
    if (ModalMessage !== "user2 Bid amount - ₹20092000") {
      return;
    }

    if (modalCountdown === 0) {
      setIsModalVisible(false);
      navigation.navigate("WinnerPage", { winner: "User2" });
      return;
    }

    const modalTimerId = setTimeout(() => {
      setModalCountdown((prev) => prev - 1);
    }, 1000);

    return () => clearTimeout(modalTimerId);
  }, [modalCountdown, ModalMessage, navigation]);

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === "ios" ? "padding" : "height"}
      style={styles.main}
      keyboardVerticalOffset={Platform.select({ ios: 60, android: 45 })}
    >
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <ScrollView contentContainerStyle={styles.scrollContainer}>
          <View style={styles.container}>
            <Header />
            {/* <Image
              style={{
                maxWidth: "90%",
                minWidth: "90%",
                height: 250,
                position: "absolute",
                zIndex: -1,
                top: 350,
              }}
              source={require("../../../../../assets/Images/bid.png")}
            /> */}
            <View
              style={{
                width: "100%",
                height: "100%",
                position: "absolute",
                zIndex: -1,
                // backgroundColor: "rgba(234, 89, 228, 1)",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <Image
                style={{
                  maxWidth: "90%",
                  minWidth: "90%",
                  height: 200,
                }}
                source={require("../../../../../assets/Images/bid.png")}
              />
            </View>
            <View
              style={{
                position: "absolute",
                zIndex: 999,
                width: "85%",
                height: "65%",
                backgroundColor: "rgba(0, 0, 0, 0.6)",
                top: 100,
                borderRadius: 12,
                borderColor: "rgba(0, 0, 0, 1)",
                borderWidth: 2,
                paddingVertical: 20,
                gap: 20,
              }}
            >
              <View
                style={{
                  flexDirection: "row",
                  alignItems: "center",
                  gap: 20,
                  minWidth: "100%",
                  maxWidth: "100%",
                  height: 50,
                }}
              >
                <View
                  style={{
                    padding: 10,
                    flexBasis: "80%",
                    // backgroundColor: "rgba(187, 187, 187, 0.2)",
                    borderRadius: 8,
                    flexDirection: "row",
                    alignItems: "center",
                    justifyContent: "space-between",
                    gap: 10,
                  }}
                >
                  <Image
                    style={{
                      width: 36,
                      height: 36,
                      borderRadius: 999,
                      backgroundColor: "rgba(255, 255, 255, 0.3)",
                    }}
                    source={require("../../../../../assets/samraat_icon.png")}
                  />

                  <View
                    style={{
                      width: "100%",
                      gap: 8,
                      backgroundColor: "rgba(255, 255, 255, 0.71)",
                      paddingHorizontal: 10,
                      borderRadius: 4,
                    }}
                  >
                    <Text
                      style={{
                        fontSize: 15,
                        fontWeight: "bold",
                        color: "rgba(0, 0, 0, 1)",
                      }}
                    >
                      Goyal
                    </Text>
                    <View
                      style={{
                        flexDirection: "row",
                        justifyContent: "space-between",
                      }}
                    >
                      <WhiteText
                        style={{
                          fontWeight: "bold",
                          fontSize: 16,
                          color: "rgba(0, 0, 0, 1)",
                        }}
                      >
                        ₹20095001
                      </WhiteText>
                      <WhiteText style={{ color: "rgba(0, 0, 0, 1)" }}>
                        10:35 am
                      </WhiteText>
                    </View>
                  </View>
                </View>
              </View>
              <View
                style={{
                  flexDirection: "row",
                  alignItems: "center",
                  gap: 20,
                  minWidth: "100%",
                  maxWidth: "100%",
                  height: 50,
                }}
              >
                <View
                  style={{
                    padding: 10,
                    flexBasis: "80%",
                    // backgroundColor: "rgba(187, 187, 187, 0.2)",
                    borderRadius: 8,
                    flexDirection: "row",
                    alignItems: "center",
                    justifyContent: "space-between",
                    gap: 10,
                  }}
                >
                  {/* <Image
                    style={{
                      width: 36,
                      height: 36,
                      borderRadius: 999,
                      backgroundColor: "rgba(255, 255, 255, 0.3)",
                    }}
                    source={require("../../../../../assets/samraat_icon.png")}
                  /> */}

                  <View
                    style={{
                      width: "100%",
                      gap: 8,
                      backgroundColor: "rgba(255, 255, 255, 0.71)",
                      paddingHorizontal: 10,
                      borderRadius: 4,
                    }}
                  >
                    <Text
                      style={{
                        fontSize: 15,
                        fontWeight: "bold",
                        color: "rgba(0, 0, 0, 1)",
                      }}
                    >
                      Garima
                    </Text>
                    <View
                      style={{
                        flexDirection: "row",
                        justifyContent: "space-between",
                      }}
                    >
                      <WhiteText
                        style={{
                          fontWeight: "bold",
                          fontSize: 16,
                          color: "rgba(0, 0, 0, 1)",
                        }}
                      >
                        ₹20095001
                      </WhiteText>
                      <WhiteText style={{ color: "rgba(0, 0, 0, 1)" }}>
                        10:37 am
                      </WhiteText>
                    </View>
                  </View>
                  <Image
                    style={{
                      width: 36,
                      height: 36,
                      borderRadius: 999,
                      backgroundColor: "rgba(255, 255, 255, 0.3)",
                    }}
                    source={require("../../../../../assets/samraat_icon.png")}
                  />
                </View>
              </View>
              <View
                style={{
                  flexDirection: "row",
                  alignItems: "center",
                  gap: 20,
                  minWidth: "100%",
                  maxWidth: "100%",
                  height: 50,
                }}
              >
                <View
                  style={{
                    padding: 10,
                    flexBasis: "80%",
                    // backgroundColor: "rgba(187, 187, 187, 0.2)",
                    borderRadius: 8,
                    flexDirection: "row",
                    alignItems: "center",
                    justifyContent: "space-between",
                    gap: 10,
                  }}
                >
                  <Image
                    style={{
                      width: 36,
                      height: 36,
                      borderRadius: 999,
                      backgroundColor: "rgba(255, 255, 255, 0.3)",
                    }}
                    source={require("../../../../../assets/samraat_icon.png")}
                  />

                  <View
                    style={{
                      width: "100%",
                      gap: 8,
                      backgroundColor: "rgba(255, 255, 255, 0.71)",
                      paddingHorizontal: 10,
                      borderRadius: 4,
                    }}
                  >
                    <Text
                      style={{
                        fontSize: 15,
                        fontWeight: "bold",
                        color: "rgba(0, 0, 0, 1)",
                      }}
                    >
                      vibha234
                    </Text>
                    <View
                      style={{
                        flexDirection: "row",
                        justifyContent: "space-between",
                      }}
                    >
                      <WhiteText
                        style={{
                          fontWeight: "bold",
                          fontSize: 16,
                          color: "rgba(0, 0, 0, 1)",
                        }}
                      >
                        hiii...
                      </WhiteText>
                      <WhiteText style={{ color: "rgba(0, 0, 0, 1)" }}>
                        10:38 am
                      </WhiteText>
                    </View>
                  </View>
                </View>
              </View>
              {/* <TextInput
                style={styles.input}
                placeholder="Type here...."
                keyboardType="default"
                placeholderTextColor={Colors.INPUT_PLACEHOLDER}
                autoCapitalize="none"
              /> */}
            </View>

            {isModalVisible && (
              <View style={styles.modalContainer}>
                <View style={styles.modal}>
                  {ModalMessage !== "user2 Bid amount - ₹20092000" ? (
                    <>
                      <WhiteText style={styles.modalText}>
                        {ModalMessage}
                      </WhiteText>
                    </>
                  ) : (
                    <>
                      <WhiteText style={styles.modalText}>
                        {ModalMessage}
                      </WhiteText>
                      <WhiteText style={{ fontSize: 20, marginTop: "3%" }}>
                        last 0{modalCountdown} sec left
                      </WhiteText>
                    </>
                  )}
                </View>
              </View>
            )}

            <View style={styles.subContainer}>
              <WhiteText style={styles.title}>Action Amount 2.04cr </WhiteText>
              <View style={styles.bidChatConainer}>
                <BidMessage timerColor={timerColor} countdown={countdown} />
              </View>
            </View>
            <View style={styles.inputWrapper}>
              <TextInput
                style={styles.input}
                placeholder="Enter Amount"
                keyboardType="numeric"
                placeholderTextColor={Colors.INPUT_PLACEHOLDER}
                autoCapitalize="none"
              />
              <TouchableOpacity>
                <Text style={styles.bid}>BID</Text>
              </TouchableOpacity>
            </View>
          </View>
        </ScrollView>
      </TouchableWithoutFeedback>
    </KeyboardAvoidingView>
  );
};

const BidMessage = ({
  userProfileImage,
  userName,
  bidAmt,
  timerColor,
  countdown,
}) => {
  return (
    <View
      style={{
        flexDirection: "row",
        alignItems: "center",
        gap: 20,
        minWidth: "100%",
        maxWidth: "100%",
        height: 50,
      }}
    >
      <View
        style={{
          padding: 10,
          flexBasis: "80%",
          backgroundColor: "rgba(187, 187, 187, 0.2)",
          borderRadius: 8,
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "space-between",
          gap: 10,
        }}
      >
        <Image
          style={{
            width: 36,
            height: 36,
            borderRadius: 999,
            backgroundColor: "rgba(255, 255, 255, 0.3)",
          }}
          source={require("../../../../../assets/samraat_icon.png")}
        />

        <View style={{ width: "80%", gap: 8 }}>
          <Text
            style={{
              fontSize: 15,
              fontWeight: "bold",
              color: "rgba(255, 255, 255, 0.7)",
            }}
          >
            Goyal
          </Text>
          <View
            style={{ flexDirection: "row", justifyContent: "space-between" }}
          >
            <WhiteText style={{ fontWeight: "bold", fontSize: 16 }}>
              ₹20095001
            </WhiteText>
            <WhiteText>10:35:00 am</WhiteText>
          </View>
        </View>
      </View>
      <View
        style={{
          borderWidth: 3,
          padding: 10,
          flexGrow: 1,
          alignItems: "center",
          justifyContent: "center",
          borderRadius: 999,
          borderColor: timerColor,
          width: 60,
          height: 60,
        }}
      >
        <Text style={[styles.timer, { color: timerColor }]}>{countdown}s</Text>
      </View>
    </View>
  );
};

export default Bidding;

const styles = StyleSheet.create({
  main: {
    flex: 1,
    backgroundColor: "#2A2E2E",
  },
  scrollContainer: {
    flexGrow: 1,
  },
  container: {
    flex: 1,
    padding: 20,
    gap: 20,
    alignItems: "center",
  },
  subContainer: {
    flex: 1,
    alignItems: "center",
    gap: 20,
  },
  title: {
    color: "rgba(217, 125, 19, 1)",
    fontSize: 25,
    fontWeight: "bold",
    textAlign: "center",
  },
  modalContainer: {
    position: "absolute",
    width: "100%",
    height: "100%",
    justifyContent: "center",
    alignItems: "center",
    marginTop:"6%",
  },
  modal: {
    width: "100%",
    height: "35%",
    borderRadius: 12,
    backgroundColor: "rgba(0, 0, 0, 0.4)",
    justifyContent: "center",
    alignItems: "center",
  },
  modalText: {
    fontSize: 23,
    fontWeight: "bold",
  },
  inputWrapper: {
    position: "relative",
    marginBottom: 10,
    width: "100%",
  },
  input: {
    color: Colors.WHITE,
    width: "100%",
    height: 70,
    paddingHorizontal: 20,
    backgroundColor: "rgba(168, 168, 168, 0.5)",
    fontSize: 23,
    borderRadius: 25,
  },
  bid: {
    position: "absolute",
    color: "rgba(217, 125, 19, 1)",
    borderColor: "rgba(217, 125, 19, 1)",
    borderWidth: 3,
    fontSize: 28,
    fontWeight: "bold",
    borderRadius: 25,
    paddingVertical: "1%",
    paddingHorizontal: "4%",
    bottom: 10,
    right: 10,
  },
  bidChatConainer: {
    flex: 1,
    padding: 10,
    width: "100%",
  },
  timerWrapper: {
    alignItems: "center",
    marginTop: 20,
  },
  timer: {
    fontSize: 20,
    fontWeight: "bold",
  },
});
