import {
  Dimensions,
  Image,
  SafeAreaView,
  StyleSheet,
  Text,
  TouchableOpacity,
  BackHandler,
  View,
  Alert,
  Animated
} from "react-native";
import React, { useCallback, useEffect } from "react";
import { COLORS, SIZES } from "../../constants/theme";
import { useNavigation } from "@react-navigation/native";
import CustomButton from "../../constants/CustomButton";
import CustomBtn from "../../constants/CustomBtn";
import InActiveBtn from "../../constants/InActiveBtn";
const { height, width } = Dimensions.get("window");

const Splash2 = (props) => {
  const navigation = useNavigation();

  const backButtonHandler = useCallback((props) => {
    if (!props?.navigation?.isFocused()) {
      props?.navigation?.goBack();
      return true
    }
    Alert.alert(
      'Exit App',
      'Are you sure you want to Exit the application?',
      [{
        text: 'No',
        onPress: () => console.log('Cancel Pressed'),
        style: 'cancel',
      },
      {
        text: 'Yes',
        onPress: () => BackHandler.exitApp(),
      },
      ], {
      cancelable: false,
    },
    );
    return true;
  }, [props?.navigation])

  useEffect(() => {

    const backHandler = BackHandler.addEventListener('hardwareBackPress', () => backButtonHandler(props));

    return () => backHandler.remove();

  }, [props.navigation]);

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: COLORS.background }}>
      <View style={styles.screen}>
        <Image
          source={require("../../assets/images/robot.png")}
          style={styles.robot}
        />
        <Text style={styles.subTitle}>Use our Real-Time</Text>
        <Text style={styles.heading}>Lorem Ipsum</Text>
        <Text style={styles.subTitle2}>
          In publishing to demonstrate the visual form of a document or a
          typeface without relying on meaningful content.
        </Text>

        <View style={styles.button}>
          <InActiveBtn
            title="Next"
            color={COLORS.black}
            onPress={() => props.navigation.navigate("CreateAccount")}
          />
        </View>
      </View>
    </SafeAreaView>
  );
};

export default Splash2;

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: COLORS.background,
    paddingHorizontal: 16,
  },
  robot: {
    marginTop: SIZES.my * 4,
    marginBottom: SIZES.my * 3,
    alignSelf: "center",
    width: "60%",
    height: "50%",
    resizeMode: "contain",
  },
  subTitle: {
    color: COLORS.secondary,
    fontWeight: "400",
    lineHeight: 20,
    fontSize: SIZES.h2,
    textAlign: "center",
    fontFamily: "Gilroy-SemiBold",
  },
  subTitle2: {
    color: COLORS.secondary,
    fontWeight: "400",
    lineHeight: 19.5,
    fontSize: SIZES.h3,
    textAlign: "center",
    fontFamily: "Gilroy-Regular",
  },
  heading: {
    color: COLORS.primary,
    fontSize: SIZES.heading * 3.4,
    textAlign: "center",
    marginVertical: 6,
    fontFamily: "Gilroy-Bold",
    fontWeight: "700",
  },
  button: {
    marginTop: 30,
  },
});
