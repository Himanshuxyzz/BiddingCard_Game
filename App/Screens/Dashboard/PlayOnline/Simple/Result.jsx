import { StyleSheet, Text, View } from "react-native";
import React from "react";

const Result = ({ navigation, route }) => {
  return (
    <View style={styles.container}>
      <Text
        style={{
          color: "#fff",
          fontSize: 27,
          fontWeight: "bold",
          textAlign: "center",
        }}
      >
        Result(10)
      </Text>
    </View>
  );
};

export default Result;

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
});
