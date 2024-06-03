import { 
    View, 
    Text ,
    StyleSheet,
    Image,
    TouchableOpacity
} from 'react-native'
import React from 'react'
import disc from '@jsamr/counter-style/presets/disc';
import MarkedList from '@jsamr/react-native-li'



const Quicktask = ({navigation}) => {
  return (
    <View style={styles.conatiner} >
    <TouchableOpacity 
     onPress={() => navigation.navigate("Mainpage")}
     >
     <Image style={{marginHorizontal:20, marginVertical:20}} source={require("../../../../assets/lets-icons_back.png")}/>
     </TouchableOpacity>
      <View>
        <Text style={styles.heading}>How can we help you?</Text>
      </View>
      <View style={styles.quicktask}>
           <Text style={{color:"white", fontSize:25, fontWeight:"bold", paddingBottom:10}}>Quick task</Text>
           <MarkedList  counterRenderer={disc}>
           <View >
           <TouchableOpacity
           onPress={() => navigation.navigate("GenerateQuery")} 
           >
            <Text style={{color:"rgba(56, 154, 244, 1)", textDecorationLine:"underline",fontSize:18}}>Help me to create profile</Text>
            </TouchableOpacity>
          </View>
            <View>
            <Text style={{color:"rgba(56, 154, 244, 1)",textDecorationLine:"underline",fontSize:18}}>How do i cancel my BC</Text>
            </View>
            <View>
            <Text style={{color:"rgba(56, 154, 244, 1)",textDecorationLine:"underline",fontSize:18}}>how to change password</Text>
            </View>
            <View>
            <Text style={{color:"rgba(56, 154, 244, 1)",textDecorationLine:"underline",fontSize:18}}>Some one made my fake Profile</Text>
            </View>
           </MarkedList>
      </View>
        <Text style={styles.contactus}> Contact us </Text>
        <View style={styles.emailing}>
            <Image  source={require("../../../../assets/calling.png")}/>
            <TouchableOpacity >
            <Text style={{fontSize:18, color:"white"}}>145-4455-745</Text>
            </TouchableOpacity>
        </View>
        <View style={styles.emailing}>
            <Image style={{width:30 , height:30}} source={require("../../../../assets/email.png")}/>
            <TouchableOpacity onPress={()=>console.log("hbhbc")}>
            <Text style={{fontSize:18, color:"white"}}> BC1234@gmail.com</Text>
            </TouchableOpacity>
        </View>
    </View>
  )
}

export default Quicktask

const styles = StyleSheet.create({
    conatiner:{
        flex:1,
        backgroundColor:"black"
    },
    heading:{
        color:"white",
        fontSize:24,
        fontWeight:"bold",
        textAlign:"center",
        textDecorationLine:"underline"
    },
    quicktask:{
       width:300,
       height:220,

       borderColor:"white",
       alignSelf:"center", 
       marginVertical:40,
    },
    contactus:{
       fontSize:25 ,
       color:"#FFFFFF",
       marginHorizontal:25
    },
    emailing:{
        flexDirection:"row",
        gap:10,
        marginVertical:10,
        marginHorizontal:30,
    }
})