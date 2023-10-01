import {
  Dimensions,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import React from "react";
import { COLORS } from "./theme";

const { height, width } = Dimensions.get("screen");
const InActiveBtn = ({
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
        alignSelf: "center",
        borderRadius: 50,
        borderWidth: 1,
        borderColor: COLORS.secondary,
      }}
    >
      <Text
        style={{
          color: "black",
          fontFamily: "Gilroy-SemiBold",
          fontSize: 16,
          fontWeight: "500",
        }}
      >
        {title}
      </Text>
    </TouchableOpacity>
  );
};

export default InActiveBtn;
