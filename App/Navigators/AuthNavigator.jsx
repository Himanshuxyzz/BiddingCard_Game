import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import FirstPage from "../Screens/SignUp";
import SignUpPage from "../Screens/SignUp/SignUpPage";
import LoginPage from "../Screens/SignUp/LoginPage";
import ForgotPassword from "../Screens/ForgotPassword";
import OtpVerification from "../Screens/ForgotPassword/OtpVerification";
import NewPassword from "../Screens/ForgotPassword/NewPassword";
import NotMatchedPassword from "../Screens/ForgotPassword/NotMatchedPassword";
import CorrectPassword from "../Screens/ForgotPassword/CorrectPassword";


import Mainpage from "../Screens/UserProfile/Mainpage";
import Parent from "../Screens/UserProfile/Parent";
import ProfileDetail from "../Screens/UserProfile/ProfileDetail";
import EditProfile from "../Screens/UserProfile/EditProfile";
import Customedrawer from "../Screens/UserProfile/Drawer/Customedrawer";
import GenerateQuery from "../Screens/UserProfile/Support/GenerateQuery";
import CancelQuery from "../Screens/UserProfile/Support/CancelQuery";
import Backtdash from "../Screens/UserProfile/Support/Backtdash";
import Passdata from "../Screens/UserProfile/passdata/Passdata";

const Stack = createNativeStackNavigator();



const AuthNavigator = () => {
  return (
    <Stack.Navigator
      initialRouteName="Parent"
      screenOptions={{ headerShown: false }}
    >
    {/* samraaat  start */}
    {/* <Stack.Screen
      name="padddata"
      component={Passdata}
      options={{ headerShown: false }}
    /> */}
    <Stack.Screen
        name="Parent"
        component={Parent}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="EditProfile"
        component={EditProfile}
        options={{ headerShown: false }}
      />
       <Stack.Screen
        name="profile Detail"
        component={ProfileDetail}
        options={{ headerShown: false }}
      />
        <Stack.Screen
        name="Mainpage"
        component={Mainpage}
        options={{ headerShown: false }}
      />
        <Stack.Screen
            name="Customedrawer"
            component={Customedrawer}
          />
          <Stack.Screen
            name="GenerateQuery"
            component={GenerateQuery}
          />
            <Stack.Screen
            name="CancelQuery"
            component={CancelQuery}
            options={{headerShown:false}}
          />

           <Stack.Screen
            name="Backtdash"
            component={Backtdash}
            options={{headerShown:false}}
          />



          {/* samraat end */}
     

  
      {/* Bhavesh */}
      <Stack.Screen
        name="WelcomePage"
        component={FirstPage}
        options={{ headerShown: false }}
      />

      <Stack.Screen
        name="SignUpPage"
        component={SignUpPage}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="LoginPage"
        component={LoginPage}
        options={{ headerShown: false }}
      />

      {/* Bhavesh end */}

      {/* Himanshu */}

      <Stack.Screen
        name="forgotPassword"
        component={ForgotPassword}
        options={{ headerShown: false }}
      />

      <Stack.Screen
        name="otpVerification"
        component={OtpVerification}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="newPassword"
        component={NewPassword}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="inCorrectPassword"
        component={NotMatchedPassword}
        options={{ headerShown: false }}
      />

      <Stack.Screen
        name="correctPassword"
        component={CorrectPassword}
        options={{ headerShown: false }}
      />
      {/* Himanshu */}
    </Stack.Navigator>
  );
};

export default AuthNavigator;

const styles = StyleSheet.create({});
