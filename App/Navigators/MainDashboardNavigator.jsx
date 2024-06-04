import {
  StyleSheet,
  Text,
  View,
  Dimensions,
  Image,
  TouchableOpacity,
} from "react-native";
import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Dashboard from "../Screens/Dashboard";
import PlayOnline from "../Screens/Dashboard/PlayOnline";
import MakeAClub from "../Screens/Dashboard/MakeAClub";
import Auction from "../Screens/Dashboard/MakeAClub/Auction";
import Simple from "../Screens/Dashboard/PlayOnline/Simple";
import StartBC from "../Screens/Dashboard/PlayOnline/Simple/StartBC";
import SpinWheel from "../Screens/Dashboard/PlayOnline/Simple/SpinWheel";
import UserEntries from "../Screens/Dashboard/PlayOnline/Simple/UserEntries";
import Result from "../Screens/Dashboard/PlayOnline/Simple/Result";
import StartAuctionBC from "../Screens/Dashboard/MakeAClub/Auction/StartAuctionBC";
import WaitingPage from "../Screens/Dashboard/MakeAClub/Auction/WaitingPage";
import TimeRemaining from "../Screens/Dashboard/MakeAClub/Auction/TimeRemaining";
import Bidding from "../Screens/Dashboard/MakeAClub/Auction/Bidding";
import WalletMainVerified from "../Screens/WalletScreen/WalletMainVerified";
import NotVerifiedWallet from "../Screens/WalletScreen/NotVerifiedWallet";
import AddToWallet from "../Screens/WalletScreen/AddToWallet";
import BankDetails from "../Screens/WalletScreen/BankDetails";
import BankDetailsSecond from "../Screens/WalletScreen/BankDetailsSecond";
import BankPassword from "../Screens/WalletScreen/BankPassword";
import InsufficientBalance from "../Screens/WalletScreen/InsufficientBalance";
import Withdraw from "../Screens/WalletScreen/Withdraw";
import WithdrawAccount from "../Screens/WalletScreen/WithdrawAccount";
import WithdrawDetails from "../Screens/WalletScreen/WithdrawDetails";
import WithdrawPassword from "../Screens/WalletScreen/WithdrawPassword";
import CustomSimple from "../Screens/Dashboard/MakeAClub/Simple";
import CustomStartBc from "../Screens/Dashboard/MakeAClub/Simple/CustomStartBc";
import CustomSpinWheel from "../Screens/Dashboard/MakeAClub/Simple/CustomSpinWheel";
import AuctionResult from "../Screens/Dashboard/MakeAClub/Auction/AuctionResult";
import AuctionEntries from "../Screens/Dashboard/MakeAClub/Auction/AuctionEntries";
import WinnerPage from "../Screens/Dashboard/MakeAClub/Auction/WinnerPage";
import CustomResult from "../Screens/Dashboard/MakeAClub/Simple/CustomResult";
import CustomUserEntries from "../Screens/Dashboard/MakeAClub/Simple/CustomUserEntries";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { useNavigation, useNavigationState } from "@react-navigation/native";

const Stack = createNativeStackNavigator();
const Drawer = createDrawerNavigator();
import {
  DrawerContentScrollView,
  DrawerItemList,
  DrawerItem,
} from "@react-navigation/drawer";
import WhiteText from "../Components/WhiteText/WhiteText";

const DashboardDrawerContent = () => {
  return (
    <Stack.Navigator
      screenOptions={{ headerShown: false }}
      initialRouteName="Home"
    >
      <Stack.Screen
        name="Home"
        component={Dashboard}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="Playonline"
        component={PlayOnline}
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
        name="Makeaclub"
        component={MakeAClub}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="CustomSimple"
        component={CustomSimple}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="CustomStartBc"
        component={CustomStartBc}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="CustomSpinWheel"
        component={CustomSpinWheel}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="CustomEntries"
        component={CustomUserEntries}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="CustomResult"
        component={CustomResult}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="Auction"
        component={Auction}
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
      <Stack.Screen
        name="AuctionEntries"
        component={AuctionEntries}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="AuctionResult"
        component={AuctionResult}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="WinnerPage"
        component={WinnerPage}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="WalletMainVerified"
        component={WalletMainVerified}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="NotVerifiedWallet"
        component={NotVerifiedWallet}
        options={{ headerShown: false }}
      />
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
        name="InsufficientBalance"
        component={InsufficientBalance}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="Withdraw"
        component={Withdraw}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="WithdrawAccount"
        component={WithdrawAccount}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="WithdrawDetails"
        component={WithdrawDetails}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="WithdrawPassword"
        component={WithdrawPassword}
        options={{ headerShown: false }}
      />
    </Stack.Navigator>
  );
};

const CustomDrawerContent = (props) => {
  return (
    <DrawerContentScrollView
      {...props}
      contentContainerStyle={{ flex: 1, width: "100%" }}
    >
      <View
        style={{
          padding: 10,
          marginHorizontal: "auto",
          flexDirection: "row",
          alignItems: "center",
          gap: 10,
          idth: "100%",
          justifyContent: "space-between",
        }}
      >
        <Image
          source={require("../../assets/Images/drawer_dummy.png")}
          style={{
            width: 60,
            height: 60,
            borderRadius: 9999,
            backgroundColor: "grey",
          }}
        />
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "center",
            flex: 1,
          }}
        >
          <View style={{ flex: 1, gap: 5 }}>
            <WhiteText style={{ fontSize: 25, fontWeight: "600" }}>
              User123
            </WhiteText>
            <View
              style={{
                flexDirection: "row",
                justifyContent: "space-between",
                alignItems: "center",
              }}
            >
              <WhiteText style={{ fontSize: 10 }}>ID :154123679545</WhiteText>
              <TouchableOpacity>
                <WhiteText style={{ fontSize: 10 }}>Edit</WhiteText>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </View>
      <DrawerItemList {...props} />
    </DrawerContentScrollView>
  );
};

const MainDashboardNavigator = () => {
  const screenWidth = Dimensions.get("window").width; // Get the full screen width
  const navigation = useNavigation(); // Import useNavigation from '@react-navigation/native'
  // Function to navigate to the Home screen
  const navigateToHome = () => {
    navigation.navigate("Dashboard", {
      screen: "Home",
    });
  };

  return (
    <Drawer.Navigator
      screenOptions={{
        headerShown: false,
        drawerStyle: {
          width: "85%",
          backgroundColor: "#2A2E2E",
        },
      }}
      drawerContent={(props) => <CustomDrawerContent {...props} />}
    >
      <Drawer.Screen
        name="Dashboard"
        component={DashboardDrawerContent}
        listeners={{
          drawerItemPress: (e) => {
            e.preventDefault(); // Prevent default action
            navigateToHome(); // Navigate to Home using the custom function
          },
        }}
      />
      <Drawer.Screen name="Wallet" component={WalletMainVerified} />
    </Drawer.Navigator>
  );
};

export default MainDashboardNavigator;

const styles = StyleSheet.create({});
