import {
  Image,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  Touchable,
  TouchableOpacity,
  View,
  Alert,
} from "react-native";
import React, { useState } from "react";

import { SIZES, COLORS } from "../../constants/theme";
import Header from "../../constants/Header";
import CustomActiveBtn from "../../constants/CustomActiveBtn";
import InActiveBtn from "../../constants/InActiveBtn";
import ImagePicker from "react-native-image-crop-picker";
import { height } from "../LinkedDomain/responsiveui";

const Instruction = (props) => {
  return (
    <View style={styles.pill}>
      <Image
        source={props.url}
        resizeMode="contain"
        style={{ height: 20, width: 40 }}
      />
      <Text style={styles.pillText}>{props.text}</Text>
    </View>
  );
};

const ImageUpload = (props) => {
  const img1 = require("../../assets/images/hat.png");
  const img2 = require("../../assets/images/glass.png");
  const img3 = require("../../assets/images/filter.png");
  const img4 = require("../../assets/images/light.png");

  const [images, setImages] = useState("");

  const onCamera2 = (type) => {
    setTimeout(() => {
      ImagePicker.openCamera({
        width: 300,
        height: 400,
        cropping: true,
        quality: "high",
        includeBase64: true,
        // mediaType: "any",
      }).then((image) => {
        setImages(image.path);
      });
    }, 1000);
  };
  const onGallary2 = (type) => {
    setTimeout(() => {
      ImagePicker.openPicker({
        width: 300,
        height: 400,
        cropping: true,
        quality: "high",
        includeBase64: true,
        // mediaType: "any",
      }).then((image) => {
        setImages(image.path);

        // console.log("image->", image);
        // imageUploading(image, type);
      });
    }, 1000);
  };
  const onSelectImage = (type) => {
    if (Platform.OS === "ios" || Platform.OS === "android") {
      Alert.alert("Upload Image", "Choose an option", [
        {
          text: "Camera",
          onPress: () => {
            onCamera2(type);
          },
        },
        {
          text: "Photo",
          onPress: () => {
            onGallary2(type);
          },
        },
        { text: "Cancel", onPress: () => {} },
      ]);
    }
  };

  return (
    <SafeAreaView>
      <View style={styles.container}>
        <ScrollView contentContainerStyle={{ paddingBottom: 40 }}>
          <Header
            backIcon={true}
            title="Identity Verification"
            onPressBack={() => props.navigation.goBack()}
          />
          <View style={styles.body}>
            {/* <CustomHeader heading={'Identity Verification'} name={'left'} props={'Verify3'} /> */}
            <View style={styles.textRow}>
              <Text style={styles.heading1}>Take a Selfie</Text>
              <Text style={styles.text}>
                Take a selfie for your profile picture
              </Text>
            </View>
            <View style={styles.pillsRow}>
              <Instruction text="Avoid wearing hats" url={img1} />
              <Instruction text="Avoid wearing glass" url={img2} />
            </View>
            <View style={styles.pillsRow}>
              <Instruction text="Avoid wearing filter" url={img3} />
              <Instruction text="Use enough lighting" url={img4} />
            </View>

            {images ? (
              <Image
                source={{ uri: images }}
                style={{
                  ...styles.selfieBtn,
                }}
              />
            ) : (
              <TouchableOpacity onPress={() => onSelectImage("frontImageUrl")}>
                <View style={styles.selfieBtn}>
                  <Image
                    source={require("../../assets/images/camera.png")}
                    resizeMode="contain"
                    style={{ height: 20 }}
                  />
                  <Text style={styles.pillText}>Take Selfie</Text>
                </View>
              </TouchableOpacity>
            )}

            <Text style={styles.bottomText}>
              File size must between <Text style={styles.boldText}>10Kb</Text>{" "}
              and <Text style={styles.boldText}>2Mb</Text> in{" "}
              <Text style={styles.boldText}>.jpg/.png </Text> format.
            </Text>

            <View style={styles.bottomBtns}>
              <InActiveBtn
                backgroundColor={COLORS.background}
                color={COLORS.secondary}
                title={"Preview"}
              />
              <CustomActiveBtn
                onPress={() => props.navigation.navigate("Successful")}
                backgroundColor={COLORS.primary}
                color={"#fff"}
                title={"Continue"}
              />
            </View>
          </View>
        </ScrollView>
      </View>
    </SafeAreaView>
  );
};

export default ImageUpload;

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#fff",
    height: "100%",
  },
  body: {
    paddingHorizontal: SIZES.padding * 1.6,
    paddingBottom: 30
  },
  heading1: {
    color: COLORS.primary,
    fontSize: SIZES.h2,
    fontFamily: "Gilroy-SemiBold",
    // marginTop: 15,
  },
  textRow: {
    gap: 7,
    marginVertical: 15,
  },
  text: {
    fontFamily: "Gilroy-Regular",
    fontSize: 14,
    color: COLORS.secondary,
  },

  //   Instruction Pills
  pill: {
    borderWidth: 1,
    borderColor: COLORS.boderColor,
    paddingHorizontal: SIZES.padding * 3,
    paddingVertical: SIZES.padding * 2.2,
    borderRadius: 60,
    width: "48%",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    marginVertical: 5,
    gap: 5,
  },
  pillText: {
    fontSize: 14,
    color: COLORS.primary,
    fontFamily: "Gilroy-Medium",
    fontWeight: "400",
  },
  pillsRow: { flexDirection: "row", justifyContent: "space-between" },
  selfieBtn: {
    borderWidth: 1,
    padding: 20,
    marginTop: 5,
    height: 120,
    width: 120,
    gap: 10,
    borderColor: COLORS.boderColor,
    alignSelf: "center",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 300,
  },
  bottomText: {
    textAlign: "center",
    fontSize: 16,
    color: COLORS.secondary,
    fontFamily: "Gilroy-Medium",
    fontWeight: "400",
    marginTop: 50,
  },
  boldText: {
    fontFamily: "Gilroy-Bold",
    fontSize: 16,
    color: COLORS.black,
  },
  bottomBtns: {
    rowGap: 15,
    marginTop: 25,
  },
});
