import {StyleSheet, Text, View, Image, TouchableOpacity} from 'react-native';
import React from 'react';
import {
  responsiveHeight,
  responsiveWidth,
} from 'react-native-responsive-dimensions';

const Header1 = ({title,onPress,go,clear=false}) => {
  return (
    <View>
      <View style={styles.header}>
        <View style={styles.rowItem1}>
        <TouchableOpacity onPress={go} >
          <Image
            source={require('./images/BackIcon.png')}
            style={styles.img1}
            resizeMode="contain"
          />
          </TouchableOpacity>
          <View style={{flexDirection: 'row', gap: 80, alignItems: 'center'}}>
            <Text style={{color: 'black',fontFamily:"Gilroy-SemiBold",fontWeight:'500'}}>{title}</Text>
            {clear?(
            <TouchableOpacity style={styles.btn1}>
              <Text style={{color: 'black',fontFamily:"Gilroy-Regular"}}>Clear All</Text>
            </TouchableOpacity>):(<TouchableOpacity style={[styles.btn1,{backgroundColor:'white'}]}onPress={onPress}>
              <Text style={{color: 'black',fontFamily:"Gilroy-Regular"}}></Text>
            </TouchableOpacity>)}
          </View>
        </View>
      </View>
    </View>
  );
};

export default Header1;

const styles = StyleSheet.create({
  header: {
    
    width: responsiveWidth(100),
    backgroundColor: '#FFFFFFEB',
  },
  img1: {
    height: responsiveHeight(4.5),
    width: responsiveWidth(8),
  },
  rowItem1: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: responsiveHeight(2),
    marginHorizontal: responsiveWidth(3),
    alignItems: 'center',
  },
  btn1: {
    height: responsiveHeight(4.5),
    width: responsiveWidth(18),
    backgroundColor: '#0000000D',
    borderRadius: 25,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
