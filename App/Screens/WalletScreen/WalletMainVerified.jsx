import React, { useEffect, useState } from "react";
import { StyleSheet, View, Text, ScrollView } from "react-native";
import { AntDesign } from "@expo/vector-icons";
import { BlurView } from 'expo-blur';
import GradientVarientOneBtn from "../../Components/Gradient/GradientVariantOneBtn";
import WalletMainBackground from '../../Components/Wallet/WalletMainBackground'; 
import WhiteText from "../../Components/WhiteText/WhiteText";

const WalletMainVerified = ({ navigation, route }) => {
  const [currentBalance, setCurrentBalance] = useState(10000); // Initial mock balance
  const amountAdded = parseInt(route.params?.amountAdded, 10) || 0;
  const amountDeducted = parseInt(route.params?.amountDeducted, 10) || 0;

  useEffect(() => {
    if (amountAdded > 0) {
      setCurrentBalance(prevBalance => prevBalance + amountAdded);
    }
    if (amountDeducted > 0) {
      setCurrentBalance(prevBalance => prevBalance - amountDeducted);
    }
  }, [amountAdded, amountDeducted]);

  return (
    <ScrollView contentContainerStyle={styles.scrollContainer}>
      <View style={styles.container}>
        <WalletMainBackground 
          balance={currentBalance} 
          onBackPress={() => navigation.goBack()} 
          amountAdded={amountAdded} 
          amountDeducted={amountDeducted}
        />
        
        <BlurView intensity={10} tint="light" style={styles.subcontainer}>
          <View>
            <GradientVarientOneBtn
              btnText={"Add To Wallet"}
              style={styles.btn1}
              onPress={() => navigation.navigate("AddToWallet", { currentBalance })}
            />
            <GradientVarientOneBtn
              btnText={"Withdrawal"}
              style={styles.btn1}
              onPress={() => navigation.navigate("Withdraw", { currentBalance })}
            />
            <View style={styles.bottom}>
              <AntDesign name="Safety" size={54} color="green" style={styles.icon} />
              <WhiteText style={{ fontSize: 24, fontWeight: "bold" }}>Safe & Secure Payments</WhiteText>
              <WhiteText style={{ fontSize: 15 }}>You can withdraw only 50% from your BC Money Wallet.</WhiteText>
            </View>
          </View>
        </BlurView>
      </View>
    </ScrollView>
  );
};

export default WalletMainVerified;

const styles = StyleSheet.create({
  scrollContainer: {
    flexGrow: 1,
  },
  container: {
    width: "100%",
    height: "100%",
    backgroundColor: "#2A2E2E",
    alignItems: "center",
    justifyContent: "center",
    flex: 1,
    padding :10,
  },
  subcontainer: {
    width: "100%",
    marginTop: -38,
    height: "60%",
    padding: 10,
    borderRadius: 4,
    backgroundColor: "#2A2E2E"
  },
  btn1: {
    width: "60%",
    marginBottom: 20,
    marginTop: 40,
    marginLeft: 80
  },
  bottom: {
    position: "relative",
    top: 50,
    display: "flex",
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "center",
    alignItems: "center",
    gap: 10,
  },
  icon: {
    marginRight: 10,
  }
});
