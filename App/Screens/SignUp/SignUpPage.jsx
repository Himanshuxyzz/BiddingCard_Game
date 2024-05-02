import { ImageBackground, StyleSheet, Text, View, TextInput, TouchableOpacity } from 'react-native'
import React from 'react'
import Colors from '../../Utils/Colors'
import GradientVarientOneBtn from '../../Components/GradientBtn/GradientVariantOneBtn'
const SignUpPage = ({ navigation }) => {
  return (

    <View style={styles.whole} >

      <Text style={styles.txt}>Sign Up</Text>
      <Text style={styles.txt1}>Create an account!</Text>
      <TextInput
        style={styles.input}
        placeholder='First Name'
        placeholderTextColor={Colors.INPUT_PLACEHOLDER}
      />
      <TextInput
        style={styles.input}
        placeholder='Last Name'
        placeholderTextColor={Colors.INPUT_PLACEHOLDER}
      />
      <TextInput
        style={styles.input}
        placeholder='Phone no.'
        placeholderTextColor={Colors.INPUT_PLACEHOLDER}
      />
      <TouchableOpacity
        onPress={() => console.log("verify")}>
        <Text style={styles.phonebtn} >verify</Text>
      </TouchableOpacity>
      <TextInput
        style={styles.input1}
        placeholder='Email'
        placeholderTextColor={Colors.INPUT_PLACEHOLDER}
      />
       <TouchableOpacity
        onPress={() => console.log("verify")}>
        <Text style={styles.phonebtn1} >verify</Text>
      </TouchableOpacity>
      <TextInput
        style={styles.input2}
        placeholder='Password'
        placeholderTextColor={Colors.INPUT_PLACEHOLDER}
      />
      <TextInput
        style={styles.input2}
        placeholder='Confirm Password'
        placeholderTextColor={Colors.INPUT_PLACEHOLDER}
      />
      <GradientVarientOneBtn
        btnText={"Submit"}
        onPress={() => navigation.navigate("LoginPage")}
        style={styles.btn}
      />
      <Text style={styles.txt2}>Already have an account?</Text>
      <TouchableOpacity onPress={() => navigation.navigate("LoginPage")}><Text style={styles.txt3} >Login</Text></TouchableOpacity>

    </View>

  )
}

export default SignUpPage

const styles = StyleSheet.create({

  whole: {
    flex: 1,
    justifyContent: 'center',
    paddingLeft: 100,
    backgroundColor: '#2A2E2E',
    paddingBottom: 50

  },
  txt: {
    fontWeight: 'bold',
    fontSize: 30,
    color: 'white',
    paddingLeft: 30,
    
  },
  txt1: {
    color: 'white',
    fontSize: 20,

  },
  input: {
    backgroundColor: '#FFFFFF1A',
    width: 290,
    height: 57,
    borderRadius: 10,
    paddingLeft: 20,
    marginTop: 20,
    right: 60,

  },
  input1: {
    backgroundColor: '#FFFFFF1A',
    width: 290,
    height: 57,
    borderRadius: 10,
    paddingLeft: 20,
    marginTop: 20,
    right: 60,
    bottom:40

  },
  input2: {
    backgroundColor: '#FFFFFF1A',
    width: 290,
    height: 57,
    borderRadius: 10,
    paddingLeft: 20,
    marginTop: 20,
    right: 60,
    bottom:80

  },
  btn: {
    right: 50,
    top: -60,
    minWidth: "90%",
    borderWidth: 1,
    borderColor: "#DDBBE6",
    borderRadius: 15,
    overflow: "hidden",
  },
  txt2: {
    color: 'white',
    top: -40,
    right: 30
  },
  txt3: {
    color: 'blue',
    top: -60,
    right: 30,
    left: 130,
    textDecorationLine: 'underline',

  },
    phonebtn:{
    backgroundColor:"#2ED813",
    width:70,
    textAlign:"center",
    padding:10,
    borderRadius:10,
    textTransform:"capitalize",
    color:"#FFFFFF",
    top:-50,
    left:150,
  },
   phonebtn1:{
    backgroundColor:"#2ED813",
    width:70,
    textAlign:"center",
    padding:10,
    borderRadius:10,
    textTransform:"capitalize",
    color:"#FFFFFF",
    top:-90,
    left:150,
  },
})