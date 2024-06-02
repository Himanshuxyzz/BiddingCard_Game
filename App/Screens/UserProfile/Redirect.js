import { View, Text } from 'react-native'
import React from 'react'
import { DrawerActions } from '@react-navigation/native'
import Drawercomponent from './Support/Dreawer/Drawercomponent'

const Redirect = ({navigation}) => {
  return (
    <View style={{flex:1, justifyContent:"center", alignItems:"center"}}>
      <Text 
      onPress={() => navigation.dispatch(DrawerActions.openDrawer())}
      style={{fontSize:20}}>Redire</Text>
       <Text 
       onPress={()=> navigation.openDrawer()}
      style={{fontSize:20}}>Kundan</Text>
     
    </View>
  )
}

export default Redirect