import { View,
   Text ,
    StyleSheet , 
    Image ,
     TextInput,
     ScrollView,
     TouchableOpacity,
    } from 'react-native'
import React from 'react'
import { LinearGradient } from 'expo-linear-gradient'




const ProfileDetail = ({navigation}) => {
  return (
  
    <View style={styles.container}>
      <ScrollView>
      <View style={styles.backimg}>
      <Image source={require('../../../assets/lets-icons_back.png')}/>  
      </View>
      <View style={styles.tstprofile}>
        <Text style={styles.tstprofile}>User Profile</Text>
      </View>
      <View style={styles.inputcontainer}>
        <View style={styles.inputname}>
          <Text style={{color:"white", fontSize:18, marginBottom:10,}}>Name</Text>
            <TextInput
              placeholder='Raj Singh'
               placeholderTextColor={"#ffffff"}
               keyboardType='default'
               style ={{borderBottomColor:"rgba(255, 255, 255, 0.5)" , borderBottomWidth:1, color:"white", fontSize:18, paddingBottom:10}}
                     />
        <View style={styles.email}>
            <Text style={{color:"white", fontSize:18,}}>Email</Text>
              <View style={styles.emailflex}>
                <TextInput
                   style ={{borderBottomColor:"rgba(255, 255, 255, 0.5)",width:280, borderBottomWidth:1, color:"white"}}
                  />
                    <View>
                      <TouchableOpacity onPress={() => navigation.navigate("EmailOTP")}>
                         <Text style={styles.emailbox} >verify</Text>
                      </TouchableOpacity>
                     </View>
             </View> 
          </View>
          <View style={styles.Phone}>
            <Text style={{color:"white", fontSize:18,}}>Phone</Text>
              <View style={styles.phoneflex}>
                <TextInput
                
                   style ={{borderBottomColor:"rgba(255, 255, 255, 0.5)",width:280, borderBottomWidth:1, color:"white"}}
                  />
                    <View>
                      <TouchableOpacity 
                        onPress={() => navigation.navigate("Phoneotp")} >
                         <Text style={styles.phonebtn} >verify</Text>
                      </TouchableOpacity>
                     </View>
             </View> 
             
          </View>
          <View style={styles.dateofbirth}>
                <Text style={{color:"white", fontSize:18, marginBottom:10,}}>Date</Text>
                      <TextInput
                       placeholder='02/05/2024'
                       placeholderTextColor={"#ffffff"}
                       keyboardType='default'
                       style ={{borderBottomColor:"rgba(255, 255, 255, 0.5)" , borderBottomWidth:1, color:"white", fontSize:18, paddingBottom:10}}
                 />
          </View>
          <View style={styles.adharcard}>
                <Text style={{color:"white", fontSize:18, marginBottom:10,}}>AdharCard No.</Text>
                      <TextInput
                       placeholder='564832569875'
                       placeholderTextColor={"#ffffff"}
                       keyboardType='default'
                       style ={{borderBottomColor:"rgba(255, 255, 255, 0.5)" , borderBottomWidth:1, color:"white", fontSize:18, paddingBottom:10}}
                 />
          </View>
         </View>
         <TouchableOpacity
            onPress={() => navigation.navigate("Slide")}
          >
          <LinearGradient
           colors = {['#EA59E4','#C508BD','#910C8C']}
           style={styles.btnstyle}
           start = {{x :0.0 , y : 0.0}}
           end = {{x:0.5 , y : 0.15}}
           
          >
            <Text style={{textAlign:"center" , color:"#FFFFFF", fontSize:18 , textTransform:"capitalize"}}>SAVE</Text>
          </LinearGradient>
          </TouchableOpacity>
          <View>
            <Text style={{color:"#FFFFFF" , fontSize:9,fontWeight:"600", marginVertical:0, textAlign:"center"}}>For security purpose only specific fields can be changed</Text>
          </View>
      </View>
      </ScrollView>
    </View>
  )

}

export default ProfileDetail;

const styles = StyleSheet.create({
  container: {
    backgroundColor:"black",
    flex : 1,
  },
  backimg : {
    marginHorizontal:20,
    marginVertical:20
  },
  tstprofile :{
    color:"#FFFFFF",
    fontSize:25,
    fontWeight:"700",
    textAlign:"center",
    top:-10
  },
  inputcontainer:{
    marginHorizontal:40
  },
  email:{
    marginVertical:20
  },
  emailbox:{
    width:70,
    textAlign:"center",
    padding:10,
    borderRadius:10,
    textTransform:"capitalize",
    color:"#FFFFFF",
    backgroundColor:"#2ED813",
    top:-10,
    left:-70,
  },
  emailflex:{
    flexDirection:"row",
  },
  phonebtn:{
    backgroundColor:"#2ED813",
    width:70,
    textAlign:"center",
    padding:10,
    borderRadius:10,
    textTransform:"capitalize",
    color:"#FFFFFF",
    top:-50,
    left:210,
  },
  dateofbirth:{
    marginVertical:-27 
  },
  adharcard:{
    marginVertical:40 
  },
  btnstyle:{
    width:280,
    marginVertical:10,
    alignContent:"center",
    borderWidth:1,
    padding:12,
    borderColor:"#FFFFFF",
    borderRadius:15,

  }
})

