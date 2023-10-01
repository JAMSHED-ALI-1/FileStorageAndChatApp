import { StyleSheet } from "react-native";
import { COLORS } from "../constants/theme";
import { height } from "../screens/LinkedDomain/responsiveui";

export const commonStyle = StyleSheet.create({
  contentStyle: {
    marginTop: -2,
    fontSize: 14,
  },

  textInputStyle: {
    fontFamily: "Gilroy-Regular",
    backgroundColor: COLORS.background,
  },
});
