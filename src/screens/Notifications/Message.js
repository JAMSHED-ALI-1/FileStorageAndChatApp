import {
  StyleSheet,
  Text,
  View,
  Image,
  FlatList,
  TouchableOpacity,
  Dimensions,
  SafeAreaView,
} from "react-native";
import React from "react";

import { useNavigation } from "@react-navigation/native";

import Header1 from "../Notifications/ Header1";
import { COLORS } from "../../constants/theme";
import Header from "../../constants/Header";
const { height, width } = Dimensions.get("window");

const Message = (props) => {
  const navigation = useNavigation();

  const data = [
    {
      img: require("../../assets/images/Notification.png"),
      data1:
        "In publishing and graphic design, Lorem ipsum is a placeholder text commonly used.",
      data2: "10/05/2023, 10:25 AM",
      navigate: "Message2",
    },
    {
      img: require("../../assets/images/Notification.png"),
      data1:
        "In publishing and graphic design, Lorem ipsum is a placeholder text commonly used.",
      data2: "10/05/2023, 10:25 AM",
      navigate: "SmsPreview",
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
        title="Message"
        backIcon={true}
        notife={true}
        onPressBack={() => props.navigation.goBack()}
      />
      <FlatList
      showsVerticalScrollIndicator={false}
        data={data}
        renderItem={({ item }) => (
          <TouchableOpacity
            onPress={() => props.navigation.navigate(item.navigate)}
          >
            <View>
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
          </TouchableOpacity>
        )}
      />
    </SafeAreaView>
  );
};

export default Message;

const styles = StyleSheet.create({
  flexItems1: {
    flexDirection: "row",
    paddingHorizontal: 16,
    alignItems: "center",
    marginTop: 25,
  },
  img1: {
    height: 34,
    width: 34,
  },
  txt1: {
    color: "black",
    marginLeft: 9,
    fontFamily: "Gilroy-Regular",
    fontSize: 13,
    lineHeight: 20,
  },
  txt2: {
    textAlign: "right",
    color: "#00000099",
    fontFamily: "Gilroy-Light",
    fontSize: 12,
  },
  txtRight: {
    marginTop: 4,
    paddingRight: 16,
  },
});
