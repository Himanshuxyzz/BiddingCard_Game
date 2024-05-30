
// import { 
//   View, 
//   Text,
//   ScrollView,
//   StyleSheet,
//   StatusBar,
//   SafeAreaView,
//   Image,
//   TouchableOpacity
// } from 'react-native';
// import React, { useState } from 'react';
// import { LinearGradient } from 'expo-linear-gradient';
// import Modal from "react-native-modal";
// import { BlurView } from 'expo-blur';

// const Slide = ({ navigation }) => {
//   const [open, setOpen] = useState(false);

//   const [show , setShow] = useState(false)



//   return (
//     <View style={styles.container}>
//       <LinearGradient
//         colors={['#A664AA', '#520066']}
//         style={styles.btnstyle}
//         start={{ x: 0.7, y: 0.7 }}
//         end={{ x: 0.1, y: 0.1 }}>
        
//         <View style={styles.modal__container}>
//           <View style={styles.header_box}>
//              <View style={styles.icon_name}>
//                   <View style={styles.roundbox}>
//                   <TouchableOpacity
//                     onPress={() =>setOpen(true)}
//                    >
//                   <Image  style={styles.roundimg} source={require('../../../../assets/samraat_icon.png')}/>
//                   </TouchableOpacity>
//                   </View>
//                   <View>
//                      <Text style={{fontSize:21, color:"rgba(255,255,255,1)," , fontWeight:"bold"}}>Raj</Text>
//                   </View>
//              </View>
//              <View style={styles.wallet_more}>
//                    <View>
//                    <TouchableOpacity>
//                     <Image source={require('../../../../assets/wallet.png')}/>
//                     </TouchableOpacity>
//                   </View>
//                   <View>
//                   <TouchableOpacity
//                    onPress={() => setShow(!show)}
//                   >
//                   <Image source={require('../../../../assets/more-vertical.png')}/>
//                   </TouchableOpacity>
                  
//                   </View>
//              </View>
//           </View>

//           <Modal
//             animationIn={'slideInLeft'} 
//             animationOut={'slideOutLeft'} 
//             isVisible={open} 
//             backdropOpacity={0.7}>
//             <View style={styles.modalcontainer}>
//               <LinearGradient
//                 colors={['#F7AEF4', '#F19AEE', '#C508BD']}
//                 style={styles.module}>
//                 <ScrollView>
//                   <View style={styles.model_header}>
//                     <View>
//                       <TouchableOpacity onPress={() => setOpen(false)}>
//                         <Image source={require('../../../../assets/lets-icons_back.png')} />
//                       </TouchableOpacity>
//                     </View>
//                     <View>
//                       <TouchableOpacity onPress={() => navigation.navigate("EditProfile")}>
//                         <LinearGradient
//                           colors={['#EA59E4', '#C508BD', '#910C8C']}
//                           style={styles.btnedit}
//                           start={{ x: 0.0, y: 0.0 }}
//                           end={{ x: 0.5, y: 0.15 }}>
//                           <Text style={{ color: "rgba(255, 255, 255, 1)", fontSize: 16, textAlign: "center", marginVertical: 5 }}>Edit Profile</Text>
//                         </LinearGradient>
//                       </TouchableOpacity>
//                     </View>
//                   </View>
//                   <View style={styles.icon_box}>
//                     <View style={styles.user_box}>
//                       <Image style={{ alignSelf: "center", marginVertical: 10 }} source={require('../../../../assets/samraat_icon.png')} />
//                     </View>
//                     <Text style={{ fontSize: 30, color: "rgba(255, 255, 255, 1)", fontWeight: "600", alignSelf: "center", marginVertical: -50 }}>User123</Text>
//                     <Text style={{ fontSize: 13, color: "rgba(255, 255, 255, 1)", alignSelf: "center", marginVertical: 45 }}>ID :154123679545</Text>
//                   </View>
//                   <View style={styles.accountProfile}>
//                     <Text style={{ fontSize: 24, textAlign: "center", fontWeight: "bold", color: "rgba(255, 255, 255, 1)", padding: 10 }}>Account Details</Text>
//                     <View style={styles.accountdtail}>
//                       <TouchableOpacity 
//                       onPress={() => setOpen(false)}
//                         style={styles.profilebtn}>
//                         <Text 
//                         style={styles.usertext1}
//                         onPress={() => navigation.navigate("EditProfile")}
//                         >User Profile</Text>
//                       </TouchableOpacity>
//                       <TouchableOpacity 
//                         onPress={() => console.log('Wallet')}
//                         >
//                         <Text style={styles.usertext1}>Wallet</Text>
//                       </TouchableOpacity>
//                       <TouchableOpacity 
//                         onPress={() => setOpen(false)}
//                         style={styles.profilebtn}>
//                         <Text style={styles.usertext1}
//                          onPress={() => navigation.navigate("BankAccount")}
//                         >Bank Account</Text>
//                       </TouchableOpacity>
//                       <TouchableOpacity 
//                         onPress={() => console.log('Refer & Earn')}
//                         style={styles.profilebtn}>
//                         <Text style={styles.usertext1}>Refer & Earn</Text>
//                       </TouchableOpacity>
//                       <TouchableOpacity 
//                         onPress={() => setOpen(false)}
//                         style={styles.profilebtn}>
//                         <Text style={styles.usertext1}
//                          onPress={() => navigation.navigate('Quicktask')}
//                         >Support</Text>
//                       </TouchableOpacity>
//                       <TouchableOpacity 
//                         onPress={() => setOpen(false)}
//                         style={styles.profilebtn}>
//                         <Text style={styles.usertext1}
//                          onPress={() => navigation.navigate("Logout")}
//                         >Log Out</Text>
//                       </TouchableOpacity>
//                     </View>
//                   </View>
//                 </ScrollView>
//               </LinearGradient>
//             </View>
//           </Modal>
//         </View>

//         <View style={styles.start_game}>
//           <TouchableOpacity 
//             onPress={() => setOpen(true)}
//             style={styles.ply_online}>
//             <Text style={styles.play_text}>Play Online</Text>
//           </TouchableOpacity>
//           <TouchableOpacity 
//             onPress={() => console.log('Make a Club')}
//             style={styles.make_club}>
//             <Text style={styles.play_text}>Make a Club</Text>
//           </TouchableOpacity>
//         </View>
//         <View>
//         {
//           show ? (
//             <View style={styles.toggle}>
//             <View style={styles.texttogcontent}>
//             <TouchableOpacity>
//             <Text style={styles.toggletext}>Search</Text>
//             </TouchableOpacity>
//             <TouchableOpacity>
//             <Text style={styles.toggletext}>Notification</Text>
//             </TouchableOpacity>
//             <TouchableOpacity>
//             <Text style={styles.toggletext}>My games</Text>
//             </TouchableOpacity>
//             </View>
            
//            </View>
//           ): null
//         }
        
//         </View>
       
//       </LinearGradient>
//     </View>
//   );
// }

// export default Slide;

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     height: 100
//   },
//   btnstyle: {
//     height: "100%",
//     flex: 1
//   },
//   module: {
//     width: "95%",
//     height: "100%",
//     left: -15,
//     borderRadius: 10,
//     top: 0,
//     borderRightColor: "black",
//     borderRightWidth: 1,
//     backgroundColor: "red"
//   },
//   header_box:{
//     flexDirection:"row",
//     alignItems:"center",
//     justifyContent:"space-between",
//     marginRight:20,
//     marginLeft:20,
//     marginVertical:10
 
//   },
//   icon_name:{
//     flexDirection:"row",
//     alignItems:"center",
//     gap:15
   
//   },
//   wallet_more:{
//     flexDirection:"row",
//     alignItems:"center",
//     gap:20
//   },
//   roundbox: {
//     width: 40,
//     backgroundColor: "#FFFCFF80",
//     borderRadius: 100,
    
//   },
//   roundimg: {
//       width: 40,
//       height: 40,
      
//     },
//     toggle:{
//       width:160,
//       height:150,
//       alignSelf:"flex-end",
//       marginRight:30,
//       borderRadius:10,
//       marginVertical:-620,
//       backgroundColor:"rgba(0, 0, 0, 0.5)"
//     },
//     toggletext:{
//       fontSize:18,
//       color:"rgba(255,255,255,1)",
//       padding:7
//     },
//     texttogcontent:{
//       marginVertical:10
//     },
  
//   start_game: {
//     flexDirection: "column",
//     gap: 50,
//     marginVertical: 190
//   },
//   ply_online: {
//     width: 200,
//     borderWidth: 3,
//     backgroundColor: "rgba(228, 148, 235, 1)",
//     padding: 30,
//     alignSelf: "center",
//     borderRadius: 10,
//     borderColor: "#FFFFFF"
//   },
//   make_club: {
//     width: 200,
//     borderWidth: 3,
//     backgroundColor: "#E494EB",
//     padding: 29,
//     alignSelf: "center",
//     borderRadius: 10,
//     borderColor: "#FFFFFF",
//   },
//   play_text: {
//     fontSize: 20,
//     color: "#FFFFFF",
//     fontWeight: "bold",
//     textShadowColor: "rgba(0, 0, 0, 0.30)",
//     textShadowOffset: { width: 3, height: 2 },
//     textShadowRadius: 5,
//     shadowColor: "rgba(0, 0, 0, 5)",
//     textAlign: "center"
//   },
//   model_header: {
//     flexDirection: "row",
//     alignItems: "center",
//     gap: 140,
//     justifyContent: "center",
//     marginVertical: 15
//   },
//   btnedit: {
//     width: 110,
//     height: 40,
//     borderColor: "rgba(255, 255, 255, 1)",
//     borderWidth: 2,
//     borderRadius: 10,
//     alignItems: "center"
//   },
//   icon_box: {
//     width: 280,
//     height: 250,
//     borderColor: "rgba(255, 255, 255, 1)",
//     borderWidth: 2,
//     borderRadius: 20,
//     alignSelf: "center",
//     backgroundColor:"rgba(200, 3, 192, 1)",
//    position:"relative"
//   },
//   user_box:{
//           width:110,
//           height:110,
//           borderRadius:10,
//           backgroundColor:"rgba(255, 255, 255, 1)",
//           alignSelf:"center",
//           marginVertical:50
//         },
//         accountdtail:{
//           flexDirection:"column",
//           gap:10,
//           marginBottom:7,
//         },
  
//         usertext1:{
//           textAlign:"center",
//           fontSize:20,
//           fontWeight:"bold",
//           color:"#FFFFFF",
//           borderWidth:2,
//           width:260,
//           alignSelf:"center",
//           borderColor:"#FFFFFF",
//           padding:5,
//           borderRadius:10,
//         },

// })
