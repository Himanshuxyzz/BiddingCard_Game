import { View, Text ,TouchableOpacity,StyleSheet , Image} from 'react-native'
import React from 'react'
import { useState } from 'react'
import Drawercomponent from '../Support/Dreawer/Drawercomponent'
import { LinearGradient } from 'expo-linear-gradient'

const Parent = ({navigation}) => {
  return (
    <View style={{flex:1}}>
    <Drawercomponent/>
    </View>
  )
}

export default Parent

const styles = StyleSheet.create({
  container:{
      flex: 1,
  },
  btnstyle: {
      height: "100%",
      flex: 1
    },
    header_box:{
      flexDirection:"row",
      alignItems:"center",
      justifyContent:"space-between",
      marginRight:20,
      marginLeft:20,
      marginVertical:10
   
    },
    icon_name:{
      flexDirection:"row",
      alignItems:"center",
      gap:15
     
    },
    wallet_more:{
      flexDirection:"row",
      alignItems:"center",
      gap:20
    },
    roundbox: {
      width: 40,
      backgroundColor: "#FFFCFF80",
      borderRadius: 100,
      
    },
    roundimg: {
        width: 40,
        height: 40,
        
      },
      toggle:{
        width:160,
        height:150,
        alignSelf:"flex-end",
        marginRight:30,
        borderRadius:10,
        marginVertical:-620,
        backgroundColor:"rgba(0, 0, 0, 0.5)"
      },
      toggletext:{
        fontSize:18,
        color:"rgba(255,255,255,1)",
        padding:7
      },
      texttogcontent:{
        marginVertical:10
      },
    
    start_game: {
      flexDirection: "column",
      gap: 50,
      marginVertical: 190
    },
    ply_online: {
      width: 200,
      borderWidth: 3,
      backgroundColor: "rgba(228, 148, 235, 1)",
      padding: 30,
      alignSelf: "center",
      borderRadius: 10,
      borderColor: "#FFFFFF"
    },
    make_club: {
      width: 200,
      borderWidth: 3,
      backgroundColor: "#E494EB",
      padding: 29,
      alignSelf: "center",
      borderRadius: 10,
      borderColor: "#FFFFFF",
    },
    play_text: {
      fontSize: 20,
      color: "#FFFFFF",
      fontWeight: "bold",
      textShadowColor: "rgba(0, 0, 0, 0.30)",
      textShadowOffset: { width: 3, height: 2 },
      textShadowRadius: 5,
      shadowColor: "rgba(0, 0, 0, 5)",
      textAlign: "center"
    },
})