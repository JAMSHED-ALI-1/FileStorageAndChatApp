import { SafeAreaView, StyleSheet, Text, View } from "react-native";
import React from "react";
import CustomHeader from "../../constants/CustomHeader";

const TermsAndconditions = () => {
  return (
    <SafeAreaView>
      <View>
        <CustomHeader  heading={"Terms & conditions"}/>
      </View>
    </SafeAreaView>
  );
};

export default TermsAndconditions;

const styles = StyleSheet.create({});
