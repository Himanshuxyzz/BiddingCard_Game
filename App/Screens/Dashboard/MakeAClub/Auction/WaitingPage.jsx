import { Image, KeyboardAvoidingView, ScrollView, StyleSheet, Text, TextInput, TouchableOpacity, TouchableWithoutFeedback, View,Platform,Keyboard} from 'react-native'
import Header from '../../../../Components/DashboardHeader/Header'
import React from 'react'
import Colors from '../../../../Utils/Colors';

const WaitingPage = ({navigation}) => {
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

            <Text
              onPress={() => navigation.navigate("TimeRemaining")}
              style={{
                color: "rgba(234, 89, 228, 1)",
                fontSize: 28,
                fontWeight: "bold",
                textAlign: "center",
                marginTop: "6%",
              }}
            >
              Waiting for the Member to join
            </Text>
            <Text
              style={{
                color: "#D97D13",
                fontSize: 23,
                fontWeight: "bold",
                textAlign: "center",
              }}
            >
              Action Amount 2.04cr{" "}
            </Text>
            <View
              style={{
                marginTop: "15%",
                justifyContent: "center",
                alignItems: "center",
                flex: 1,
              }}
            >
              <Image
                style={{ maxWidth: "90%", minWidth: "90%", height: 400 }}
                source={require("../../../../../assets/Images/waitingpage.png")}
              />
            </View>
            <View style={styles.inputWrapper}>
              <TextInput
                style={styles.input}
                placeholder="Enter Amount"
                keyboardType="numeric"
                placeholderTextColor={Colors.INPUT_PLACEHOLDER}
                autoCapitalize="none"
              />
              {/* <TouchableOpacity>
                <Text
                  style={styles.bid}
                  onPress={() => navigation.navigate("WinnerPage",{winner: "User2"})}
                >
                  BID
                </Text>
              </TouchableOpacity> */}
              <TouchableOpacity>
                <Text style={styles.bid}>BID</Text>
              </TouchableOpacity>
            </View>
          </View>
        </ScrollView>
      </TouchableWithoutFeedback>
    </KeyboardAvoidingView>
  );
}

export default WaitingPage

const styles = StyleSheet.create({
  // container: {
  //   backgroundColor: "#2A2E2E",
  //   flex: 1,
  //   // alignItems: "center",
  //   flexDirection: "column",
  //   gap: 20,
  //   padding: 20,
  // },
  main: {
    flex: 1,
    backgroundColor: "#2A2E2E",
    height:"100%",
  },
  scrollContainer: {
    flex:1,
    flexGrow: 1,
    height:"100%",
  },
  container: {
    flex: 1,
    padding: 20,
    gap:20,
    flexDirection: "column",
    height:"100%",
    // position: "relative",
  },
  inputWrapper: {
    position: "relative",
    marginTop: "15%",
  },
  input: {
    color: Colors.WHITE,
    width: "100%",
    height: 70,
    paddingHorizontal: 20,
    backgroundColor: "rgba(168, 168, 168, 0.5)",
    fontSize: 23,
    borderRadius: 10,
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