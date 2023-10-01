import { Image, SafeAreaView, StyleSheet, Text, View } from "react-native";
import React from "react";

import { SIZES, COLORS } from "../../constants/theme";
import Header from "../../constants/Header";
import CustomActiveBtn from "../../constants/CustomActiveBtn";

const Successful = (props) => {
  return (
    <SafeAreaView>
      <View style={styles.container}>
        <Header
          backIcon={true}
          title="Identity Verification"
          onPressBack={() => props.navigation.goBack()}
        />

        <View style={styles.body}>
          {/* <CustomHeader heading={'Identity Verification'} name={'left'} props={'ImageUpload'} /> */}
          <View style={styles.main}>
            <Image
              resizeMode="contain"
              style={{ height: 110, width: 110, borderRadius: 50 }}
              source={require("../../assets/images/verified.png")}
            />
            <Text style={styles.mainText}>
              Document and Selfie Uploaded Successfully!
            </Text>
          </View>

          <CustomActiveBtn
            onPress={() => props.navigation.navigate("BottomTabNavigation")}
            backgroundColor={COLORS.primary}
            color={"#fff"}
            title={"Continue"}
          />
        </View>
      </View>
    </SafeAreaView>
  );
};

export default Successful;

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#fff",
    // flex: 1,
    height: "100%",
  },
  body: {
    paddingHorizontal: SIZES.padding * 1.6,
  },
  main: {
    alignItems: "center",
    justifyContent: "center",
    height: "86%",
    gap: 10,
  },
  mainText: {
    color: COLORS.primary,
    fontSize: SIZES.h2,
    textAlign: "center",
    fontFamily: "Gilroy-Medium",
    fontSize: 20,
    lineHeight: 30,
  },
});
