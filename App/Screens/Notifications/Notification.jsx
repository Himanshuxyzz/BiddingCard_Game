import { StyleSheet, Text, View ,TouchableOpacity,Image,Modal} from 'react-native'
import {React,useState} from 'react'

const Notification = ({navigation}) => {
  const [ismodalVisible, setModalVisible] = useState(false);
  const toggleModal = () => {
    setModalVisible(!ismodalVisible);
  };
    const [notification, setNotification] = useState([
      "Create a club with your friends and start playing.",
      "Your profile has been created.come and play",
      "Oops! something is incomplete",
      "Create a club with your friends and start playing Your................"
    ])
    const deleteByIndex= index=>{
      setNotification(oldValues=>{
        return oldValues.filter(notification=>notification !== index)
      })
    }
//  const goToMessageScreen = () => { 
//     navigation.navigate('Notification1', { 
//       paramKey:message, 
//     }); 
//   }; 
  return (
    <View style={{backgroundColor:'black',height:900,}} >
    <TouchableOpacity  onPress={() => navigation.navigate('Notification1')} >
 
 <Image style={{marginLeft:20,top: 35,}}
 source={require('../../../assets/back1.png')} />

</TouchableOpacity>
   <Text style={{fontWeight:600,fontSize:25,color:'white',left:80,}}>Notifications</Text>
    {notification.map((notification,index)=>{})}
   <View key={notification} style={{alignItems:'flex-start',flexDirection:'row',maxWidth:300}}>
    <Text style={{color:'rgba(73, 82, 254, 1)',fontWeight:700,fontSize:80,}}>.</Text>
    <TouchableOpacity onPress={()=>navigation.navigate('Notification1')} >
    <Text    style={{color:'white',fontWeight:600,fontSize:20,paddingTop:60,paddingLeft:20}}>{notification}</Text>
    </TouchableOpacity>
    <TouchableOpacity onPress={() => setModalVisible(true)}>
    <Image  style={{top:65,}} source={require('../../../assets/threedot.png')}/>
</TouchableOpacity>

   </View>
   <View style={{alignItems:'flex-start',flexDirection:'row',maxWidth:300}}>
    <Text style={{color:'rgba(73, 82, 254, 1)',fontWeight:700,fontSize:80,}}>.</Text>
    <Text style={{color:'white',fontWeight:600,fontSize:20,paddingTop:60,paddingLeft:20}}>{notification}</Text>
<TouchableOpacity onPress={() => setModalVisible(true)}>
    <Image  style={{top:65,}} source={require('../../../assets/threedot.png')}/>
</TouchableOpacity>
   </View>
   <View style={{alignItems:'flex-start',flexDirection:'row',maxWidth:300}}>
    <Text style={{color:'rgba(73, 82, 254, 1)',fontWeight:700,fontSize:80,}}>.</Text>
    <Text style={{color:'white',fontWeight:600,fontSize:20,paddingTop:60,paddingLeft:20}}>{notification}</Text>
    <TouchableOpacity onPress={() => setModalVisible(true)}>
    <Image  style={{top:65,}} source={require('../../../assets/threedot.png')}/>
</TouchableOpacity>
   </View>
   <View style={{alignItems:'flex-start',flexDirection:'row',maxWidth:300}}>
    <Text style={{color:'rgba(73, 82, 254, 1)',fontWeight:700,fontSize:80,}}>.</Text>
    <Text onPress={() => navigation.navigate('Notification1')} style={{color:'white',fontWeight:600,fontSize:20,paddingTop:60,paddingLeft:20}}>{notification} </Text>
    
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
              <TouchableOpacity  onClick={()=> deleteByIndex(index)}>
         <Text style={{color:'red', }}>Delete notifications</Text>
         </TouchableOpacity>
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
        top: 580,
        maxWidth: 340,
        left: 5,
        right: 80,
        borderRadius: 20,
      },
})