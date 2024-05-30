import { 
  View,
  Text, 
  StyleSheet,
  TouchableOpacity,
  Image

} from 'react-native'
import React from 'react'
import { DrawerContentScrollView , DrawerItem, DrawerItemList } from '@react-navigation/drawer'
import { LinearGradient } from 'expo-linear-gradient'



const Customedrawer = (props) => {
  const { navigation } = props;
  return (
    <View style={{flex:1}}>
    <LinearGradient 
    colors={['#F7AEF4', '#F19AEE', '#C508BD']}
    style={styles.linearbackgrnd}
    >
    <DrawerContentScrollView {...props}>
        <View style={styles.drawwrcontent} >
         <View>
           <TouchableOpacity 
           onPress={() => navigation.closeDrawer()}
           >
                <Image source={require('../../../../../assets/lets-icons_back.png')} />
           </TouchableOpacity>
        </View>
             <View>
                <TouchableOpacity onPress={() => navigation.navigate("EditProfile")}>
                     <LinearGradient
                          colors={['#EA59E4', '#C508BD', '#910C8C']}
                          style={styles.btnedit}
                          start={{ x: 0.0, y: 0.0 }}
                          end={{ x: 0.5, y: 0.15 }}>
                          <Text style={{ color: "rgba(255, 255, 255, 1)", fontSize: 16, textAlign: "center", marginVertical: 5 }}>Edit Profile</Text>
                        </LinearGradient>
                  </TouchableOpacity>
             </View>
        </View>
        <View style={styles.icon_box}>
                    <View style={styles.user_box}>
                      <Image style={{ alignSelf: "center", marginVertical: 10 }} source={require('../../../../../assets/samraat_icon.png')} />
                    </View>
                    <Text style={{ fontSize: 25, color: "rgba(255, 255, 255, 1)", fontWeight: "bold", alignSelf: "center", marginVertical: -50 }}>User123</Text>
                    <Text style={{ fontSize: 13, color: "rgba(255, 255, 255, 1)", alignSelf: "center", marginVertical: 45 }}>ID :154123679545</Text>
                  </View>
                  <View>
                    <Text style={styles.accontcontent}>Account Details</Text>
                    <View style={styles.menuitem}>
                    <DrawerItemList 
                    {...props}/>
                    </View>
                  </View>
    </DrawerContentScrollView>
    </LinearGradient>
    </View>
  )
}

export default Customedrawer

 const styles = StyleSheet.create({
  drawwrcontent:{
    flex:1
  },
  linearbackgrnd:{
    flex:1
  },
  drawwrcontent:{
    flexDirection: "row",
    alignItems: "center",
    gap: 120,
    justifyContent: "center",
    marginVertical: 15
  },
  btnedit:{
    width: 110,
    height: 40,
    borderColor: "rgba(255, 255, 255, 1)",
    borderWidth: 2,
    borderRadius: 10,
    alignItems: "center"
  },
  icon_box: {
    width: 260,
    height: 250,
    borderColor: "rgba(255, 255, 255, 1)",
    borderWidth: 2,
    borderRadius: 20,
    alignSelf: "center",
    backgroundColor:"rgba(200, 3, 192, 1)",
   position:"relative"
  },
  user_box:{
          width:100,
          height:100,
          borderRadius:10,
          backgroundColor:"rgba(255, 255, 255, 1)",
          alignSelf:"center",
          marginVertical:50
        },
        accontcontent:{
          fontSize:23,
          textAlign:"center",
          color:"rgba(255,255,255,1)",
          padding:8,
          fontWeight:"bold"
        },
        drawlist:{
          textAlign:"center",
          backgroundColor:"red",
          width:150,
          borderWidth:2,
          borderColor:"red"
        },


})