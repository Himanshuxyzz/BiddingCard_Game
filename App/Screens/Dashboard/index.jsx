import {
  View,
  Text,
  ImageBackground,
  StyleSheet,
  TouchableOpacity,
} from "react-native";
import React from "react";
import Header from "../../Components/DashboardHeader/Header";

const Dashboard = ({ navigation }) => {
  return (
    <View style={styles.container}>
      {/* <GradientVariantBackground style={{}} /> */}
      <ImageBackground
        source={require("../../../assets/Images/backgroundimage.jpeg")}
        resizeMode="cover"
        style={styles.image}
      >
        <View
          style={{ padding: 20, flex: 1, flexDirection: "column", gap: 30 }}
        >
          {/* header */}
          <Header />
          {/* header end */}

          <View
            style={{
              flex: 1,
              justifyContent: "center",
              alignItems: "center",
              gap: 90,
            }}
          >
            <TouchableOpacity onPress={() => navigation.navigate("Playonline")}>
              <View
                style={{
                  borderWidth: 4,
                  borderColor: "white",
                  paddingVertical: 32,
                  paddingHorizontal: 50,
                  borderRadius: 12,
                  backgroundColor: "background: rgba(228, 148, 235, 1)",
                }}
              >
                <Text
                  style={{
                    color: "rgba(255, 255, 255, 1)",
                    fontSize: 24,
                    fontWeight: "bold",
                    textShadowColor: "rgba(0, 0, 0, 0.5)",
                    textShadowOffset: { width: 0, height: 5 },
                    textShadowRadius: 4,
                    shadowColor: "rgba(0, 0, 0, 0.5)",
                    shadowOffset: { width: 0, height: 2 },
                    shadowRadius: 4,
                  }}
                >
                  Play Online
                </Text>
              </View>
            </TouchableOpacity>
            
            <TouchableOpacity>
              <View
                style={{
                  paddingVertical: 32,
                  paddingHorizontal: 50,
                  borderRadius: 12,
                  backgroundColor: "background: rgba(228, 148, 235, 1)",
                }}
              >
                <Text
                  style={{
                    color: "rgba(255, 255, 255, 1)",
                    fontSize: 24,
                    fontWeight: "bold",
                  }}
                >
                  Make a Club
                </Text>
              </View>
            </TouchableOpacity>
          </View>
        </View>
      </ImageBackground>
    </View>
  );
};

export default Dashboard;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "column",
    gap: 20,
  },
  image: {
    flex: 1,
    width: "100%",
  },
});
