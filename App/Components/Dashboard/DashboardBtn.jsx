import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React from "react";
import { useNavigation } from "@react-navigation/native";

const DashboardBtn = ({ btnText, btnStrokeClr, iconImg, navigateTo }) => {
  const navigation = useNavigation();
  return (
    <TouchableOpacity onPress={() => navigation.navigate(navigateTo)}>
      <View style={styles.button}>
        <Image style={{ width: 45, height: 45 }} source={iconImg} />
        <Text style={styles.buttonText}>{btnText}</Text>
      </View>
    </TouchableOpacity>
  );
};

export default DashboardBtn;

const styles = StyleSheet.create({
  button: {
    paddingVertical: 25,
    paddingHorizontal: 45,
    borderRadius: 20,
    backgroundColor: "rgba(29,4,48,0.80)",
    minWidth: "80%",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    gap: 20,
    // Enhanced iOS Shadow for 3D depth effect with increased bottom height
    shadowColor: "rgba(0, 0, 0, 0.25)",
    shadowOffset: { width: 0, height: 25 }, // Increased y-offset
    shadowOpacity: 1,
    shadowRadius: 14,
    // Enhanced Android Shadow for 3D depth effect
    elevation: 20,
  },
  buttonText: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 24,
    fontWeight: "bold",
    textAlign: "center",
  },
});
