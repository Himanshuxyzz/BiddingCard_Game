import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Dashboard from "../Screens/Dashboard";
import PlayOnline from "../Screens/Dashboard/PlayOnline";
import MakeAClub from "../Screens/Dashboard/MakeAClub";
import Auction from "../Screens/Dashboard/PlayOnline/Auction";
import Simple from "../Screens/Dashboard/PlayOnline/Simple";
import StartBC from "../Screens/Dashboard/PlayOnline/Simple/StartBC";
import SpinWheel from "../Screens/Dashboard/PlayOnline/Simple/SpinWheel";
import UserEntries from "../Screens/Dashboard/PlayOnline/Simple/UserEntries";
import Result from "../Screens/Dashboard/PlayOnline/Simple/Result";

const Stack = createNativeStackNavigator();

const MainDashboardNavigator = () => {
  return (
    <Stack.Navigator
      initialRouteName="Dashboard"
      screenOptions={{ headerShown: false }}
    >
      {/* esha */}
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
      {/* esha end */}

      {/* himanshu */}
      <Stack.Screen
        name="Simple"
        component={Simple}
        options={{ headerShown: false }}
      />

      {/* esha */}

      <Stack.Screen
        name="Startbc"
        component={StartBC}
        options={{ headerShown: false }}
      />

      {/* esha end*/}

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
      {/* himanshu end */}

      {/* esha */}

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

      {/* esha end */}
    </Stack.Navigator>
  );
};

export default MainDashboardNavigator;

const styles = StyleSheet.create({});
