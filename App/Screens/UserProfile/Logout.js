import { View,
     Text,
     TouchableOpacity,
     Image,
     ScrollView,
     StyleSheet
    
    } from 'react-native'
import React from 'react'
import { LinearGradient } from 'expo-linear-gradient'

const Logout = ({navigation}) => {
  return (
    <View style={Styles.fullcontainer}>
       <View style={Styles.logoutbpx}>
         <Image style={{alignSelf:"center", marginVertical:100}} source={require('../../../assets/logout_ion.png')}/>
         <Text style={Styles.textcontent}>Oh no! You’re leaving........ Are you sure?</Text>
         <TouchableOpacity
      onPress={()=> navigation.navigate("Home")}>
        <LinearGradient
         colors = {['rgba(234, 89, 228, 0.4)','rgba(197, 8, 189, 0.4)','rgba(145, 12, 140, 0.5)']}
         style={Styles.btnstyle}
         start = {{x :0.0 , y : 0.0}}
         end = {{x:0.5 , y : 0.15}}>
         <Text style={{textAlign:"center", color:"black",padding:6, fontSize:20, fontWeight:"bold"}}>Cancle</Text>
        </LinearGradient>
      </TouchableOpacity>
      <TouchableOpacity
      // onPress={()=> navigation.navigate("Mainpage")} 
      onPress={() => navigation.navigate("Home")}
    
      >
        <LinearGradient
         colors = {['rgba(234, 89, 228, 0.4)','rgba(197, 8, 189, 0.4)','rgba(145, 12, 140, 0.5)']}
         style={Styles.btnstyle2}
         start = {{x :0.0 , y : 0.0}}
         end = {{x:0.5 , y : 0.15}}>
         <Text style={{textAlign:"center", color:"black",padding:6, fontSize:20, fontWeight:"bold"}}>Yes, Log Me Out</Text>
        </LinearGradient>
      </TouchableOpacity>
       </View>
    </View>
  )
}

export default Logout

const Styles = StyleSheet.create({
    fullcontainer:{
        flex:1,
        backgroundColor:"rgba(228, 148, 235, 1)"
    },
    logoutbpx:{
        width:300,
        height:500,
        borderWidth:0,
        backgroundColor:"rgba(217, 217, 217, 0.4)",
        borderRadius:15,
        alignSelf:"center",
        marginVertical:150,
         },
         textcontent:{
            width:280,
            textAlign:"center",
            alignSelf:"center",
            fontSize:20,
            fontWeight:"bold",
            padding:2,
            marginVertical:-40,

         },
         btnstyle:{
            width:250,
            marginVertical:60,
            alignSelf:"center",
            padding:7,
            borderColor:"#FFFFFF",
            borderRadius:15,
         },
         btnstyle2:{
            width:250,
            marginVertical:-20,
            alignSelf:"center",
            padding:7,
            borderColor:"#FFFFFF",
            borderRadius:15,
         }

})