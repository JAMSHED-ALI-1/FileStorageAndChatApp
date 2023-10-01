import { Image, SafeAreaView, StyleSheet, Text, View } from 'react-native';
import React, { useEffect } from 'react';
import { COLORS, SIZES } from '../../constants/theme';
import { useNavigation } from '@react-navigation/native';

const Splash = () => {
  const navigation = useNavigation();
  useEffect(() => {
    const timer = setTimeout(() => {
      navigation.navigate('CreateAccount');
    }, 3000);
    return () => clearTimeout(timer);
  }, [navigation]);

  return (
    <SafeAreaView style={styles.screen}>
      <Image source={require('../../assets/images/logo.png')} />
      <Text style={styles.LogoTxt}>Real-Time</Text>
    </SafeAreaView>
  );
};

export default Splash;

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: COLORS.background,
    alignItems: 'center',
    justifyContent: 'center',
  },
  LogoTxt: {
    color: COLORS.primary,
    fontSize: SIZES.heading * 2.5,
    textAlign: 'center',
    lineHeight: 35,
    fontFamily: "Gilroy-Bold",
    marginTop: SIZES.my * 1.8,
  },
});
