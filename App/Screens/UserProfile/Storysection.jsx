import { StyleSheet, Text, Image, View, ScrollView, TouchableOpacity } from 'react-native'
import React from 'react'
import { Data } from './Storydata/Data'
import { useNavigation } from '@react-navigation/native'

const Storysection = () => {
    const navigation = useNavigation();
  return (
    <>
       <ScrollView horizontal>
         {Data.map(item =>(
            <View key={item.id} style={styles.fullcontainer}>
                 <TouchableOpacity
                onPress={()=> navigation.navigate("Storypost",{item})}
                      style={styles.catogery} >
                     <Image style={styles.image} source={item.image}/>
                 </TouchableOpacity>
             </View>
         ))}
      </ScrollView> 
    </>
  )
}

export default Storysection

const styles = StyleSheet.create(
    {
        catogery:{
            borderWidth:1,
            borderColor:"white",
            width:60,
            height:60,
            borderRadius:50,
            flexDirection:"row",
            justifyContent:"space-between",
            gap:20
            
    
        },
        image:{
            width:60,
            height:60,
            alignSelf:"center"
    
        },
        fullcontainer:{
         flexDirection:"row",
        padding:10
        }
    })