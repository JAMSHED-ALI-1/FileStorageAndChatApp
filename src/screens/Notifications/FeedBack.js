import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Image,
  Dimensions,
  SafeAreaView,
} from 'react-native';
import React from 'react';
import {
  responsiveHeight,
  responsiveWidth,
} from 'react-native-responsive-dimensions';
import { TextInput } from 'react-native-paper';
import Header1 from './ Header1';
import Header from '../../constants/Header';
import CustomActiveBtn from '../../constants/CustomActiveBtn';
import { COLORS } from '../../constants/theme';
const { height, width } = Dimensions.get('window');

const FeedBack = (props) => {
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: '#FFFFFFEB' }}>
      <Header title="Feedback"
        backIcon={true}
        onPressBack={() => props.navigation.goBack()}
      />
      <View style={{ paddingHorizontal: 10 }}>
        <Text style={styles.txt2}>Additional Comment/Description:</Text>
        <TextInput
          multiline={true}
          mode="outlined"
          numberOfLines={8}
          cursorColor="black"
          placeholder="Write here..."
          placeholderTextColor="#00000099"
          activeOutlineColor="#00000040"
          style={styles.txtInput}
          outlineStyle={{ borderRadius: 10 }}

        />
        <View style={styles.custombtn}>
          <CustomActiveBtn
            title={'Submit'}
            backgroundColor={COLORS.black}
            color={COLORS.background}
          />
        </View>
      </View>
    </SafeAreaView>
  );
};

export default FeedBack;

const styles = StyleSheet.create({
  txt2: {
    color: '#000000DE',
    paddingHorizontal: 10,
    fontSize: 16,
  },
  txtInput: {
    width: "96%",
    alignSelf: 'center',
    backgroundColor: '#FFFFFFEB',
    height: height * 0.2
  },


  custombtn: {
    marginTop: 20,
  },
});
