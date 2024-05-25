import React from "react";
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
import Header from "../../../../Components/DashboardHeader/Header";
import Colors from "../../../../Utils/Colors";

const Bidding = () => {
  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === "ios" ? "padding" : "height"}
      style={styles.main}
      keyboardVerticalOffset={Platform.select({ ios: 60, android: 60 })}
    >
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <ScrollView contentContainerStyle={styles.scrollContainer}>
          <View style={styles.container}>
            <Header />
            <Text style={styles.title}>Action Amount 2.04cr</Text>
            <View style={styles.imageContainer}>
              <Image
                style={styles.image}
                source={require("../../../../../assets/Images/bid.png")}
              />
            </View>
            <View style={styles.overlay}>
              <Text style={styles.overlayText}>Start your first bid</Text>
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
    position: "relative",
  },
  title: {
    color: "rgba(217, 125, 19, 1)",
    fontSize: 25,
    fontWeight: "bold",
    textAlign: "center",
    marginTop: "20%",
  },
  imageContainer: {
    marginTop: "30%",
    alignItems: "center",
  },
  image: {
    width: 350,
    height: 350,
  },
  overlay: {
    position: "absolute",
    top: 230,
    left: 40,
    alignItems: "center",
    justifyContent: "center",
    width: "90%",
    height: "35%",
    backgroundColor: "rgba(0, 0, 0, 0.4)",
    borderRadius: 12,
  },
  overlayText: {
    color: "#fff",
    fontSize: 23,
    fontWeight: "bold",
  },
  inputWrapper: {
    position: "relative",
    marginTop: "30%",
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
});
