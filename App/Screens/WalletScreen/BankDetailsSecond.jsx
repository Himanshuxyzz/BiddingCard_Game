import React from 'react';
import { StyleSheet, Text, TouchableOpacity, View, Image } from 'react-native';
import { AntDesign, Ionicons } from '@expo/vector-icons';
import WalletMainBackground from '../../Components/Wallet/WalletMainBackground';
import GradientVarientOneBtn from '../../Components/Gradient/GradientVariantOneBtn';




const BankDetailsSecond = ({ route, navigation }) => {
  const { accountHolderName, accountNumber, amount }  = route.params;
    return (
      <View style={styles.container}>
        <WalletMainBackground onBackPress={() => navigation.goBack()} />
        <View style={styles.contentContainer}>
          <Text style={styles.title}>Sending money from Bank to wallet</Text>
          <View style={styles.bankDetails}>
          <Text style={styles.bankName}>{accountHolderName}</Text>
            <View style={styles.accountInfoContainer}>
              <Image
                source={require('../../../assets/Images/HdfcL.png')}
                style={styles.bankLogo}
              />
              <View style={styles.accountInfo}>
                <Text style={styles.accountDetails}>HDFC/Ac No.</Text>
                <Text style={styles.accountNumber}>{accountNumber}</Text>
                {/* <Ionicons name="information-circle-outline" size={20} color="red" /> */}
              </View>
            </View>
          </View>
          <View style={styles.amountSection}>
            <Text style={styles.amountTitle}>Amount to be sent</Text>
            <Text style={styles.amount}>₹ {amount}</Text>
            <GradientVarientOneBtn style={styles.proceedButton} btnText="Proceed Securely"  onPress={() => navigation.navigate("BankPassword", { amount })} />
          </View>
        </View>
      </View>
    );
  };
  
  export default BankDetailsSecond;
  
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#333',
    },
    contentContainer: {
      flex: 1,
      backgroundColor: '#f8f8f8',
      borderTopLeftRadius: 20,
      borderTopRightRadius: 20,
      padding: 20,
      alignItems: 'center',
      marginTop: 20,
    },
    title: {
      fontSize: 20,
      fontWeight: 'bold',
      color: '#001F54',
      marginBottom: 20,
    },
    bankDetails: {
      width: '100%',
      backgroundColor: '#E494EB',
      borderRadius: 10,
      padding: 20,
      marginBottom: 20,
    },
    bankName: {
      fontSize: 18,
      fontWeight: 'bold',
      color: '#001F54',
      marginBottom: 12,
      marginLeft :60,
    },
    accountInfoContainer: {
      flexDirection: 'row',
      alignItems: 'center',
    },
    bankLogo: {
      width: 40,
      height: 40,
      marginRight: 12,
      marginTop: -20,
      borderRadius: 20,
    },
    accountInfo: {
      flexDirection: 'column',
    },
    accountDetails: {
      fontSize: 18,
      color: '#54B1CE',
    },
    accountNumber: {
      fontSize: 17,
      color: '#54B1CE',
      marginRight: 5,
    },
    amountSection: {
      width: '100%',
      backgroundColor: '#E494EB',
      borderRadius: 10,
      padding: 20,
      alignItems: 'center',
    },
    amountTitle: {
      fontSize: 20,
      fontWeight: 'bold',
      color: '#001F54',
      marginBottom: 10,
    },
    amount: {
      fontSize: 24,
      fontWeight: 'bold',
      color: '#fff',
      marginBottom: 20,
    },
    proceedButton: {
      width: '100%',
      borderRadius: 5,
      paddingVertical: 15,
    },
  });