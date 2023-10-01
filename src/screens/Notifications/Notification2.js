import {
  StyleSheet,
  Text,
  View,
  Image,
  FlatList,
  Dimensions,
  ScrollView,
  SafeAreaView,
} from "react-native";
import React from "react";
const { height, width } = Dimensions.get("window");

import Header1 from "./ Header1";
import { SafeAreaFrameContext } from "react-native-safe-area-context";
import { COLORS } from "../../constants/theme";
import Header from "../../constants/Header";

const Notification2 = (props) => {
  const data = [
    {
      img: require("../../assets/images/Notification.png"),
      data1:
        "In publishing and graphic design, Lorem ipsum is a placeholder text commonly used.",
      data2: "10/05/2023, 10:25 AM",
    },
    {
      img: require("../../assets/images/Notification.png"),
      data1:
        "In publishing and graphic design, Lorem ipsum is a placeholder text commonly used.",
      data2: "10/05/2023, 10:25 AM",
    },
    {
      img: require("../../assets/images/Notification.png"),
      data1:
        "In publishing and graphic design, Lorem ipsum is a placeholder text commonly used.",
      data2: "10/05/2023, 10:25 AM",
    },
    {
      img: require("../../assets/images/Notification.png"),
      data1:
        "In publishing and graphic design, Lorem ipsum is a placeholder text commonly used.",
      data2: "10/05/2023, 10:25 AM",
    },
    {
      img: require("../../assets/images/Notification.png"),
      data1:
        "In publishing and graphic design, Lorem ipsum is a placeholder text commonly used.",
      data2: "10/05/2023, 10:25 AM",
    },
    {
      img: require("../../assets/images/Notification.png"),
      data1:
        "In publishing and graphic design, Lorem ipsum is a placeholder text commonly used.",
      data2: "10/05/2023, 10:25 AM",
    },
    {
      img: require("../../assets/images/Notification.png"),
      data1:
        "In publishing and graphic design, Lorem ipsum is a placeholder text commonly used.",
      data2: "10/05/2023, 10:25 AM",
    },
    {
      img: require("../../assets/images/Notification.png"),
      data1:
        "In publishing and graphic design, Lorem ipsum is a placeholder text commonly used.",
      data2: "10/05/2023, 10:25 AM",
    },
    {
      img: require("../../assets/images/Notification.png"),
      data1:
        "In publishing and graphic design, Lorem ipsum is a placeholder text commonly used.",
      data2: "10/05/2023, 10:25 AM",
    },
    {
      img: require("../../assets/images/Notification.png"),
      data1:
        "In publishing and graphic design, Lorem ipsum is a placeholder text commonly used.",
      data2: "10/05/2023, 10:25 AM",
    },
    {
      img: require("../../assets/images/Notification.png"),
      data1:
        "In publishing and graphic design, Lorem ipsum is a placeholder text commonly used.",
      data2: "10/05/2023, 10:25 AM",
    },
    {
      img: require("../../assets/images/Notification.png"),
      data1:
        "In publishing and graphic design, Lorem ipsum is a placeholder text commonly used.",
      data2: "10/05/2023, 10:25 AM",
    },
  ];

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: COLORS.background }}>
      <Header
        title="Notifications"
        backIcon={true}
        notife={true}
        onPressBack={() => props.navigation.goBack()}
      />
      <ScrollView showsVerticalScrollIndicator={false}>
        <FlatList
          data={data}
          renderItem={({ item }) => (
            <View style={{ paddingHorizontal: 16 }}>
              <View style={styles.flexItems1}>
                <Image
                  source={item.img}
                  style={styles.img1}
                  resizeMode="contain"
                />
                <Text style={styles.txt1}>{item.data1}</Text>
              </View>
              <View style={styles.txtRight}>
                <Text style={styles.txt2}>{item.data2}</Text>
              </View>
            </View>
          )}
        />
      </ScrollView>
    </SafeAreaView>
  );
};

export default Notification2;

const styles = StyleSheet.create({
  flexItems1: {
    flexDirection: "row",

    alignItems: "center",
    marginTop: 25,
  },
  img1: {
    height: 34,
    width: 34,
    marginRight: 16
  },
  txt1: {
    color: "black",

    fontFamily: "Gilroy-Regular",
    fontSize: 13,
    lineHeight: 20,
    flex: 1
  },
  txt2: {
    textAlign: "right",
    color: "#00000099",
    fontFamily: "Gilroy-Regular",
    fontSize: 12,
  },
  txtRight: {
    marginTop: 4,

  },
});
