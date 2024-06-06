import { View, Text, TouchableOpacity, Image, StyleSheet, Dimensions } from 'react-native';
import React from 'react';
import { LinearGradient } from 'expo-linear-gradient';

const { width, height } = Dimensions.get('window');

const Logout = ({ navigation }) => {
 return (
   <View style={styles.fullContainer}>
      <View style={styles.logoutBox}>
        <Image style={styles.image} source={require('../../../assets/logout_ion.png')} />
        <Text style={styles.textContent}>Oh no! You’re leaving... Are you sure?</Text>
        <View style={styles.buttonContainer}>
          <TouchableOpacity onPress={() => navigation.navigate("Home")}>
            <LinearGradient
              colors={['#EA59E4', '#C508BD', '#910C8C']}
              style={styles.button}
              start={{ x: 0.0, y: 0.0 }}
              end={{ x: 0.5, y: 0.15 }}>
              <Text style={styles.buttonText}>Cancel</Text>
            </LinearGradient>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => navigation.navigate("Home")}>
            <LinearGradient
              colors={['#EA59E4', '#C508BD', '#910C8C']}
              style={styles.button}
              start={{ x: 0.0, y: 0.0 }}
              end={{ x: 0.5, y: 0.15 }}>
              <Text style={styles.buttonText}>Yes, Log Me Out</Text>
            </LinearGradient>
          </TouchableOpacity>
        </View>
      </View>
   </View>
 );
}

export default Logout;

const styles = StyleSheet.create({
   fullContainer: {
       flex: 1,
       backgroundColor: "#2A2E2E",
       justifyContent: "center",
       alignItems: "center",
   },
   logoutBox: {
       width: width * 0.8,
       height: height * 0.7,
       backgroundColor: "#D9D9D9",
       borderRadius: 15,
       alignItems: "center",
   },
   image: {
       width: '70%',
       aspectRatio: 1, // Maintain aspect ratio
       resizeMode: 'contain', // Fit content inside the image's dimensions
       marginTop: '10%', // Adjust margin
   },
   textContent: {
       textAlign: "center",
       fontSize: width * 0.04, // Using width-based font size
       fontWeight: "bold",
       marginTop: height * 0.05,
       paddingHorizontal: width * 0.05,
   },
   buttonContainer: {
       marginTop: height * 0.05,
       width: width * 0.7,
   },
   button: {
       width: "100%",
       paddingVertical: height * 0.015,
       borderRadius: 15,
       marginVertical: height * 0.025,
       alignItems: "center",
       justifyContent: "center",
   },
   buttonText: {
       textAlign: "center",
       color: "white",
       fontSize: width * 0.035, // Using width-based font size
       fontWeight: "bold",
   },
});
