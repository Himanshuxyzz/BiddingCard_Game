import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React from "react";
import { LinearGradient } from "expo-linear-gradient";
import Colors from "../../Utils/Colors";

const GradientBgFill = ({ btnText, style, isDisabled, ...props }) => {
  return (
    <View style={{ ...style }} {...props}>
      <LinearGradient
        colors={["#EA59E4", "#C508BD", "#910C8C", "#910C8C"]}
        locations={[0.03, 0.64, 1, 1]}
        start={{ x: 0, y: 1 }} // Start from the top-left corner
        end={{ x: 0, y: 0 }} // End at the top-right corner
        style={{ flex: 1, minWidth: "100%", minHeight: "100%" }}
      >
        <Text
          style={{
            textAlign: "center",
            fontSize: 20,
            color: Colors.WHITE,
            fontWeight: "600",
          }}
        >
          {btnText}
        </Text>
      </LinearGradient>
    </View>
  );
};

export default GradientBgFill;
