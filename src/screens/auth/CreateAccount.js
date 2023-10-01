import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  TextInput,
  Dimensions,
} from "react-native";
import React, { useState } from "react";
import { COLORS, SIZES } from "../../constants/theme";
import AntDesign from "react-native-vector-icons/AntDesign";
import { Checkbox } from "react-native-paper";
import CustomButton from "../../constants/CustomButton";
import CustomHeader from "../../constants/CustomHeader";
import { useNavigation } from "@react-navigation/native";
import { SafeAreaView } from "react-native-safe-area-context";
import Header from "../../constants/Header";
import InActiveBtn from "../../constants/InActiveBtn";
import CustomActiveBtn from "../../constants/CustomActiveBtn";
import { Formik } from "formik";
import * as Yup from 'yup' ;

import { commonStyle } from "../../assets/Styless";

const { height } = Dimensions.get("screen");

const CreateAccount = (props) => {
  const [email, setEmail] = useState("");
  const SignupSchema = Yup.object().shape({
    fullName: Yup.string()
      .min(2, 'Too Short!')
      .max(30, 'Too Long!')
      .required('Required')
      .matches(
        /^([a-zA-Z0-9]+|[a-zA-Z0-9]+\s{1}[a-zA-Z0-9]{1,}|[a-zA-Z0-9]+\s{1}[a-zA-Z0-9]{3,}\s{1}[a-zA-Z0-9]{1,})$/,
        'Please Enter Valid Full Name',
      ),
    userName: Yup.string()
      .min(3, 'Too Short!')
      .max(20, 'Too Long!')
      .required('Required')
      .matches(/^[a-zA-Z0-9_-]+$/, 'Please Enter Valid User Name'),

    Email: Yup.string()
      .min(10)
      .max(25)
      .required('Required')
      .matches(
        /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
        'Plaese Enter Valid Email',
      ),
    authentication: Yup.string().required('Required'),
  });
  return (
    <Formik
      initialValues={{
        fullName: '',
        mobile: '',
        selectgender: '',
      }}
      validationSchema={SignupSchema}>
      {({
        values,
        errors,
        touched,
        handleChange,
        setFieldTouched,
        handleSubmit,
        isValid,
      }) => (
        <SafeAreaView style={{flex: 1, backgroundColor: COLORS.background}}>
          <Header
            title="Login"
            backIcon={false}
            onPressBack={() => props.navigation.goBack()}
          />
          <View style={styles.screen}>
            <View style={styles.logo}>
              <Image
                source={require('../../assets/images/logo.png')}
                style={{height: 70, width: 65}}
              />
              <Text style={styles.LogoTxt}>Real-Time</Text>
            </View>
            <View>
              <Text style={styles.text}>Login</Text>
              <TextInput
                style={[styles.Input, commonStyle.textInputStyle]}
                placeholder="Enter mobile number or email"
                placeholderTextColor={COLORS.grey}
                // contentStyle={commonStyle.contentStyle}
                // style={commonStyle.textInputStyle}
                value={email}
                maxLength={50}
               
                onChangeText={email => setEmail(email)}
              />

              <View style={styles.button}>
                <CustomActiveBtn
                  color={COLORS.background}
                  title="Login"
                  backgroundColor={COLORS.black}
                  onPress={() => props.navigation.navigate('Otp')}
                />
              </View>
            </View>
            <View style={{marginTop: SIZES.my * 20}}>
              <InActiveBtn
                title="Create Account"
                color={COLORS.black}
                onPress={() => props.navigation.navigate('UpdateProfile')}
              />
              <Text style={styles.need}>Need help with the account?</Text>
            </View>
          </View>
        </SafeAreaView>
      )}
    </Formik>
  );
};

export default CreateAccount;

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    paddingHorizontal: 16,
  },

  Input: {
    borderWidth: 1,
    borderColor: "rgba(0, 0, 0, 0.25)",
    borderRadius: 50,
    paddingLeft: 20,
    fontSize: 16,
    marginTop: 7,
    height: height * 0.06,
  },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  heading: {
    color: COLORS.header,
    fontFamily: "Gilroy-SemiBold",
    fontSize: SIZES.h1,
    fontWeight: "600",
    lineHeight: 30,
  },

  logo: {
    alignItems: "center",
    marginVertical: SIZES.my * 2,
  },
  imageStyle: {
    height: 70,
    resizeMode: "contain",
    width: 65,
  },
  LogoTxt: {
    color: COLORS.primary,
    fontSize: SIZES.h2,
    textAlign: "center",
    lineHeight: 22,
    fontFamily: "Gilroy-Bold",
  },
  text: {
    fontSize: SIZES.h1,
    color: COLORS.black,
    fontFamily: "Gilroy-Semibold",
    // fontWeight: "500",
  },
  need: {
    color: COLORS.grey,
    fontSize: SIZES.h3,
    lineHeight: 22,
    textAlign: "center",
    marginVertical: SIZES.my * 2,
    alignSelf: "center",
  },
  footer: {
    marginTop: SIZES.my * 25,
  },
  button: {
    marginVertical: 15,
  },
});
