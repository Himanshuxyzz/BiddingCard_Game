import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Drawercomponent from './Drawer/Drawercomponent'

const Parent = () => {
  return (
    <View style={{flex:1}}>
      <Drawercomponent/>
    </View>
  )
}

export default Parent

const styles = StyleSheet.create({})