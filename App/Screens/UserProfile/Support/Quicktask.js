import { 
  View, 
  Text,
  StyleSheet,
  Image,
  TouchableOpacity
} from 'react-native';
import React from 'react';
import disc from '@jsamr/counter-style/presets/disc';
import MarkedList from '@jsamr/react-native-li';


const Quicktask = ({ navigation }) => {
  return (
      <View style={styles.container}>
          <TouchableOpacity onPress={() => navigation.navigate("Mainpage")}>
              <Image style={styles.backButton} source={require("../../../../assets/lets-icons_back.png")} />
          </TouchableOpacity>
          <View>
              <Text style={styles.heading}>How can we help you?</Text>
          </View>
          <View style={styles.quickTaskContainer}>
              <Text style={styles.quickTaskTitle}>Quick task</Text>
              <MarkedList counterRenderer={disc} style={styles.quickTaskList}>
                  <TouchableOpacity onPress={() => navigation.navigate("GenerateQuery")}>
                      <Text style={styles.quickTaskItem}>Help me to create profile</Text>
                  </TouchableOpacity>
                  <Text style={styles.quickTaskItem}>How do I cancel my BC</Text>
                  <Text style={styles.quickTaskItem}>How to change password</Text>
                  <Text style={styles.quickTaskItem}>Someone made my fake Profile</Text>
              </MarkedList>
          </View>
          <Text style={styles.contactUs}>Contact us</Text>
          <View style={styles.contactItemContainer}>
              <Image style={styles.contactIcon} source={require("../../../../assets/calling.png")} />
              <TouchableOpacity>
                  <Text style={styles.contactText}>145-4455-745</Text>
              </TouchableOpacity>
          </View>
          <View style={styles.contactItemContainer}>
              <Image style={styles.contactIcon} source={require("../../../../assets/email.png")} />
              <TouchableOpacity onPress={() => console.log("hbhbc")}>
                  <Text style={styles.contactText}>BC1234@gmail.com</Text>
              </TouchableOpacity>
          </View>
      </View>
  );
}

export default Quicktask;

const styles = StyleSheet.create({
  container: {
      flex: 1,
      backgroundColor: "#000000",
      paddingHorizontal: 20,
      paddingTop: 40,
  },
  backButton: {
      width: 30,
      height: 30,
      marginBottom: 20,
  },
  heading: {
      color: "#FFFFFF",
      fontSize: 24,
      fontWeight: "bold",
      textAlign: "center",
      textDecorationLine: "underline",
      marginVertical: 20,
  },
  quickTaskContainer: {
      width: "100%",
      alignItems: "center",
  },
  quickTaskTitle: {
      color: "#FFFFFF",
      fontSize: 25,
      fontWeight: "bold",
      paddingBottom: 10,
  },
  quickTaskList: {
      marginTop: 10,
      alignItems: "flex-start",
  },
  quickTaskItem: {
      color: "rgba(56, 154, 244, 1)",
      textDecorationLine: "underline",
      fontSize: 18,
      marginBottom: 10,
  },
  contactUs: {
      fontSize: 25,
      color: "#FFFFFF",
      marginTop: 30,
      marginBottom: 10,
  },
  contactItemContainer: {
      flexDirection: "row",
      alignItems: "center",
      marginTop: 10,
  },
  contactIcon: {
      width: 30,
      height: 30,
      marginRight: 10,
  },
  contactText: {
      fontSize: 18,
      color: "#FFFFFF",
  },
});
