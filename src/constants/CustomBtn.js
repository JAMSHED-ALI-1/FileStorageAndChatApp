import {
  StyleSheet,
  Text,
  Touchable,
  TouchableOpacity,
  View,
} from 'react-native';
import React from 'react';

const CustomBtn = props => {
  return (
    <TouchableOpacity
      onPress={props.onPress}
      style={{
        backgroundColor: props.bgColor,
        width: props.width,
        padding: props.padding,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 50,
        borderWidth : props.borderWidth,
        borderColor : props.borderColor
      }}>
      <Text
        style={{
          color: props.textColor,
          fontFamily : props.fontFamily,
          fontSize: props.textSize,
        }}>
        {props.text}
      </Text>
    </TouchableOpacity>
  );
};

export default CustomBtn;

const styles = StyleSheet.create({
 
});
