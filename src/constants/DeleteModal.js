import {
  Image,
  Modal,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React from 'react';
import { ICONS } from './theme';

export default function ModalCompSecond({ isOpen, setIsOpen, title }) {
  return (
    <>
      <Modal
        transparent
        visible={isOpen}
        animationType="fade"
        // onRequestClose
        onDismiss={isOpen}>
        <View style={styles.container}>
          <View style={styles.innercontainer}>

            <TouchableOpacity onPress={() => setIsOpen(!isOpen)}>
              <Image
                source={ICONS.close}
                resizeMode="contain"
                style={{
                  width: 12,
                  height: 12,
                  alignSelf: 'flex-end',
                }}
              />
            </TouchableOpacity>
            <Image
              source={ICONS.info}
              resizeMode="contain"
              style={{
                width: 60,
                height: 60,
                alignSelf: 'center',
              }}
            />
            <Text style={styles.headText}>{title}</Text>
            <Text style={styles.descText}>
              Lorem ipsum is a placeholder text commonly used to demonstrate the
              visual form of a document or a typeface without relying on
              meaningful content.
            </Text>

            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'space-between',
                marginTop: 24,
                marginBottom: 8,
              }}>
              <TouchableOpacity
                onPress={() => setIsOpen(!isOpen)}
                style={{
                  backgroundColor: '#ffffff',
                  borderWidth: 1,
                  borderColor: 'rgba(0, 0, 0, 0.15)',
                  flex: 0.47,
                  paddingVertical: 14,
                  borderRadius: 30,
                }}>
                <Text
                  style={{
                    fontFamily: 'Gilroy-SemiBold',
                    fontSize: 16,
                    color: 'rgba(0, 0, 0, 0.60)',
                    textAlign: 'center',
                  }}>
                  Cancel
                </Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={{
                  backgroundColor: 'rgba(0, 0, 0, 0.87)',
                  borderWidth: 1,
                  borderColor: 'rgba(0, 0, 0, 0.87)',
                  flex: 0.47,
                  paddingVertical: 14,
                  borderRadius: 30,
                }}>
                <Text
                  style={{
                    fontFamily: 'Gilroy-SemiBold',
                    fontSize: 16,
                    color: 'rgba(255, 255, 255, 0.87)',
                    textAlign: 'center',
                  }}>
                  Yes
                </Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </Modal>
    </>
  );
}

const styles = StyleSheet.create({
  // text head
  headText: {
    fontFamily: 'Gilroy-Medium',
    fontSize: 16,
    color: 'rgba(0, 0, 0, 0.87)',
    lineHeight: 22,
    textAlign: 'center',
    marginTop: 20,
    marginBottom: 10,
  },
  descText: {
    fontFamily: 'Gilroy-Light',
    fontSize: 14,
    color: 'rgba(0, 0, 0, 0.60)',
    lineHeight: 20,
    textAlign: 'center',
  },
  // modal container
  container: {
    flex: 1,
    justifyContent: 'center',
    paddingHorizontal: 16,
    backgroundColor: 'rgba(0,0,0,0.25)',
  },
  innercontainer: {
    backgroundColor: '#ffffff',
    padding: 16,
    borderRadius: 10,
  },
});
