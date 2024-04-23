import { View, Text } from "react-native";
import React from "react";
import Colors from "../../Utils/Colors";

const WhiteText = ({ children, style, ...props }) => {
  return (
    <View>
      <Text style={{ color: Colors.WHITE, ...style }} {...props}>
        {children}
      </Text>
    </View>
  );
};

export default WhiteText;
