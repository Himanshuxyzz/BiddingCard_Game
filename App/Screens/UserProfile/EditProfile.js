import {
     View, 
     Text,
     StyleSheet,
     TouchableOpacity,
     Image,
     ScrollView,
     TextInput, 
    } from 'react-native'
import React from 'react'
import { LinearGradient } from 'expo-linear-gradient'

const EditProfile = ({navigation}) => {
  return (
    <View style={styles.container}>
    {/* <ScrollView> */}
    <View style={styles.backimg}>
    <Image source={require('../../../assets/lets-icons_back.png')}/>  
    </View>
    <View style={styles.tstprofile}>
      <Text style={styles.tstprofile}>User Profile</Text>
    </View>
    <View style={styles.inputcontainer}>
      <View style={styles.inputname}>
        <Text style={{color:"white", fontSize:18, marginBottom:-5,}}>Name</Text>
          <TextInput
            placeholder=''
             placeholderTextColor={"#ffffff"}
             keyboardType='default'
             style ={{borderBottomColor:"rgba(255, 255, 255, 0.5)",width:280 , borderBottomWidth:1, color:"white", fontSize:18, paddingBottom:10}}
                   />
      <View style={styles.email}>
          <Text style={{color:"white", fontSize:18,}}>Email</Text>
            <View style={styles.emailflex}>
              <TextInput
              placeholder=''
              placeholderTextColor={"#FFFFFF"}
                 style ={{borderBottomColor:"rgba(255, 255, 255, 0.5)",width:280, borderBottomWidth:1, color:"white", fontSize:15}}
                />
                  <View>
          
                   <Image style={{top:-10 , right:30 }} source={require('../../../assets/verifynumber.png')}/>
                   </View>
           </View> 
        </View>
        <View style={styles.Phone}>
          <Text style={{color:"white", fontSize:18,}}>Phone</Text>
            <View style={styles.phoneflex}>
              <TextInput
                 placeholder=''
                 placeholderTextColor={"#FFFFFF"}
                 style ={{borderBottomColor:"rgba(255, 255, 255, 0.5)",width:280, borderBottomWidth:1, color:"white"}}
                />
                  <View>
                  <Image style={{top:-40, right:-250}} source={require('../../../assets/verifynumber.png')}/>
                   </View>
           </View> 
           
        </View>
        <View style={styles.dateofbirth}>
              <Text style={{color:"white", fontSize:18, marginTop:10,}}>Date</Text>
                    <TextInput
                     placeholder=''
                     placeholderTextColor={"#ffffff"}
                     keyboardType='default'
                     style ={{borderBottomColor:"rgba(255, 255, 255, 0.5)",width:280 , borderBottomWidth:1, color:"white", fontSize:18, paddingBottom:0}}
               />
        </View>
        <View style={styles.adharcard}>
              <Text style={{color:"white", fontSize:18, marginTop:10,}}>AdharCard No.</Text>
                    <TextInput
                     placeholder=''
                     placeholderTextColor={"#ffffff"}
                     keyboardType='default'
                     style ={{borderBottomColor:"rgba(255, 255, 255, 0.5)",width:280, borderBottomWidth:1, color:"white", fontSize:18, paddingBottom:10}}
               />
        </View>
       </View>
        <View>
          <Text style={{color:"#FFFFFF" , fontSize:15,fontWeight:"700", marginVertical:0, textAlign:"center"}}>Terms & Conditions</Text>
        </View>
        <TouchableOpacity
         onPress={() => navigation.navigate('profile Detail')}
        >
        <LinearGradient
         colors = {['#EA59E4','#C508BD','#910C8C']}
         style={styles.btnstyle}
         start = {{x :0.0 , y : 0.0}}
         end = {{x:0.5 , y : 0.15}}
         >
          <Text style={{textAlign:"center", color:"#FFFFFF",padding:6, fontSize:18}}>Edit Details</Text>
        </LinearGradient>
        </TouchableOpacity>
    </View>
    <View>
    </View>
    {/* </ScrollView> */}
  </View>
  )
}

export default EditProfile

const styles = StyleSheet.create({
    container: {
      backgroundColor:"black",
      flex : 1,
    },
    backimg : {
      marginHorizontal:20,
      marginVertical:20
    },
    tstprofile :{
      color:"#FFFFFF",
      fontSize:25,
      fontWeight:"700",
      textAlign:"center",
      top:-15
    },
    inputcontainer:{
      alignSelf:"center",
      top:-15
    },
    email:{
      marginVertical:20
    },
    emailbox:{
      width:70,
      textAlign:"center",
      padding:10,
      borderRadius:10,
      textTransform:"capitalize",
      color:"#FFFFFF",
      backgroundColor:"#2ED813",
      top:-10,
      left:-70,
    },
    emailflex:{
      flexDirection:"row",
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
      left:210,
    },
    dateofbirth:{
      marginVertical:-30 
    },
    adharcard:{
      marginVertical:30 
    },
    btnstyle:{
      width:300,
      marginVertical:100,
      alignSelf:"center",
      borderWidth:1,
      padding:10,
      borderColor:"#FFFFFF",
      borderRadius:15,
  
    }
  })