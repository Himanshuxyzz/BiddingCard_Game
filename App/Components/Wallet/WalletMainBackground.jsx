import React from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { AntDesign, Ionicons } from '@expo/vector-icons';
import WhiteText from '../WhiteText/WhiteText'; // Importing the existing WhiteText component

const WalletMainBackground = ({
  title = "Wallet",
  balance = "₹ 6000",
  onBackPress,
  containerStyle,
  headerStyle,
  balanceSectionStyle,
  iconStyle,
  balanceValueStyle,
}) => {
  return (
    <View style={[styles.container, containerStyle]}>
      <View style={[styles.header, headerStyle]}>
        <Text style={styles.title}>{title}</Text>
        <TouchableOpacity style={styles.backButton} onPress={onBackPress}>
          <AntDesign name="back" size={24} color="white" />
        </TouchableOpacity>
      </View>
      <View style={styles.separator}></View>
      <View style={[styles.balanceSection, balanceSectionStyle]}>
        <WhiteText style={{fontWeight: "bold", top: -20, right: -50, fontSize: 20 }}>Current Balance</WhiteText>
        <Ionicons
          name="wallet-outline"
          size={28}
          color="#FFC5C5"
          style={[styles.icon, iconStyle]}
        />
        <Text style={[styles.balanceValue, balanceValueStyle]}>{balance}</Text>
      </View>
    </View>
  );
};

export default WalletMainBackground;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: "100%",
    height: "100%",
    backgroundColor: "#2A2E2E",
    alignItems: "center",
    justifyContent: "center",
  },
  header: {
    flexDirection: "row",
    position: "absolute",
    top: 120,
    left: 220,
  },
  title: {
    fontSize: 25,
    color: "white",
    fontWeight: "bold",
    position: "absolute",
    top: -100,
    right: -190,
  },
  backButton: {
    position: "absolute",
    top: -100,
    right: 180,
  },
  separator: {
    position: "absolute",
    backgroundColor: "#8E8B8D",
    width: "100%",
    height: 60,
    borderRadius: 5,
    top: 60,
  },
  balanceSection: {
    flexDirection: "row",
    alignItems: "center",
    position: "absolute",
    top: 100,
    left: 20,
  },
 

  icon: {
    top: -20,
    right: 150,
    borderRadius: 20,
  },
  balanceValue: {
    color: "#ECB425",
    fontWeight: "bold",
    fontSize: 18,
    top: -20,
    right: -150,
  },
});
