import React, {useState} from 'react';
import {
  View,
  Text,
  Modal,
  Button,
  StyleSheet,
  Image,
  SafeAreaView,
} from 'react-native';
import {COLORS, SIZES} from '../../constants/theme';
import Icon from 'react-native-vector-icons/AntDesign';
import InActiveBtn from '../../constants/InActiveBtn';

const KycDone = () => {
  const [modalVisible, setModalVisible] = useState(true);

  const openModal = () => {
    setModalVisible(true);
  };

  const closeModal = () => {
    setModalVisible(false);
  };

  return (
    <SafeAreaView>
      <View style={styles.container}>
        <Modal
          visible={modalVisible}
          animationType="none"
          transparent={false}
          onRequestClose={closeModal}>
          <View style={styles.modalContainer}>
            <View style={styles.modalContent}>
              <View style={styles.modalBody}>
                <Icon
                  style={{position: 'absolute', top: 0, right: 0}}
                  name="close"
                  size={14}
                  color={COLORS.secondary}
                  // onPress = {} close modal
                />
                <Image
                  source={require('../../assets/images/kyc.png')}
                  resizeMode="contain"
                  style={{height: 60}}
                />
                <Text style={styles.heading1}>KYC Submitted</Text>
                <Text style={styles.heading2}>
                  We send the KYC request to the admin Once he confirm the
                  request we will inform you .
                </Text>
                <Text style={styles.greenText}>THANK YOU</Text>
                
                <InActiveBtn
                  color={COLORS.secondary}
                  title={'Back To Home'}
                  backgroundColor={COLORS.background}
                />
                {/* <Button title="Close" onPress={closeModal} /> */}
              </View>
            </View>
          </View>
        </Modal>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  modalContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.1)', // Semi-transparent background
  },
  modalContent: {
    height: '40%',
    width: '85%',
    backgroundColor: 'white',
    padding: 15,
    borderRadius: 10,
    elevation: 5,
  },
  modalBody: {flex: 1, alignItems: 'center', gap: 7},
  heading1: {
    color: COLORS.primary,
    fontSize: SIZES.h2,
    fontFamily: 'Gilroy-SemiBold',
  },
  heading2: {
    color: COLORS.secondary,
    fontSize: SIZES.h3,
    fontFamily: 'Gilroy-Medium',
    width: '90%',
    textAlign: 'center',
  },
  greenText: {
    color: '#008E56',
    fontSize: 14,
    fontWeight: '600',
    lineHeight: 20,
    marginVertical: 10,
  },
});

export default KycDone;
