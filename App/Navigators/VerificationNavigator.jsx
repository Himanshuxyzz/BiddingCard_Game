import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Start from "../Screens/CreateYourProfile";
import CreateUrProfile from "../Screens/CreateYourProfile/CreateUrProfile";
import AddBankDetail from "../Screens/CreateYourProfile/AddBankDetail";
import VerificationPending from "../Screens/CreateYourProfile/VerificationPending";
import VerificationSuccessful from "../Screens/CreateYourProfile/VerificationSuccessful";
import NotVerified from "../Screens/CreateYourProfile/NotVerified";

const Stack = createNativeStackNavigator();

const VerificationNavigator = () => {
  return (
    <Stack.Navigator
      initialRouteName="Start"
      screenOptions={{ headerShown: false }}
    >
      {/* Esha */}
      <Stack.Screen
        name="Start"
        component={Start}
        options={{ headerShown: false }}
      />

      <Stack.Screen
        name="Createurprofile"
        component={CreateUrProfile}
        options={{ headerShown: false }}
      />

      <Stack.Screen
        name="Addbankdetail"
        component={AddBankDetail}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="Verificationpending"
        component={VerificationPending}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="Verificationsuccessful"
        component={VerificationSuccessful}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="Notverified"
        component={NotVerified}
        options={{ headerShown: false }}
      />

      {/* Esha end */}
    </Stack.Navigator>
  );
};

export default VerificationNavigator;

const styles = StyleSheet.create({});
