import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React from "react";
import { LinearGradient } from "expo-linear-gradient";
import Colors from "../../Utils/Colors";

const GradientBgFill = ({ btnText, style, isDisabled, ...props }) => {
  return (
    <View style={{ ...style }} {...props}>
      <LinearGradient
        colors={["#662D91", "#EE82EE"]}
        locations={[0.3, 1]}
        start={{ x: 0, y: 0 }} // Start from the top-left corner
        end={{ x: 1, y: 1 }} // End at the bottom-right corner
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
