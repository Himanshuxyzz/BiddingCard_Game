import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React, { useState } from "react";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { Ionicons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import WhiteText from "../WhiteText/WhiteText";

const Header = () => {
  const navigation = useNavigation();
  const [isMessage, setIsMessage] = useState(true);
  return (
    <View style={{ position: "relative", zIndex: 9999999 }}>
      {/* header */}
      <View
        style={{
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "space-between",
          width: "100%",
        }}
      >
        <View style={{ flexDirection: "row", alignItems: "center", gap: 20 }}>
          <TouchableOpacity onPress={() => navigation.openDrawer()}>
            <View
              style={{
                borderRadius: 9999,
                padding: 2,
                backgroundColor: "rgba(255, 252, 255, 0.20)",
              }}
            >
              <Image
                style={{ width: 60, height: 60 }}
                source={require("../../../assets/Images/drawer_dummy.png")}
              />
            </View>
          </TouchableOpacity>
          <View style={{}}>
            <Text
              style={{
                color: "#BD73BA",
                fontSize: 16,
                fontWeight: "bold",
                textShadowColor: "#000",
                textShadowOffset: { width: 0, height: 10 }, // Shadow only on the bottom
                textShadowRadius: 15,
              }}
            >
              Hello,
            </Text>
            <Text style={{ color: "#fff", fontSize: 19 }}>User123</Text>
          </View>
        </View>
        <View style={{ flexDirection: "row", alignItems: "center", gap: 20 }}>
          <TouchableOpacity onPress={() => setIsMessage(!isMessage)}>
            <Image
              style={{ width: 40, height: 40, position: "relative" }}
              source={require("../../../assets/Images/Notification.png")}
            />
            {isMessage && (
              <View
                style={{
                  position: "absolute",
                  width: 15,
                  height: 15,
                  backgroundColor: "red",
                  borderRadius: 9999,
                  right: 3,
                  top: 6,
                }}
              ></View>
            )}
          </TouchableOpacity>

          <TouchableOpacity
            onPress={() => navigation.navigate("WalletMainVerified")}
          >
            <Image
              style={{ width: 40, height: 40 }}
              source={require("../../../assets/Images/Wallet.png")}
            />
          </TouchableOpacity>
        </View>
      </View>
      {/* header end */}
    </View>
  );
};

export default Header;

const styles = StyleSheet.create({});
