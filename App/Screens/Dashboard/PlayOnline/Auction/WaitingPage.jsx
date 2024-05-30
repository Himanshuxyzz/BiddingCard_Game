import { Image, StyleSheet, Text, View } from 'react-native'
import Header from '../../../../Components/DashboardHeader/Header'
import React from 'react'

const WaitingPage = ({navigation}) => {
  return (
    <View style={styles.container}>
      <Header />

      <Text
        onPress={() => navigation.navigate("TimeRemaining")}
        style={{
          color: "rgba(234, 89, 228, 1)",
          fontSize: 28,
          fontWeight: "bold",
          textAlign: "center",
          marginTop: "8%",
        }}
      >
        Waiting for the Member to join
      </Text>
      <View
        style={{
          marginTop: "4%",
          justifyContent: "center",
          alignItems: "center",
          flex: 1,
        }}
      >
        <Image
          style={{ maxWidth:"90%",minWidth:"90%", height: 500 }}
          source={require("../../../../../assets/Images/waitingpage.png")}
        />
      </View>
    </View>
  );
}

export default WaitingPage

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#2A2E2E",
    flex: 1,
    // alignItems: "center",
    flexDirection: "column",
    gap: 20,
    padding: 20,
  },
});