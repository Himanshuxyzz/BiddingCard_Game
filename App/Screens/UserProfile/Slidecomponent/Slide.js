import { View, 
    Text,
    ScrollView,
    StyleSheet,
    StatusBar,
    SafeAreaView,
    Image,
    TouchableOpacity
 } from 'react-native'
import React, { useState } from 'react'
import { LinearGradient } from 'expo-linear-gradient'
import Modal from "react-native-modal"


const Slide = ({navigation}) => {

  const[open , setOpen] = useState(false)
  return (
    <View style={styles.container}>
  
   <LinearGradient
    colors = {['#A664AA','#520066']}
         style={styles.btnstyle}
         start = {{x :0.5, y :0.9}}
         end = {{x:0.1, y : 0.1}}>
         <View style={styles.modalcontainer}>
           <View style={styles.flex_header}>
              <View style={styles.roundbox}>
           <TouchableOpacity onPress={()=>setOpen(true)}>
           <Image
            style={styles.roundimg} 
            source={require('../../../../assets/samraat_icon.png')}
            />
            </TouchableOpacity>
              </View>
           <Text style={{fontSize:20, color:"#FFFFFF", fontWeight:"bold"}}>Raj</Text>
               <View style={styles.wallet_more}>
                   <View>
                   <TouchableOpacity 
                       onPress={()=>console.log('waleet')}
            >
                        <Image source={require('../../../../assets/wallet.png')}/>
                     </TouchableOpacity>
                   </View>
                 <View>
                   <TouchableOpacity onPress={()=>console.log('more option')}>
                     <Image source={require('../../../../assets/more-vertical.png')}/>
                    </TouchableOpacity>
                   </View>
            </View>
           
            
        <Modal animationIn={'slideInLeft'} animationOut={'slideOutLeft'}  isVisible={open} backdropOpacity={0.0}>
        <View style={styles.modalcontainer}>
        
        <LinearGradient
          colors = {['#F7AEF4','#F19AEE','#C508BD' ]}
         style={styles.module}>
         <ScrollView>
         <View style={styles.model_header}>
              <View>
              <TouchableOpacity onPress={()=>setOpen(false)}>
                 <Image source={require('../../../../assets/lets-icons_back.png')}/>
              </TouchableOpacity>
               </View>
               <View>
               <TouchableOpacity
               onPress={() => console.log("Edit Profile")}>
               <LinearGradient
              //  colors = {['#F7AEF4','#F19AEE','#C508BD']}
              colors = {['#EA59E4','#C508BD','#910C8C']}
               style={styles.btnedit}
               start = {{x :0.0 , y : 0.0}}
               end = {{x:0.5, y : 0.15}} >
            <Text style={{color:"rgba(255, 255, 255, 1)",fontSize:16}}>Edit Profile</Text>
          </LinearGradient>
          </TouchableOpacity>
               </View>
         </View>
         <View style={styles.icon_box}>
             <View style={styles.user_box}>
              <Image style={{alignSelf:"center", marginVertical:10}} source={require('../../../../assets/samraat_icon.png')}/>
             </View>
             <Text style={{fontSize:30, color:"rgba(255, 255, 255, 1)",fontWeight:"600",alignSelf:"center",marginVertical:-50}}>User123</Text>
             <Text style={{fontSize:13, color:"rgba(255, 255, 255, 1)", alignSelf:"center", marginVertical:45}}>ID :154123679545</Text>
         </View>
         <View style={styles.accountProfile}>
             <Text style={{fontSize:24, textAlign:"center", fontWeight:"800",color:"rgba(255, 255, 255, 1)", padding:10}}>Account Details</Text>
             <View style={styles.accountdtail}>
              <TouchableOpacity 
               onPress={() => navigation.navigate("EditProfile")}
               style={styles.profilebtn}>
               <Text style={styles.usertext1}>User Profile</Text>
               </TouchableOpacity>
               <TouchableOpacity 
               onPress={()=>console.log('Wallet')}
               style={styles.profilebtn}>
               <Text style={styles.usertext1}>Wallet</Text>
               </TouchableOpacity>
               <TouchableOpacity 
               onPress={()=>console.log('Bank Account')}
               style={styles.profilebtn}>
               <Text style={styles.usertext1}>Bank Account</Text>
               </TouchableOpacity>
               <TouchableOpacity 
               onPress={()=>console.log('Refer & Earn')}
               style={styles.profilebtn}>
               <Text style={styles.usertext1}>Refer & Earn</Text>
               </TouchableOpacity>
               <TouchableOpacity 
               onPress={()=>console.log('Support')}
               style={styles.profilebtn}>
               <Text style={styles.usertext1}>Support</Text>
               </TouchableOpacity>
               <TouchableOpacity 
               onPress={()=>console.log('Log Out')}
               style={styles.profilebtn}>
               <Text style={styles.usertext1}>Log Out</Text>
               </TouchableOpacity>
             </View>
         </View>
         </ScrollView>
        </LinearGradient>
        </View>

        </Modal>
        </View>
        </View>
        <TouchableOpacity 
         onPress={()=>console.log('play online')}
         style={styles.ply_online} >
          <Text style={styles.play_text}>Play Online</Text>
        </TouchableOpacity>
        <TouchableOpacity 
         onPress={()=>console.log('Make a Club')}
         style={styles.make_club} >
          <Text style={styles.play_text}>Make a Club</Text>
        </TouchableOpacity>
        <View style={styles.footer}>
           <View>
           <TouchableOpacity onPress={()=>console.log("menu")}>
                <Image source={require('../../../../assets/menu.png')}/>
                </TouchableOpacity>
           </View>
           <View>
           <TouchableOpacity onPress={()=>console.log("home")}>
                <Image source={require('../../../../assets/Home.png')}/>
                </TouchableOpacity>
           </View>
           <View>
           <TouchableOpacity onPress={()=>console.log("left_side")}>
                <Image source={require('../../../../assets/Caret-Left.png')}/>
                </TouchableOpacity>
           </View>
        </View>
   </LinearGradient>
   
   </View>
  )
}

export default Slide

const styles = StyleSheet.create({

    container:{
    flex:1
    },
    btnstyle:{
        height:"100%"
    },
    module:{
      width:"90%",
      height:"100%",
      left:-20,
      top:2,
      borderRightColor:"black",
      borderRightWidth:1,
      backgroundColor:"red"
    

    },
    flex_header:{
      flexDirection:'row',
      alignItems:"center",
      gap:25,
      marginHorizontal:20,
      marginVertical:20
    },
    roundbox:{
      width:40,
      backgroundColor:"#FFFCFF80",
      borderRadius:100,
    },
    roundimg:{
      width:40,
      height:40,

    },
    wallet_more:{
    flexDirection:"row",
    gap:20,
    marginHorizontal:158
    },
    ply_online:{
      width:200,
      borderWidth:3,
      backgroundColor:"#E494EB",
      backgroundColor:"rgba(228, 148, 235, 1)",
      padding:30,
      alignSelf:"center",
      alignItems:'center',
      marginVertical:200,
      borderRadius:10,
      borderColor:"#FFFFFF"
    },
    make_club:{
      width:200,
      borderWidth:3,
      backgroundColor:"#E494EB",
      padding:29,
      alignSelf:"center",
      alignItems:'center',
      borderRadius:10,
      borderColor:"#FFFFFF",
      marginVertical:-150
    },
    play_text:{
      fontSize:20,
      color:"#FFFFFF",
      fontWeight:"bold",
      textShadowColor:"rgba(0, 0, 0, 0.30)",
      textShadowOffset:{width: 3 , height:2},
      textShadowRadius:5,
      shadowColor:"rgba(0, 0, 0, 5)",
      elevation: 5,  
    },
    model_header:{
      flexDirection:"row",
      alignItems:"center",
      gap:140,
      marginHorizontal:15,
      marginVertical:15
    },
    btnedit:{
      width:110,
      padding:10,
      borderColor:"rgba(255, 255, 255, 1)",
      borderWidth:2,
      borderRadius:10,
      alignItems:"center"
    },
    icon_box:{
      width:280,
      height:250,
      borderColor:"rgba(255, 255, 255, 1)",
      borderWidth:2,
      borderRadius:20,
      marginHorizontal:15,
      backgroundColor:"rgba(200, 3, 192, 1)",
      position:"relative"
    },
    user_box:{
      width:110,
      height:110,
      borderRadius:10,
      backgroundColor:"rgba(255, 255, 255, 1)",
      alignSelf:"center",
      marginVertical:50
    },
    accountdtail:{
      flexDirection:"column",
      gap:10
    },
    profilebtn:{
      width:260,
      borderWidth:2,
      borderColor:"#FFFFFF",
      padding:10,
      borderRadius:10, 
      alignSelf:"center"
    },
    usertext1:{
      textAlign:"center",
      fontSize:20,
      fontWeight:"bold",
      color:"#FFFFFF"
    },
    footer:{
      flexDirection:"row",
      justifyContent:"space-evenly",
      gap:100,
      marginVertical:300

    }

   

})