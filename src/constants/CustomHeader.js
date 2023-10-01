import {Image, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {COLORS, SIZES} from '../constants/theme';
import AntDesign from 'react-native-vector-icons/AntDesign';
import {useNavigation} from '@react-navigation/native';

const CustomHeader = ({heading, props, name}) => {
  const navigation = useNavigation();
  return (
    <View style={styles.header}>
      {/* <AntDesign
        name={name}
        size={20}
        onPress={() => navigation.navigate(props)}
        color={COLORS.black}
      /> */}
      <Image source={"."}/>
      <Text style={styles.heading}>{heading}</Text>
      <View></View>
    </View>
  );
};

export default CustomHeader;

const styles = StyleSheet.create({
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: SIZES.my * 1.5,
    backgroundColor: COLORS.background,
  },
  heading: {
    color: COLORS.header,
    fontFamily: 'Gilroy-SemiBold',
    fontSize: SIZES.h1,
    fontWeight: '600',
  },
});
