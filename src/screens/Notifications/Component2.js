import {StyleSheet, Text, View, Image} from 'react-native';
import React from 'react';
import {
  responsiveHeight,
  responsiveWidth,
} from 'react-native-responsive-dimensions';

const Component2 = () => {
  return (
    <View>
      <View style={styles.container}>
        <View style={styles.rowItems}>
          <View style={{flexDirection: 'row', gap: 30, alignItems: 'center'}}>
            <Image
              source={require('./images/Icon1.png')}
              style={styles.img1}
              resizeMode="contain"
            />

            <Text style={{color: '#000000DE',fontFamily:"Gilroy-SemiBold",fontWeight:'400',fontSize:16}}>Admin</Text>
          </View>
          <Text style={{color: '#00000099',fontFamily:"Gilroy-Regular"}}>10/05/2023, 10:25 AM</Text>
        </View>
      </View>
    </View>
  );
};

export default Component2;

const styles = StyleSheet.create({
  container: {
    height: responsiveHeight(10),
    width: responsiveWidth(90),
    backgroundColor: '#0000000D',
    alignSelf: 'center',
    borderRadius: 10,
    // alignItems: 'center',
    justifyContent: 'center',
    marginTop: responsiveHeight(2),
  },
  rowItems: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginHorizontal: responsiveWidth(2),
  },
  img1: {
    height: responsiveHeight(10),
    width: responsiveWidth(16),
  },
});
