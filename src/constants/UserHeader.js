import {Image, StyleSheet, Text, View} from 'react-native';
import React, {useState} from 'react';
import {COLORS, IMAGES} from './theme';

const USER = 'Aadya Shrivastava';
const UserHeader = props => {
  const {greet, userName, title} = props;

  return (
    <View style={{padding: 10}}>
      <View style={{flexDirection: 'row', alignItems: 'center'}}>
        <View>
          <Image
            style={{height: 45, width: 45, margin: 5}}
            resizeMode="contain"
            source={IMAGES.user}
          />
        </View>
        <View style={{paddingLeft: 5}}>
          {greet ? <Text style={styles.greet}>Hello,</Text> : null}
          {userName ? <Text style={styles.name}>{USER}</Text> : null}
        </View>
        {title ? <Text style={styles.title}>{title}</Text> : null}
      </View>
    </View>
  );
};

export default UserHeader;

const styles = StyleSheet.create({
  greet: {fontSize: 12, color: COLORS.secondary, fontFamily: 'Gilroy=Regular'},
  name: {fontSize: 16, fontFamily: 'Gilroy-SemiBold', color: COLORS.heading},
  title: {
    marginHorizontal: 50,
    fontSize: 16,
    fontFamily: 'Gilroy-SemiBold',
    color: COLORS.heading,
  },
});
