import { View, Text } from 'react-native'
import React from 'react'

const Redirect = ({navigation}) => {
  return (
    <View style={{flex:1, justifyContent:"center", alignItems:"center"}}>
      <Text 
       onPress={()=> navigation.openDrawer()}
      style={{fontSize:20}}>Redirect</Text>
    </View>
  )
}

export default Redirect