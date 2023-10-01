import React, { useState, useEffect } from "react";
import {
  TextInput,
  View,
  StyleSheet,
  Image,
  TouchableOpacity,
  Text,
  Dimensions,
} from "react-native";
import CountryPicker from "react-native-country-picker-modal";
import Entypo from "react-native-vector-icons/Entypo";
import { COLORS, SIZES } from "../constants/theme";
import { Formik } from "formik";
import * as Yup from "yup";
import { commonStyle } from "../assets/Styless";

const { height, width } = Dimensions.get("window");

const PhoneSchema = Yup.object().shape({
  phoneNumber: Yup.string()
    .matches(
      /^\+?[0-9]{1,4}?[-.\s]?\(?[0-9]{1,3}?\)?[-.\s]?[0-9]{3,4}[-.\s]?[0-9]{4,10}$/,
      'Please enter valid number',
    )
    .required('Number is required'),
});
const Phone = () => {
  const [countryCode, setCountryCode] = useState("91");
  const [country, setCountry] = useState(null);
  const [isPickerVisible, setIsPickerVisible] = useState(false);

  useEffect(() => {
    setCountry({ cca2: "IN", name: "India", callingCode: ["91"] });
  }, []);

  const handleCountryChange = (selectedCountry) => {
    setCountry(selectedCountry);
    setCountryCode(selectedCountry.callingCode[0]);
    setIsPickerVisible(false);
  };
  const togglePicker = () => {
    setIsPickerVisible(!isPickerVisible);
  };

  return (
    <Formik initialValues={{phoneNumber: ''}} validationSchema={PhoneSchema}>
      {({values, errors, touched, setFieldTouched, handleChange}) => (
        <View style={styles.container}>
          <View style={styles.inputContainer}>
            <CountryPicker
              onSelect={handleCountryChange}
              countryCode={country ? country.cca2 : undefined}
              visible={isPickerVisible}
            />
            <TouchableOpacity onPress={togglePicker}>
              <Text style={styles.countryCodeText}>{`+${countryCode}`}</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={togglePicker}>
              <Entypo
                name="chevron-small-down"
                size={20}
                color="black"
                style={styles.dropdownIcon}
              />
            </TouchableOpacity>
            <View style={styles.verticalLine} />
            <TextInput
              style={[
                commonStyle.textInputStyle,
                styles.input,
                touched.phoneNumber && errors.phoneNumber
                  ? {borderColor: 'red'}
                  : null,
              ]}
              placeholder="Enter your phone number"
              value={values.phoneNumber}
              onChangeText={handleChange('phoneNumber')}
               onBlur={() => setFieldTouched("phoneNumber")}
              keyboardType="phone-pad"
              maxLength={10}
            />
          </View>
          {touched.phoneNumber && errors.phoneNumber && (
            <Text style={styles.validation}>{errors.phoneNumber}</Text>
          )}
        </View>
      )}
    </Formik>
  );
};

const styles = StyleSheet.create({
  container: {
    marginTop: 7,
    // height:height*0.07
  },
  inputContainer: {
    flexDirection: "row",
    alignItems: "center",
    borderWidth: 1,
    borderColor:"rgba(0, 0, 0, 0.25)",
    borderRadius: 50,
    paddingHorizontal: 10,
  },
  input: {
    flex: 1,
    borderRadius: 50,
    fontSize: 16,
  },
  countryCodeText: {
    fontSize: 14,
    color: "black",
  },
  verticalLine: {
    height: 24,
    borderRightWidth: 1,
    borderColor: "rgba(0, 0, 0, 0.25)",
    marginRight: 10,
  },
  validation: {
    color: "#FF3838",
    fontSize: SIZES.h3,
    marginTop: 5,
    fontFamily: " Gilroy-Light",
    lineHeight: 23,
  },
});

export default Phone;
