import {
  Dimensions,
  Image,
  Modal,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import React, { useState } from 'react';
import { COLORS, ICONS } from './theme';
import CustomActiveBtn from './CustomActiveBtn';
import { useNavigation } from '@react-navigation/native';

const { width, height } = Dimensions.get('screen');
const optionsList = [
  {
    id: 1,
    icon: ICONS.create,
    text: 'Create Folder',
  },
  {
    id: 2,
    icon: ICONS.upload,
    text: 'Upload Document',
  },
];

const ModalCompFirst = ({ isOpen, setIsOpen }) => {
  const [del, setDel] = useState(false);
  const [createOpen, setOpenCreate] = useState(false);
  const navigation = useNavigation();

  console.log('asdssdsfd')
  const handleCreateModal = () => {
    setOpenCreate(true);
    setIsOpen(false);
  };

  function createFolderModal() {



    return (
      <Modal transparent={true} visible={createOpen} animationType="fade">
        <View
          style={{
            flex: 1,
            justifyContent: 'flex-end',
            backgroundColor: 'rgba(0,0,0,0.4)',
          }}>
          <View
            style={{
              backgroundColor: '#fff',
              borderTopRightRadius: 50,
              borderTopLeftRadius: 50,
              padding: 20,
            }}>
            <Text
              style={{
                fontSize: 16,
                color: COLORS.heading,
                fontFamily: 'Gilroy-SemiBold',
                textAlign: 'center',
                marginBottom: 20,
              }}>
              Create Folder
            </Text>
            <Text
              style={{
                fontSize: 16,
                fontFamily: 'Gilroy-Regular',
                color: COLORS.heading,
              }}>
              Folder Name
            </Text>
            <TextInput
              style={{
                borderColor: '#rgba(0, 0, 0, 0.15)',
                borderWidth: 1,
                width: '100%',
                marginTop: 5,
                marginBottom: 10,
                height: height * 0.06,
                borderRadius: 50,
                paddingHorizontal: 16,
              }}
              placeholder="Enter folder name"></TextInput>
            <View style={{ marginVertical: 10 }}>
              <CustomActiveBtn
                backgroundColor={COLORS.black}
                title="Create"
                color={COLORS.background}
                onPress={() => setOpenCreate(false)}
              />
            </View>
          </View>
        </View>
      </Modal>
    );
  }

  return (
    <>
      {createFolderModal()}
      <Modal
        transparent={true}
        visible={isOpen}
        animationType="fade"
        onDismiss={isOpen}>
        <View
          style={{
            flex: 1,
            justifyContent: 'center',
            paddingHorizontal: 16,
            backgroundColor: 'rgba(0,0,0,0.4)',
          }}>
          <View
            style={{
              backgroundColor: '#ffffff',
              padding: 15,
              borderRadius: 10,
            }}>
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
            {optionsList.map(option => (
              <>
                <TouchableOpacity
                  key={option.id}
                  style={{
                    flexDirection: 'row',
                    alignItems: 'center',
                    columnGap: 12,
                    borderBottomColor: 'rgba(0, 0, 0, 0.15)',
                    borderBottomWidth: option.id == 2 ? 0 : 1,
                    paddingBottom: 15,
                    marginBottom: option.id == 2 ? 0 : 15,
                  }}
                  onPress={() =>
                    option.text === 'Create Folder'
                      ? handleCreateModal()
                      : navigation.navigate('KYCFiles')
                  }>
                  <Image
                    source={option.icon}
                    resizeMode="contain"
                    style={{
                      width: 44,

                      height: 44,
                    }}
                  />
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
};

export default ModalCompFirst;
