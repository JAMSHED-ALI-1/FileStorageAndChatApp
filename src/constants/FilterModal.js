import {
  Image,
  Modal,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React, { useState } from 'react';
import { COLORS, ICONS } from './theme';

import DeleteModal from '../constants/DeleteModal';

const optionsList = [
  {
    id: 1,
    text: 'Sort: A-Z',
  },
  {
    id: 2,
    text: 'Sort: New to Old',
  },
  {
    id: 3,
    text: 'Sort: Old to New',
  },
  {
    id: 4,
    text: 'List View',
  },
  {
    id: 5,
    text: 'Only Photo',
  },
  {
    id: 6,
    text: 'Only Folder',
  },
];
export default function FilterModal({ isOpen, setIsOpen }) {
  return (
    <>
      <Modal
        transparent={true}
        visible={isOpen}
        animationType="fade"
        onDismiss={isOpen}>
        <View
          style={{
            flex: 1,
            justifyContent: 'flex-end',
            backgroundColor: 'rgba(0,0,0,0.4)',
          }}>
          <View
            style={{
              backgroundColor: '#ffffff',
              padding: 15,
              borderRadius: 10,
              borderTopRightRadius: 50,
              borderTopLeftRadius: 50,
              justifyContent: 'center'
            }}>
            <Text style={{ fontSize: 16, color: COLORS.heading, fontFamily: 'Gilroy-SemiBold', textAlign: 'center', marginBottom: 20 }}>Filter</Text>
            {optionsList.map(option => (
              <>
                <TouchableOpacity
                  key={option.id}
                  style={{
                    flexDirection: 'row',
                    alignItems: 'center',
                    columnGap: 12,
                    borderBottomColor: 'rgba(0, 0, 0, 0.15)',
                    borderBottomWidth: option.id == 5 ? 0 : 1,
                    paddingBottom: 15,
                    marginBottom: option.id == 5 ? 0 : 15,
                  }} onPress={() => setIsOpen(false)}>
                  <Text
                    style={{
                      fontFamily: 'Gilroy-Regular',
                      fontSize: 16,
                      color: 'rgba(0, 0, 0, 0.87)',
                    }}>
                    {option.text}
                  </Text>
                </TouchableOpacity>
              </>
            ))}
          </View>
        </View>
      </Modal>
    </>
  );
}

const styles = StyleSheet.create({});
