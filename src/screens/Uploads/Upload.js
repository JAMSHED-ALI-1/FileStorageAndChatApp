import React from 'react';
import {
  Modal,
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  Image,
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome'; // You can use any icon library you prefer
import { COLORS } from '../../constants/theme';

const Upload = ({ isVisible, onClose }) => {
  return (
    <Modal
      animationType="slide"
      transparent={true}
      visible={isVisible}
      onRequestClose={onClose}
    >
      <View style={styles.modalContainer}>
        <View style={styles.modalContent}>
          <TouchableOpacity
            onPress={onClose}
            style={styles.closeButton}
          >
            <Image
              source={require("../../../src/assets/images/cross.png")}
              style={{ width: 15, height: 15 }}
            />

          </TouchableOpacity>
          <Text style={styles.modalHeading}>Upload Docs</Text>
          <View style={styles.iconContainer}>
            <TouchableOpacity
              style={styles.iconButton}
              onPress={() => console.log('Camera')}
            >
              <Image
                source={require("../../../src/assets/images/camera1.png")}
                style={styles.iconImage}
              />
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.iconButton}
              onPress={() => console.log('Gallery')}
            >
              <Image
                source={require("../../../src/assets/images/gallerys.png")}
                style={styles.iconImage}
              />
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  modalContainer: {
    flex: 1,
    justifyContent: 'flex-end',
    backgroundColor: 'rgba(0,0,0,0.5)',
  },
  modalContent: {
    backgroundColor: 'white',
    padding: 20,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
  },
  closeButton: {
    position: 'absolute',
    top: 10,
    right: 10,
    padding: 10,
  },
  modalHeading: {
    fontSize: 18,
    textAlign: 'center',
    marginBottom: 20,
  },
  iconContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginBottom: 20,
  },
  iconButton: {
    paddingHorizontal: 50,
    paddingVertical: 10,
    backgroundColor: 'rgba(255, 255, 255, 0.87)',
    borderRadius: 50,
    borderWidth: 1,
    borderColor: 'rgba(0, 0, 0, 0.20)',
  },
  iconImage: {
    width: 40,
    height: 40,
  },
});

export default Upload;
