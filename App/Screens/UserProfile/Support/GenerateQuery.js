import { 
    View,
    Text,
    TouchableOpacity,
    StyleSheet,
    TextInput,
    ScrollView
} from 'react-native'
import React from 'react'
import disc from '@jsamr/counter-style/presets/disc';
import MarkedList from '@jsamr/react-native-li'
import { LinearGradient } from 'expo-linear-gradient';



const GenerateQuery = ({navigation}) => {
  return (
    <View style={styles.container}>
    <ScrollView>
      <Text style={styles.heading}>Help me to create profile</Text>
      <View style={styles.contentbox}>
          <Text style={{color:"white", fontSize:18}}>Here .. what to do</Text>
          <MarkedList counterRenderer={disc}>
          <Text style={styles.onorderlist}>Did you exactly filled what is mentioned in your documents</Text>
          <Text style={styles.onorderlist}>sometimes documents mismatch plz verify carefully </Text>
          <Text style={styles.onorderlist}>you can contact us if your different documents have mismatching infomation</Text>
          </MarkedList>
      </View>
      <View style={styles.information}>
            <Text style={{color:"white", textAlign:"center",fontSize:16, fontWeight:"bold"}}>Leave your information here</Text>
            <TextInput
                placeholderTextColor={"#ffffff"}
                keyboardType='default'
                style={styles.inputtext}
                placeholder='Name' 
             />
              <TextInput
                placeholderTextColor={"#ffffff"}
                keyboardType='default'
                style={styles.inputtext}
                placeholder='Contact no' 
             />
              <TextInput
                placeholderTextColor={"#ffffff"}
                keyboardType='default'
                style={styles.inputtext}
                placeholder='Email' 
             />
              <TextInput
                placeholderTextColor={"#ffffff"}
                keyboardType='default'
                style={styles.inputtextdis}
                placeholder='Describe your problem' 
             />  
          </View>
          <TouchableOpacity
            onPress={() => navigation.navigate('CancelQuery') }
          >
          <LinearGradient
           colors = {['#EA59E4','#C508BD','#910C8C']}
           style={styles.btnstyle}
           start = {{x :0.0 , y : 0.0}}
           end = {{x:0.5 , y : 0.15}}
           
          >
            <Text style={{textAlign:"center" , color:"#FFFFFF", fontSize:18 , textTransform:"capitalize"}}>Generate Query Ticket</Text>
          </LinearGradient>
          </TouchableOpacity>
          </ScrollView>
    </View>
  )
}

export default GenerateQuery

const styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:"black"
    },
    heading:{
        fontSize:22,
        marginVertical:20,
        fontWeight:"bold",
        textAlign:"center",
        color:"white"
    },
    contentbox:{
        width:300,
        height:260,
        borderColor:"white",
        alignSelf:"center"
    },
    onorderlist:{
        width:280,
        color:"white",
        lineHeight:22,
        marginVertical:7
    },
    information:{
       color:"white",
       flexDirection:"column",
       gap:12
    },
    inputtext:{
        width:300,
        borderWidth:1,
        borderColor:"white",
        borderRadius:10,
        alignSelf:"center",
        padding:7,
        backgroundColor:"rgba(255, 255, 255, 0.2)",
        color:"white",
        textTransform:"capitalize"
    },
    inputtextdis:{
        width:300,
        height:80,
        padding:5,
        borderWidth:1,
        borderColor:"white",
        borderRadius:10,
        alignSelf:"center",
        backgroundColor:"rgba(255, 255, 255, 0.2)",
        color:"white",
        textTransform:"capitalize"
    },
    btnstyle:{
        width:300,
        marginVertical:30,
        alignSelf:"center",
        borderWidth:1,
        padding:12,
        borderColor:"#FFFFFF",
        borderRadius:15, 
    }

})