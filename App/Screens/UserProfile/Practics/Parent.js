import { View, Text ,TouchableOpacity} from 'react-native'
import React from 'react'
import Drawercomponent from '../Support/Dreawer/Drawercomponent'

const Parent = ({navigation}) => {
  return (
    <View style={{flex:1}}>
    <Drawercomponent/>
    </View>
  )
}

export default Parent