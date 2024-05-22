import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import { BlurView } from 'expo-blur';

import { useNavigation } from '@react-navigation/native';
import WalletMainBackground from '../../Components/Wallet/WalletMainBackground';
import GradientVarientOneBtn from '../../Components/Gradient/GradientVariantOneBtn';


const NotVerifiedWallet = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <WalletMainBackground />
      
      <BlurView 
        blurType="light"
        blurAmount={50}
        overlayColor="#FFFFFF" style={styles.contentContainer}>
          <GradientVarientOneBtn
style={styles.button}
btnText="ADD to wallet"
isDisabled
// onPress={() => console.log('Add to wallet pressed')}
/>
<GradientVarientOneBtn
style={styles.button}
btnText="Withdrawal"
isDisabled
// onPress={() => console.log('Withdrawal pressed')}
/>

</BlurView>
      <Text style={styles.verifyText}>
          Proceed to Verify your details & Join The Club
        </Text>
        <TouchableOpacity
          style={styles.verifyButton}
          onPress={() => navigation.navigate('NotVerifiedWallet', { screen: 'CreatUrProfile' })}
        >
          <Text style={styles.verifyButtonText}>Verify</Text>
        </TouchableOpacity>
      </View>
  );
}; 

export default NotVerifiedWallet ;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#333',
  },
  contentContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
    top: -80,
    
  },

  button: {
    marginVertical: 10,
    width: '80%',
  },
  verifyText: {
    // marginTop: 30,
    marginBottom:120,
    fontSize: 20,
    fontWeight : "bold",
    color: '#fff',
    textAlign: 'center',
  },
  verifyButton: {
    backgroundColor: '#28A745',
    paddingVertical: 15,
    paddingHorizontal: 30,
    borderRadius: 5,
    width: '40%',
    justifyContent: 'center',
    alignItems: 'center',
    marginLeft: 140,
    top : -90,
   
  },
  verifyButtonText: {
    color: '#fff',
    fontSize: 20,
    fontWeight: 'bold',
    letterSpacing: 5,
  },
});
