import {
  Image,
  SafeAreaView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import React from "react";
import UserHeader from "../../constants/UserHeader";
import { COLORS, IMAGES } from "../../constants/theme";

const Home = (props) => {
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: COLORS.background }}>
      <UserHeader greet={true} userName={true} />

      <View style={{ justifyContent: "center", alignItems: "center" }}>
        <Image style={styles.logo} source={IMAGES.logo} />
        <Text style={styles.title}>Real-Time</Text>
      </View>
      <View style={styles.main}>
        <View style={styles.SyncContainer}>
          <Image
            style={styles.img}
            resizeMode="contain"
            source={IMAGES.cloud}
          />
          <View style={{ flexDirection: "column", paddingLeft: 20 }}>
            <Text style={styles.syncText}>Last Data Sync on Date</Text>

            <View style={{ flexDirection: "row" }}>
              <Text style={styles.timing}>19th July 2023</Text>
              <Text style={styles.timing}> | </Text>
              <Text style={styles.timing}>01:42 PM</Text>
            </View>
          </View>
        </View>
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            width: "100%",
            marginTop: 10,
          }}
        >
          <TouchableOpacity
            onPress={() => props.navigation.navigate("Document")}
            style={styles.docsContainer}
          >
            <Image
              style={styles.img}
              resizeMode="contain"
              source={IMAGES.docs}
            />
            <Text style={styles.typeText}>Documnets</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.docsContainer}>
            <View>
              <Image
                style={styles.img}
                resizeMode="contain"
                source={IMAGES.sync}
              />
            </View>
            <View>
              <Text style={styles.typeText}>Sync</Text>
              <Text style={styles.typeText}>Websites</Text>
            </View>
          </TouchableOpacity>
        </View>
        <TouchableOpacity
          onPress={() => props.navigation.navigate("RecentActivity")}
          style={styles.recentContainer}
        >
          <Image
            style={styles.img}
            resizeMode="contain"
            source={IMAGES.recent}
          />
          <Text style={styles.recentText}>Recent Activity</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default Home;

const styles = StyleSheet.create({
  logo: {
    height: 67,
    width: 65,
    paddingTop: 5,
  },
  title: {
    color: COLORS.heading,
    fontSize: 16,
    fontFamily: "Gilroy-Bold",
    paddingVertical: 7,
  },
  main: {
    padding: 20,
    justifyContent: "center",
    alignItems: "center",
  },
  SyncContainer: {
    borderWidth: 1,
    flexDirection: "row",
    borderRadius: 60,
    padding: 20,
    width: "100%",
    height: 80,
    borderColor: COLORS.boderColor,
  },
  docsContainer: {
    borderWidth: 1,
    borderColor: COLORS.boderColor,
    borderRadius: 60,
    width: 175,
    height: 80,
    flexDirection: "row",
    padding: 25,
    alignItems: "center",
  },
  recentContainer: {
    width: 130,
    borderWidth: 1,
    borderColor: COLORS.boderColor,
    borderRadius: 300,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 3,
    padding: 30,
  },
  syncText: {
    color: COLORS.heading,
    fontSize: 16,
    fontFamily: "Gilroy-Medium",
    fontWeight: "600",
  },
  img: {
    width: 30,
    height: 30,
  },
  typeText: {
    fontFamily: "Gilroy-Medium",
    color: COLORS.heading,
    fontSize: 16,
    fontWeight: "600",
    paddingLeft: 10,
  },
  recentText: {
    fontFamily: "Gilroy-Medium",
    color: COLORS.heading,
    fontSize: 14,
    fontWeight: "500",
    paddingTop: 7,
    textAlign: "center",
  },
  timing: {
    paddingTop: 5,
    color: COLORS.secondary,
    fontFamily: "Gilroy-Regular",
    fontSize: 12,
  },
});
