import { StyleSheet, Text, TouchableOpacity } from "react-native";
import React from "react";
import { LinearGradient } from "expo-linear-gradient";
import Colors from "../../Utils/Colors";

const GradientVarientTwoBtn = ({ btnText, style, isDisabled, ...props }) => {
  return (
    <TouchableOpacity style={{ ...style }} {...props} disabled={isDisabled}>
      <LinearGradient
        colors={["#F57676", "#910C8C", "#910C8C"]}
        locations={[0.03, 1, 1]}
        start={{ x: 0, y: 0 }} // Start from the top-left corner
        end={{ x: 1, y: 0 }} // End at the top-right corner
        style={{ padding: 16 }}
      >
        <Text
          style={{
            textAlign: "center",
            fontSize: 22,
            color: Colors.WHITE,
            fontWeight: "600",
          }}
        >
          {btnText}
        </Text>
      </LinearGradient>
    </TouchableOpacity>
  );
};

export default GradientVarientTwoBtn;

