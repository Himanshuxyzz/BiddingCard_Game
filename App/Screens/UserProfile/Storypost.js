import { StyleSheet, Text, View,Image, TouchableOpacity, ScrollView } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native';

const Storypost = ({route}) => {
  console.log(route.params);
  const selectedItem = route.params.item
  const navigation = useNavigation();
  return (
   
    <View style={styles.container}>
    <TouchableOpacity onPress={() => navigation.goBack()}>
    <Text style={styles.headerText}>Winners are announced monthly</Text>
    <View style={styles.profileContainer}>
      <Image source={selectedItem.image} style={styles.profileImage} />
      <Text style={styles.rankText}>#{selectedItem.userRank}</Text>
    </View>
    <Text style={styles.userName}>{selectedItem.userName}</Text>
    <Text style={styles.totalWinnings}>Total Winnings: {selectedItem.totalWinnings}</Text>
    <Image source={require('../../../assets/money.png')} style={styles.coinsImage} />
    <Text style={styles.infoText}>Total Games: {selectedItem.totalGames}</Text>
    <Text style={styles.infoText}>System Generated Clubs: {selectedItem.systemGeneratedClubs}</Text>
    <Text style={styles.infoText}>Private Clubs: {selectedItem.privateClubs}</Text>
    <Text style={styles.infoText}>Completed BC: {selectedItem.completedBC}</Text>
    </TouchableOpacity>
  </View>

  )
}

export default Storypost

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#333',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
  },
  headerText: {
    fontSize: 18,
    color: 'white',
    marginBottom: 20,
  },
  profileContainer: {
    alignItems: 'center',
    marginBottom: 10,
  },
  profileImage: {
    width: 100,
    height: 100,
    borderRadius: 50,
  },
  rankText: {
    fontSize: 24,
    color: 'gold',
    fontWeight: 'bold',
    marginTop: -30,
    marginLeft: 50,
  },
  userName: {
    fontSize: 24,
    color: 'white',
    fontWeight: 'bold',
    marginBottom: 20,
    textAlign:"center"
  },
  totalWinnings: {
    fontSize: 18,
    color: '#FFC107',
    textAlign:"center",
    marginBottom: 25,
    fontWeight: 'bold',
  },
  coinsImage: {
    width: 130,
    height: 150,
    marginBottom: 20,
    alignSelf:"center"
  },
  infoText: {
    fontSize: 16,
    color: 'white',
    marginBottom: 10,
    fontWeight: 'bold',

  },
})