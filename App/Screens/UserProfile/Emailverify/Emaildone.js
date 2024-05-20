import { 
    View, 
    Text ,
    StyleSheet,
    TextInput ,
    TouchableOpacity,
    ScrollView,
    Image,
} from 'react-native'
import React from 'react'
import { LinearGradient } from 'expo-linear-gradient'
import { BlurView } from 'expo-blur'

const Emaildone = () => {
  return (
    <View style={styles.Mainconatiner}>
    <ScrollView>
    <View style={styles.inputbox}>
    <View style={{position:"absolute", top:-100,left:0, zIndex:1 , color:"rgba(217, 217, 217, 0.1)"}}>
      <BlurView style={styles.blurContainer} intensity={3} tint='light'/>
      </View>
        <TextInput 
            placeholder='First Name'
            placeholderTextColor={"#FFFFFF"}
            style={styles.input}
        />
         <TextInput 
            placeholder='Last Name'
            placeholderTextColor={"#FFFFFF"}
            style={styles.input}
        />
         <TextInput 
            placeholder='Phone Number'
            placeholderTextColor={"#FFFFFF"}
            style={styles.input}
        />
         <TextInput 
            placeholder='Password'
            placeholderTextColor={"#FFFFFF"}
            style={styles.input}
        />
         <TextInput 
            placeholder='Confirm Password'
            placeholderTextColor={"#FFFFFF"}
            style={styles.input}
        />
    </View>
    <View style={styles.Otpbox}>
      <Text style={{color:"#FFFFFF", fontSize:18,fontWeight:"700", top:20, textAlign:"center", }}>YAY! OTP verified</Text>
      {/* <View style={styles.inputflex} >
        <TextInput
         placeholder='1'
         placeholderTextColor={"#FFFFFF"}
         style={styles.otpinput}
          />
           <TextInput
         placeholder='2'
         placeholderTextColor={"#FFFFFF"}
         style={styles.otpinput}
          />
           <TextInput
         placeholder='3'
         placeholderTextColor={"#FFFFFF"}
         style={styles.otpinput}
          />
           <TextInput
         placeholder='4'
         placeholderTextColor={"#FFFFFF"}
         style={styles.otpinput}
          />
      </View> */}
      {/* <View style={styles.otpresend}>
        <Text style={{color:"#FFFFFF"}}>If you didn’t receive a code!</Text>
        <Text style={{color:"#FFFFFF", color:"#389AF4"}}>Resend</Text>
      </View> */}
      <View>
                      <TouchableOpacity 
                         onPress={()=>console.log("verify")}>
                         <Text style={styles.verify} >Verify</Text>
                      </TouchableOpacity>
                     </View>
    </View>
   
    <TouchableOpacity
          onPress={() => console.log("Submit")}
        >
        <LinearGradient
         colors = {['#EA59E4','#C508BD','#910C8C']}
         style={styles.btnstyle}
         start = {{x :0.0 , y : 0.0}}
         end = {{x:0.5 , y : 0.15}}
         >
          <Text style={{textAlign:"center" , color:"#FFFFFF", fontSize:18}}>Submit</Text>
        </LinearGradient>
        </TouchableOpacity>
        <View style={styles.account}>
            <Text style={{color:"#FFFFFF"}}>Already have an account?</Text>
            <Text style={{color:"#FFFFFF", color:"#389AF4"}}>Login</Text>
        </View>
        </ScrollView>
      </View>
  )
}

export default Emaildone

const styles = StyleSheet.create({
    Mainconatiner:{
        flex:1,
        backgroundColor:"black"
    },
   
    inputbox :{
      marginVertical:100,
      alignItems:"center",
      
    },
    input:{
        margin: 12,
        padding: 10,
        color:"#FFFFFF",
        borderRadius:10,
        backgroundColor:"rgba(217, 217, 217, 0.1)",
        fontSize:18,
        width:300

    },
    btnstyle:{
        width:280,
        alignSelf:"center",
        marginVertical:-80,
        borderWidth:1,
        padding:12,
        borderColor:"#FFFFFF",
        borderRadius:15,
    
      },
      account:{
        flexDirection:"row",
        gap:10,
        justifyContent:"center",
        marginVertical:10
      },
      blurContainer:{
       width:375,
       height:780,
       backgroundColor:"rgba(217, 217, 217, 0.1)"  
      },
      Otpbox:{
        width:305,
        height:250,
        borderRadius:15,
        zIndex:30,
        backgroundColor:"black",
        position:"absolute",
        bottom:200,
        left:40,
      },
      inputflex:{
      flexDirection:"row",
      marginVertical:30,
      gap:20,
      justifyContent:"center",
      color:"FFFFFF"

      },
      otpinput:{
        borderColor:"#FFFFFF",
        borderWidth:2,
        borderRadius:100,
        width:50,
        padding:10,
        paddingHorizontal:20,
        color:"#FFFFFF",
        backgroundColor:"rgba(217, 217, 217, 0.2)"
       
      },
      otpresend:{
        flexDirection:"row",
        gap:10,
        justifyContent:"center",
        marginVertical:-20
      },
      verify:{
        width:280,
        textAlign:"center",
        padding:12,
        borderRadius:10,
        textTransform:"capitalize",
        color:"#FFFFFF",
        backgroundColor:"#2ED813",
        alignSelf:"center",
        marginVertical:40,
        borderWidth:1,
        borderColor:"#FFFFFF",
        fontSize:15,

      }
})