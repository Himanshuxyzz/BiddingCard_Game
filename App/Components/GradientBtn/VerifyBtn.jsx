import { StyleSheet, Text, TouchableOpacity } from "react-native";
import React from "react";
import { LinearGradient } from "expo-linear-gradient";
import Colors from "../../Utils/Colors";

const VerifyBtn = ({ btnText, style, isDisabled, ...props }) => {
  return (
    <TouchableOpacity style={{ ...style }} {...props} disabled={isDisabled}>
      <LinearGradient
        colors={["#2ED813", "#2ED813", "#2ED813"]}
        locations={[0.03, 1, 1]}
        start={{ x: 0, y: 0 }} // Start from the top-left corner
        end={{ x: 1, y: 0 }} // End at the top-right corner
        style={{ padding: 10 }}
      >
        <Text
          style={{
            textAlign: "center",
            fontSize: 24,
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

export default VerifyBtn;

