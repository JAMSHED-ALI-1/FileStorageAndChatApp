import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  SafeAreaView,
} from "react-native";
import React from "react";
import AntDesign from "react-native-vector-icons/AntDesign";
import { useNavigation } from "@react-navigation/native";

import { COLORS, SIZES } from "../../constants/theme";
import Account_Detail from "./Account_Detail";
import Header from "../../constants/Header";

const Termsofservices = (props) => {
  const navigation = useNavigation();
  const handleAbout = () => {
    navigation.navigate("AboutUs");
  };
  const handlePrivacy = () => {
    navigation.navigate("PrivacyPolicy");
  };
  const handleBack = () => {
    navigation.navigate("Kyc");
  };
  return (
    <SafeAreaView style={styles.container}>
      <Header
        title="Edit Public Profile"
        backIcon={true}
        onPressBack={() => props.navigation.goBack()}
      />
      <View style={styles.hero_Body}>
        <TouchableOpacity style={styles.body_Part} onPress={handleAbout}>
          <Text style={styles.body_text}>About Us</Text>
          <AntDesign name="right" size={10} style={styles.body_text} />
        </TouchableOpacity>
        <TouchableOpacity style={styles.body_Part} onPress={handlePrivacy}>
          <Text style={styles.body_text}>Privacy Policy</Text>
          <AntDesign name="right" size={10} style={styles.body_text} />
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default Termsofservices;

const styles = StyleSheet.create({
  container: {
    flex:1,
    backgroundColor:COLORS.background,
    // height: "100%",
    // paddingHorizontal: 24,
    // marginTop: 15,
  },
  chevron_left: {
    height: 5,
    width: 9,
  },
  body_text: {
    fontFamily: "Gilroy-Regular",
    fontSize: 16,
    fontWeight: "400",
    color: "rgba(0, 0, 0, 0.87)",
  },
  approved: {
    color: "#32D82F",
    fontSize: 14,
    fontFamily: "Gilroy-SemiBold",
    fontWeight: "400",
    lineHeight: 19,
  },
  hero_Body: {
    justifyContent: "space-between",
    gap: 25,
    paddingHorizontal: 22,
    paddingVertical:10
  },
  body_Part: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
});
