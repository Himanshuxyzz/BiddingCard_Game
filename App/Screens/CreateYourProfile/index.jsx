import {
  StyleSheet,
  Text,
  Touchable,
  TouchableOpacity,
  View,
} from "react-native";
import React from "react";

const Start = () => {
  return (
    <View style={styles.container}>
      <Text style={[styles.h1, { color: "#EA59E4" }]}>Almost there!</Text>
      <Text
        style={{
          color: "#fff",
          fontSize: 23,
          fontWeight: 600,
          // textAlign: "center",
        }}
      >
        User123, Would you like to complete your profile?
      </Text>
      <View
        style={{
          display: "flex",
          flexDirection: "column",
          gap: 30,
          width: "100%",
          marginTop: "4%",
        }}
      >
        <TouchableOpacity
          style={{
            borderWidth: 1,
            borderColor: "#fff",
            borderRadius: 20,
            backgroundColor: "rgba(234, 89, 228, 0.7)",
          }}
        >
          <Text style={styles.buttonText}>Complete Profile</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={{
            borderWidth: 1,
            borderColor: "#fff",
            borderRadius: 20,
            backgroundColor: "rgba(234, 89, 228, 0.7)",
          }}
        >
          <Text style={styles.buttonText}>Skip</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Start;

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#2A2E2E",
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "column",
    gap: 20,
    padding: 20,
  },
  h1: {
    fontSize: 40,
    fontWeight: "bold",
    textDecorationLine: "underline",
  },
  buttonText: {
    color: "#fff",
    fontSize: 25,
    fontWeight: "bold",
    paddingHorizontal: 15,
    paddingVertical: 20,
    textAlign: "center",
  },
});
