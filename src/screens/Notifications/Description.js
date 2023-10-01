import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  Dimensions,
  SafeAreaView,
} from 'react-native';
import React from 'react';
import {
  responsiveHeight,
  responsiveWidth,
} from 'react-native-responsive-dimensions';
import Component2 from '../Notifications/Component2';
import Message from './Message';
import {COLORS} from '../../constants/theme';
import Header from '../../constants/Header';


const {height, width} = Dimensions.get('window');

const Description = (props) => {
  return (
    <SafeAreaView style={{flex: 1, backgroundColor: COLORS.background}}>
      <Component2 />
      <View style={styles.txtContainer}>
     
        <Text style={styles.txt2}>
          <Text>Hello</Text>
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum is simply dummy text of the printing and
          typesetting industry. Lorem Ipsum is simply dummy text of the printing
          and typesetting industry. Lorem Ipsum is simply dummy text of the
          printing and typesetting industry. Lorem Ipsum is simply dummy text of
          the printing and typesetting industry.
        </Text>
        <Text style={styles.txt2}>
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum is simply dummy text of the printing and
          typesetting industry. Lorem Ipsum is simply dummy text of the printing
          and typesetting industry. Lorem Ipsum is simply dummy text of the
          printing and typesetting industry. Lorem Ipsum is simply dummy text of
          the printing and typesetting industry.
        </Text>
        <Text style={styles.txt2}>
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum is simply dummy text of the printing and
          typesetting industry. Lorem Ipsum is simply dummy text of the printing
          and typesetting industry. Lorem Ipsum is simply dummy text of the
          printing and typesetting industry. Lorem Ipsum is simply dummy text of
          the printing and typesetting industry.
        </Text>
        <Text style={styles.txt2}>
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum is simply dummy text of the printing and
          typesetting industry. Lorem Ipsum is simply dummy text of the printing
          and typesetting industry. Lorem Ipsum is simply dummy text of the
          printing and typesetting industry. Lorem Ipsum is simply dummy text of
          the printing and typesetting industry.
        </Text>
      </View>
    </SafeAreaView>
  );
};

export default Description;

const styles = StyleSheet.create({
  txtContainer: {
    marginHorizontal: width * 0.06,
  },

  txt2: {
    color: '#00000099',
    marginTop: 16,
    fontFamily: 'Gilroy-Regular',
  },
});
