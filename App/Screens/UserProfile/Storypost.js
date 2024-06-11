import { StyleSheet, Text, View,Image, TouchableOpacity, ScrollView , Dimensions } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native';


const Storypost = ({route}) => {
  // console.log(route.params);
  const selectedItem = route.params.item
  const navigation = useNavigation();

  return (
     <>
    <View style={styles.container}>
     <ScrollView showsVerticalScrollIndicator={false}>
    <TouchableOpacity onPress={() => navigation.goBack()}>
    <View>
        <TouchableOpacity onPress={() => navigation.goBack()}>
         <Image style={{marginHorizontal:0, marginVertical:10}} source={require("../../../assets/lets-icons_back.png")}/>
         </TouchableOpacity>
    </View>
    <View style={{marginVertical:20}}>
       <View style={styles.head_pri_usern}>
          <View style={{ width:280 , alignSelf:"center"}}>
            <Text style={styles.headerText}>Winners are announced monthly</Text>
            </View>
                    <View style={styles.profileContainer}>
                      <Image source={selectedItem.image} style={styles.profileImage} />
                         <Text style={styles.rankText}>#{selectedItem.userRank}</Text>
                     </View> 
               <View>
            {/* <View style={styles.profiledetail}> */}
                    <Text style={styles.userName}>{selectedItem.userName}</Text>
                </View>
       </View>
            <View style={styles.amout_img}>
                <Text style={styles.totalWinnings}>Total Winnings: {selectedItem.totalWinnings}</Text>
                     <View style={styles.coinsImage}>
                         {selectedItem.totalWinnings >= 20000000 &&  (
                          <Image source={require('../../../assets/garimaimage.png')} />
                         )}
                         {selectedItem.totalWinnings < 20000000 && selectedItem.totalWinnings >= 18000000 && (
                         <Image source={require('../../../assets/vibhaimage.png')}/>
                         )}
                         {selectedItem.totalWinnings < 18000000 && selectedItem.totalWinnings >= 16000000 && (
                         <Image source={require('../../../assets/goyaliamge.png')}/>
                        )}
                        {selectedItem.totalWinnings < 16000000 && selectedItem.totalWinnings >= 14000000 && (
                        <Image style={styles.bagmoney} source={require('../../../assets/nitshimage.png')}/>
                        )}
                      {selectedItem.totalWinnings < 14000000 && selectedItem.totalWinnings >= 12000000 && (
                       <Image style={styles.bagmoney} source={require('../../../assets/nitshimage.png')}/>
                        )}
                      {selectedItem.totalWinnings < 12000000 && selectedItem.totalWinnings >= 10000000 && (
                      <Image source={require('../../../assets/vibhaimage.png')}/>
                        )}
                    </View>
            </View>
                          <View style={styles.textcontent}>
                                 <Text style={styles.infoText}>Total Games: {selectedItem.totalGames}</Text>
                                 <Text style={styles.infoText}>System Generated Clubs: {selectedItem.systemGeneratedClubs}</Text>
                                 <Text style={styles.infoText}>Private Clubs: {selectedItem.privateClubs}</Text>
                                 <Text style={styles.infoText}>Completed BC: {selectedItem.completedBC}</Text>
                           </View>
              {/* </View> */}
              </View>
    </TouchableOpacity>
    </ScrollView>
    </View>
  </>
 

  )
}

export default Storypost

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#333',
    justifyContent: 'center',
    flexDirection:"column",
    paddingLeft:10,
    paddingRight:10,
  },
  back_content:{
   flexDirection:"row",
   gap:15,
  },
  headerText: {
    fontSize: 20,
    color: 'white',
    alignItems:"center",
    textAlign:"center",
    fontWeight:"bold",
  },
  head_pri_usern:{
      flexDirection:"column",
      gap:30
  },
  profileContainer: {
    alignItems: 'center',
    // margin:30,
  },
  profileImage: {
    width: 130,
    height: 130,
    borderRadius: 50,
  },
  rankText: {
    fontSize: 24,
    color: 'gold',
    fontWeight: 'bold',
    marginTop: -20,
    marginLeft: 50,
  },
  profiledetail:{
  flexDirection:"column",
  alignItems:"center",
  gap:15,
  },
  userName: {
    fontSize: 24,
    color: 'white',
    fontWeight: 'bold',
    textAlign:"center"
  },
  amout_img:{
    flexDirection:"column",
    gap:30,
  },
  totalWinnings: {
    fontSize: 18,
    color: '#FFC107',
    textAlign:"center",
    paddingTop:20,
    fontWeight: 'bold',
  },
  coinsImage: {
    width: 120,
    height: 170,
    alignSelf:"center"
  },
  bagmoney:{
    alignSelf:"center"
  },
  infoText: {
    fontSize: 20,
    color: 'white',
    fontWeight: 'bold',
  },
  textcontent:{
    flexDirection:"column",
    gap:30,
    alignSelf:"center",
     marginVertical:60
  },
})