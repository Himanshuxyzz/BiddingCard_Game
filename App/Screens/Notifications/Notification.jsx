import { StyleSheet, Text, View ,TouchableOpacity,Image,Modal} from 'react-native'
import {React,useState} from 'react'

const Notification = ({navigation}) => {
  const [ismodalVisible, setModalVisible] = useState(false);
  const toggleModal = () => {
    setModalVisible(!ismodalVisible);
  };

  return (
    <View style={{backgroundColor:'black',height:900}}>
    <TouchableOpacity  onPress={() => navigation.navigate('Notification1')} >
 
 <Image style={{marginLeft:20,top: 35,}}
 source={require('../../../assets/back1.png')} />

</TouchableOpacity>
   <Text style={{fontWeight:600,fontSize:25,color:'white',left:80,}}>Notifications</Text>
   <View style={{alignItems:'flex-start',flexDirection:'row',maxWidth:300}}>
    <Text style={{color:'rgba(73, 82, 254, 1)',fontWeight:700,fontSize:80,}}>.</Text>
    <Text  style={{color:'white',fontWeight:600,fontSize:20,paddingTop:60,paddingLeft:20}}>Create a club with your friends and start playing.</Text>
    <TouchableOpacity onPress={() => setModalVisible(true)}>
    <Image  style={{top:65,}} source={require('../../../assets/threedot.png')}/>
</TouchableOpacity>

   </View>
   <View style={{alignItems:'flex-start',flexDirection:'row',maxWidth:300}}>
    <Text style={{color:'rgba(73, 82, 254, 1)',fontWeight:700,fontSize:80,}}>.</Text>
    <Text style={{color:'white',fontWeight:600,fontSize:20,paddingTop:60,paddingLeft:20}}>Your profile has been created.
come and play</Text>
<TouchableOpacity onPress={() => setModalVisible(true)}>
    <Image  style={{top:65,}} source={require('../../../assets/threedot.png')}/>
</TouchableOpacity>
   </View>
   <View style={{alignItems:'flex-start',flexDirection:'row',maxWidth:300}}>
    <Text style={{color:'rgba(73, 82, 254, 1)',fontWeight:700,fontSize:80,}}>.</Text>
    <Text style={{color:'white',fontWeight:600,fontSize:20,paddingTop:60,paddingLeft:20}}>Oops! something is incomplete</Text>
    <TouchableOpacity onPress={() => setModalVisible(true)}>
    <Image  style={{top:65,}} source={require('../../../assets/threedot.png')}/>
</TouchableOpacity>
   </View>
   <View style={{alignItems:'flex-start',flexDirection:'row',maxWidth:300}}>
    <Text style={{color:'rgba(73, 82, 254, 1)',fontWeight:700,fontSize:80,}}>.</Text>
    <Text onPress={() => navigation.navigate('Notification1')} style={{color:'white',fontWeight:600,fontSize:20,paddingTop:60,paddingLeft:20}}>Create a club with your friends and start playing Your................ </Text>
    <Modal
        theme={{ colors: { backdrop: "rgba(217, 217, 217, 1)" } }}
        animationType="fade"
        transparent={true}
        visible={ismodalVisible}
        backdropOpacity={0.5}
      >
        <View style={styles.main}>
        

          <View
            style={{
              flexDirection: "column",
              gap: 2.5,
              alignItems: "center",
            }}
          >
            <View
              style={{
                flexDirection: "column",
                gap: 2.5,
                alignItems: "center",
                top: 40,
              }}
            >
              <Image source={require('../../../assets/delete.png')} style={{right:100,top:20}}/>
         <Text style={{color:'red', }}>Delete notifications</Text>
         <Image source={require('../../../assets/notification.png')} style={{right:100,top:20}}/>
         <Text style={{color:'white',left:30}}>Turn off this notification type</Text>
            </View>
          </View>
         
       
          </View>
         
</Modal>
   </View>
   
  </View>
  
  )
}

export default Notification

const styles = StyleSheet.create({
    subHeading: {
        padding: 10,
        fontSize: 18,
        fontWeight: "500",
        // fontFamily: "Inter-Medium",
        textAlign: "center",
        top: 20,
      },
      main: {
        backgroundColor: "#D9D9D9",
        minHeight: 180,
        top: 575,
        maxWidth: 340,
        left: 12,
        right: 80,
        borderRadius: 20,
      },
})