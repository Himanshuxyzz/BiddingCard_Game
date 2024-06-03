
import { View, Text , StyleSheet , TouchableOpacity , Image} from 'react-native'
import React, { useState } from 'react'
import { LinearGradient } from 'expo-linear-gradient'

const Mainpage = ({navigation}) => {

    const[ show , setShow] = useState(false)
  return (
    <View style={ styles.container}>
      <LinearGradient
       colors={['#A664AA', '#520066']}
        style={styles.btnstyle}
        start={{ x: 0.7, y: 0.7 }}
        end={{ x: 0.1, y: 0.1 }}>
        <View style={styles.header_box}>
             <View style={styles.icon_name}>
                  <View style={styles.roundbox}>
                  <TouchableOpacity
                  onPress={() => navigation.openDrawer()}
                 >
                  <Image 
                   style={styles.roundimg} source={require('../../../assets/samraat_icon.png')}/>
                  </TouchableOpacity>
                  </View>
                  <View>
                     <Text style={{fontSize:21, color:"rgba(255,255,255,1)," , fontWeight:"bold"}}>Raj</Text>
                  </View>
             </View>
             <View style={styles.wallet_more}>
                   <View>
                   <TouchableOpacity>
                    <Image source={require('../../../assets/wallet.png')}/>
                    </TouchableOpacity>
                  </View>
                  <View>
                  <TouchableOpacity
                   onPress={() => setShow(!show)}
                  >
                  <Image source={require('../../../assets/more-vertical.png')}/>
                  </TouchableOpacity>
                  </View>
            </View>
         </View>
         <View style={styles.start_game}>
          <TouchableOpacity 
            style={styles.ply_online}>
            <Text style={styles.play_text}>Play Online</Text>
          </TouchableOpacity>
          <TouchableOpacity 
            onPress={() => console.log('Make a Club')}
            
            style={styles.make_club}>
            <Text style={styles.play_text}>Make a Club</Text>
          </TouchableOpacity>
        </View>
        <View>
        {
          show ? (
            <View style={styles.toggle}>
            <View style={styles.texttogcontent}>
            <TouchableOpacity>
            <Text style={styles.toggletext}>Search</Text>
            </TouchableOpacity>
            <TouchableOpacity>
            <Text style={styles.toggletext}>Notification</Text>
            </TouchableOpacity>
            <TouchableOpacity>
            <Text style={styles.toggletext}>My games</Text>
            </TouchableOpacity>
            </View>
            
           </View>
          ): null
        }
        
        </View>

      </LinearGradient>
    </View>
  )
}

export default Mainpage

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