import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  ScrollView,
  SafeAreaView,
} from 'react-native';
import React from 'react';
import {
  responsiveHeight,
  responsiveWidth,
} from 'react-native-responsive-dimensions';
import Component2 from '../Notifications/Component2';
import Message2 from './Message2';
import Header from '../../constants/Header';

const SmsPreview = (props) => {
  return (
    <SafeAreaView style={{flex: 1, backgroundColor: '#FFFFFFEB'}}>
      <Header backIcon={true} title="Description"
       onPressBack={() => props.navigation.goBack()}
      />
      <Component2 />
      <ScrollView>
        <View style={styles.txtContainer}>
          <Text style={styles.txt2}>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum is simply dummy text of the printing and
            typesetting industry. Lorem Ipsum is simply dummy text of the
            printing and typesetting industry. Lorem Ipsum is simply dummy text
            of the printing and typesetting industry. Lorem Ipsum is simply
            dummy text of the printing and typesetting industry.
          </Text>
          <Text style={styles.txt2}>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum is simply dummy text of the printing and
            typesetting industry. Lorem Ipsum is simply dummy text of the
            printing and typesetting industry. Lorem Ipsum is simply dummy text
            of the printing and typesetting industry. Lorem Ipsum is simply
            dummy text of the printing and typesetting industry.
          </Text>
          <Text style={styles.txt2}>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum is simply dummy text of the printing and
            typesetting industry. Lorem Ipsum is simply dummy text of the
            printing and typesetting industry. Lorem Ipsum is simply dummy text
            of the printing and typesetting industry. Lorem Ipsum is simply
            dummy text of the printing and typesetting industry.
          </Text>
          <Text style={styles.txt2}>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum is simply dummy text of the printing and
            typesetting industry. Lorem Ipsum is simply dummy text of the
            printing and typesetting industry. Lorem Ipsum is simply dummy text
            of the printing and typesetting industry. Lorem Ipsum is simply
            dummy text of the printing and typesetting industry.
          </Text>

          <Text style={styles.txt2}>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum is simply dummy text of the printing and
            typesetting industry. Lorem Ipsum is simply dummy text of the
            printing and typesetting industry. Lorem Ipsum is simply dummy text
            of the printing and typesetting industry. Lorem Ipsum is simply
            dummy text of the printing and typesetting industry.
          </Text>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default SmsPreview;

const styles = StyleSheet.create({
  header: {
    height: responsiveHeight(10),
    width: responsiveWidth(100),
    backgroundColor: '#FFFFFFEB',
  },
  img1: {
    height: responsiveHeight(4.5),
    width: responsiveWidth(8),
  },
  rowItem1: {
    flexDirection: 'row',
    marginTop: responsiveHeight(2),
    marginHorizontal: responsiveWidth(3),
    alignItems: 'center',
    height: responsiveHeight(10),
  },
  txt1: {
    color: '#000000DE',
    // alignSelf: 'center',
    marginLeft: responsiveWidth(35),
  },
  txtContainer: {
    marginHorizontal: responsiveWidth(4),
    marginTop: responsiveHeight(2),
  },

  txt2: {
    color: '#00000099',
    // textAlign:'center'
    marginTop: responsiveHeight(1),
    fontFamily: 'Archivo-Regular',
  },
});
