import { ImageBackground, StyleSheet, Text, View,TextInput } from 'react-native'
import React from 'react'
import Colors from '../../Utils/Colors'
import GradientVarientOneBtn from '../../Components/GradientBtn/GradientVariantOneBtn'
const SignUpPage = () => {
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
      <TextInput
        style={styles.input}
        placeholder='Email'
        placeholderTextColor={Colors.INPUT_PLACEHOLDER}
      />
      <TextInput
        style={styles.input}
        placeholder='Password'
        placeholderTextColor={Colors.INPUT_PLACEHOLDER}
      />
      <TextInput
        style={styles.input}
        placeholder='Confirm Password'
        placeholderTextColor={Colors.INPUT_PLACEHOLDER}
      />
      <GradientVarientOneBtn
          btnText={"Submit"}
          onPress={() => navigation.navigate("Login")}
          style={styles.btn}
        />
         <Text style={styles.txt2}>Already have an account?Login</Text>
        
    </View>
   
  )
}

export default SignUpPage

const styles = StyleSheet.create({
  
  
  whole:{
    flex:1,
    justifyContent:'center',
    paddingLeft:100,
    backgroundColor: '#2A2E2E',
    paddingBottom:100

  },
  txt:{
    fontWeight:'bold',
  fontSize:30,
  color:'white',
  paddingLeft:30
  },
  txt1:{
    color:'white',
    fontSize:20,
    
  },
  input:{
    backgroundColor:'#FFFFFF1A',
    width:290,
    height:57,
    borderRadius:10,
    paddingLeft:20,
    marginTop:20,
    right:60,
    
  },
  btn:{
right:50,
top:20,
minWidth: "90%",
borderWidth: 1,
borderColor: "#DDBBE6",
borderRadius: 15,
overflow: "hidden",
  },
  txt2:{
    color:'white',
    top:40,
    right:30
  }
  
})