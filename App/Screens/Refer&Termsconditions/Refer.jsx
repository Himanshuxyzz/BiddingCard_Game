import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const Refer = () => {
  return (
    <View style={styles.container}>
      <Text style={{color:'#FFFFFF', fontWeight:600,paddingLeft: 90,}}>Refer now & earn up to <Text style={{color:'#F9B60C'}}> ₹50</Text></Text>
      
      <Text  style={{color:'#FFFFFF',fontWeight:600,paddingLeft:60}}>Send a referral link to your friends via  </Text>

    </View>
  )
}

export default Refer

const styles = StyleSheet.create({
container:{
    backgroundColor:'#960D91',
    paddingTop:100,
}
})