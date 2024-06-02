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

const Stack = createNativeStackNavigator();

const AuthNavigator = () => {
  return (
    <Stack.Navigator
      initialRouteName="WelcomePage"
      screenOptions={{ headerShown: false }}
    >
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
