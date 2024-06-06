import { Image, StyleSheet, Text, View } from "react-native";
import Header from "../../../../Components/Dashboard/Header";
import GradientVarientOneBtn from "../../../../Components/Gradient/GradientVariantOneBtn";
import React from "react";

const TimeRemaining = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Header />
      <View
        style={{
          marginTop: "10%",
          // justifyContent: "center",
          alignItems: "center",
          // flex: 1,
        }}
      >
        <Image
          style={{ maxWidth: "90%", minWidth: "90%", height: 350 }}
          source={require("../../../../../assets/Images/Timeremain.png")}
        />
      </View>
      <View style={{ marginTop: "15%" }}>
        <Text
          onPress={() => navigation.navigate("Bidding")}
          style={{
            color: "#fff",
            fontSize: 28,
            fontWeight: "bold",
            textAlign: "center",
          }}
        >
          1d : 10 : 50
        </Text>
        <Text
          style={{
            color: "rgba(255, 0, 0, 1)",
            fontSize: 23,
            fontWeight: "bold",
            textAlign: "center",
            marginTop: "4%",
          }}
        >
          Time Remaining
        </Text>
        <View style={{ flexDirection: "row", gap: 20 }}>
          <GradientVarientOneBtn
            onPress={() => navigation.navigate("AuctionEntries")}
            btnText={"Entries"}
            style={styles.btn}
          />
          <GradientVarientOneBtn
            onPress={() => navigation.navigate("AuctionResult")}
            btnText={"Result"}
            style={styles.btn}
          />
        </View>
      </View>
    </View>
  );
};

export default TimeRemaining;

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#2A2E2E",
    flex: 1,
    // alignItems: "center",
    flexDirection: "column",
    // gap: 20,
    padding: 20,
  },
  btn: {
    width: "47%",
    borderWidth: 1,
    borderColor: "#DDBBE6",
    borderRadius: 10,
    overflow: "hidden",
    marginTop: "10%",
  },
});
