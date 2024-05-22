import {
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
  Pressable,
  Button,
} from "react-native";
import React from "react";
import WhiteText from "../../Components/WhiteText/WhiteText";
import { AntDesign } from "@expo/vector-icons";
import { Ionicons } from "@expo/vector-icons";
import { BlurView } from 'expo-blur';
import { LinearGradient } from 'expo-linear-gradient';
import GradientVarientOneBtn from "../../Components/Gradient/GradientVariantOneBtn";

// import {NavigationContainer} from '@react-navigation/native';
// import { createStackNavigator } from '@react-navigation/stack';

// const Stack = createStackNavigator();
const WalletMainVerified = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text
          style={{
            fontSize: 25,
            color: "white",
            top: -100,
            right: -150,
            fontWeight: "bold",
          }} >
          Wallet
        </Text>
        <TouchableOpacity style={{ top: -90, right: 210 }}>
          <AntDesign name="back" size={24} color="white" />
        </TouchableOpacity>
      </View>

      <View style={styles.h2}></View>
      <View style={styles.h3}>
        <WhiteText
          style={{ fontWeight: "bold", top: 80, right: -50, fontSize: 20 }}
        >
          {" "}
          Current Balance{" "}
        </WhiteText>
        <Ionicons
          name="wallet-outline"
          size={28}
          color="#FFC5C5"
          style={{ top: 80, right: 150, borderRadius: 20, }}
        />
        <Text
          style={{
            color: "#ECB425",
            fontWeight: "bold",
            top: 80,
            right: -110,
            fontSize: 18,
          }}
        >
          {" "}
          ₹ 6000
        </Text>
      </View>
<BlurView intensity={10} tint="light" style={styles.subcontainer}>
  <View>
<GradientVarientOneBtn btnText={"Add To Wallet"} style={styles.btn1} onPress={() => navigation.navigate("AddToWallet")} />
<GradientVarientOneBtn btnText={"Withdrawal"} style={styles.btn1} onPress={() => { /* Handle withdrawal */ }}  />
<View style={styles.bottom}>
<AntDesign name="Safety" size={54} color="green" style={styles.icon} />
<WhiteText style={{fontSize: 24, fontWeight: "bold"}}> Safe & Secure Payments</WhiteText>
<WhiteText style={{fontSize: 15}}>  You can withdraw only 50% from your BC Money Wallet.</WhiteText>
</View>
</View>
</BlurView>

    </View>
  );
};

export default WalletMainVerified;

const styles = StyleSheet.create({
  container: {
    width: "100%",
    height: "100%",
    backgroundColor: "#2A2E2E",
    alignItems: "center",
    justifyContent: "center",
    flex: 1,
  },
  header: {
    flexDirection: "row",
  },
  h2: {
    position: "absolute",
    backgroundColor: "#8E8B8D",
    width: 800,
    height: 60,
    borderRadius: 5,
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    top: 70,
  },
  h3: {
    flexDirection: "row",
    textAlignVertical: "center",
    position: "relative",
    top: -150,
    left: -70,
  },
  subcontainer: {
            width: "100%",
            marginTop: -48,
            height:"70%",
            padding: 10,
           borderRadius: 4,
            backgroundColor:"#2A2E2E"
           },
           btn:{
            width:"20%",
            height:"20%",
            backgroundColor:"#8E8B8D",

           },
           btn1:{
          width: "60%",
          marginBottom : -30,
          marginTop : 120,
          marginLeft : 80
          },
          bottom:{
            position: "relative",
            top: 200,
            display:"flex",
            flexDirection :"row",
            flexWrap :"wrap",
            justifyContent :"center",
            alignItems: "center",
            gap: 10,
            

          }
  
});
