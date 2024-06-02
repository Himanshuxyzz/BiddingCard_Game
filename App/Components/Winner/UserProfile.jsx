import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';

const UserProfile = ({
  userRank,
  userName,
  totalWinnings,
  totalGames,
  systemGeneratedClubs,
  privateClubs,
  completedBC,
  userImage
}) => {
  return (
    <View style={styles.container}>
      <Text style={styles.headerText}>Winners are announced monthly</Text>
      <View style={styles.profileContainer}>
        <Image source={{ uri: userImage }} style={styles.profileImage} />
        <Text style={styles.rankText}>#{userRank}</Text>
      </View>
      <Text style={styles.userName}>{userName}</Text>
      <Text style={styles.totalWinnings}>Total Winnings: {totalWinnings}</Text>
      <Image source={require('../../../assets/Images/Winner.png')} style={styles.coinsImage} />
      <Text style={styles.infoText}>Total Games: {totalGames}</Text>
      <Text style={styles.infoText}>System Generated Clubs: {systemGeneratedClubs}</Text>
      <Text style={styles.infoText}>Private Clubs: {privateClubs}</Text>
      <Text style={styles.infoText}>Completed BC: {completedBC}</Text>
    </View>
  );
};

export default UserProfile;

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
    marginBottom: 10,
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
    marginTop: -20,
    marginLeft: 50,
  },
  userName: {
    fontSize: 24,
    color: 'white',
    fontWeight: 'bold',
    marginBottom: 10,
  },
  totalWinnings: {
    fontSize: 18,
    color: '#FFC107',
    marginBottom: 20,
  },
  coinsImage: {
    width: 100,
    height: 100,
    marginBottom: 20,
  },
  infoText: {
    fontSize: 16,
    color: 'white',
    marginBottom: 5,
  },
});
