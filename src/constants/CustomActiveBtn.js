import {
  Dimensions,
  StyleSheet,
  Text,
  Touchable,
  TouchableOpacity,
  View,
} from "react-native";
import React from "react";
import { COLORS } from "./theme";

const { width, height } = Dimensions.get("screen");

const CustomActiveBtn = ({
  title,
  onPress,
  backgroundColor,
  color,
  width = "100%",
}) => {
  return (
    <TouchableOpacity
      onPress={onPress}
      style={{
        backgroundColor: backgroundColor,
        width: width,
        height: height * 0.06,
        justifyContent: "center",
        alignItems: "center",
        borderRadius: 50,
        borderWidth: 1,
        borderColor: COLORS.black,
      }}
    >
      <Text
        style={{ color: color, fontFamily: "Gilroy-SemiBold", fontSize: 16 }}
      >
        {title}
      </Text>
    </TouchableOpacity>
  );
};

export default CustomActiveBtn;
