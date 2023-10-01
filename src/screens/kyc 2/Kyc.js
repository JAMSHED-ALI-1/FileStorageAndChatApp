import { StyleSheet, Text, View, Image, TouchableOpacity, SafeAreaView } from 'react-native';
import React, { useState } from 'react';
import Modal from 'react-native-modal';
import AntDesign from 'react-native-vector-icons/AntDesign';
import { useNavigation } from '@react-navigation/native';
import { COLORS, SIZES } from '../../constants/theme';
import Account_Detail from '../kyc 2/Account_Detail';
import Header from '../../constants/Header';

const Kyc = (props) => {
  const [isModalVisible, setModalVisible] = useState(false);
  const toggleModal = () => {
    setModalVisible(!isModalVisible);
  };
  const navigation = useNavigation();
  const handleAccount_Detail = () => {
    navigation.navigate('Account_Detail');
  };
  const Service = () => {
    navigation.navigate('Termsofservices');
  };
  const handletermAndCondition = () => {
    navigation.navigate('TermConditions');
  };
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: COLORS.background }}>
      <Header backIcon={true} title="Account Setting"
        onPressBack={() => props.navigation.goBack()}
      />
      <View style={{ paddingHorizontal: 5 }}>
        <View style={styles.container}>
          <View style={styles.hero_Body}>
            <View style={{ borderBottomWidth: 0.7, paddingBottom: 15, borderBottomColor: 'rgba(0,0,0,0.10)' }}>
              <TouchableOpacity
                style={styles.body_Part}
                onPress={handleAccount_Detail}>
                <Text style={styles.body_text}>Account Details</Text>
                <AntDesign name="right" size={10} style={styles.body_text} />
              </TouchableOpacity>
            </View>

            <View style={{ borderBottomWidth: 0.7, paddingBottom: 15, borderBottomColor: 'rgba(0,0,0,0.10)' }}>
              <TouchableOpacity style={styles.body_Part}>
                <Text style={styles.body_text}>KYC</Text>
                <Text style={styles.status}>
                  Status:<Text style={styles.approved}> Approved</Text>
                </Text>
              </TouchableOpacity>
            </View>
            <View style={{ borderBottomWidth: 0.7, paddingBottom: 15, borderBottomColor: 'rgba(0,0,0,0.10)' }}>
              <TouchableOpacity
                style={styles.body_Part}
                onPress={Service}>
                <Text style={styles.body_text}>Terms of Service</Text>
                <AntDesign name="right" size={10} style={styles.body_text} />
              </TouchableOpacity>

            </View>
            <View style={{ borderBottomWidth: 0.7, paddingBottom: 15, borderBottomColor: 'rgba(0,0,0,0.10)' }}>
              <TouchableOpacity
                style={styles.body_Part}
                onPress={handletermAndCondition}>
                <Text style={styles.body_text}>Terms and Conditions</Text>
              </TouchableOpacity>

            </View>
            <View style={{ borderBottomWidth: 0.7, paddingBottom: 15, borderBottomColor: 'rgba(0,0,0,0.10)' }}>
              <TouchableOpacity style={styles.body_Part} onPress={toggleModal}>
                <Text style={styles.body_text}>Delete Account</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>

        <View style={{ flex: 1 }}>
          <Modal isVisible={isModalVisible}>
            <View style={styles.modalContainer}>
              <View style={styles.modal_containt}>
                <View style={{ padding: 10 }}>
                  <Image
                    source={require('../../assets/images/info_icon.png')}
                    resizeMode="contain"
                    style={styles.modalimg}
                  />
                  <Text style={styles.heading1}>
                    Are you sure about to delete your account ?
                  </Text>
                  <View style={styles.heading2}>
                    <Text style={styles.bg}>
                      <Text style={styles.DisclaimerText}>Disclaimer:-</Text> Lorem
                      ipsum is a placeholder text commonly used to demonstrate the
                      visual form of a document or a typeface without relying on
                      meaningful content.demonstrate the visual form of a document
                      or a typeface without relying on meaningful content.
                    </Text>
                  </View>
                  <View style={styles.btncontainer}>
                    <View style={styles.modalButtons}>
                      <TouchableOpacity onPress={toggleModal}>
                        <Text style={styles.cancelButtonText}>Cancel</Text>
                      </TouchableOpacity>
                    </View>
                    <View
                      style={[
                        styles.modalButtons,
                        { backgroundColor: 'rgba(246, 13, 13, 0.75)' },
                      ]}>
                      <TouchableOpacity onPress={() => props.navigation.navigate("Otp")}>
                        <Text style={[styles.deleteButtonText]}>Delete</Text>
                      </TouchableOpacity>
                    </View>
                  </View>
                </View>
              </View>
            </View>
          </Modal>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default Kyc;

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    height: '100%',
    marginTop: 10,
  },

  body_text: {
    fontFamily: 'Gilroy-Regular',
    fontSize: 16,
    fontWeight: '400',
    color: 'rgba(0, 0, 0, 0.87)',
    lineHeight: 19,
  },
  approved: {
    color: '#32D82F',
    fontSize: 14,
    fontFamily: 'Gilroy-SemiBold',
    fontWeight: '400',
    lineHeight: 19,
  },
  hero_Body: {
    justifyContent: 'space-between',
    gap: 25,
    paddingHorizontal: SIZES.padding * 2,
  },
  body_Part: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  status: {
    fontSize: 14,
    fontWeight: '400',
    lineHeight: 19,
    color: 'rgba(0, 0, 0, 0.60)',
    fontFamily: 'Gilroy-Medium',
  },
  modalContainer: {
    flex: 1,
    justifyContent: 'center',
  },
  modal_containt: {
    paddingBottom: 20,
    width: '97%',
    backgroundColor: 'white',
    alignSelf: 'center',
    borderRadius: 20,
  },
  heading1: {
    color: 'rgba(0, 0, 0, 0.87)',
    fontSize: 18,
    fontFamily: 'Gilroy-Medium',
    textAlign: 'center',
    fontWeight: '600',
    lineHeight: 22,

  },
  heading2: {
    color: COLORS.secondary,
    fontSize: SIZES.h3,
    fontFamily: 'Gilroy-Medium',
    backgroundColor: 'rgba(0,0,0,0.05)',
    borderRadius: 20,
    textAlign: 'left',
    fontWeight: '400',
    lineHeight: 20,
    padding: 16,
    alignItems: 'center',
    marginTop: 20,
  },
  bg: {
    color: COLORS.secondary,
    fontSize: SIZES.h3,
    fontFamily: 'Gilroy-Medium',
    borderRadius: 20,
    textAlign: 'left',
    fontWeight: '400',
    lineHeight: 20,
    alignItems: 'center',
  },

  DisclaimerText: {
    color: 'rgba(0, 0, 0, 0.87)',
    fontSize: 14,
    fontWeight: '800',
    fontFamily: 'Gilroy-SemiBold',

  },
  modalButtons: {
    height: 48,
    width: "48%",

    padding: 10,
    borderRadius: 30,
    borderColor: 'rgba(0, 0, 0, 0.15)',
    borderWidth: 2,
    justifyContent: 'center',
    alignItems: 'center',
  },
  cancelButtonText: {
    color: COLORS.secondary,
    fontFamily: 'Gilroy-Bold',
    alignItems: 'center',
    fontSize: 16,
  },
  deleteButton: {
    backgroundColor: 'red',
    paddingHorizontal: 20,
    // paddingVertical: 10,
    borderRadius: 5,
  },
  deleteButtonText: {
    color: 'rgba(255, 255, 255, 0.87)',
    fontFamily: 'Gilroy-SemiBold',
    fontSize: 16,
    fontWeight: '400',
  },
  modalimg: {
    height: 60,
    width: 60,
    alignSelf: 'center',
    marginTop: 20,
  },
  btncontainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 18,
    marginTop: 25,
  },
  line: {
    borderBottomColor: 'rgba(0, 0, 0, 0.25)',
    borderBottomWidth: 1,
    paddingVertical: 10,
  },
});