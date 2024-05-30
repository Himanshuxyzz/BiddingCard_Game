import { StyleSheet, Text, TouchableOpacity } from "react-native";
import React from "react";
import { LinearGradient } from "expo-linear-gradient";
import Colors from "../../Utils/Colors";

const GradientVarientOneBtn = ({ btnText, style, isDisabled, ...props }) => {
  return (
    <TouchableOpacity style={{ ...style }} {...props} disabled={isDisabled}>
      <LinearGradient
        colors={["#EA59E4", "#C508BD", "#910C8C"]}
        locations={[0.03, 0.64, 1]}
        start={{ x: 0, y: 0 }} // Start from the top-left corner
        end={{ x: 1, y: 0 }} // End at the top-right corner
        style={{
          padding: 15,
          borderColor: "#DDBBE6",
          borderWidth: 1,
          borderRadius: 10,
        }}
      >
        <Text
          style={{
            textAlign: "center",
            fontSize: 20,
            color: Colors.WHITE,
            fontWeight: "bold",
          }}
        >
          {btnText}
        </Text>
      </LinearGradient>
    </TouchableOpacity>
  );
};

export default GradientVarientOneBtn;

const styles = StyleSheet.create({
  btn: {
    minWidth: "90%",
    borderRadius: 10,
    overflow: "hidden",
  },
});
