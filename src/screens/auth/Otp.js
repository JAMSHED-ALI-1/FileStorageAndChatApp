import { StyleSheet, Text, View, Image, TouchableOpacity } from "react-native";
import React, { useRef, useState, useEffect } from "react";
import { COLORS, SIZES } from "../../constants/theme";
import CodeInput from "react-native-code-input";
import CustomHeader from "../../constants/CustomHeader";
import CustomButton from "../../constants/CustomButton";
import { SafeAreaView } from "react-native-safe-area-context";
import Header from "../../constants/Header";
import CustomActiveBtn from "../../constants/CustomActiveBtn";

const Otp = (props) => {
  const codeInputRef = useRef(null);
  const [remainingTime, setRemainingTime] = useState(0);
  const [timerActive, setTimerActive] = useState(false);
  const [showMessage, setShowMessage] = useState(false);
  const startTimer = () => {
    setRemainingTime(180); // Set your desired timer duration in seconds (3 minutes)
    setTimerActive(true);
  };

  const handleResendClick = () => {
    startTimer();
  };

  const handleSubmitClick = () => {
    setShowMessage(true);
  };

  useEffect(() => {
    let interval;
    if (timerActive && remainingTime > 0) {
      interval = setInterval(() => {
        setRemainingTime((prevTime) => prevTime - 1);
      }, 1000);
    } else {
      clearInterval(interval);
      setTimerActive(false);
    }
    return () => clearInterval(interval);
  }, [timerActive, remainingTime]);


  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: COLORS.background }}>
      <Header
        backIcon={true}
        title="Verify OTP"
        onPressBack={() => props.navigation.goBack()}
      />

      <View style={styles.screen}>
        {/* <CustomHeader heading={'Create Your Account'} name={'left'} /> */}
        <View style={styles.logo}>
          <Image
            source={require("../../assets/images/logo.png")}
            style={{ height: 70, width: 65 }}
          />
          <Text style={styles.LogoTxt}>Real-Time</Text>
        </View>
        <View style={styles.container}>
          <Text style={styles.subTitle}>
            Please enter the 4 digit verification code that was sent to
            abc@gmail.com The code is valid for 3 minute.
          </Text>
        </View>
        <View style={styles.CodeInput}>
          <CodeInput
            ref={codeInputRef}
            codeLength={4}
            borderType="circle"
            activeColor={COLORS.boderColor}
            inactiveColor={COLORS.boderColor}
            cellBorderWidth={1}
            inputPostion={"center"}
            codeInputStyle={styles.codeinput}
            size={50}
            space={30}
          />
        </View>
        <View style={styles.container2}>
          {remainingTime === 0 ? (
            <TouchableOpacity onPress={handleResendClick}>
              <Text style={styles.resend}>Resend</Text>
            </TouchableOpacity>
          ) : (
            <Text style={styles.timer}>{`0${Math.floor(
              remainingTime / 60
            )}:${remainingTime % 60}`}</Text>
          )}
        </View>


        <View style={{ marginTop: SIZES.mx * 1.6 }}>
          <CustomActiveBtn
            title="Submit"
            color={COLORS.black}
            onPress={() => props.navigation.navigate("BottomTabNavigation")}
          />
          {/* <CustomButton
            txt={"Submit"}
            backgroundColor={"#FFFFFF"}
            color={"rgba(0, 0, 0, 0.87)"}
            props={"BottomTabNavigation"}
            borderColor={"rgba(0, 0, 0, 0.60)"}
          /> */}
          {showMessage && (
            <View style={styles.message}>
              <Text style={styles.messageTxt}>
                OTP Verification Successfully
              </Text>
            </View>
          )}
        </View>
      </View>
    </SafeAreaView>
  );
};

export default Otp;

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    paddingHorizontal: SIZES.mx * 1.6,
    backgroundColor: COLORS.background,
  },
  logo: {
    alignItems: "center",
    marginTop: SIZES.my * 3,
  },
  // LogoTxt: {
  //   color: COLORS.primary,
  //   fontSize: SIZES.h2,
  //   textAlign: "center",
  //   fontWeight: "bold",
  //   lineHeight: 22,
  //   fontFamily: "Gilroy-Bold",
  //   marginTop: 4,
  // },
  subTitle: {
    color: COLORS.black,
    fontWeight: "400",
    lineHeight: 20,
    fontSize: 16,
    fontFamily: "Gilroy-Regular",
    textAlign: "center",
    marginTop: SIZES.my * 4,
  },
  CodeInput: {
    marginVertical: 10,
    paddingHorizontal: 50,
  },
  codeinput: {
    color: COLORS.header,
    fontFamily: "Gilroy-SemiBold",
    fontSize: SIZES.heading * 2.5,
    backgroundColor: 'rgba(0, 0, 0, 0.07)'
  },
  resend: {
    color: COLORS.header,
    fontSize: SIZES.h2,
    fontFamily: "Gilroy-SemiBold",
    fontWeight: "400",
    lineHeight: 22,
    // textDecorationLine: "underline",
    alignSelf: "flex-end",
  },
  timer: {
    color: COLORS.header,
    fontSize: SIZES.h2,
    fontFamily: "Gilroy-SemiBold",
    fontWeight: "400",
    lineHeight: 22,
    alignSelf: "flex-end",
    paddingRight: SIZES.px * 1,
  },
  expire: {
    color: "#FC4A1A",
    alignSelf: "flex-start",
    fontFamily: "Gilroy-Regular",
    fontSize: SIZES.h3,
    textAlign: "center",
  },
  message: {
    height: 40,
    width: "90%",
    alignItems: "center",
    borderRadius: 35,
    paddingVertical: 10,
    backgroundColor: "rgba(0, 0, 0, 0.06)",
    alignSelf: "center",
    marginVertical: SIZES.my * 18,
  },
  messageTxt: {
    color: "rgba(0, 0, 0, 0.87)",
    fontFamily: "Readex Pro-Medium",
    fontSize: 13,
    fontWeight: "300",
    lineHeight: 16,
  },
  container: {
    paddingHorizontal: SIZES.mx * 1.5,
    marginTop: SIZES.my * 4,
  },
  LogoTxt: {
    color: COLORS.primary,
    fontSize: SIZES.h2,
    textAlign: "center",
    // fontWeight: "bold",
    lineHeight: 22,
    fontFamily: "Gilroy-Bold",
    marginTop: 8, // Slightly increased the marginTop
  },

  container2: { marginTop: 50, paddingHorizontal: 50 },
  content2: { flexDirection: "row", justifyContent: "flex-end" },
});
