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
import { FontAwesome } from "@expo/vector-icons";
import EditProfile from "../Screens/UserProfile/EditProfile";
import { Ionicons } from "@expo/vector-icons";
import { MaterialIcons } from "@expo/vector-icons";
import { FontAwesome6 } from "@expo/vector-icons";
import { AntDesign } from "@expo/vector-icons";
import Bankaccount from "../Screens/UserProfile/Bankaccount";
import Games from "../Screens/MyGames/Games";
import Refer from "../Screens/Refer&Termsconditions/Refer";
import Quicktask from "../Screens/UserProfile/Support/Quicktask";
import Logout from "../Screens/UserProfile/Logout";
import ProfileDetail from "../Screens/UserProfile/ProfileDetail";
import Storypost from "../Screens/UserProfile/Storypost";

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
      {/* {samraat story post section start} */}
      <Stack.Screen
        name="Storypost"
        component={Storypost}
        options={{ headerShown: false }}
      />
       {/* {samraat story post section end} */}
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
      <Stack.Screen
        name="EditProfile"
        component={EditProfile}
        options={{ headerShown: false }}
      />
        <Stack.Screen
        name="profile"
        component={ProfileDetail}
        options={{ headerShown: false }}
      />
    </Stack.Navigator>
  );
};

const iconContainerStyle = {
  width: 37, // Adjust this width as needed
  marginRight: 1, // Reduce the space between icon and text
};

const getIcon = (routeName) => {
  const iconProps = { size: 30, color: "white", style: iconContainerStyle };
  switch (routeName) {
    case "Dashboard":
      return <FontAwesome name="home" {...iconProps} />;
    case "Wallet":
      return <Ionicons name="wallet" {...iconProps} />;
    case "User Profile":
      return <FontAwesome name="user-circle-o" {...iconProps} />;
    case "Bank Account":
      return <FontAwesome name="bank" {...iconProps} />;
    case "My Games":
      return <FontAwesome name="trophy" {...iconProps} />;
    case "Refer & Earn":
      return <FontAwesome6 name="money-bill-transfer" {...iconProps} />;
    case "Support":
      return <MaterialIcons name="support-agent" {...iconProps} />;
    case "Log Out":
      return <MaterialIcons name="logout" {...iconProps} />;
    default:
      return <Ionicons name="md-alert" {...iconProps} />;
  }
};

const CustomDrawerContent = (props) => {
  const { state, navigation } = props;

  const navigateToScreen = (routeName) => {
    if (routeName === "Dashboard") {
      console.log("Navigating to Home");
      navigation.navigate("Home");
    } else {
      console.log(`Navigating to: ${routeName}`);
      navigation.navigate(routeName);
    }
  };

  return (
    <DrawerContentScrollView
      {...props}
      contentContainerStyle={{ flex: 1, width: "100%" }}
    >
      {/* Profile component */}
      <View
        style={{
          padding: 10,
          marginHorizontal: "auto",
          flexDirection: "row",
          alignItems: "center",
          gap: 20,
          width: "100%",
          justifyContent: "space-between",
          marginVertical: 20,
        }}
      >
        <Image
          source={require("../../assets/Images/drawer_dummy.png")}
          style={{
            width: 65,
            height: 65,
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
          <View style={{ flex: 1 }}>
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
              <WhiteText style={{ fontSize: 10, fontWeight: "400" }}>
                ID :154123679545
              </WhiteText>
              <TouchableOpacity
                style={{
                  paddingHorizontal: 12,
                  paddingVertical: 7,
                  borderRadius: 25,
                  backgroundColor: "#BA61CA",
                  flexDirection: "row",
                  alignItems: "center",
                  gap: 10,
                }}
                onPress={() => navigation.navigate("EditProfile")}
              >
                <AntDesign name="edit" size={12} color="white" />
                <WhiteText style={{ fontSize: 12, fontWeight: "bold" }}>
                  Edit
                </WhiteText>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </View>
      {/* Profile component end */}

      {/* Drawer items */}
      {state.routes.map((route, index) => (
        <DrawerItem
          key={route.key}
          label={route.name}
          focused={state.index === index}
          onPress={() => navigateToScreen(route.name)}
          style={{
            borderRadius: state.index === index ? 12 : 0,
            backgroundColor: state.index === index ? "#BA61CA" : "transparent",
            justifyContent: "center",
            marginVertical: 12,
            borderWidth: state.index === index ? 1 : 0,
            borderColor: state.index === index ? "#662D91" : "transparent",
          }}
          labelStyle={{
            color: "white",
            marginLeft: 0, // Adjusted to 0 since icon width is fixed
            textAlign: "left",
          }}
          icon={() => getIcon(route.name)}
        />
      ))}
      {/* Drawer items end */}
    </DrawerContentScrollView>
  );
};

const MainDashboardNavigator = () => {
  const screenWidth = Dimensions.get("window").width;
  const navigation = useNavigation();

  return (
    <Drawer.Navigator
      screenOptions={{
        headerShown: false,
        drawerStyle: {
          width: "85%",
          backgroundColor: "#2A2E2E",
        },
        drawerActiveTintColor: "white",
        drawerInactiveTintColor: "white",
      }}
      drawerContent={(props) => <CustomDrawerContent {...props} />}
    >
      <Drawer.Screen
        name="Dashboard"
        component={DashboardDrawerContent}
        listeners={{
          drawerItemPress: (e) => {
            e.preventDefault();
            console.log("Navigating to Home");
            navigation.navigate("Home");
          },
        }}
      />
      <Drawer.Screen name="User Profile" component={ProfileDetail} />
      <Drawer.Screen name="Wallet" component={WalletMainVerified} />
      <Drawer.Screen name="Bank Account" component={Bankaccount} />
      <Drawer.Screen name="My Games" component={Games} />
      <Drawer.Screen name="Refer & Earn" component={Refer} />
      <Drawer.Screen name="Support" component={Quicktask} />
      <Drawer.Screen name="Log Out" component={Logout} />
    </Drawer.Navigator>
  );
};

export default MainDashboardNavigator;

const styles = StyleSheet.create({});
