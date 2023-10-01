import {
  Image,
  SafeAreaView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import React from "react";
import {
  height,
  moderateScale,
  moderateScaleVertical,
  textScale,
  width,
} from "./responsiveui";

export default function BrokenLink() {
  return (
    <>
      <SafeAreaView>
        <View style={[styles.headContainer]}>
          <TouchableOpacity onPress={() => console.log("Navigate to Profile")}>
            <Image
              source={require("./icons/avatar.png")}
              resizeMode="contain"
              style={[styles.headImg]}
            />
          </TouchableOpacity>
          <Text
            style={[
              styles.commonText,
              { fontFamily: "Gilroy-SemiBold", color: "#000000" },
            ]}
          >
            Linked Domains
          </Text>
          <View style={{ width: moderateScale(44) }} />
        </View>
        <View
          style={{
            paddingHorizontal: moderateScale(16),
            alignItems: "center",
            justifyContent: "center",
            height: height * 0.7,
          }}
        >
          <Image
            source={require("./icons/broken-link.png")}
            resizeMode="contain"
            style={{
              width: moderateScale(92),
              height: moderateScaleVertical(92),
              alignSelf: "center",
            }}
          />
          <Text
            style={{
              fontFamily: "Gilroy-Medium",
              fontSize: textScale(16),
              color: "#000000",
              lineHeight: 20,
              textAlign: "center",
              marginTop: moderateScaleVertical(28),
              marginBottom: moderateScaleVertical(10),
            }}
          >
            No Domain linked yet !
          </Text>
          <Text
            style={{
              color: "rgba(0, 0, 0, 0.60)",
              fontFamily: "Gilroy-Light",
              fontSize: textScale(14),
              lineHeight: 20,
              textAlign: "center",
            }}
          >
            Once you have signed up on websites by linking your real-time
            application, you will find the linked websites listed here. For
            further details, please consult our instructional video.
          </Text>
        </View>
        <View
          style={{
            justifyContent: "flex-end",
          }}
        >
          <Text
            style={{
              color: "#0276BD",
              fontFamily: "Gilroy-Light",
              fontSize: textScale(14),
              lineHeight: 25,
              textAlign: "center",
              textDecorationLine: "underline",
              marginHorizontal: 16,
            }}
          >
            https://www.youtube.com/watch?v=wX6Tl32IgWY&feature=youtu.be
          </Text>
        </View>
      </SafeAreaView>
    </>
  );
}

const styles = StyleSheet.create({
  headContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginVertical: moderateScaleVertical(20),
    marginHorizontal: 15,
  },
  headImg: {
    width: moderateScale(44),
    height: moderateScaleVertical(44),
  },
  // Global Container
  commonText: {
    color: "rgba(0, 0, 0, 0.87)",
    fontSize: textScale(16),
  },
  container: {
    flex: 1,
    backgroundColor: "white",
    paddingHorizontal: 20,
  },
});
