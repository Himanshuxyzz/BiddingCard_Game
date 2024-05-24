import { View, Text } from "react-native";
import React from "react";
import Colors from "../../Utils/Colors";

const WhiteText = ({ children, style, ...props }) => {
  return (
    <>
      <Text style={{ color: Colors.WHITE, ...style }} {...props}>
        {children}
      </Text>
    </>
  );
};

export default WhiteText;
