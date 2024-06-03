import { View, Text , StyleSheet,TouchableOpacity} from 'react-native'
import React from 'react'
import { LinearGradient } from 'expo-linear-gradient'

const Backtdash = ({navigation}) => {
  return (
    <View style={styles.container}>
       <Text style={styles.text}>Your query ticket has been Cancelled</Text>
       <TouchableOpacity
        onPress={() => navigation.navigate("Home")}
       >
          <LinearGradient
           colors = {['#EA59E4','#C508BD','#910C8C']}
           style={styles.btnstyle}
           start = {{x :0.0 , y : 0.0}}
           end = {{x:0.5 , y : 0.15}} 
          >
            <Text
             onPress={() => navigation.navigate("Home")}
             style={{textAlign:"center" , color:"#FFFFFF", fontSize:18 , textTransform:"capitalize"}}>Back to Dashbord</Text>
          </LinearGradient>
          </TouchableOpacity>
    </View>
  )
}

export default Backtdash

const styles = StyleSheet.create({
    container:{
       backgroundColor:"black",
       flex:1
    },
    text:{
        color:"white",
        fontSize:20,
        textAlign:"center",
        marginVertical:250,
        fontWeight:"bold"
    },
    btnstyle:{
        width:300,
        alignSelf:"center",
        borderWidth:1,
        marginVertical:-170,
        padding:12,
        borderColor:"#FFFFFF",
        borderRadius:15, 
    }
})