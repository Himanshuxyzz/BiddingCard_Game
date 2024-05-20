import { StyleSheet, 
  Text, StatusBar,
   View , Image , Button,TouchableOpacity} from 'react-native'
import React from 'react'
import { LinearGradient } from 'expo-linear-gradient'



const Userdetail = () => {
  return (
     <View style={styles.maincontainer}>
    <View style={styles.container}>
    <View style={styles.EditProfile}>

   
          <TouchableOpacity
            onPress={() => console.log("Edit Profile")}
          >
          <LinearGradient
           colors = {['#F7AEF4','#F19AEE','#C508BD']}
           style={styles.btnstyle}
           start = {{x :0.0 , y : 0.0}}
           end = {{x:0.8 , y : 0.2}}
          >
            <Text>Edit Profile</Text>
          </LinearGradient>
          </TouchableOpacity>
        <Image  source={require('../../../assets/lets-icons_back.png')}/>   
    </View>
    <View style={styles.ProfileBox}>
    <View style={styles.userprofilebox}>
      <Image  source={require('../../../assets/samraat_icon.png')}/>
    </View>
         <Text style={styles.TextUser}>User123</Text>
         <Text style={styles.TextId}>ID :154123679545</Text>
    </View>
    <View style={styles.AcountDetail}>
        <Text style={styles.AcountDetail_text}>Account Details</Text>
        <View style={styles.Accountbtn}>
          <TouchableOpacity
          onPress={()=> console.log("user profile")}
          style={styles.userdetail1}>
           <Text style={styles.usertext1}>User Profile</Text>
          </TouchableOpacity>
          <TouchableOpacity
          onPress={()=> console.log("hello")}
          style={styles.userdetail1}>
           <Text style={styles.usertext1}>Wallet</Text>
          </TouchableOpacity>
          <TouchableOpacity
          onPress={()=> console.log("hello")}
          style={styles.userdetail1}>
           <Text style={styles.usertext1}>Bank Account</Text>
          </TouchableOpacity>
          <TouchableOpacity
          onPress={()=> console.log("hello")}
          style={styles.userdetail1}>
           <Text style={styles.usertext1}>Refer & Earn</Text>
          </TouchableOpacity>
          <TouchableOpacity
          onPress={()=> console.log("hello")}
          style={styles.userdetail1}>
           <Text style={styles.usertext1}>Support</Text>
          </TouchableOpacity>
          <TouchableOpacity
          onPress={()=> console.log("hello")}
          style={styles.userdetail1}>
           <Text style={styles.usertext1}>Log Out</Text>
          </TouchableOpacity>
        </View>
        
       
    </View>
  
 
    </View>
    </View>
  )
}

export default Userdetail

const styles = StyleSheet.create({
  maincontainer:{
      flex:1,
      backgroundColor:"black"
  },
    container : {
        width:310, 
        height:720, 
        backgroundColor:"rgba(234, 89, 228, 0.5)",
        borderRadius:5,
        flex:1
         },

    EditProfile:{
        width:150,
        marginVertical:8,
        marginHorizontal:138, 
        gap:140,
        flexDirection:"row-reverse",
        alignItems:"center"

        },
    
        btnstyle:{
          width:100,
          borderWidth:1,
          borderRadius:10,
          padding:5,

        },
        edittext :{
               textAlign:"center",
               fontSize:15
        },

    ProfileBox :{
        width:280,
        height:250,
        backgroundColor:"rgba(200, 3, 192, 1)",
        marginHorizontal:15,
        borderRadius:10,
    },


    userprofilebox : {
      width: 110,
      height:110,
      marginHorizontal:92,
      marginVertical:50,
      backgroundColor: "white",
      borderRadius:10,

    },

    TextUser :{
        fontSize:22,
        fontWeight:"700",
        color:"#FFFFFF",
        lineHeight:25,
        marginVertical:-45,
       marginLeft:97,
    },

    TextId :{
    marginLeft:97,
    fontSize:10,
    marginVertical:45
},



        AcountDetail_text :{
            textAlign:"center",
            fontSize:22,
            marginBottom:10,
            color:"rgba(255, 255, 255, 1)",
            fontWeight:"700",
          
          },

    Accountbtn :{
      width:250,
      borderRadius:100,
      marginLeft:28,
      gap:12,
    },
    userdetail1:{
      width:260,
      borderWidth:2,
      borderColor:"#FFFFFF",
      padding:10,
      borderRadius:10,
    },
    usertext1:{
      textAlign:"center",
      fontSize:18,
      color:"#FFFFFF"
    }
})