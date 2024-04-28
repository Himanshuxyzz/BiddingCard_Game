import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import ForgotPassword from "./App/Screens/ForgotPassword";
import Colors from "./App/Utils/Colors";
import Start from "./App/Screens/CreateYourProfile";
import CreateUrProfile from "./App/Screens/CreateYourProfile/CreateUrProfile";
import AddBankDetail from "./App/Screens/CreateYourProfile/AddBankDetail";

import OtpVerification from "./App/Screens/ForgotPassword/OtpVerification";

import WalletMain from "./App/Screens/WalletScreen";
import WalletMainVerified from "./App/Screens/WalletScreen/WalletMainVerified";
import FirstPage from "./App/Screens/SignUp";
import NewPassword from "./App/Screens/ForgotPassword/NewPassword";
import NotMatchedPassword from "./App/Screens/ForgotPassword/NotMatchedPassword";
import CorrectPassword from "./App/Screens/ForgotPassword/CorrectPassword";

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <StatusBar style="light" />
      <View style={styles.container}>
        <Stack.Navigator>
          {/* <Stack.Screen
            name="Start"
            component={Start}
            options={{ headerShown: false }}
          /> */}
          {/* <Stack.Screen
            name="Createurprofile"
            component={CreateUrProfile}
            options={{ headerShown: false }}
          /> */}
          {/* <Stack.Screen
            name="Addbankdetail"
            component={AddBankDetail}
            options={{ headerShown: false }}
          /> */}
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

          <Stack.Screen
            name="WalletMain"
            component={WalletMain}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="WalletMainVerified"
            component={WalletMainVerified}
            options={{ headerShown: false }}
          />
        </Stack.Navigator>
      </View>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.PRIMARY,
    paddingTop: "12%",
  },
});
