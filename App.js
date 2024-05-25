import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import ForgotPassword from "./App/Screens/ForgotPassword";
import Colors from "./App/Utils/Colors";
import Start from "./App/Screens/CreateYourProfile";
import CreateUrProfile from "./App/Screens/CreateYourProfile/CreateUrProfile";
import AddBankDetail from "./App/Screens/CreateYourProfile/AddBankDetail";
import VerificationPending from "./App/Screens/CreateYourProfile/VerificationPending";
import VerificationSuccessful from "./App/Screens/CreateYourProfile/VerificationSuccessful";
import NotVerified from "./App/Screens/CreateYourProfile/NotVerified";

import Dashboard from "./App/Screens/Dashboard";
import PlayOnline from "./App/Screens/Dashboard/PlayOnline";
import MakeAClub from "./App/Screens/Dashboard/MakeAClub";
import Auction from "./App/Screens/Dashboard/PlayOnline/Auction";
import Simple from "./App/Screens/Dashboard/PlayOnline/Simple";
import StartBC from "./App/Screens/Dashboard/PlayOnline/Simple/StartBC";
import SpinWheel from "./App/Screens/Dashboard/PlayOnline/Simple/SpinWheel";
import UserEntries from "./App/Screens/Dashboard/PlayOnline/Simple/UserEntries";
import StartAuctionBC from "./App/Screens/Dashboard/PlayOnline/Auction/StartAuctionBC";
import WaitingPage from "./App/Screens/Dashboard/PlayOnline/Auction/WaitingPage";
import TimeRemaining from "./App/Screens/Dashboard/PlayOnline/Auction/TimeRemaining";
import Bidding from "./App/Screens/Dashboard/PlayOnline/Auction/Bidding";
import OtpVerification from "./App/Screens/ForgotPassword/OtpVerification";



import WalletMainVerified from "./App/Screens/WalletScreen/WalletMainVerified";
import NotVerifiedWallet from "./App/Screens/WalletScreen/NotVerifiedWallet";
import AddToWallet from "./App/Screens/WalletScreen/AddToWallet";
import BankDetails from "./App/Screens/WalletScreen/BankDetails";
import BankDetailsSecond from "./App/Screens/WalletScreen/BankDetailsSecond";
import BankPassword from "./App/Screens/WalletScreen/BankPassword";
import TransferSuccessPopup from "./App/Screens/WalletScreen/TransferSucessPopup";
import WalletMainBackground from "./App/Components/Wallet/WalletMainBackground";
import FirstPage from "./App/Screens/SignUp";
import NewPassword from "./App/Screens/ForgotPassword/NewPassword";
import NotMatchedPassword from "./App/Screens/ForgotPassword/NotMatchedPassword";
import CorrectPassword from "./App/Screens/ForgotPassword/CorrectPassword";
import SignUpPage from "./App/Screens/SignUp/SignUpPage";
import LoginPage from "./App/Screens/SignUp/LoginPage";
import Refer from "./App/Screens/Refer&Termsconditions/Refer";
import ReferModal from './App/Screens/Refer&Termsconditions/ReferModal'
import TermnConditions from './App/Screens/Refer&Termsconditions/TermnConditions'
import Notification from "./App/Screens/Notifications/Notification"
import Notification1 from "./App/Screens/Notifications/Notification1";
import Userdetail from "./App/Screens/UserProfile/Userdetail";
import ProfileDetail from "./App/Screens/UserProfile/ProfileDetail";
import EditProfile from "./App/Screens/UserProfile/EditProfile";
import Phoneotp from "./App/Screens/UserProfile/OTPVerification/Phoneotp";
import Phoneotptryagain from "./App/Screens/UserProfile/OTPVerification/Phoneotptryagain";
import OTPverify from "./App/Screens/UserProfile/OTPverify";
import EmailOTP from "./App/Screens/UserProfile/Emailverify/EmailOTP";
import Emailotpwrong from "./App/Screens/UserProfile/Emailverify/Emailotpwrong";
import Emaildone from "./App/Screens/UserProfile/Emailverify/Emaildone";
import Slide from "./App/Screens/UserProfile/Slidecomponent/Slide";
import Result from "./App/Screens/Dashboard/PlayOnline/Simple/Result";

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <StatusBar style="light" />
      <View style={styles.container}>
        <Stack.Navigator>
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
          <Stack.Screen
            name="Dashboard"
            component={Dashboard}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="Playonline"
            component={PlayOnline}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="Makeaclub"
            component={MakeAClub}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="Auction"
            component={Auction}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="Simple"
            component={Simple}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="Startbc"
            component={StartBC}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="SpinWheel"
            component={SpinWheel}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="UserEntries"
            component={UserEntries}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="Result"
            component={Result}
            options={{ headerShown: false }}
          />
           <Stack.Screen
            name="StartAuctionbc"
            component={StartAuctionBC}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="WaitingPage"
            component={WaitingPage}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="TimeRemaining"
            component={TimeRemaining}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="Bidding"
            component={Bidding}
            options={{ headerShown: false }}
          />


          {/* Esha - end */}

          {/* {Bhavesh} */}

          {/* <Stack.Screen
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
          <Stack.Screen
            name="ReferPage"
            component={Refer}
            options={{ headerShown: false }}
          />
           <Stack.Screen
            name="ReferModal"
            component={ReferModal}
            options={{ headerShown: false }}
          /> 
           <Stack.Screen
            name="TermnConditions"
            component={TermnConditions}
            options={{ headerShown: false }}
          /> 
           <Stack.Screen
            name="Notification"
            component={Notification}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="Notification1"
            component={Notification1}
            options={{ headerShown: false }}
          /> */}

          {/* {Bhavesh end} */}

          {/* Himanshu */}

          {/* <Stack.Screen
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
          /> */}

          {/* Himanshu - end */}

           {/* Sakshi */}

           <Stack.Screen
            name="WalletMainVerified"
            component={WalletMainVerified}
            options={{ headerShown: false }}
          />

          {/* <Stack.Screen 
                name="NotVerifiedWallet"
                component={NotVerifiedWallet}
                options={{ headerShown: false }}
                /> */}
          <Stack.Screen
            name="AddToWallet"
            component={AddToWallet}
            options={{ headerShown: false }}
          />

          <Stack.Screen
            name="BankDetails"
            component={BankDetails}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="BankDetailsSecond"
            component={BankDetailsSecond}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="BankPassword"
            component={BankPassword}
            options={{ headerShown: false }}
          />
            <Stack.Screen
            name="TransferSuccessPopup"
            component={TransferSuccessPopup}
            options={{ headerShown: false }}
          />
          {/* Sakshi - end */}

          {/* samraat start */}

          {/* samraat end */}
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
