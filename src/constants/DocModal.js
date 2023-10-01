import {
  Image,
  Modal,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React, { useState } from 'react';
import { ICONS } from './theme';

import DeleteModal from '../constants/DeleteModal';


export default function ModalCompFirst({ isOpen, setIsOpen, }) {
  const optionsList = [
    {
      id: 1,
      icon: ICONS.passport,
      text: "Passport",
      subText: '100 MB, 10 Files',
      navigate: '',
    },
    {
      id: 2,
      icon: ICONS.share,
      text: 'Share as a link',
      navigate: '',

    },
    {
      id: 3,
      icon: ICONS.rename,
      text: 'Rename',
      navigate: '',

    },
    {
      id: 4,
      icon: ICONS.move,
      text: 'Move',
      navigate: '',

    },
    {
      id: 5,
      icon: ICONS.delete,
      text: 'Delete',
      navigate: '',

    },

  ];
  const [del, setDel] = useState(false)


  const handleModal = () => {
    setDel(true)
    setIsOpen(false)

  }
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
                    borderBottomWidth: option.id == 5 ? 0 : 1,
                    paddingBottom: 15,
                    marginBottom: option.id == 5 ? 0 : 15
                  }}
                // onPress={() => {
                //   if (option.id === 5) {
                //     setIsOpen(false)
                //   }
                // }}

                >
                  {console.log("dlllll", option)}

                  <Image
                    source={option.icon}
                    resizeMode="contain"
                    style={{
                      width: 44,
                      height: 44,
                    }}
                  />
                  <View>
                    <Text
                      style={{
                        fontFamily: 'Gilroy-Regular',
                        fontSize: 16,
                        color: 'rgba(0, 0, 0, 0.87)',
                      }}>
                      {option.text}
                    </Text>
                    {option?.text === "Passport" &&
                      <Text>
                        {option?.subText}
                      </Text>
                    }
                  </View>
                </TouchableOpacity>
                <DeleteModal isOpen={del} setIsOpen={setDel} />
              </>
            ))}
          </View>
        </View>
      </Modal>
    </>
  );
}

const styles = StyleSheet.create({});
