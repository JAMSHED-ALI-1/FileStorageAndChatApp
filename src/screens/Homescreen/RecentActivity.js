import {
  FlatList,
  Image,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import React from "react";
import Header from "../../constants/Header";
import { COLORS, ICONS, IMAGES } from "../../constants/theme";

const data = [
  {
    id: 1,
    img: ICONS.file,
    title: "John Doe",
    info: "1 file added",
    timing: "10/05/2023, 10:25 AM",
  },
  {
    id: 2,
    img: ICONS.img,
    title: "John Doe",
    info: "1 file added",
    timing: "10/05/2023, 10:25 AM",
  },
  {
    id: 3,
    img: ICONS.file,
    title: "John Doe",
    info: "1 file added",
    timing: "10/05/2023, 10:25 AM",
  },
  {
    id: 4,
    img: ICONS.img,
    title: "John Doe",
    info: "1 file added",
    timing: "10/05/2023, 10:25 AM",
  },
  {
    id: 5,
    img: ICONS.file,
    title: "John Doe",
    info: "1 file added",
    timing: "10/05/2023, 10:25 AM",
  },
  {
    id: 6,
    img: ICONS.img,
    title: "John Doe",
    info: "1 file added",
    timing: "10/05/2023, 10:25 AM",
  },
  {
    id: 7,
    img: ICONS.file,
    title: "John Doe",
    info: "1 file added",
    timing: "10/05/2023, 10:25 AM",
  },
  {
    id: 8,
    img: ICONS.img,
    title: "John Doe",
    info: "1 file added",
    timing: "10/05/2023, 10:25 AM",
  },
  {
    id: 9,
    img: ICONS.file,
    title: "John Doe",
    info: "1 file added",
    timing: "10/05/2023, 10:25 AM",
  },
  {
    id: 10,
    img: ICONS.img,
    title: "John Doe",
    info: "1 file added",
    timing: "10/05/2023, 10:25 AM",
  },
];

const renderActivityData = ({ item }) => {
  return (
    <View
      style={{
        borderBottomWidth: 1,
        borderBottomColor: COLORS.boderColor,
        flexDirection: "row",
        paddingVertical: 15,
      }}
    >
      <View style={{ flexDirection: "column" }}>
        <Image source={item.img} style={{ width: 45, height: 45 }} />
      </View>
      <View
        style={{
          marginLeft: 15,
          flexDirection: "column",
          justifyContent: "space-between",
        }}
      >
        <Text>{item.title}</Text>
        <View style={{ flexDirection: "row", columnGap: 60 }}>
          <Text>{item.info}</Text>
          <Text style={{ marginLeft: 20 }}>{item.timing}</Text>
        </View>
      </View>
    </View>
  );
};

const RecentActivity = (props) => {
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: COLORS.background }}>
      <Header
        title="Recent Activity"
        backIcon={true}
        onPressBack={() => props.navigation.goBack()}
      />
      <ScrollView>
        <View style={{ paddingHorizontal: 20 }}>
          <Image
            source={ICONS.seacrh}
            style={styles.seacrh}
            resizeMode="contain"
          />
          <TextInput
            style={styles.searchbar}
            placeholder="search by file/doc name"
          />
          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-between",
              marginTop: 10,
            }}
          >
            <View>
              <Text style={styles.text}>Filter By</Text>
            </View>
            <View style={{ flexDirection: "row", columnGap: 10 }}>
              <TouchableOpacity>
                <Text>Date/Month</Text>
              </TouchableOpacity>
              {/* <Text
              style={{
                backgroundColor: COLORS.searchbar,
                padding: 2,
                borderRadius: 10,
              }}>
              Month
            </Text>
            <Text
              style={{
                backgroundColor: COLORS.searchbar,
                padding: 2,
                borderRadius: 10,
              }}>
              Date
            </Text> */}
            </View>
          </View>
          <FlatList
            showsVerticalScrollIndicator={false}
            data={data}
            renderItem={renderActivityData}
            contentContainerStyle={{ paddingBottom: 70 }}
            ListEmptyComponent={() => {
              <View
                style={{
                  flex: 1,
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <Image
                  source={IMAGES.nodata}
                  style={{ height: 170, width: 170 }}
                />
                <Text>No Recent Activity Found!</Text>
              </View>;
            }}
          />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default RecentActivity;

const styles = StyleSheet.create({
  searchbar: {
    borderWidth: 1,
    borderRadius: 50,
    backgroundColor: COLORS.searchbar,
    borderColor: COLORS.searchbar,
    paddingLeft: 60, // Adjusted for better padding
    paddingRight: 16,
    marginTop: 10, // Give some margin top for better spacing
    height: 40, // Consider specifying a height for consistent look
  },

  seacrh: {
    width: 20,
    height: 20,
    top: 20, // Adjusted
    left: 40, // Adjusted
    position: "absolute",
    zIndex: 1, // Ensure it's above the text input
  },

  text: {
    color: COLORS.heading,
    fontSize: 16, // Increased font size slightly
    fontFamily: "Gilroy-Medium",
    marginVertical: 5, // Vertical spacing for better appearance
  },
});
