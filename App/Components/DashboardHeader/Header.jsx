import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React from "react";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { Ionicons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";

const Header = () => {
  const navigation = useNavigation();
  return (
    <View>
      {/* header */}
      <View
        style={{
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "space-between",
          width: "100%",
        }}
      >
        <View style={{ flexDirection: "row", alignItems: "center", gap: 15 }}>
          <TouchableOpacity>
            <View
              style={{
                borderRadius: 9999,
                padding: 2,
                backgroundColor: "rgba(255, 252, 255, 0.20)",
              }}
            >
              <Image
                style={{ width: 40, height: 40 }}
                source={require("../../../assets/Images/usericon.png")}
              />
            </View>
          </TouchableOpacity>

          <Text style={{ color: "#fff", fontSize: 23, fontWeight: "bold" }}>
            Raj
          </Text>
        </View>
        <View style={{ flexDirection: "row", alignItems: "center", gap: 15 }}>
          <TouchableOpacity
            onPress={() => navigation.navigate("WalletMainVerified")}
          >
            <View
              style={{
                borderWidth: 1,
                borderRadius: 15,
                paddingHorizontal: 5.5,
                paddingVertical: 4,
                backgroundColor: "#fff",
                width: 50,
                height: 40,
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <MaterialCommunityIcons
                name="wallet-outline"
                size={30}
                color="gray"
              />
            </View>
          </TouchableOpacity>

          <Ionicons name="ellipsis-vertical" size={28} color="#fff" />
        </View>
      </View>
      {/* header end */}
    </View>
  );
};

export default Header;

const styles = StyleSheet.create({});
