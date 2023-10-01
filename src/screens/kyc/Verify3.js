import {
  Alert,
  Image,
  Platform,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  Touchable,
  TouchableOpacity,
  View,
} from "react-native";
import React, { useState } from "react";
import { COLORS, SIZES } from "../../constants/theme";
import CustomBtn from "../../constants/CustomBtn";
import { launchImageLibrary } from "react-native-image-picker";
import Icon from "react-native-vector-icons/Feather";

import Header from "../../constants/Header";
import InActiveBtn from "../../constants/InActiveBtn";
import CustomActiveBtn from "../../constants/CustomActiveBtn";
import ImagePicker from "react-native-image-crop-picker";
import { height } from "../LinkedDomain/responsiveui";

const Verify3 = ({ navigation }) => {
  const [images, setImages] = useState({
    backend: "",
    frontend: "",
  });

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
        type === "frontImageUrl"
          ? setImages({
              ...images,
              ["frontend"]: image.path,
            })
          : setImages({
              ...images,
              ["backend"]: image.path,
            });
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
        type === "frontImageUrl"
          ? setImages({
              ...images,
              ["frontend"]: image.path,
            })
          : setImages({
              ...images,
              ["backend"]: image.path,
            });

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

  const imageUploading = async (imagePath, type) => {
    console.log("imgpath", imagePath);
    setIsUploading(true);
    try {
      const formData = new FormData();
      formData.append("file", {
        uri: imagePath.path,
        name: "image",
        type: imagePath.mime,
      });
      const response = await uploadFileHandlersss(uploadFileBase64, formData);
      console.log("imageUploadApi==", response);
      // setProfileImg(response.data.result);
      if (type === "frontImageUrl") {
        setKycData({
          ...kyc,
          ["passport"]: {
            ...kyc?.passport,
            ["frontImage"]: response?.data?.result,
          },
        });
      } else {
        setKycData({
          ...kyc,
          ["passport"]: {
            ...kyc?.passport,
            ["backImage"]: response?.data?.result,
          },
        });
      }
      setIsUploading(false);
    } catch (error) {
      console.log("uploaded images-->", error);
      setIsUploading(false);
    }
  };

  return (
    <SafeAreaView>
      <View style={{ height: "100%", backgroundColor: "#fff" }}>
        <ScrollView showsVerticalScrollIndicator={false}>
          <Header
            title="Complete Your KYC"
            backIcon={true}
            onPressBack={() => navigation.goBack()}
          />
          <View style={styles.body}>
            <View style={styles.textRow}>
              <Text style={styles.heading1}>Identity Verification</Text>
              <Text style={styles.text}>Upload your document</Text>
            </View>

            {/* Upload Section  */}
            <View style={styles.uploadSection}>
              <View style={styles.textRow}>
                <Text style={styles.textPrime}>Front side of passport</Text>
                <Text style={styles.text3}>
                  JPEG, PNG, GIF, Max 10mb (640 x 480 recommended)
                </Text>
              </View>
              {images.frontend ? (
                <Image
                  source={{ uri: images?.frontend }}
                  style={{
                    height: height * 0.26,
                    borderRadius: 10,
                  }}
                />
              ) : (
                <TouchableOpacity
                  onPress={() => onSelectImage("frontImageUrl")}
                >
                  <View style={styles.imageContainer}>
                    <Icon name="upload" size={20} color={COLORS.secondary} />
                    <Text style={styles.text1}>Browse</Text>
                  </View>
                </TouchableOpacity>
              )}
            </View>
            <View style={styles.uploadSection}>
              <View style={styles.textRow}>
                <Text style={styles.textPrime}>Back side of passport</Text>
                <Text style={styles.text3}>
                  JPEG, PNG, GIF, Max 10mb (640 x 480 recommended)
                </Text>
              </View>
              {images.backend ? (
                <Image
                  source={{ uri: images?.backend }}
                  style={{
                    height: height * 0.26,
                    borderRadius: 10,
                  }}
                />
              ) : (
                <TouchableOpacity onPress={() => onSelectImage("backImageUrl")}>
                  <View style={styles.imageContainer}>
                    <Icon name="upload" size={20} color={COLORS.secondary} />
                    <Text style={styles.text1}>Browse</Text>
                  </View>
                </TouchableOpacity>
              )}
            </View>

            {/* Buttons  */}
            <View style={styles.buttonRow}>
              <InActiveBtn
                width="48%"
                backgroundColor={"#fff"}
                title={"Skip"}
                color={COLORS.secondary}
                onPress={() => navigation.navigate("ImageUpload")}
              />
              <CustomActiveBtn
                width="48%"
                backgroundColor={COLORS.primary}
                title={"Continue"}
                color={COLORS.background}
                onPress={() => navigation.navigate("ImageUpload")}
              />
            </View>
          </View>
        </ScrollView>
      </View>
    </SafeAreaView>
  );
};

export default Verify3;

const styles = StyleSheet.create({
  body: {
    paddingHorizontal: SIZES.padding * 1.6,
  },
  heading1: {
    color: COLORS.primary,
    fontSize: SIZES.h2,
    fontFamily: "Gilroy-SemiBold",
    // marginTop: 15,
  },
  textPrime: {
    color: COLORS.primary,
    fontWeight: "400",
    fontSize: 16,
    fontFamily: "Gilroy-Regular",
  },
  textRow: {
    gap: 7,
    marginVertical: 10,
  },
  text: {
    fontFamily: "Gilroy-Regular",
    fontSize: 14,
    color: COLORS.secondary,
  },
  text1: {
    fontFamily: "Gilroy-Regular",
    fontSize: 16,
    color: COLORS.secondary,
  },
  text3: {
    fontFamily: "Gilroy-Regular",
    fontSize: 14,
    color: COLORS.secondary,
  },
  imageContainer: {
    borderWidth: 1,
    borderColor: COLORS.boderColor,
    borderStyle: "dashed",
    alignItems: "center",
    justifyContent: "center",
    gap: 5,
    padding: "15%",
    borderRadius: 10,
  },
  uploadSection: {
    marginBottom: 10,
  },
  buttonRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginVertical: 15,
  },
});
