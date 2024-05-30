import { StyleSheet, Text, View, Image } from 'react-native'
import React from 'react'
import WalletMainBackground from '../../Components/Wallet/WalletMainBackground'
import GradientVarientOneBtn from '../../Components/Gradient/GradientVariantOneBtn'
import WhiteText from '../../Components/WhiteText/WhiteText'

const InsufficientBalance = (route , navigation) => {
  const balance = route.params?.balance || 0;
  
  return (
    <View style={styles.container}>
      <WalletMainBackground balance = {balance}/>
      <Text style={styles.text}>Money is not transferred to wallet</Text>
      <Image source  ={require("../../../assets/Images/In.png")} style = {styles.image} />    
      <Text style= {styles.text1}>Low Bank Balance</Text>
      <Text style= {styles.text2}>Looks like your bank balance is running Low please deposit money or contact your Bank to know more </Text>
      <GradientVarientOneBtn 
          btnText={"Back"}
          style={styles.btn}
        />
    </View>
  )
}

export default InsufficientBalance

const styles = StyleSheet.create({
container:{
  flex:1,
  backgroundColor:'#2A2E2E',
  alignItems:'center',
}, 
text:{
  color : "#F9B60C",
  fontSize: 22,
  textAlign: 'center',
  top: -210,
  fontWeight : "bold",
  letterSpacing : 1,
},
image:{
  top : -180,
  width : 350,
},
text1:{
  color: "#D33CCD",
  fontSize: 25,
  textAlign: 'center',
  fontWeight : "bold",
  top : -170,
  letterSpacing : 1,

},
text2:{
  color : "#F9B60C",
  fontSize: 18,
  textAlign: 'center',
  top : -150,
  letterSpacing : 1,
},
btn:{
  width: 300,
  top : -80,
  fontWeight: "bold",
  fontSize :20,
}

})