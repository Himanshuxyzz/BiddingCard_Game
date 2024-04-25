import { Pressable, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React from "react";

const WalletMain = ({ Navigation }) => {
  return (
    <View>
      {/* <Pressable onPress={() => Navigation.navigate("WalletMainVerified")}>
        
        
      </Pressable> */}
      <TouchableOpacity onPress={() => console.log("Working")} ><Text>Start </Text></TouchableOpacity>
    </View>
  );
};

export default  WalletMain;