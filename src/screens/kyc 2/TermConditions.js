
import { StyleSheet, Text, View ,SafeAreaView} from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native';

import { COLORS } from '../../constants/theme';
import Header from '../../constants/Header';



const TermConditions = (props) => {
    const navigation=useNavigation()
    const hadleBack=()=>{
        navigation.navigate('Kyc');
    }
  return (
    <SafeAreaView style={styles.container}>
      <Header title="Terms and Conditions"  backIcon={true}
        onPressBack={() => props.navigation.goBack()}/>
      <View style={styles.textItem}>
        <Text style={styles.text}>
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum is simply dummy text of the printing and
          typesetting industry. Lorem Ipsum is simply dummy text of the printing
          and typesetting industry. Lorem Ipsum is simply dummy text of the
          printing and typesetting industry. Lorem Ipsum is simply dummy text of
          the printing and typesetting industry.
        </Text>
        <Text style={[styles.text, {marginTop: 10}]}>
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum is simply dummy text of the printing and
          typesetting industry.
        </Text>
        <Text style={[styles.text, {marginTop: 10}]}>
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum is simply dummy text of the printing and
          typesetting industry. Lorem Ipsum is simply dummy text of the printing
          and typesetting industry. Lorem Ipsum is simply dummy text of the
          printing and typesetting industry. Lorem Ipsum is simply dummy text of
          the printing and typesetting industry.
        </Text>
        <Text style={[styles.text, {marginTop: 10}]}>
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum is simply dummy text of the printing and
          typesetting industry.
        </Text>
        <Text style={[styles.text, {marginTop: 10}]}>
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum is simply dummy text of the printing and
          typesetting industry.
        </Text>
      </View>
    </SafeAreaView>
  );
};

export default TermConditions

const styles = StyleSheet.create({
  textItem: {
    paddingHorizontal:23,
  },
  text: {
    fontFamily: 'Gilroy-Regular',
    fontWeight: '400',
    fontSize: 14,
    color: 'rgba(0, 0, 0, 0.80)',
    lineHeight:18,
    // marginTop:20,
  },
  container:{
  flex:1,
  backgroundColor:COLORS.background,
  }
});


