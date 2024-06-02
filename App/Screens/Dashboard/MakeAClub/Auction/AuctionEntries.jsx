import { FlatList, Image, StyleSheet, Text, View } from "react-native";
import React from "react";
import Colors from "../../../../Utils/Colors";
import { Ionicons } from "@expo/vector-icons";

const AuctionEntries = ({ navigation, route }) => {
  // Dummy data for testing
  const winnerList = ["user1", "user3"];
  const userEntries = ["user1", "user2", "user3", "user4"];

  const renderItem = ({ item }) => {
    const isWinner = winnerList.includes(item);

    return (
      <View
        style={{
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "space-between",
          width: "90%",
          margin: "auto",
        }}
      >
        <View
          style={{
            flexDirection: "row",
            justifyContent: "center",
            alignItems: "center",
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
          <Text
            style={[
              styles.item,
              isWinner
                ? {
                    color: "rgba(249, 182, 12, 1)",
                  }
                : { color: Colors.WHITE },
            ]}
          >
            {item}
          </Text>
        </View>

        {isWinner && (
          <Ionicons
            name="shield-checkmark-outline"
            size={26}
            color="rgba(249, 182, 12, 1)"
          />
        )}
      </View>
    );
  };

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
        Entries({userEntries.length})
      </Text>
      {userEntries.length > 0 && (
        <FlatList
          data={userEntries}
          renderItem={renderItem}
          keyExtractor={(item, index) => index.toString()}
        />
      )}
    </View>
  );
};

export default AuctionEntries;

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
  },
});
