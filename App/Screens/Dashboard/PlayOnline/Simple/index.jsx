import { StyleSheet, Text, View } from "react-native";
import React from "react";

const Simple = () => {
  return (
    <View style={styles.container}>
      <Text>Simple</Text>
    </View>
  );
};

export default Simple;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    gap: 20,
    backgroundColor: "#2A2E2E",
  },
});
