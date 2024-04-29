import { StyleSheet, Text, TouchableOpacity } from "react-native";
import React from "react";
import { LinearGradient } from "expo-linear-gradient";
import Colors from "../../Utils/Colors";

const GradientVarientThirdBtn = ({ btnText, style, isDisabled, ...props }) => {
  return (
    <TouchableOpacity style={{ ...style }} {...props} disabled={isDisabled}>
      <LinearGradient
        colors={["#FF0000", "#910C8C", "#910C8C"]}
        locations={[0.03, 1, 1]}
        start={{ x: 0, y: 0 }} // Start from the top-left corner
        end={{ x: 1, y: 0 }} // End at the top-right corner
        style={{ padding: 20 }}
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
    </TouchableOpacity>
  );
};

export default GradientVarientThirdBtn;

const styles = StyleSheet.create({
  btn: {
    minWidth: "90%",
    borderRadius: 10,
    overflow: "hidden",
  },
});
