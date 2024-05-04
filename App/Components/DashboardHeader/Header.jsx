import { Image, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { Ionicons } from "@expo/vector-icons";

const Header = () => {
  return (
    <View>
      {/* header */}
        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "space-between",
            width:"100%"
          }}
        >
          <View style={{ flexDirection: "row", alignItems: "center", gap: 15 }}>
            <View
              style={{
                borderWidth: 1,
                borderRadius: "50%",
                padding: 2,
                backgroundColor: "rgba(228, 148, 235, 1)",
              }}
            >
              <Image
                style={{ width: 40, height: 40 }}
                source={require("../../../assets/Images/usericon.png")}
              />
            </View>
            <Text style={{ color: "#fff", fontSize: 23, fontWeight: "bold" }}>
              Raj
            </Text>
          </View>
          <View style={{ flexDirection: "row", alignItems: "center", gap: 15 }}>
            <View
              style={{
                borderWidth: 1,
                borderRadius: "15",
                paddingHorizontal: 5.5,
                paddingVertical: 4,
                backgroundColor: "#fff",
                width: 50,
                height: 40,
              }}
            >
              <MaterialCommunityIcons
                name="wallet-outline"
                size={30}
                color="gray"
              />
            </View>
            <Ionicons name="ellipsis-vertical" size={28} color="#fff" />
          </View>
      </View>
      {/* header end */}
    </View>
  );
}

export default Header

const styles = StyleSheet.create({})