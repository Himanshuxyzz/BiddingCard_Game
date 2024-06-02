import { FlatList, Image, StyleSheet, Text, View } from "react-native";
import React from "react";

const AuctionResult = ({ navigation, route }) => {
  // Dummy data for testing
  const winnersList = ["user1", "user2", "user3", "user4"];

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
        Result ({winnersList.length})
      </Text>

      <View style={styles.subContainer}>
        {winnersList.length > 0 && (
          <FlatList
            data={winnersList}
            renderItem={renderItem}
            keyExtractor={(item, index) => index.toString()}
          />
        )}
      </View>
    </View>
  );
};

const renderItem = ({ item }) => {
  return (
    <View
      style={{
        flexDirection: "row",
        alignItems: "center",
        width: "90%",
        margin: "auto",
      }}
    >
      <View
        style={{
          borderRadius: 9999,
          padding: 2,
          backgroundColor: "rgba(255, 252, 255, 0.20)",
        }}
      >
        <Image
          style={{ width: 40, height: 40 }}
          source={require("../../../../../assets/Images/usericon.png")}
        />
      </View>
      <Text style={styles.item}>{item}</Text>
    </View>
  );
};

export default AuctionResult;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    gap: 10,
    backgroundColor: "#2A2E2E",
    padding: 20,
  },
  subContainer: {
    flex: 1,
  },
  item: {
    fontSize: 24,
    fontWeight: "bold",
    padding: 20,
    color: "rgba(249, 182, 12, 1)",
  },
});
