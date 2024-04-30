import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import GradientVarientTwoBtn from '../../Components/GradientBtn/GradientVariantTwoBtn';
import Colors from '../../Utils/Colors';

const VerificationSuccessful = () => {
  return (
    <View style={styles.container}>
      <Text
        style={{
          color: "rgba(46, 216, 19, 1)",
          fontSize: 30,
          fontWeight: "bold",
          textAlign: "center",
          marginTop: "10%",
          textDecorationLine: "underline",
        }}
      >
        Congratulations!
      </Text>
      <View style={{ marginTop: "15%", marginBottom: "10%" }}>
        <Image
          style={{ width: 300, height: 300 }}
          source={require("../../../assets/Images/verified.png")}
        />
      </View>
      <View
        style={{
          width: "90%",
          paddingVertical: 50,
          paddingHorizontal: 20,
        }}
      >
        <Text
          style={{
            color: "#fff",
            fontSize: 30,
            textAlign: "center",
            fontWeight: 500,
          }}
        >
          Your profile is verified, Lets play!
        </Text>
      </View>
      <TouchableOpacity style={[styles.btn, styles.btnTwoVarientStyle]}>
        <Text
          style={{
            textAlign: "center",
            fontSize: 20,
            color: Colors.WHITE,
            fontWeight: "600",
          }}
        >
          Verify
        </Text>
      </TouchableOpacity>
    </View>
  );
}

export default VerificationSuccessful

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#2A2E2E",
    alignItems: "center",
    padding: 20,
  },
  
  btn: {
    minWidth: "90%",
    borderWidth: "1",
    borderColor: "#DDBBE6",
    borderRadius: 10,
    overflow: "hidden",
    marginTop:"7%",
  },
  btnTwoVarientStyle: {
    backgroundColor: "#2ED813",
    padding: 20,
  },
});