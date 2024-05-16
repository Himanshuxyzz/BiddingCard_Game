import {
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import React from "react";
import Header from "../../../../Components/DashboardHeader/Header";
import Colors from "../../../../Utils/Colors";
import { Feather } from "@expo/vector-icons";
import { FontAwesome6 } from "@expo/vector-icons";
import GradientVarientOneBtn from "../../../../Components/Gradient/GradientVariantOneBtn";
import { useState } from "react";

const StartBC = ({ route, navigation }) => {
  const { bcAmount, totalAmount } = route.params;
  console.log(bcAmount);
  const [password, setPassword] = useState("test@123");
  const [isPasswordValid, setIsPasswordValid] = useState(true); // Initially assuming password is valid

  const handlePassword = () => {
    const hasSpecialCharacter = /[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]+/.test(
      password
    );

    if (password.length >= 8 && hasSpecialCharacter) {
      setIsPasswordValid(true);
      // Proceed with your logic like navigating to the next screen
      navigation.navigate("SpinWheel", { totalAmount: totalAmount });
    } else {
      setIsPasswordValid(false);
    }
  };

  return (
    <View style={styles.container}>
      <Header />
      <Text
        style={{
          color: "#fff",
          marginTop: "10%",
          fontSize: 33,
          fontWeight: "bold",
          textDecorationLine: "underline",
        }}
      >
        Start Your BC
      </Text>
      <Text style={{ color: "#fff", fontSize: 18, fontWeight: 600 }}>
        Money is added from the wallet
      </Text>
      <View
        style={{
          width: 330,
          height: 440,
          marginTop: "10%",
          backgroundColor: "rgba(228, 148, 235, 1)",
          borderRadius: 12,
          alignItems: "center",
        }}
      >
        <Text
          style={{
            textAlign: "center",
            fontSize: 25,
            fontWeight: "bold",
            color: "#fff",
            marginTop: "8%",
          }}
        >
          Select Amount
        </Text>
        <TextInput
          value={bcAmount}
          //   onChangeText={(text) => setEmailMobile(text)}
          //   onChangeText={setEmailMobile}
          style={styles.input}
          //   placeholder="Email id/ Mobile number"
          keyboardType="default"
          placeholderTextColor={Colors.INPUT_PLACEHOLDER}
          autoCapitalize={"none"}
        />
        <Feather
          style={{ top: 85, right: 40, position: "absolute" }}
          name="lock"
          size={28}
          color="black"
        />
        <View
          style={{ alignItems: "start", width: "100%", paddingHorizontal: 30 }}
        >
          <Text
            style={{
              color: "#fff",
              fontSize: 15,
              fontWeight: "bold",
              textAlign: "left",
            }}
          >
            Wallet balance -{" "}
            <Text style={{ color: "rgba(176, 255, 164, 1)" }}>₹ 6000</Text>
          </Text>
        </View>
        <TextInput
          value={password}
          onChangeText={(text) => setPassword(text)}
          style={styles.input}
          placeholder="Password"
          keyboardType="default"
          placeholderTextColor={Colors.INPUT_PLACEHOLDER}
          autoCapitalize="none"
          secureTextEntry // To hide the password
        />
        <FontAwesome6
          style={{ position: "absolute", top: 190, right: 40 }}
          name="eye-slash"
          size={28}
          color="rgba(177, 177, 177, 1)"
        />
        {!isPasswordValid && (
          <Text
            style={{
              color: "red",
              margin: 5,
              textAlign: "center",
              fontSize: 15,
              paddingHorizontal: 20,
            }}
          >
            Password must have atleast 8 characters & one special character.
          </Text>
        )}
        <TouchableOpacity
          style={{ alignItems: "start", width: "100%", paddingHorizontal: 30 }}
        >
          <Text
            style={{
              fontSize: 18,
              fontWeight: "600",
              color: "rgba(6, 75, 139, 1)",
              textDecorationLine: "underline",
            }}
          >
            Forgot Password?
          </Text>
        </TouchableOpacity>
        <GradientVarientOneBtn
          onPress={handlePassword}
          btnText={"Submit"}
          //   onPress={() => navigation.navigate("Addbankdetail")}
          style={styles.btn}
        />
      </View>
    </View>
  );
};

export default StartBC;

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#2A2E2E",
    flex: 1,
    alignItems: "center",
    flexDirection: "column",
    gap: 20,
    padding: 20,
  },
  input: {
    color: Colors.BLACK,
    minWidth: "85%",
    maxWidth: "90%",
    height: 57,
    marginVertical: 15,
    padding: 20,
    backgroundColor: "#fff",
    fontSize: 23,
    borderRadius: 10,
    position: "relative",
    fontWeight: 800,
  },
  btn: {
    minWidth: "60%",
    borderColor: "#DDBBE6",
    borderRadius: 12,
    overflow: "hidden",
    borderColor: "#fff",
    borderWidth: 1,
    marginTop: "10%",
  },
});
