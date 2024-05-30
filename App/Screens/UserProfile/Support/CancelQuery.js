import { View,
   Text,
  StyleSheet,
TouchableOpacity,

 } from 'react-native'
import React from 'react'
import { LinearGradient } from 'expo-linear-gradient'
LinearGradient

const CancelQuery = ({navigation , item}) => {
  return (
    <View style={styles.container}>
      <Text style={styles.header}>Help me to create profile</Text>
      <View style={styles.contentbox}>
      <View>
        <Text style={{fontSize:20, color:"white"}}>Name - rahul</Text>
        </View>
        <View>
        <Text style={{fontSize:20, color:"white"}}>Ph.n. - 9315820619</Text>
        </View>
        <View>
        <Text  style={{fontSize:20, color:"white"}}>Email - </Text>
        </View>
        <View>
        <Text style={{fontSize:20, color:"white", padding:5, textAlign:'justify'}}>Your query ticket has been generated we will contact you soon</Text>
        </View>
        <View>
        <Text style={{fontSize:20, color:"white"}}>QT N. -</Text>
        </View>
      </View>
      <TouchableOpacity
            onPress={() => navigation.navigate("Mainpage") }
          >
          <LinearGradient
           colors = {['#EA59E4','#C508BD','#910C8C']}
           style={styles.btnstyle}
           start = {{x :0.0 , y : 0.0}}
           end = {{x:0.5 , y : 0.15}}
           
          >
            <Text style={{textAlign:"center" , color:"#FFFFFF", fontSize:18 , textTransform:"capitalize"}}>Back to Dashboard</Text>
          </LinearGradient>
          </TouchableOpacity>

          <TouchableOpacity
            onPress={() => navigation.navigate('Backtdash') }
          >
          <LinearGradient
           colors = {['#EA59E4','#C508BD','#910C8C']}
           style={styles.btnstyle}
           start = {{x :0.0 , y : 0.0}}
           end = {{x:0.5 , y : 0.15}}  
          >
           <Text style={{textAlign:"center" , color:"#FFFFFF", fontSize:18 , textTransform:"capitalize"}}>Cancle Querry Ticket</Text>
          </LinearGradient>
          </TouchableOpacity>
    </View>
  )
}

export default CancelQuery

const styles = StyleSheet.create({
  container:{
    flex:1,
    backgroundColor:"black"
  },
  header:{
    fontSize:20,
    textAlign:"center",
    fontWeight:"bold",
    color:"white",
    marginVertical:50
  },
  contentbox:{
    width:300,
    height:300,
    alignSelf:"center",
    flexDirection:"column",
    gap:10

  },
  btnstyle:{
    width:300,
    marginVertical:20,
    alignSelf:"center",
    borderWidth:1,
    padding:12,
    borderColor:"#FFFFFF",
    borderRadius:15, 
  }
})