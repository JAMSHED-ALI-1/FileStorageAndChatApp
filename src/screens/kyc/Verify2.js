import {
  SafeAreaView,
  StyleSheet,
  Text,
  Touchable,
  TouchableOpacity,
  View,
} from "react-native";
import React from "react";
import { SIZES, COLORS } from "../../constants/theme";
import { RadioButton, TextInput } from "react-native-paper";
import CustomBtn from "../../constants/CustomBtn";
import Header from "../../constants/Header";
import InActiveBtn from "../../constants/InActiveBtn";
import CustomActiveBtn from "../../constants/CustomActiveBtn";

const Verify2 = (props) => {
  const [value, setValue] = React.useState("");

  const [optionSelected, setOptions] = React.useState(false);

  const handleContinue = () => {
    if(optionSelected)
    {

       props.navigation.navigate("Verify3");
    }
  };
  const handleOptionChange = newValue => {
    setValue(newValue);
    setOptions(true);
  };

  return (
    <SafeAreaView>
      <View style={styles.container}>
        <Header
          backIcon={true}
          title="Complete Your KYC"
          onPressBack={() => props.navigation.goBack()}
        />

        <View style={styles.body}>
          {/* <CustomHeader heading={'Complete Your KYC'} name={'left'} props={'Verification'}/> */}
          <View style={styles.textRow}>
            <Text style={[styles.heading1]}>Identify Verification</Text>
            <Text style={styles.text}>
              Only the following documents listed below will be accepted, all
              other documents will be rejected.
            </Text>
          </View>

          {optionSelected ? (
            <View style={styles.textRow}>
              <View
                style={{
                  flexDirection: 'row',
                  justifyContent: 'space-between',
                }}>
                <Text style={styles.regular16}>{value}</Text>
                <TouchableOpacity onPress={() => setOptions(false)}>
                  <Text
                    style={[
                      styles.regular16,
                      {textDecorationLine: 'underline'},
                    ]}>
                    Change
                  </Text>
                </TouchableOpacity>
              </View>
              <TextInput
                mode="outlined"
                placeholder={`Enter Your ${value?.toLowerCase()} number`}
                outlineColor={COLORS.boderColor}
                activeOutlineColor={COLORS.secondary}
                placeholderTextColor={COLORS.grey}
                outlineStyle={{borderRadius: 50}}
                style={styles.TextInput}
                // keyboardType='numeric'
              />
            </View>
          ) : (
            <View>
              <Text style={[styles.heading2, {paddingTop: 10}]}>
                Choose any one of the following document listed below
              </Text>
              {/* ID OPtions  */}
              <View style={styles.options}>
                <RadioButton.Group
                  onValueChange={newValue => setValue(newValue)}
                  value={value}>
                  <View style={styles.radioList}>
                    <Text style={styles.heading1}>Passport</Text>
                    <RadioButton
                      value="Passport"
                      color="black"
                      onValueChange={() => setValue('Passport')}
                    />
                  </View>
                  <View style={styles.radioList}>
                    <Text style={styles.heading1}>National ID</Text>
                    <RadioButton
                      value="National ID"
                      color="black"
                      onValueChange={() => setValue('National ID')}
                    />
                  </View>
                  <View style={styles.radioList}>
                    <Text style={styles.heading1}>Driver’s License</Text>
                    <RadioButton
                      value="Driver’s License"
                      color="black"
                      onValueChange={() => setValue('Driver’s License')}
                    />
                  </View>
                </RadioButton.Group>
              </View>
            </View>
          )}

          {/* Buttons  */}
          <View style={styles.buttonRow}>
            <InActiveBtn
              width="48%"
              backgroundColor={'#fff'}
              title={'Skip'}
              color={COLORS.secondary}
              onPress={() =>
                optionSelected
                  ? props.navigation.navigate('Verify3')
                  : props.navigation.navigate('Verification')
              }
              //
            />
            <CustomActiveBtn
              width="48%"
              backgroundColor={COLORS.primary}
              title={'Continue'}
              color={COLORS.background}
              onPress={handleContinue}
            />
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default Verify2;

const styles = StyleSheet.create({
  container: {
    height: "100%",
    backgroundColor: "#fff",
  },
  body: {
    paddingHorizontal: SIZES.padding * 1.6,
  },
  heading1: {
    color: COLORS.primary,
    fontSize: SIZES.h3,
    fontFamily: "Gilroy-SemiBold",
  },
  heading2: {
    color: COLORS.primary,
    fontSize: SIZES.h3,
    fontFamily: "Gilroy-SemiBold",
  },
  textRow: {
    gap: 7,
    marginVertical: 15,
  },
  text: {
    fontFamily: "Gilroy-Regular",
    fontSize: 14,
    color: COLORS.secondary,
  },

  // Radio Button Group

  options: {
    marginVertical: SIZES.padding,
    gap: 10,
  },
  radioList: {
    flexDirection: "row",
    marginVertical: SIZES.my * 0.5,
    justifyContent: "space-between",
    borderWidth: 1,
    borderColor: COLORS.boderColor,
    borderRadius: 50,
    alignItems: "center",
    paddingHorizontal: 12,
    paddingVertical: 5,
  },

  // Buttons
  buttonRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginVertical: 10,
  },
  TextInput: {
    fontSize: 14,
    fontFamily: "Gilroy-Regular",
    backgroundColor: "#fff",
  },
  regular16: {
    fontSize: 16,
    fontFamily: "Gilroy-Regular",
    color: COLORS.primary,
  },
});
