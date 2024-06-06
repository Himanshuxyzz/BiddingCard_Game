import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React, { useState } from "react";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { Ionicons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import WhiteText from "../WhiteText/WhiteText";

const Header = () => {
  const navigation = useNavigation();
  const [showModal, setShowModal] = useState(false);
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
                textShadowColor: '#000',
                textShadowOffset: { width: 0, height: 10 }, // Shadow only on the bottom
                textShadowRadius: 15
              }}
            >
              Hello,
            </Text>
            <Text style={{ color: "#fff", fontSize: 19 }}>User123</Text>
          </View>
        </View>
        <View style={{ flexDirection: "row", alignItems: "center", gap: 15 }}>
          <TouchableOpacity
            onPress={() => navigation.navigate("WalletMainVerified")}
          >
            {/* <View
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
            </View> */}
            <Image
              style={{ width: 40, height: 40 }}
              source={require("../../../assets/Images/Wallet.png")}
            />
          </TouchableOpacity>

          {/* <TouchableOpacity onPress={() => setShowModal(!showModal)}>
            <Ionicons name="ellipsis-vertical" size={28} color="#fff" />
          </TouchableOpacity> */}
        </View>
      </View>
      {/* header end */}
      {/* 3 dots modal */}
      {/* {showModal && (
        <View
          style={{
            borderWidth: 2,
            backgroundColor: "rgba(0, 0, 0, 0.6)",
            padding: 10,
            borderRadius: 10,
            width: "45%",
            height: 160,
            alignSelf: "flex-end",
            position: "absolute",
            top: 45,
            zIndex: 9999999,
          }}
        >
          <TouchableOpacity style={{ flex: 1, padding: 10 }}>
            <View>
              <WhiteText style={{ fontSize: 15 }}>Search</WhiteText>
            </View>
          </TouchableOpacity>
          <TouchableOpacity style={{ flex: 1, padding: 10 }}>
            <View>
              <WhiteText style={{ fontSize: 15 }}>Notifaction</WhiteText>
            </View>
          </TouchableOpacity>
          <TouchableOpacity style={{ flex: 1, padding: 10 }}>
            <View>
              <WhiteText style={{ fontSize: 15 }}>My games</WhiteText>
            </View>
          </TouchableOpacity>
        </View>
      )} */}
      {/* 3 dots modal end */}
    </View>
  );
};

export default Header;

const styles = StyleSheet.create({});
