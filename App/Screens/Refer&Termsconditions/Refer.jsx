import { StyleSheet, Text, View,Image,TouchableOpacity } from 'react-native'
import React from 'react'
import GradientVarientOneBtn from '../../Components/Gradient/GradientVariantOneBtn'

const Refer = ({navigation}) => {
  return (
    <View style={styles.main}>
    <View style={styles.container}> 

      <Text style={{color:'#FFFFFF', fontWeight:600,paddingLeft: 90,top:20}}> Refer now & earn up to <Text style={{color:'#F9B60C'}}> ₹50</Text></Text>
      
      <Text  style={{color:'#FFFFFF',fontWeight:600,paddingLeft:60,top:25}}> Send a referral link to your friends via  </Text>
       
       <Image source={require('../../../assets/whatsapp2.png')} style={{marginLeft:100,top:50}}/>
       <Image source={require('../../../assets/facebook1.png')} style={{marginLeft:100,left:60,bottom:20,top:18}}/>
       <Image source={require('../../../assets/message2.png')} style={{marginLeft:100,left:120,bottom:50,top:-13}}/>
    </View>
    <Image  onPress={() => navigation.navigate("")} source={require('../../../assets/back1.png')} style={{marginLeft:20,bottom:190}}/>

    <Text style={{marginLeft:100,color:'#910C8C',fontSize:25,fontWeight:600}}>Referral Code</Text>
     
    
        <View style={[styles.wrapper, styles.simpleButton]} >
         
        <Text style={{ paddingLeft:30,fontSize:25,fontWeight:600,}} >AMITXV500</Text>
    </View>
    <Text style={{marginLeft:70,color:'#910C8C',fontSize:25,fontWeight:600,top:15}}>How does it work?</Text>
    <View style={{width:60,height:60,backgroundColor:'#D9D9D9',borderRadius:40,left:20,top:30}}></View>
    <Text style={{marginLeft:90,color:'#910C8C',fontSize:18,fontWeight:500,bottom:20}}>Invite your friends to register on BC game</Text>
    <View style={{width:60,height:60,backgroundColor:'#D9D9D9',borderRadius:40,left:20,top:10}}></View>
    <Text style={{marginLeft:90,color:'#910C8C',fontSize:18,fontWeight:500,bottom:50}}>When your friend register on App, both of you will get ₹50 worth Reward Points</Text>
    <View style={{width:60,height:60,backgroundColor:'#D9D9D9',borderRadius:40,left:20,top:-30}}></View>
    <Text style={{marginLeft:90,color:'#910C8C',fontSize:18,fontWeight:500,bottom:80}}>Reward money can be used in your game</Text>
   <GradientVarientOneBtn
        btnText={"REFER NOW"}
        onPress={() => navigation.navigate("ReferModal")}
        style={styles.btn}
      />
   
    </View>
    
  )
}

export default Refer

const styles = StyleSheet.create({

  container:{
    backgroundColor:'#960D91',
    paddingTop:80,
},

main:{
  backgroundColor:'white'
},
wrapper: {
  borderRadius: 10,
  paddingVertical: 10,
  paddingHorizontal: 25,
  maxWidth:236,
  top:10,
},
simpleButton: {
  backgroundColor: "#F2CF19",
  color:'black',
  marginLeft:50,
  
  
},


btn:{
  left:20,
  bottom:40,
  maxWidth: "90%",
  borderWidth: 1,
  borderColor: "#DDBBE6",
  borderRadius: 15,
  overflow: "hidden",
    },
})