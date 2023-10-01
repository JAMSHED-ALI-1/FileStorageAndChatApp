import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Splash from "./../screens/auth/Splash";
import Splash2 from "./../screens/auth/Splash2";
import CreateAccount from "./../screens/auth/CreateAccount";
import Otp from "./../screens/auth/Otp";
import VerifyMobile from "../screens/auth/VerifyMobile"
import UpdateProfile from "./../screens/auth/UpdateProfile";
import MenuSetting from "./../screens/menu/MenuSetting";
import PublicProfile from "./../screens/menu/PublicProfile";
import Kyc from "./../screens/kyc 2/Kyc";
import Account_Detail from "./../screens/kyc 2/Account_Detail";
import Editprofile from "./../screens/kyc 2/Editprofile";
import Termsofservices from "./../screens/kyc 2/Termsofservices";
import AboutUs from "./../screens/kyc 2/AboutUs";
import PrivacyPolicy from "./../screens/kyc 2/PrivacyPolicy";
import TermConditions from "./../screens/kyc 2/TermConditions";
import Verification from "./../screens/kyc/Verification";
import Verify3 from "./../screens/kyc/Verify3";
import ImageUpload from "./../screens/kyc/ImageUpload";
import Successful from "./../screens/kyc/Successful";
import kycDone from "./../screens/kyc/KycDone";
import Verify2 from "./../screens/kyc/Verify2";
import LinkedDomainOptions from "./../screens/LinkedDomain/LinkedDomainOptions";
import BottomTabNavigation from "./../navigation/BottomTabNavigation";
import ChatWith_us from "../screens/Notifications/ChatWith_us";
import RecentActivity from "./../screens/Homescreen/RecentActivity";
import Document from "./../screens/Doumentaion/Document";
import Notification2 from "./../screens/Notifications/Notification2";
import Message from "./../screens/Notifications/Message";
import FeedBack from "./../screens/Notifications/FeedBack";
import Stroge from "./../screens/Notifications/Stroge";
import Description from "./../screens/Notifications/Description";
import Message2 from "./../screens/Notifications/Message2";
import Support from "./../screens/Notifications/Support";
import SmsPreview from "./../screens/Notifications/SmsPreview";
import Search from './../screens/Doumentaion/Search';
import BrokenLink from './../screens/LinkedDomain/BrokenLink';
import KYCFiles from "../screens/Doumentaion/KYCFiles";
// import BottomModalOne from "../screens/Uploads/BottomModalOne";

const Stack = createNativeStackNavigator();

const Navigators = ({ Screenames }) => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{headerShown: false}}
        initialRouteName={Screenames}>
        <Stack.Screen name="Splash" component={Splash} />
        <Stack.Screen name="Editprofile" component={Editprofile} />
        <Stack.Screen name="Verify2" component={Verify2} />
        <Stack.Screen name="BrokenLink" component={BrokenLink} />
        <Stack.Screen name="Search" component={Search} />
        <Stack.Screen name="Splash2" component={Splash2} />
        <Stack.Screen name="CreateAccount" component={CreateAccount} />
        <Stack.Screen name="Otp" component={Otp} />
        <Stack.Screen name="VerifyMobile" component={VerifyMobile} />
        <Stack.Screen name="ChatWith_us" component={ChatWith_us} />
        <Stack.Screen name="UpdateProfile" component={UpdateProfile} />
        <Stack.Screen name="MenuSetting" component={MenuSetting} />
        <Stack.Screen name="PublicProfile" component={PublicProfile} />
        <Stack.Screen name="Kyc" component={Kyc} />
        {/* <Stack.Screen name="BottomModalOne" component={BottomModalOne} /> */}
        <Stack.Screen name="Account_Detail" component={Account_Detail} />
        {/* <Stack.Screen name="Editprofile" component={Editprofile} /> */}
        <Stack.Screen name="Termsofservices" component={Termsofservices} />
        <Stack.Screen name="AboutUs" component={AboutUs} />
        <Stack.Screen name="PrivacyPolicy" component={PrivacyPolicy} />
        <Stack.Screen name="TermConditions" component={TermConditions} />
        <Stack.Screen name="Verification" component={Verification} />
        {/* <Stack.Screen name="Verify2" component={Verify2} /> */}
        <Stack.Screen name="Verify3" component={Verify3} />
        <Stack.Screen name="ImageUpload" component={ImageUpload} />
        <Stack.Screen name="Successful" component={Successful} />
        <Stack.Screen name="kycDone" component={kycDone} />
        <Stack.Screen name="LinkedDomain" component={LinkedDomainOptions} />
        <Stack.Screen
          name="BottomTabNavigation"
          component={BottomTabNavigation}
        />
        <Stack.Screen name="RecentActivity" component={RecentActivity} />
        <Stack.Screen name="Document" component={Document} />
        <Stack.Screen name="Notification2" component={Notification2} />
        <Stack.Screen name="Message" component={Message} />
        <Stack.Screen name="FeedBack" component={FeedBack} />
        <Stack.Screen name="Stroge" component={Stroge} />
        <Stack.Screen name="Description" component={Description} />
        <Stack.Screen name="Message2" component={Message2} />
        <Stack.Screen name="Support" component={Support} />
        <Stack.Screen name="SmsPreview" component={SmsPreview} />
        <Stack.Screen name="KYCFiles" component={KYCFiles} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};
export default Navigators;