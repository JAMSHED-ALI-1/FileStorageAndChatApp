import {StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import React from 'react';
import {COLORS, SIZES} from './theme';
import {useNavigation} from '@react-navigation/native';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';

const CustomButton = ({txt, props, backgroundColor, color, borderColor,name}) => {
  const navigation = useNavigation();
  //console.log(props);
  return (
    <View>
      <TouchableOpacity
        style={[
          styles.button,
          {backgroundColor: backgroundColor, borderColor: borderColor},
        ]}
        onPress={() => navigation.navigate(props)}>
        <Text style={[styles.buttonTxt, {color: color}]}>
         <FontAwesome5 name={name} size={16} color='black'/>{"  "}
           {txt}
        </Text>
      </TouchableOpacity>
    </View>
  );
};

export default CustomButton;

const styles = StyleSheet.create({
  button: {
    height: 50,
    width: '100%',
    borderRadius: 50,
    marginTop: SIZES.my,
    borderWidth: 1,
  },
  buttonTxt: {
    textAlign: 'center',
    paddingVertical: 14,
    // color: COLORS.background,
    fontSize: SIZES.h2,
    fontWeight: '500',
    fontFamily: 'Gilroy-SemiBold',
  },
});
