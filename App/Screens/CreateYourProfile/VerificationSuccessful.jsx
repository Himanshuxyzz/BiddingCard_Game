import {
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import React from "react";
import GradientVarientTwoBtn from "../../Components/Gradient/GradientVariantTwoBtn";
import Colors from "../../Utils/Colors";

const VerificationSuccessful = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollContent}>
        <Text
          style={{
            color: "rgba(46, 216, 19, 1)",
            fontSize: 34,
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
            style={{
              minWidth: "80%",
              maxWidth: "80%",
              minHeight: "45%",
              marginHorizontal: "auto",
            }}
            source={require("../../../assets/Images/verified.png")}
          />
        </View>
        <View
          style={{
            width: "95%",
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
        <TouchableOpacity
          style={[styles.btn, styles.btnTwoVarientStyle]}
          onPress={() => navigation.navigate("MainDashboard")}
        >
          <Text
            style={{
              textAlign: "center",
              fontSize: 20,
              color: Colors.WHITE,
              fontWeight: "600",
            }}
          >
            Dashboard
          </Text>
        </TouchableOpacity>
      </ScrollView>
    </View>
  );
};

export default VerificationSuccessful;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#2A2E2E",
    alignItems: "center",
    // padding: 20,
  },
  scrollContent: {
    flexGrow: 1,
    justifyContent: "center",
    padding: 20,
  },

  btn: {
    minWidth: "90%",
    borderWidth: 1,
    borderColor: "#DDBBE6",
    borderRadius: 10,
    overflow: "hidden",
    marginTop: "7%",
  },
  btnTwoVarientStyle: {
    backgroundColor: "#2ED813",
    padding: 20,
  },
});
