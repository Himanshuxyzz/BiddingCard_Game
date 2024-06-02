import {
  KeyboardAvoidingView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  TouchableWithoutFeedback,
  View,
  Platform,
  Keyboard,
  ScrollView,
} from "react-native";
import React from "react";
import Header from "../../../../Components/DashboardHeader/Header";
import Colors from "../../../../Utils/Colors";
import { Feather } from "@expo/vector-icons";
import { FontAwesome6 } from "@expo/vector-icons";
import GradientVarientOneBtn from "../../../../Components/Gradient/GradientVariantOneBtn";
import DateTimePickerModal from "react-native-modal-datetime-picker";
import { useState } from "react";

const CustomStartBc = ({ route, navigation }) => {
  const [isDatePickerVisible, setDatePickerVisibility] = useState(false);
  const [selectedDate, setSelectedDate] = useState(null); // State to store the selected date
  const { bcAmount, totalAmount } = route.params;
  console.log(bcAmount);
  const [amountPerPerson, setAmountPerPerson] = useState("");
  const [numberOfPeople, setNumberOfPeople] = useState("");
  //   const [] = useState("");
  const [password, setPassword] = useState("test@123");
  const [isPasswordValid, setIsPasswordValid] = useState(true); // Initially assuming password is valid
  const [hidePassword, setHidePassword] = useState(true);

  const showDatePicker = () => {
    setDatePickerVisibility(true);
  };
  const hideDatePicker = () => {
    setDatePickerVisibility(false);
  };

  const handleConfirm = (date) => {
    // console.warn("A date has been picked: ", date);
    hideDatePicker();
    setSelectedDate(date); // Store the selected date in state
  };
  const formatDate = (date) => {
    if (date != null) {
      const day = date.getDate();
      const month = date.getMonth() + 1;
      const year = date.getFullYear();
      let finalDate = `${day}-${month}-${year}`;
      return finalDate;
    }
    return;
  };
  const handlePasswordVisibility = () => {
    setHidePassword(!hidePassword);
  };

  const handlePassword = () => {
    const hasSpecialCharacter = /[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]+/.test(
      password
    );

    if (password.length >= 8 && hasSpecialCharacter) {
      setIsPasswordValid(true);
      // Proceed with your logic like navigating to the next screen
      navigation.navigate("CustomSpinWheel", {
        isAdmin: true,
      });
    } else {
      setIsPasswordValid(false);
    }
  };

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === "ios" ? "padding" : "height"}
      style={styles.main}
      keyboardVerticalOffset={Platform.select({ ios: 60, android: 50 })}
    >
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <ScrollView contentContainerStyle={styles.scrollContainer}>
          <View style={styles.container}>
            <Header />
            <Text
              style={{
                color: "#fff",
                marginTop: "10%",
                fontSize: 35,
                fontWeight: "bold",
                textDecorationLine: "underline",
              }}
            >
              Start Your BC
            </Text>
            <Text style={{ color: "#fff", fontSize: 18, fontWeight: 600 }}>
              Money is added from the wallet
            </Text>
            <View
              style={{
                width: 330,
                height: 520,
                marginTop: "2%",
                backgroundColor: "rgba(228, 148, 235, 1)",
                borderRadius: 12,
                alignItems: "center",
              }}
            >
              <Text
                style={{
                  textAlign: "center",
                  fontSize: 25,
                  fontWeight: "bold",
                  color: "#fff",
                  marginTop: "8%",
                }}
              >
                Select Amount
              </Text>
              <TextInput
                value={amountPerPerson}
                onChangeText={(text) => setAmountPerPerson(text)}
                style={styles.input}
                placeholder="Enter Amount per person"
                keyboardType="default"
                placeholderTextColor={Colors.INPUT_PLACEHOLDER}
                autoCapitalize={"none"}
              />
              <TextInput
                value={numberOfPeople}
                onChangeText={(text) => setNumberOfPeople(text)}
                //   onChangeText={setEmailMobile}
                style={styles.input}
                placeholder="Number of people"
                keyboardType="default"
                placeholderTextColor={Colors.INPUT_PLACEHOLDER}
                autoCapitalize={"none"}
              />
              <TextInput
                style={styles.input}
                placeholder="D.O.B"
                placeholderTextColor={Colors.INPUT_PLACEHOLDER}
                autoCapitalize={"none"}
                value={formatDate(selectedDate)}
              />
              <DateTimePickerModal
                isVisible={isDatePickerVisible}
                mode="date"
                onConfirm={handleConfirm}
                onCancel={hideDatePicker}
              />

              <TouchableOpacity
                style={{ position: "absolute", top: 235, right: 45 }}
                onPress={showDatePicker}
              >
                <Feather
                  name="calendar"
                  size={28}
                  color="rgba(177, 177, 177, 1)"
                />
              </TouchableOpacity>
              <View
                style={{
                  alignItems: "start",
                  width: "100%",
                  paddingHorizontal: 30,
                }}
              >
                <Text
                  style={{
                    color: "#fff",
                    fontSize: 15,
                    fontWeight: "bold",
                    textAlign: "left",
                  }}
                >
                  Wallet balance -
                  <Text style={{ color: "rgba(176, 255, 164, 1)" }}>
                    ₹ 6000
                  </Text>
                </Text>
              </View>
              <TextInput
                value={password}
                onChangeText={(text) => setPassword(text)}
                style={[styles.input, { paddingVertical: 10 }]}
                placeholder="Password"
                keyboardType="default"
                placeholderTextColor={Colors.INPUT_PLACEHOLDER}
                autoCapitalize="none"
                secureTextEntry={hidePassword} // To hide the password
              />
              <TouchableOpacity
                style={{ position: "absolute", top: 335, right: 40 }}
                onPress={() => handlePasswordVisibility()}
              >
                <FontAwesome6
                  name={hidePassword ? "eye-slash" : "eye"}
                  size={28}
                  color="rgba(177, 177, 177, 1)"
                />
              </TouchableOpacity>

              {!isPasswordValid && (
                <Text
                  style={{
                    color: "red",
                    margin: 5,
                    textAlign: "center",
                    fontSize: 15,
                    paddingHorizontal: 20,
                  }}
                >
                  Password must have atleast 8 characters & one special
                  character.
                </Text>
              )}
              <TouchableOpacity
                style={{
                  alignItems: "start",
                  width: "100%",
                  paddingHorizontal: 30,
                }}
                onPress={() => navigation.navigate("forgotPassword")}
              >
                <Text
                  style={{
                    fontSize: 18,
                    fontWeight: "600",
                    color: "rgba(6, 75, 139, 1)",
                    textDecorationLine: "underline",
                  }}
                >
                  Forgot Password?
                </Text>
              </TouchableOpacity>

              <GradientVarientOneBtn
                onPress={handlePassword}
                btnText={"Submit"}
                style={styles.btn}
              />
            </View>
          </View>
        </ScrollView>
      </TouchableWithoutFeedback>
    </KeyboardAvoidingView>
  );
};

export default CustomStartBc;

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
    alignItems: "center",
    flexDirection: "column",
    gap: 20,
  },
  input: {
    color: Colors.BLACK,
    minWidth: "85%",
    maxWidth: "90%",
    height: 57,
    marginVertical: 10,
    paddingHorizontal: 20,
    backgroundColor: "#fff",
    fontSize: 20,
    borderRadius: 10,
    position: "relative",
    fontWeight: "800",
  },
  btn: {
    minWidth: "60%",
    borderColor: "#DDBBE6",
    borderRadius: 12,
    overflow: "hidden",
    borderColor: "#fff",
    borderWidth: 1,
    marginTop: "8%",
  },
});
