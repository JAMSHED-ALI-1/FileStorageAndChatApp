import { StyleSheet, Text, View, Image, TouchableOpacity, SafeAreaView } from 'react-native';
import React, { useState } from 'react';
import AntDesign from 'react-native-vector-icons/AntDesign';
import { COLORS } from '../../constants/theme';

import Header from '../../constants/Header';

const Support = (props) => {
  const [isClicked, setIsClicked] = useState(false);
  const [isClicked2, setIsClicked2] = useState(false);

  const toggleIcon = () => {
    setIsClicked(!isClicked);
  };

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: COLORS.background }}>
      <Header title="Help & Support" backIcon={true}
        onPressBack={() => props.navigation.goBack()}
      />

      <View style={styles.contentContainer}>
        <View style={styles.textContainer}>
          <Text style={styles.text}>In publishing and graphic design?</Text>
          <TouchableOpacity onPress={toggleIcon} style={styles.icon}>
            {isClicked ? (
              <AntDesign name="up" style={styles.icon} size={20} />
            ) : (
              <AntDesign name="down" style={styles.icon} size={20} />
            )}
          </TouchableOpacity>
        </View>
        {isClicked ? (
          <Text style={styles.text}>
            In publishing and graphic design, Lorem ipsum is a placeholder text commonly used.
          </Text>
        ) : null}

        <View style={styles.textContainer}>
          <Text style={styles.text}>In publishing and graphic design?</Text>
          <TouchableOpacity
            onPress={() => setIsClicked2(!isClicked2)}
            style={styles.icon}>
            {isClicked2 ? (
              <AntDesign name="up" style={styles.icon} size={20} />
            ) : (
              <AntDesign name="down" style={styles.icon} size={20} />
            )}
          </TouchableOpacity>
        </View>
        {isClicked2 ? (
          <Text style={styles.text}>
            In publishing and graphic design, Lorem ipsum is a placeholder text commonly used.
          </Text>
        ) : null}
      </View>

      {/* Fixed chat and call icons */}
      <View style={styles.fixedIconsContainer}>
        <TouchableOpacity style={styles.chatIcon}>
          <Image source={require("../../../src/assets/images/chatt.png")} style={{ height: 50, width: 50 }} />
        </TouchableOpacity>
        <TouchableOpacity style={styles.callIcon} onPress={() => props.navigation.navigate("ChatWith_us")}>
          <Image source={require("../../../src/assets/images/call.png")} style={{ height: 50, width: 50 }} />
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default Support;

const styles = StyleSheet.create({
  contentContainer: {
    flex: 1,
    paddingHorizontal: 16,
  },
  textContainer: {
    flexDirection: 'row',
    marginTop: 20,
    justifyContent: 'space-between',
    marginBottom: 10,
  },
  text: {
    color: '#000000DE',
  },
  icon: {
    color: COLORS.black,
  },
  fixedIconsContainer: {
    position: 'absolute',
    bottom: 20,
    right: 20,
    flexDirection: 'column',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: 80,
  },
  chatIcon: {
    marginVertical: 5
  },
  callIcon: {

  },
});
