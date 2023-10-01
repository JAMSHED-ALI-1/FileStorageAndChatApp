import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  ScrollView,
  TextInput,
  Dimensions,
  SafeAreaView,
} from "react-native";
import React, { useState } from "react";

import { Checkbox, RadioButton } from "react-native-paper";
import CustomButton from "../../constants/CustomButton";
import CustomHeader from "../../constants/CustomHeader";
import Phone from "../../constants/Phone";
import { Formik } from "formik";
import * as Yup from "yup";
import Header from "../../constants/Header";
import CustomActiveBtn from "../../constants/CustomActiveBtn";
import { useNavigation } from "@react-navigation/native";
import { commonStyle } from "../../assets/Styless";
import { COLORS, SIZES } from "../../constants/theme";


// import { height } from '../LinkedDomain/responsiveui';
const { height } = Dimensions.get("screen");

const UpdateProfileSchema = Yup.object().shape({
  email: Yup.string()
    .trim()
    .matches(
      /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/,
      'Please enter valid email.',
    )
    .required('Email is required.'),
  name: Yup.string()
    .trim()
    .min(2, 'Too short')
    .matches(/^[A-Za-z\s\-']{1,}$/, 'Please enter valid name')
    .required('Name is required'),
  gender: Yup.string()
    .oneOf(['male', 'female', 'others'], 'Please select a valid gender')
    .required('Gender is required'),
});

const UpdateProfile = (props) => {
  const [selectedGender, setSelectedGender] = useState("");
  const [checked, setChecked] = useState(false);
  const navigation = useNavigation()
  // console.log("fdsajgbfs", navigation)

  const handleGenderSelect = (gender) => {
    setSelectedGender(gender);
  };
  const handleCheckboxPress=()=>{
    setChecked(!checked)
  }

  return (
    <Formik
      initialValues={{email: '', name: '', phone: '', gender: ''}}
      validationSchema={UpdateProfileSchema}
      onSubmit={values => {
     
        if (checked) {
        
          props.navigation.navigate('VerifyMobile');
        }
      }}>
      {({
        values,
        errors,
        touched,
        handleChange,
        setFieldTouched,
        isValid,
        handleSubmit,
        setFieldValue,
      }) => (
        <SafeAreaView style={{flex: 1, backgroundColor: COLORS.background}}>
          <Header
            title="Create an account"
            backIcon={true}
            onPressBack={() => props.navigation.goBack()}
          />
          <ScrollView showsVerticalScrollIndicator={false}>
            <View style={styles.screen}>
              <View style={styles.logo}>
                <Image
                  source={require('../../assets/images/logo.png')}
                  style={{height: 70, width: 65}}
                />
                <Text style={styles.LogoTxt}>Real-Time</Text>
              </View>
              <View>
                <View style={styles.space}>
                  <Text style={styles.text}>
                    Full Name<Text style={styles.astrik}>*</Text>
                  </Text>
                  <TextInput
                    // style={styles.Input}
                    style={[commonStyle.textInputStyle, styles.Input]}
                    placeholder="Enter your name"
                    value={values.name}
                    onChangeText={handleChange('name')}
                    keyboardType="email-address"
                    onBlur={() => setFieldTouched('name')}
                  />
                  {touched.name && errors.name && (
                    <Text style={styles.validation}>{errors.name}</Text>
                  )}
                </View>
                <Text style={styles.text}>
                  Mobile Number<Text style={styles.astrik}>*</Text>
                </Text>
                <Phone />

                <View style={styles.space}>
                  <Text style={styles.text}>
                    Email<Text style={styles.astrik}>*</Text>
                  </Text>
                  <TextInput
                    // style={styles.Input}
                    style={[commonStyle.textInputStyle, styles.Input]}
                    placeholder="Enter your email address"
                    value={values.email}
                    onChangeText={handleChange('email')}
                    keyboardType="email-address"
                    onBlur={() => setFieldTouched('email')}
                  />
                  {touched.email && errors.email && (
                    <Text style={styles.validation}>{errors.email}</Text>
                  )}
                </View>
              </View>
              <Text style={styles.text}>
                Select Gender<Text style={styles.astrik}>*</Text>
              </Text>
              <View style={styles.container}>
                <View style={styles.radioButton}>
                  <Text style={styles.genderTxt}>Male</Text>

                  <RadioButton
                    color="#000000"
                    status={selectedGender === 'male' ? 'checked' : 'unchecked'}
                    onPress={() => {
                      setSelectedGender('male'),
                        setFieldTouched('gender', true),
                        setFieldValue('gender', 'male');
                    }}
                  />
                </View>
                <View style={styles.radioButton}>
                  <Text style={styles.genderTxt}>Female</Text>
                  <RadioButton
                    color="#000000"
                    status={
                      selectedGender === 'female' ? 'checked' : 'unchecked'
                    }
                    onPress={() => {
                      setSelectedGender('female'),
                        setFieldTouched('gender', true),
                        setFieldValue('gender', 'female');
                    }}
                  />
                </View>
                <View style={styles.radioButton}>
                  <Text style={styles.genderTxt}>Others</Text>
                  <RadioButton
                    color="#000000"
                    status={
                      selectedGender === 'others' ? 'checked' : 'unchecked'
                    }
                    onPress={() => {
                      setSelectedGender('other'),
                        setFieldTouched('gender', true),
                        setFieldValue('gender', 'other');
                    }}
                  />
                </View>
              </View>
              {touched.gender && errors.gender && (
                <Text style={styles.validation}>{errors.gender}</Text>
              )}
              <View style={styles.checkbox}>
                <Checkbox
                  color="rgba(0, 0, 0, 0.92)"
                  status={checked ? 'checked' : 'unchecked'}
                  onPress={() => {
                    setChecked(!checked);
                  }}
                />
                <Text style={styles.checkboxTxt}>
                  I agree to the{' '}
                  <Text
                    onPress={() => props.navigation.navigate('TermConditions')}
                    style={styles.chkboxtxtBold}>
                    Terms & Conditions
                  </Text>{' '}
                  and
                  <Text
                    onPress={() => props.navigation.navigate('PrivacyPolicy')}
                    style={styles.chkboxtxtBold}>
                    {' '}
                    Privacy policy.
                  </Text>
                </Text>
              </View>
              <View style={styles.button}>
                <CustomActiveBtn
                  title="Create Account"
                  backgroundColor={COLORS.black}
                  color={COLORS.background}
                  // onPress={() => props.navigation.navigate("Verification")}
                  onPress={handleSubmit}
                />
              </View>

              <View style={styles.container2}>
                <Text style={styles.already}>Already have an account? </Text>
                <TouchableOpacity
                  onPress={() => navigation.navigate('CreateAccount')}>
                  <Text style={styles.login}>Login</Text>
                </TouchableOpacity>
              </View>
            </View>
          </ScrollView>
        </SafeAreaView>
      )}
    </Formik>
  );
};

export default UpdateProfile;

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    paddingHorizontal: SIZES.mx * 1.6,
    backgroundColor: COLORS.background,
  },
  logo: {
    alignItems: "center",
    marginTop: SIZES.my * 2,
  },
  LogoTxt: {
    color: COLORS.primary,
    fontSize: SIZES.h2,
    textAlign: "center",
    // fontWeight: "bold",
    lineHeight: 22,
    fontFamily: "Gilroy-Bold",
  },
  text: {
    fontSize: 16,
    color: COLORS.black,
    fontFamily: "Gilroy-Regular",
    fontWeight: "600",
  },
  astrik: {
    color: "#FE6A2D",
    fontSize: 16,
    fontWeight: "500",
  },
  container: {
    // height: 55,
    marginVertical: SIZES.my,
    flexDirection: "row",
    justifyContent: "space-between",
  },
  radioButton: {
    width: 110,
    borderRadius: 50,
    borderWidth: 1,
    borderColor: "rgba(0, 0, 0, 0.25)",
    paddingVertical: 5,
    paddingLeft: 10,
    paddingHorizontal: 0,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  genderTxt: {
    color: COLORS.secondary,
    fontSize: 16,
    fontFamily: "Gilroy-Regular",
    fontWeight: "300",
  },
  checkboxTxt: {
    color: COLORS.secondary,
    fontSize: 16,
    fontWeight: "400",
    lineHeight: 22,
    fontFamily: "Gilroy-Regular",
  },
  chkboxtxtBold: {
    color: COLORS.primary,
    fontSize: 16,
    // fontWeight: "700",
    lineHeight: 22,
    fontFamily: "Gilroy-Bold",
  },
  checkbox: {
    flexDirection: "row",
    paddingRight: 40,
    columnGap: 6,
    // marginTop: 6,
  },
  button: {
    marginVertical: 20,
  },
  container2: {
    flexDirection: "row",
    alignSelf: "center",
    paddingBottom: 10,
  },
  already: {
    color: COLORS.secondary,
    fontSize: 16,
    lineHeight: 22,
    textAlign: "center",
    fontFamily: 'Gilroy-Regular'
  },
  login: {
    color: COLORS.black,
    fontFamily: " Gilroy-SemiBold",
    fontWeight: "700",
    lineHeight: 22,
    fontSize: 16,
  },
  space: { marginVertical: 20 },
  Input: {
    borderWidth: 1,
    borderColor: "rgba(0, 0, 0, 0.25)",
    borderRadius: 50,
    paddingLeft: 22,
    fontSize: 16,
    marginTop: 7,
    height: height * 0.06,
  },
  validation: {
    color: "#FF3838",
    fontSize: SIZES.h3,
    marginTop: 5,
    // paddingLeft:5,
    fontFamily: "Gilroy-Light",
    // lineHeight: 23,
  },
});