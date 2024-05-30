import { Image, StyleSheet, Text, View } from 'react-native'
import Header from '../../../../Components/DashboardHeader/Header'
import GradientVarientOneBtn from '../../../../Components/Gradient/GradientVariantOneBtn'
import React from 'react'

const TimeRemaining = ({navigation}) => {
  return (
    <View style={styles.container}>
      <Header />
      <View
        style={{
          marginTop: "15%",
          // justifyContent: "center",
          alignItems: "center",
          // flex: 1,
        }}
      >
        <Image
          style={{ width: 300, height: 400 }}
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
            onPress={() => navigation.navigate("UserEntries")}
            btnText={"Entries"}
            style={styles.btn}
          />
          <GradientVarientOneBtn
            onPress={() => navigation.navigate("Result")}
            btnText={"Result"}
            style={styles.btn}
          />
        </View>
      </View>
    </View>
  );
}

export default TimeRemaining

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#2A2E2E",
    flex: 1,
    // alignItems: "center",
    flexDirection: "column",
    // gap: 20,
    padding: 30,
  },
  btn: {
    width: "50%",
    borderWidth: "1",
    borderColor: "#DDBBE6",
    borderRadius: 10,
    overflow: "hidden",
    marginTop: "10%",
  },
});