import {StyleSheet, Text, View, Image, ImageBackground,TouchableOpacity,SafeAreaView} from 'react-native';
import React from 'react';
import Feather from 'react-native-vector-icons/Feather';
import Fontisto from 'react-native-vector-icons/Fontisto';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {useNavigation} from '@react-navigation/native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import CustomBtn from '../../constants/CustomBtn';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5'
import Header from '../../constants/Header';
import { COLORS } from '../../constants/theme';

const Account_Detail = (props) => {
  const navigation = useNavigation();
  const handleEdit = () => {
    navigation.navigate('Editprofile');
  };
  return (
    <SafeAreaView style={styles.container}>
     <Header title="Account Details" backIcon={true} onPressBack={() => props.navigation.goBack()}/>
        <View style={styles.profile}>
          <ImageBackground
            source={require('../../assets/images/Profile.png')}
            resizeMode="contain"
            style={styles.hero}
          />
          
          <TouchableOpacity>

          <Image
            source={require('../../assets/images/pen1.png')}
            style={styles.pen}
          />
          </TouchableOpacity>
          <Text style={styles.text_heading}>Aadya Shrivastava</Text>
        </View>
        <Text style={styles.text_Normal}>Aadya_1260</Text>
      <View style={styles.containers}>
        <View style={styles.line}></View>
        <View style={{gap: 10}}>
          <Text style={[styles.text_heading, {marginTop: 30}]}>
            Other Details:
          </Text>
          <View style={styles.items}>
            <FontAwesome name="phone" size={14} style={styles.text_NormalItem} />
            <Text style={styles.text_Normaltext}>+91 870723028</Text>
          </View>
          <View style={styles.items}>
            <Icon name="email" size={14} style={[styles.text_NormalItem]} />
            <Text style={styles.text_Normaltext}>aadyajudihobs@gmail.com</Text>
          </View>
          <View style={styles.items}>
            <Feather name="globe" size={14} style={styles.text_NormalItem} />
            <Text style={styles.text_Normaltext}>English</Text>
          </View>
          <View style={styles.items}>
            <Ionicons
              name="male"
              color={'#606060'}
              size={14}
              style={styles.text_NormalItem}
            />
            <Text style={styles.text_Normaltext}>Male</Text>
          </View>
        </View>
        <View style={{marginTop: 20}}>
          {/* <CustomBtn
            // bgColor={'red'}
            onPress={handleEdit}
            text="Edit Public Profile"
            textColor="rgba(0, 0, 0, 0.87)"
            padding={13}
            fontFamily="Gilroy-Regular"
            fontSize={16}
            iconName={'pen'}
            borderColor={'rgba(0, 0, 0, 0.15)'}
            borderWidth={2}
            // height={50}
            size={16}
          /> */}
          <TouchableOpacity
            style={[
              styles.button,
              {backgroundColor: '#fff', boderColor: 'rgba(0, 0, 0, 0.15)'},
            ]}
            onPress={handleEdit}>
            <Text style={[styles.buttonTxt, {color: 'rgba(0, 0, 0, 0.87)'}]}>
              <FontAwesome5 name={'pen'} size={16} color="black" />
            {" "} Edit Public Profile
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default Account_Detail;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 16,
    backgroundColor:COLORS.background
  },
  // header: {
  //   alignItems: 'center',
  //   marginTop: 12,
  // },
  hero: {
    height: 86,
    width: 86,
    // marginTop: 30,
  },
  text_heading: {
    fontSize: 16,
    fontWeight: '400',
    fontFamily: 'Gilroy-SemiBold',
    color: 'rgba(0, 0, 0, 0.87)',
    // marginTop: 12,
  },
  text_Normal: {
    fontSize: 12,
    fontWeight: '400',
    fontFamily: 'Gilroy-Regular',
    color: 'rgba(0, 0, 0, 0.87)',
    textAlign:'center'
  },
  items: {
    flexDirection: 'row',
    alignItems: 'center',
    columnGap: 10,
  },
  text_Normaltext: {
    fontSize: 16,
    fontWeight: '400',
    fontFamily: 'Gilroy-Medium',
    marginTop: 12,
    color: 'rgba(0, 0, 0, 0.80)',
  },
  text_NormalItem: {
    fontSize: 16,
    fontWeight: '400',
    fontFamily: 'Gilroy-Medium',
    marginTop: 12,
    color: 'rgba(0, 0, 0, 0.60)',
  },

  pen: {
    height: 22,
    width: 22,
    borderRadius: 60,
    alignSelf: 'flex-end',
    bottom: 22,
    left: 20,
    // marginTop: 55,
  },
  line: {
    height: 1.5,
    width: '100%',
    backgroundColor: 'rgba(0, 0, 0, 0.10)',
    marginTop: 20,
  },
  profile: {alignItems: 'center', marginTop: 30},
  button: {
    height: 50,
    width: '100%',
    borderRadius: 50,
    marginTop: 10,
    borderWidth: 1,
  },
  buttonTxt: {
    textAlign: 'center',
    paddingVertical: 14,
    // color: COLORS.background,
    fontSize: 16,
    fontWeight: '500',
    fontFamily: 'Gilroy-Regular',
  },
  containers: {paddingHorizontal:23 ,
    paddingVertical:8},
});