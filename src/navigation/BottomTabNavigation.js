import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import React, { useState } from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Home from '../screens/Homescreen/Home';
import Link from '../screens/Homescreen/Link';
import Upload from '../screens/Uploads/Upload';
import MenuSetting from '../screens/menu/MenuSetting';
// import BottomModalTwo from '../screens/Uploads/BottomModalTwo';
import { COLORS, ICONS } from '../constants/theme';
import Document from '../screens/Doumentaion/Document';

import LinkedDomainOptions from '../screens/LinkedDomain/LinkedDomainOptions';
const BottomTabs = createBottomTabNavigator();

const BottomTabNavigation = () => {
  const [isUploadModalVisible, setUploadModalVisible] = useState(false);

  return (
    <>
      <BottomTabs.Navigator
        screenOptions={{
          headerShown: false,
          tabBarInactiveTintColor: COLORS.faint,
          tabBarActiveTintColor: COLORS.black,
          tabBarLabelStyle: {
            fontWeight: "500",
          },
          tabBarStyle: {
            borderTopColor: COLORS.boderColor,
            borderWidth: 1,
            // backgroundColor: 'red',
            height: 60

          },
        }}
      >
        <BottomTabs.Screen
          name="Home"
          component={Home}
          options={{
            tabBarIcon: (tabInfo) => {
              return tabInfo.focused ? (
                <Image
                  style={{ width: 25, height: 25 }}
                  source={ICONS.homeactive}
                  resizeMode="contain"
                />
              ) : (
                <Image
                  style={{
                    width: 25,
                    height: 25,
                  }}
                  resizeMode="contain"
                  source={ICONS.home}
                />
              );
            },
          }}
        />
        <BottomTabs.Screen
          name="Link"
          component={LinkedDomainOptions}
          options={{
            tabBarIcon: (tabInfo) => {
              return (
                <Image
                  style={{
                    width: 25,
                    height: 25,
                    tintColor: tabInfo.focused ? COLORS.black : COLORS.faint,
                  }}
                  resizeMode="contain"
                  source={ICONS.link}
                />
              );
            },
          }}
        />
        <BottomTabs.Screen
          name="Document"
          component={Document}
          options={{
            tabBarIcon: (tabInfo) => {
              return tabInfo.focused ? (
                <Image
                  style={{ width: 25, height: 25 }}
                  source={ICONS.docactive}
                  resizeMode="contain"
                />
              ) : (
                <Image
                  style={{
                    width: 25,
                    height: 25,
                  }}
                  resizeMode="contain"
                  source={ICONS.doc}
                />
              );
            },
          }}
        />
        <BottomTabs.Screen
          name="Upload"
          component={Upload}
          options={{
            tabBarIcon: (tabInfo) => {
              return (
                <TouchableOpacity onPress={() => setUploadModalVisible(true)}>
                  <Image
                    style={{
                      width: 25,
                      height: 25,
                      tintColor: tabInfo.focused ? COLORS.black : COLORS.faint,
                    }}
                    resizeMode="contain"
                    source={ICONS.upload}
                  />
                </TouchableOpacity>
              );
            },
          }}
        />
        <BottomTabs.Screen
          name="Menu"
          component={MenuSetting}
          options={{
            tabBarIcon: (tabInfo) => {
              return (
                <Image
                  style={{
                    width: 25,
                    height: 25,
                    tintColor: tabInfo.focused ? COLORS.black : COLORS.faint,
                  }}
                  resizeMode="contain"
                  source={ICONS.menu}
                />
              );
            },
          }}
        />
      </BottomTabs.Navigator>
      <Upload
        isVisible={isUploadModalVisible}
        onClose={() => setUploadModalVisible(false)}
      />
    </>
  );
};

export default BottomTabNavigation;
