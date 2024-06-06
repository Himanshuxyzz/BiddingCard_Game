import { View, Text, StyleSheet, TouchableOpacity, Image } from "react-native";
import React from "react";
import Header from "../../Components/Dashboard/Header";
import GradientBgFill from "../../Components/Gradient/GradientBgFill";
import DashboardBtn from "../../Components/Dashboard/DashboardBtn";
import MoneyIcon from "../../../assets/Images/Money_icon.png";
import ClubIcon from "../../../assets/Images/Club.png";

const Dashboard = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <GradientBgFill style={StyleSheet.absoluteFillObject} />

      <View style={styles.content}>
        {/* header */}
        <Header />
        {/* header end */}

        <View style={styles.buttonContainer}>
          <DashboardBtn
            btnText={"Play Online"}
            btnStrokeClr={"9B4EB5"}
            iconImg={MoneyIcon}
            navigateTo={"Playonline"}
          />
          <DashboardBtn
            btnText={"Make a Club"}
            btnStrokeClr={"9B4EB5"}
            iconImg={ClubIcon}
            navigateTo={"Makeaclub"}
          />
        </View>
      </View>
    </View>
  );
};

export default Dashboard;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    position: "relative",
  },
  content: {
    flex: 1,
    zIndex: 1,
    padding: 20,
    justifyContent: "center",
  },
  buttonContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    gap: 75,
  },
});
