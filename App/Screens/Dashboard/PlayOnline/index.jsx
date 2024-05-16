import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import React from "react";
import Header from "../../../Components/DashboardHeader/Header";
import GradientBgFill from "../../../Components/Gradient/GradientBgFill";

const PlayOnline = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <GradientBgFill style={StyleSheet.absoluteFillObject} />

      <View style={styles.content}>
        {/* header */}
        <Header />
        {/* header end */}

        <View style={styles.buttonContainer}>
          <TouchableOpacity onPress={() => navigation.navigate("Simple")}>
            <View style={styles.button}>
              <Text style={styles.buttonText}>Simple BC</Text>
            </View>
          </TouchableOpacity>

          <TouchableOpacity onPress={() => navigation.navigate("Auction")}>
            <View style={styles.button}>
              <Text style={styles.buttonText}>Auction BC</Text>
            </View>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default PlayOnline;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    position: "relative",
  },
  content: {
    flex: 1,
    zIndex: 1,
    padding: 20,
    justifyContent: "center",
  },
  buttonContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    gap: 90,
  },
  button: {
    borderWidth: 4,
    borderColor: "white",
    paddingVertical: 32,
    paddingHorizontal: 50,
    borderRadius: 12,
    backgroundColor: "rgba(228, 148, 235, 1)",
  },
  buttonText: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 24,
    fontWeight: "bold",
    textShadowColor: "rgba(0, 0, 0, 0.5)",
    textShadowOffset: { width: 0, height: 5 },
    textShadowRadius: 4,
    shadowColor: "rgba(0, 0, 0, 0.5)",
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 4,
  },
});
