import {
  Image,
  ScrollView,
  StyleSheet,
  Text,
  View,
  SafeAreaView,
} from "react-native";
import React, { useState } from "react";
import { COLORS, SIZES } from "../../constants/theme";
import { TextInput } from "react-native-paper";
import DropdownComponent from "../../constants/CustomDropDown";

import Phone from "../../constants/Phone";
import CustomButton from "../../constants/CustomActiveBtn";
import Header from "../../constants/Header";
import { useNavigation } from "@react-navigation/native";
import CustomActiveBtn from "../../constants/CustomActiveBtn";
import { Formik } from "formik";
import * as Yup from 'yup';
import { min } from "moment";
const SignupSchema = Yup.object().shape({
  fullName: Yup.string()
  .trim()
    .min(2, 'Too Short!')
    .max(20, 'Too Long!')
    .required('Required')
    .matches(
      /^([a-zA-Z0-9]+|[a-zA-Z0-9]+\s{1}[a-zA-Z0-9]{1,}|[a-zA-Z0-9]+\s{1}[a-zA-Z0-9]{3,}\s{1}[a-zA-Z0-9]{1,})$/,
      'Please Enter Valid Full Name',
    ),
  userName: Yup.string()
  .trim()
    .min(3, 'Too Short!')
    .max(20, 'Too Long!')
    .required('Required')
    .matches(/^[a-zA-Z0-9_-]+$/, 'Please Enter Valid User Name'),

  Email: Yup.string()
  .trim()
   .min(10)
   .max(25)
    .required('Required')
    .matches(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/,'Please Enter Valid Email'),
    // .matches(/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,'Plaese Enter Valid Email'),
    authentication:Yup.string()
    .required('Required'),

});
const Editprofile = (props) => {
  const [selectedQuestion, setSelectedQuestion] = useState(null);
  const securityQuestions = [
    { label: "What is your mother's maiden name?", value: "maiden_name" },
    { label: "What was the name of your first pet?", value: "first_pet" },
    { label: "What city were you born in?", value: "birth_city" },
  ];

  const [selectedLanguage, setSelectedLanguage] = useState("");

  const languages = [
    { label: "English", value: "English" },
    { label: "Spanish", value: "Spanish" },
    { label: "French", value: "French" },
    { label: "German", value: "German" },
    { label: "Italian", value: "Italian" },
  ];
  const [currentDate, setCurrentDate] = useState(new Date().toString());
  const navigation = useNavigation();

  return (
    <Formik
      initialValues={{
        fullName: '',
        userName: '',
        Email: '',
        mobile: '',
        authentication: '',
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
        <SafeAreaView style={styles.container}>
          <Header
            backIcon={true}
            title="Edit Public Profile"
            onPressBack={() => props.navigation.goBack()}
          />
          <ScrollView>
            <View style={styles.body}>
              <View style={styles.inputFieldContainer}>
                <View style={styles.inputField}>
                  <Text style={styles.heading2}>Full Name</Text>
                  <TextInput
                    mode="outlined"
                    placeholder="Enter Your Full Name"
                    outlineColor={errors.fullName ? 'red' : COLORS.boderColor}
                    activeOutlineColor={
                      errors.fullName ? 'red' : COLORS.boderColor
                    }
                    outlineStyle={{borderRadius: 50}}
                    style={styles.TextInput}
                    placeholderTextColor={COLORS.secondary}
                    value={values.fullName}
                    onChangeText={handleChange('fullName')}
                    onBlur={()=>setFieldTouched('fullName')}
                  />
                  {touched.fullName && errors.fullName && (
                    <Text style={styles.errorsTxt}>{errors.fullName}</Text>
                  )}
                </View>
                <View style={styles.inputField}>
                  <Text style={styles.heading2}>UserName</Text>
                  <TextInput
                    mode="outlined"
                    placeholder="Enter Your Full Name"
                    outlineColor={errors.userName ? 'red' : COLORS.boderColor}
                    activeOutlineColor={
                      errors.userName ? 'red' : COLORS.boderColor
                    }
                    outlineStyle={{borderRadius: 50}}
                    style={styles.TextInput}
                    placeholderTextColor={COLORS.secondary}
                    value={values.userName}
                    onChangeText={handleChange('userName')}
                    onBlur={()=>setFieldTouched('userName')}
                  />
                  {touched.userName && errors.userName && (
                    <Text style={styles.errorsTxt}>{errors.userName}</Text>
                  )}
                </View>
                <View style={styles.inputField}>
                  <Text style={styles.heading2}>Email</Text>
                  <TextInput
                    mode="outlined"
                    placeholder="Enter Your Email"
                    outlineColor={ errors.authentication ? 'red':COLORS.boderColor}
                    activeOutlineColor={errors.authentication ? 'red' :COLORS.boderColor}
                    outlineStyle={{borderRadius: 50}}
                    style={styles.TextInput}
                    placeholderTextColor={COLORS.secondary}
                    value={values.Email}
                    onChangeText={handleChange('Email')}
                    onBlur={()=>setFieldTouched('Email')}
                  />
                  {touched.Email && errors.Email && (
                    <Text style={styles.errorsTxt}>{errors.Email}</Text>
                  )}
                </View>
                <View style={styles.inputField}>
                  <Text style={styles.heading2}>Mobile Number</Text>
                  <Phone />
                </View>
                <View style={styles.inputField}>
                  <Text style={styles.heading2}>Select Language</Text>
                  <DropdownComponent />
                </View>
                <Text style={styles.heading3}>Security:</Text>

                <View style={styles.inputField}>
                  <Text style={styles.heading2}>Select Security</Text>
                  <DropdownComponent />
                </View>
                <View style={styles.inputField}>
                  <Text style={styles.heading2}>Security Answer</Text>
                  <TextInput
                    mode="outlined"
                    placeholder="Please Enter Security question"
                    outlineColor={COLORS.boderColor}
                    activeOutlineColor={COLORS.boderColor}
                    outlineStyle={{borderRadius: 50}}
                    style={styles.TextInput}
                    placeholderTextColor={COLORS.secondary}
                  />
                </View>
                <View style={styles.inputField}>
                  <Text style={styles.heading2}>Authentication Number</Text>
                  <TextInput
                    mode="outlined"
                    placeholder="23564"
                    outlineColor={errors.authentication ? 'red' : COLORS.boderColor}
                    activeOutlineColor={errors.authentication ? 'red' :COLORS.boderColor}
                    outlineStyle={{borderRadius: 50}}
                    style={styles.TextInput}
                    placeholderTextColor={COLORS.secondary}
                    value={values.authentication}
                    onChangeText={handleChange('authentication')}
                  />
                  {errors.authentication && (
                    <Text style={styles.errorsTxt}>
                      {errors.authentication}
                    </Text>
                  )}
                </View>
                <View style={styles.botm_btn}>
                  <CustomActiveBtn
                    title="Save Changes"
                    backgroundColor={'black'}
                    color={'white'}
                    onPress={handleSubmit}
                    
                  />
                </View>
              </View>
            </View>
          </ScrollView>
        </SafeAreaView>
      )}
    </Formik>
  );
};

export default Editprofile;

// padding = 10 by default in SIZES

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    height: '100%',
    flex: 1,
  },
  body: {
    paddingHorizontal: 23,
    gap: 5,
  },
  heading1: {
    color: COLORS.primary,
    fontSize: SIZES.h1,
    fontFamily: 'Gilroy-SemiBold',
  },
  heading2: {
    color: COLORS.primary,
    fontSize: SIZES.h2,
    fontFamily: 'Gilroy-Regular',
  },
  inputFieldContainer: {
    paddingTop: SIZES.padding,
    gap: 20,
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  rowItems: {
    width: '47%',
    gap: 5,
  },
  inputField: {
    gap: 4,
  },
  TextInput: {
    fontSize: 14,
    fontFamily: 'Gilroy-Regular',
    backgroundColor: '#fff',
  },

  pickerContainer: {
    height: 50,
    width: '100%',
    marginBottom: 10,
  },
  picker: {
    borderWidth: 0,
    borderColor: COLORS.secondary,
    borderWidth: 1,
    borderRadius: 50,
  },
  dropDown: {
    backgroundColor: 'rgba(0, 0, 0, 0.60)',
  },
  pickerItem: {
    justifyContent: 'flex-start',
  },
  heading3: {
    color: COLORS.primary,
    fontSize: SIZES.h2,
    fontFamily: 'Gilroy-SemiBold',
    marginTop: 20,
  },
  botm_btn: {
    marginBottom: 30,
  },
  errorsTxt:{
  fontSize:14,
  color:'red'
  }
});
