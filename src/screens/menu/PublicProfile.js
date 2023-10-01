import {
  StyleSheet,
  Text,
  View,
  Image,
  ImageBackground,
  TouchableOpacity,
  Keyboard,
  SafeAreaView,
} from "react-native";
import React from "react";
import { COLORS, SIZES } from "../../constants/theme";
import FontAwesome from "react-native-vector-icons/FontAwesome";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import FontAwesome5 from "react-native-vector-icons/FontAwesome5";
import CustomButton from "../../constants/CustomBtn";
import Kyc from "../kyc 2/Kyc";
import { useNavigation } from "@react-navigation/native";
import Header from "../../constants/Header";

export default function PublicProfile() {
  const navigation = useNavigation();
  const handle_edit = () => {
    navigation.navigate("Editprofile");
  };
  return (
    <SafeAreaView style={styles.screen}>
      <Header
        title="Public Profile"
        backIcon={true}
        onPressBack={() => navigation.goBack()}
      />
      <View style={styles.container}>
        <View style={styles.profile}>
          <ImageBackground
            source={require("../../assets/images/Profile.png")}
            style={{ height: 86, width: 86 }}
          >
            <TouchableOpacity>
              <Image
                source={require("../../assets/images/pen.png")}
                style={styles.pen}
              />
            </TouchableOpacity>
          </ImageBackground>
          <Text style={styles.name}>Aadya Shrivastava</Text>
        </View>
        <View style={styles.line}></View>
        <View style={styles.containers}>
          <Text style={styles.name}>Other Details:</Text>
          <View style={styles.subContainer}>
            <FontAwesome name="phone" size={15} style={styles.icon} />
            <Text style={styles.subTxt}>+91 870723028</Text>
          </View>
          <View style={styles.subContainer}>
            <MaterialCommunityIcons
              name="email"
              size={17}
              style={styles.icon}
            />
            <Text style={styles.subTxt}>aadyajudihobs@gmail.com</Text>
          </View>
          <View style={styles.subContainer}>
            <FontAwesome5 name="globe" size={17} style={styles.icon} />
            <Text style={styles.subTxt}>English</Text>
          </View>
        </View>

        <View style={{ marginTop: 20 }}>
          <TouchableOpacity
            style={[
              styles.button,
              { backgroundColor: "#fff", boderColor: "rgba(0, 0, 0, 0.15)" },
            ]}
            onPress={handle_edit}
          >
            <Text style={[styles.buttonTxt, { color: "rgba(0, 0, 0, 0.87)" }]}>
              <FontAwesome5 name={"pen"} size={16} color="black" /> Edit Public
              Profile
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: COLORS.background,
  },
  header: {
    marginVertical: SIZES.my * 1.5,
  },
  headerTxt: {
    color: COLORS.header,
    fontSize: SIZES.h2,
    fontFamily: "Gilroy-SemiBold",
    textAlign: "center",
    fontWeight: "700",
    lineHeight: 21,
  },
  profile: {
    alignItems: "center",
    rowGap: 10,
    marginTop: SIZES.my * 2,
  },
  pen: {
    height: 22,
    width: 22,
    borderRadius: 60,
    alignSelf: "flex-end",
    marginTop: 55,
  },
  name: {
    color: COLORS.header,
    fontSize: SIZES.h2,
    fontFamily: "Gilroy-SemiBold",
  },
  line: {
    borderBottomWidth: 1,
    borderBottomColor: "rgba(0, 0, 0, 0.15)",
    marginTop: SIZES.my * 2.8,
  },
  icon: { color: "rgba(0, 0, 0, 0.60)", alignSelf: "center" },
  subTxt: {
    color: COLORS.black,
    fontFamily: "Gilroy-Medium",
    fontSize: SIZES.h2,
  },
  container: { paddingHorizontal: 16, paddingVertical: 16 },
  containers: {
    paddingVertical: 16,
    paddingHorizontal: 8,
  },

  subContainer: { marginTop: 15, flexDirection: "row", columnGap: 8 },
  button: {
    height: 50,
    // width: '100%',
    borderRadius: 50,
    marginTop: 10,
    borderWidth: 1,
  },
  buttonTxt: {
    textAlign: "center",
    paddingVertical: 14,
    // color: COLORS.background,
    fontSize: 16,
    fontWeight: "500",
    fontFamily: "Gilroy-Regular",
  },
});
