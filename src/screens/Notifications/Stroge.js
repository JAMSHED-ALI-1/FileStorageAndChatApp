import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  SafeAreaView,
  Dimensions,
} from "react-native";
import React from "react";

import { COLORS, ICONS, IMAGES } from "../../constants/theme";

import Header from "../../constants/Header";
import InActiveBtn from "../../constants/InActiveBtn";

const Data = [
  {
    title: "Images",
    img: ICONS.img,
    info: "75 Images",
  },
  {
    title: "Docs",
    img: ICONS.file,
    info: "80 Docs",
  },
];

const Stroge = (props) => {
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: COLORS.background }}>
      <Header
        title="Data Storage"
        backIcon={true}
        onPressBack={() => props.navigation.goBack()}
      />


      <View style={{paddingHorizontal:16}}>

      <Text style={styles.txt2}>Used Storage</Text>
      <View style={styles.imgContainer}>
        <Image
          source={require("./images/Circle2.png")}
          style={styles.img2}
          resizeMode="contain"
        />
      </View>
      <View style={styles.InActiveBtnContainer}>
        <InActiveBtn
          title="Manage Storage"
          color={COLORS.primary}
          backgroundColor={COLORS.background}
        />
      </View>
      <View>
        <Text style={styles.txt4}>Used Storage Details</Text>
        {Data.map((item, index) => (
          <View style={{ flexDirection: "row", marginTop:20 }}>
            <Image style={{ width: 45, height: 45 }} source={item.img} />
            <View style={{marginLeft:15}}>
              <Text style={{color:COLORS.heading, fontFamily:'Gilroy-Regular'}}>{item.title}</Text>
              <Text>{item.info}</Text>
            </View>
          </View>
        ))}
      </View>
      </View>

      
    </SafeAreaView>
  );
};

export default Stroge;

const styles = StyleSheet.create({
  txt2: {
    color: "#000000DE",
    textAlign: "center",
    fontFamily: "Gilroy-SemiBold",
    marginVertical: 20,
  },
  img2: {
    height: 139,
    width: 139,
    alignSelf: "center",
    marginTop: 6,
  },

  txt3: {
    color: "#000000DE",
    fontFamily: "Gilroy-SemiBold",
  },
  imgContainer: {
    height: 139,
    Width: 139,
  },
  txt4: {
    color: "#000000DE",
    fontWeight: "400",
    fontSize:16,
    fontFamily:'Gilroy-SemiBold',
    marginTop:30,
  },
  txtContainer: {
    marginTop: 20,
    marginHorizontal: 18,
  },
  img3: {
    height: 45,
    width: 45,
  },
  rowItem2: {
    flexDirection: "row",
    alignItems: "center",
  },
  InActiveBtnContainer: {
    marginTop: 20,
  },
});
