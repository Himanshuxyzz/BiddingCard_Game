import React from 'react';
import { StyleSheet, Text, TouchableOpacity, View, Image } from 'react-native';
import { AntDesign } from '@expo/vector-icons';
import WalletMainBackground from '../../Components/Wallet/WalletMainBackground'; 





const AddToWallet = ({ navigation }) => {
  const handleProceed = () => {
    
    console.log('Proceed pressed');
  };

  return (
    <View style={styles.container}>
      <WalletMainBackground onBackPress={() => navigation.goBack()} />
      <View style={styles.contentContainer}>
        <Text style={styles.title}>Select Bank Account</Text>
        <View style={styles.bankCard}>
          <Image
           source={require("../../../assets/Images/HdfcL.png")}
            style={styles.bankLogo}
          />
          <View style={styles.bankInfo}>
            <Text style={styles.bankName}>HDFC Bank</Text>
            <TouchableOpacity style={styles.proceedButton} onPress={() => navigation.navigate("BankDetails")}>
              <Text style={styles.proceedText}>Proceed</Text>
              <AntDesign name="right" size={14} color="#000" />
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </View>
  );
};

export default AddToWallet;

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
    fontSize: 18,
    fontWeight: 'bold',
    color: '#001F54',
    marginBottom: 20,
  },
  bankCard: {
    width: '100%',
    backgroundColor: '#fff',
    borderRadius: 10,
    padding: 20,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    elevation: 5,
  },
  bankLogo: {
    width: 50,
    height: 50,
    resizeMode: 'contain',
  },
  bankInfo: {
    flex: 1,
    marginLeft: 20,
  },
  bankName: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#001F54',
    marginBottom: 10,
  },
  proceedButton: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  proceedText: {
    fontSize: 16,
    color: '#000',
    marginRight: 5,
  },
});
