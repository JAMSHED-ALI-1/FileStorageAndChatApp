import {
  FlatList,
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  SafeAreaView,
  ScrollView,
  Modal,
  Dimensions,

} from "react-native";
import React, { useState } from "react";
import { COLORS, SIZES } from "../../constants/theme";
import AntDesign from "react-native-vector-icons/AntDesign";
import { MenuList } from "../../constants/MenuList";
import { useNavigation } from "@react-navigation/native";
import Header from "../../constants/Header";
import CustomActiveBtn from "../../constants/CustomActiveBtn";
import InActiveBtn from "../../constants/InActiveBtn";

const { height, width } = Dimensions.get('window')

const MenuSetting = (props) => {
  const navigation = useNavigation();
  console.log("fdsajgdsfbasd", navigation)
  const [modalVisible, setModalVisible] = useState(false);


  const renderItem = ({ item }) => {
    return (
      <TouchableOpacity onPress={() => navigation.navigate(item.url)}>
        <View style={styles.container2}>
          <View style={{ flexDirection: "row", columnGap: 12 }}>
            <Image style={styles.icon} source={item.icon} />
            <Text style={styles.Text}>{item.text}</Text>
          </View>
          <AntDesign name="right" size={15} style={styles.rightIcon} />
        </View>
      </TouchableOpacity>
    );
  };
  return (
    <SafeAreaView style={styles.safeArea}>
      <View style={styles.screen}>
        <Header title="Menu" />
        {/* <Text style={styles.headerTxt}>Menu</Text> */}
        <ScrollView showsVerticalScrollIndicator={false}>

          <View style={styles.container}>
            <Image source={require("../../assets/images/Avtar.png")} />
            <Text style={styles.name}>Aadya Shrivastava</Text>
          </View>
          <View style={{ paddingBottom: 20 }}>
            <FlatList
              data={MenuList}
              renderItem={renderItem}
              keyExtractor={(item) => item.id}
            />
            <TouchableOpacity onPress={() => setModalVisible(true)}>
              <View style={styles.logout}>

                <Image
                  source={require("../../assets/images/logout.png")}
                  style={{ height: 44, width: 44, borderRadius: 50 }}
                />
                <Text style={styles.logoutTxt}>Logout</Text>
              </View>
            </TouchableOpacity>

          </View>
        </ScrollView>
        {/* ************ Logout Confirmation Modal ************ */}
        <Modal
          animationType="slide"
          transparent={true}
          visible={modalVisible}
          onRequestClose={() => {
            Alert.alert("Modal has been closed.");
            setModalVisible(!modalVisible);
          }}
        >
          <View style={styles.mainContainer}>
            <View style={styles.ModalSubContainer}>
              <View style={styles.HeadingContainer}>
                <View
                  style={{
                    flexDirection: "row",
                    alignItems: "center",
                    justifyContent: "center",
                    width: "55%",
                    paddingBottom: 20,
                    // marginLeft: "30%",
                  }}
                >
                  <Image
                    source={require("../../../src/assets/images/switch.png")}
                    style={{
                      height: 45,
                      width: 45,
                    }}
                  />
                </View>
                <View style={{ justifyContent: "center", marginBottom: 30 }}>
                  <Text style={styles.HeadingTxtContainer}>
                    Are you sure, do you want to logout?
                  </Text>
                </View>

                <View style={styles.ButtonMainContainer}>
                  <View style={styles.btnContainer}>
                    <InActiveBtn
                      color={COLORS.background}
                      title="Cancel"
                      // backgroundColor={COLORS.black}
                      onPress={() => setModalVisible(false)}
                    />
                  </View>
                  <View style={styles.btnContainer}>
                    <CustomActiveBtn
                      color={COLORS.background}
                      title="Logout"
                      onPress={() => navigation.navigate("CreateAccount")}
                      backgroundColor={COLORS.red}
                    // onPress={() => setModalVisible(true)}
                    />
                  </View>
                </View>
              </View>
            </View>
          </View>
        </Modal>
      </View>
    </SafeAreaView>
  );
};

export default MenuSetting;

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: COLORS.background,
    paddingHorizontal: SIZES.my * 1.6,
  },
  // header: {
  //   marginVertical: SIZES.my * 1.5,
  // },
  headerTxt: {
    color: COLORS.header,
    fontSize: SIZES.h2,
    fontFamily: "Gilroy-SemiBold",
    textAlign: "center",
    fontWeight: "700",
    lineHeight: 21,
  },
  mainContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",

    backgroundColor: "rgba(0,0,0,0.4)",
  },
  btnContainer: {
    height: height * 0.08,
    alignItems: "center",
    justifyContent: "center",
    width: width * 0.32,
  },
  ButtonMainContainer: {
    height: height * 0.07,
    width: width * 0.2,
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
    columnGap: 15

  },
  HeadingTxtContainer: {
    color: COLORS.black,
    fontSize: SIZES.h2,
    textAlign: "center",
    fontWeight: "500",
  },
  HeadingContainer: {
    height: height * 0.32,
    width: width * 0.8,
    backgroundColor: "#fff",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 15,
  },
  ModalSubContainer: {
    height: height * 0.1,
    width: width * 0.75,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#FFFFFF",
  },
  container: {
    height: 62,
    backgroundColor: "rgba(0, 0, 0, 0.03)",
    paddingVertical: SIZES.mx,
    borderRadius: 10,
    flexDirection: "row",
    alignItems: "center",
    gap: 12,
    marginBottom: 10,
    paddingLeft: 5,
  },
  name: {
    color: COLORS.header,
    fontSize: SIZES.h2,
    fontFamily: "Gilroy-SemiBold",
    fontWeight: "400",
  },
  icon: {
    height: 42,
    width: 42,
    borderRadius: 60,
    marginVertical: 10,
  },
  Text: {
    fontFamily: "Gilroy-Regular",
    fontSize: SIZES.h2,
    color: SIZES.header,
    alignSelf: "center",
    fontWeight: "500",
    lineHeight: 18,
  },
  container2: {
    alignItems: "center",
    flexDirection: "row",
    justifyContent: "space-between",
    borderBottomWidth: 1.5,
    borderBottomColor: "rgba(0, 0, 0, 0.15)",
  },
  rightIcon: {
    color: COLORS.header,
  },
  logout: {
    flexDirection: "row",
    columnGap: 12,
    marginTop: 15,
  },
  logoutTxt: {
    fontFamily: "Gilroy-Regular",
    fontSize: SIZES.h2,
    color: SIZES.header,
    alignSelf: "center",
    fontWeight: "500",
    lineHeight: 18,
  },
  safeArea: {
    flex: 1,
    backgroundColor: COLORS.background,
  },
});
