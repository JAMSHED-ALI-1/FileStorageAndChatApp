
import {
  Dimensions,
  Image,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {useState, useEffect} from 'react';
import {COLORS, ICONS, SIZES} from '../../constants/theme';
// import { TextInput } from "react-native-paper";
import DateTimePickerModal from 'react-native-modal-datetime-picker';
import CustomBtn from '../../constants/CustomBtn';
import Icon from 'react-native-vector-icons/FontAwesome6';
import {Formik, Form, Field} from 'formik';
import * as Yup from 'yup';
import Header from '../../constants/Header';
import CustomActiveBtn from '../../constants/CustomActiveBtn';
import moment from 'moment';
import {commonStyle} from '../../assets/Styless';
import CountryPicker from 'react-native-country-picker-modal';
const {height} = Dimensions.get('screen');

const verificationSchema = Yup.object().shape({
  firstName: Yup.string()
    .min(3, 'Too Short !')
    .max(30, 'Too Long !')
    .required('Please enter your first name')
    .matches(/^(?!.*([\w\d])\1\1)[\w\d]+$/, 'Please enter a valid name')
    .matches(/^[A-Za-z]{2,40}$/, 'Only alphabets allowed.'),
  lastName: Yup.string()
    .min(2, 'Too Short !')
    .max(30, 'Too Long !')
    .required('Please enter your last name')
    .matches(/^(?!.*(\w)\1\1)[\w\d]+$/, 'No repeating or special characters')
    .matches(/^[A-Za-z]{2,40}$/, 'Only alphabets allowed.'),

  // nationality: Yup.string().required('Required'),
  // dob: Yup.string().required('Please select your DOB'),
  state: Yup.string()
    .required('Please enter state')
    .matches(/^[A-Za-z\s-,.']+$/, 'Invalid State Name'),

  city: Yup.string()
    .required('Please enter city')
    .matches(/^[A-Za-z\s]+$/, 'Invalid City Name'),
  address: Yup.string().required('Please enter your full address'),
});

const handleChange = () => {};

const Verification = props => {
  const [isDatePickerVisible, setDatePickerVisibility] = useState(false);
  const [currentDate, setCurrentDate] = useState(
    new Date().toLocaleDateString(),
  );

  const [countryCode, setCountryCode] = useState('91');
  const [country, setCountry] = useState(null);
  const [isPickerVisible, setIsPickerVisible] = useState(false);

  useEffect(() => {
    setCountry({cca2: 'IN', name: 'India', callingCode: ['91']});
  }, []);

  const handleCountryChange = selectedCountry => {
    setCountry(selectedCountry);
    setCountryCode(selectedCountry.callingCode[0]);
    setIsPickerVisible(false);
  };
  const togglePicker = () => {
    setIsPickerVisible(!isPickerVisible);
  };

  const handleConfirm = date => {
    setCurrentDate(moment(date).format('DD/MM/YYYY'));
    setDatePickerVisibility(false);
  };

  const submit=()=>{
    props.navigation.navigate('Verify2')
  }

  return (
    <SafeAreaView>
      <View style={styles.container}>
        <ScrollView showsVerticalScrollIndicator={false}>
          <Header
            backIcon={true}
            title="Identification Verification"
            onPressBack={() => props.navigation.goBack()}
          />
          <View style={styles.body}>
            <Text style={styles.heading1}>Personal Information</Text>
            <Text style={styles.heading2}>Identify Information</Text>
            <Formik
              initialValues={{
                firstName: '',
                lastName: '',
                country: '',
                // nationality: '',
                dob: '',
                state: '',
                city: '',
                postalCode: '',
                address: '',
              }}
              validationSchema={verificationSchema}
              onSubmit={submit}

              
              
              >
              {({
                values,
                errors,
                handleChange,
                setFieldTouched,
                isValid,
                touched,
                handleSubmit
              }) => (
                <View style={styles.inputFieldContainer}>
                  <View style={styles.inputField}>
                    <Text style={styles.heading2}>First Name*</Text>
                    <TextInput
                      placeholder="Enter Your First Name"
                      style={[
                        styles.TextInput,
                        commonStyle.textInputStyle,
                        errors.firstName && touched.firstName
                          ? {borderColor: 'red', borderWidth: 1}
                          : null,
                      ]}
                      placeholderTextColor={COLORS.secondary}
                      value={values.firstName}
                      onChangeText={handleChange('firstName')}
                      onBlur={() => setFieldTouched('firstName')}
                    />
                    {touched.firstName && errors.firstName && (
                      <Text style={styles.errorText}>{errors.firstName}</Text>
                    )}
                  </View>
                  <View style={styles.inputField}>
                    <Text style={styles.heading2}>Last Name*</Text>
                    <TextInput
                      style={[
                        styles.TextInput,
                        commonStyle.textInputStyle,
                        errors.lastName && touched.lastName
                          ? {borderColor: 'red', borderWidth: 1}
                          : null,
                      ]}
                      placeholder="Enter Your Last Name"
                      placeholderTextColor={COLORS.secondary}
                      value={values.lastName}
                      onChangeText={handleChange('lastName')}
                      onBlur={() => setFieldTouched('lastName')}
                    />
                    {touched.lastName && errors.lastName && (
                      <Text style={styles.errorText}>{errors.lastName}</Text>
                    )}
                  </View>
               
                  <View style={[styles.inputField]}>
                    <Text style={styles.heading2}>Nationality*</Text>

                    <View style={styles.inputContainer}>
                      <TouchableOpacity onPress={togglePicker}>
                        <CountryPicker
                          onSelect={handleCountryChange}
                          countryCode={country ? country.cca2 : undefined}
                          visible={isPickerVisible}
                        />
                      </TouchableOpacity>

                      <View style={styles.verticalLine} />
                      <Text
                        style={{
                          fontSize: 14,
                          fontFamily: 'Gilroy-Light',
                        }}>
                        {country?.name}
                      </Text>
                    </View>
                    {touched.nationality && errors.nationality && (
                      <Text style={styles.errorText}>{errors.nationality}</Text>
                    )}

                    {/* {touched.phoneNumber && errors.phoneNumber && (
                        <Text style={styles.validation}>
                          {errors.phoneNumber}
                        </Text>
                      )} */}

                    {/* <TextInput
                      mode="outlined"
                      placeholder="Select your nationality"
                      style={[styles.TextInput, commonStyle.textInputStyle]}
                      placeholderTextColor={COLORS.secondary}
                      value={values.nationality}
                      onChangeText={handleChange("nationality")}
                      onBlur={() => setFieldTouched("nationality")}
                    />
                    {touched.nationality && errors.nationality && (
                      <Text style={styles.errorText}>{errors.nationality}</Text>
                    )} */}
                  </View>
                  <View style={styles.row}>
                    <View style={styles.rowItems}>
                      <Text style={styles.heading2}>City</Text>
                      <TextInput
                        mode="outlined"
                        placeholder="Enter City"
                        outlineColor={COLORS.boderColor}
                        activeOutlineColor={COLORS.boderColor}
                        outlineStyle={{borderRadius: 50}}
                        style={styles.TextInput}
                        placeholderTextColor={COLORS.secondary}
                        value={values.city}
                        onChangeText={handleChange('city')}
                        onBlur={() => setFieldTouched('city')}
                      />
                      {touched.city && errors.city && (
                        <Text style={styles.errorText}>{errors.city}</Text>
                      )}
                    </View>
                    <View style={styles.rowItems}>
                      <Text style={styles.heading2}>State</Text>
                      <TextInput
                        mode="outlined"
                        placeholder="Enter state"
                        outlineColor={COLORS.boderColor}
                        activeOutlineColor={COLORS.boderColor}
                        outlineStyle={{borderRadius: 50}}
                        style={styles.TextInput}
                        placeholderTextColor={COLORS.secondary}
                        value={values.state}
                        onChangeText={handleChange('state')}
                        onBlur={() => setFieldTouched('state')}
                      />
                      {touched.state && errors.state && (
                        <Text style={styles.errorText}>{errors.state}</Text>
                      )}
                    </View>
                  </View>

                  <View>
                    <Text style={styles.heading2}>DOB</Text>
                    <View
                      style={{
                        flexDirection: 'row',
                        alignItems: 'center',
                        borderWidth: 1,
                        borderRadius: 50,
                        borderColor: 'rgba(0, 0, 0, 0.25)',
                        paddingHorizontal: 16,
                        paddingVertical: 14,
                        marginTop: 10,
                      }}>
                      <Text
                        style={{
                          flex: 1,
                          fontFamily: 'Gilroy-Regular',
                          backgroundColor: COLORS.background,
                          paddingLeft: 6,
                        }}>
                        {currentDate}
                      </Text>
                      <TouchableOpacity
                        onPress={() => setDatePickerVisibility(true)}>
                        <Image
                          style={{width: 20, height: 20}}
                          source={ICONS.calender}
                        />
                      </TouchableOpacity>
                      {touched.dob && errors.dob && (
                        <Text style={styles.errorText}>{errors.dob}</Text>
                      )}
                      <DateTimePickerModal
                        isVisible={isDatePickerVisible}
                        mode="date"
                        onConfirm={handleConfirm}
                        onCancel={() => setDatePickerVisibility(false)}
                        maximumDate={new Date()}
                      />
                    </View>
                  </View>
            

                  {console.log('My Data', values)}
                  <View style={styles.row}>
                    <View style={styles.rowItems}>
                      <Text style={styles.heading2}>City</Text>
                      <TextInput
                        placeholder="Enter City"
                        style={[
                          styles.TextInput,
                          commonStyle.textInputStyle,
                          errors.city && touched.city
                            ? {borderColor: 'red', borderWidth: 1}
                            : null,
                        ]}
                        placeholderTextColor={COLORS.secondary}
                        value={values.city}
                        onChangeText={handleChange('city')}
                        onBlur={() => setFieldTouched('city')}
                      />
                      {touched.city && errors.city && (
                        <Text style={styles.errorText}>{errors.city}</Text>
                      )}
                    </View>
                    <View style={styles.rowItems}>
                      <Text style={styles.heading2}>State</Text>
                      <TextInput
                        placeholder="Enter state"
                        style={[
                          styles.TextInput,
                          commonStyle.textInputStyle,
                          errors.state && touched.state
                            ? {borderColor: 'red', borderWidth: 1}
                            : null,
                        ]}
                        placeholderTextColor={COLORS.secondary}
                        value={values.state}
                        onChangeText={handleChange('state')}
                        onBlur={() => setFieldTouched('state')}
                      />
                      {touched.state && errors.state && (
                        <Text style={styles.errorText}>{errors.state}</Text>
                      )}
                    </View>
                  </View>
                  <View style={styles.inputField}>
                    <Text style={styles.heading2}>
                      Enter Residential Adress
                    </Text>
                    <TextInput
                      placeholder="Enter your full address"
                      multiline
                      style={[
                        styles.TextInput,
                        {
                          borderRadius: 10,
                          height: 150,
                          textAlignVertical: 'top',
                        },
                        commonStyle.textInputStyle,
                      ]}
                      placeholderTextColor={COLORS.secondary}
                      maxLength={150}
                      value={values.address}
                      onChangeText={handleChange('address')}
                      onBlur={() => setFieldTouched('address')}
                    />
                    {touched.address && errors.address && (
                      <Text style={styles.errorText}>{errors.address}</Text>
                    )}
                  </View>
                  <CustomActiveBtn
                    // onPress={() => props.navigation.navigate('Verify2')}
                    backgroundColor={isValid ? COLORS.black : COLORS.background}
                  color={isValid ? COLORS.background : COLORS.black}
                    title={'Continue'}
                    disabled={!isValid}
                    onPress={handleSubmit}
                   
                    
                  />
                </View>
              )}
            </Formik>
          </View>
        </ScrollView>
      </View>
    </SafeAreaView>
  );
};

export default Verification;

// padding = 10  in SIZES

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    height: '100%',
  },
  body: {
    paddingHorizontal: SIZES.padding * 1.6,
    gap: 5,

    paddingBottom: 30,
  },
  heading1: {
    color: COLORS.primary,
    fontSize: SIZES.h1,
    fontFamily: 'Gilroy-SemiBold',
    paddingTop: 15,
  },
  heading2: {
    color: COLORS.black,
    fontSize: 16,
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
    gap: 2,
  },
  inputField: {
    gap: 4,
  },
  TextInput: {
    fontSize: 14,
    fontFamily: 'Gilroy-Light',
    borderWidth: 1,
    borderColor: 'rgba(0, 0, 0, 0.25)',
    paddingHorizontal: 20,
    borderRadius: 50,
  },

  errorText: {
    color: 'red',
    fontSize: 14,
    fontFamily: 'Gilroy-Regular',
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: 'rgba(0, 0, 0, 0.25)',
    borderRadius: 50,
    paddingHorizontal: 16,
    height: height * 0.07,
  },
  input: {
    flex: 1,
    fontSize: 16,
  },
  countryCodeText: {
    fontSize: 14,
    color: 'black',
  },
  verticalLine: {
    height: 24,
    borderRightWidth: 1,
    borderColor: 'rgba(0, 0, 0, 0.25)',
    marginRight: 10,
  },
  validation: {
    color: '#FF3838',
    fontSize: SIZES.h3,
    marginTop: 5,
    fontFamily: ' Gilroy-Light',
    lineHeight: 23,
  },
});
