import { ImageBackground, StyleSheet, Text, TouchableOpacity, View} from 'react-native'
import React from 'react'
import Header from '../../../Components/DashboardHeader/Header';

const PlayOnline = ({navigation}) => {
  return (
    <View style={styles.container}>
      <ImageBackground
        source={require("../../../../assets/Images/backgroundimage.jpeg")}
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
            <View
              style={{
                paddingVertical: 32,
                paddingHorizontal: 50,
                borderRadius: 12,
                backgroundColor: "background: rgba(228, 148, 235, 1)",
              }}
            >
              <TouchableOpacity onPress={() => navigation.navigate("Auction")}>
                <Text
                  style={{
                    color: "rgba(255, 255, 255, 1)",
                    fontSize: 24,
                    fontWeight: "bold",
                  }}
                >
                  Auction BC
                </Text>
              </TouchableOpacity>
            </View>
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
              <TouchableOpacity onPress={() => navigation.navigate("Simple")}>
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
                  Simple BC
                </Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </ImageBackground>
    </View>
  );
}

export default PlayOnline

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