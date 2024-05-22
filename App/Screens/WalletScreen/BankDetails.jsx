import React, { useState } from 'react';
import { StyleSheet, Text, TextInput, View, Alert } from 'react-native';
import WalletMainBackground from '../../Components/Wallet/WalletMainBackground';
import GradientVarientOneBtn from '../../Components/Gradient/GradientVariantOneBtn';

const BankDetails = ({ navigation }) => {
  const [accountHolderName, setAccountHolderName] = useState('');
  const [accountNumber, setAccountNumber] = useState('');
  const [ifscCode, setIfscCode] = useState('');
  const [amount, setAmount] = useState('');

  const handleTransfer = () => {
    if (!accountHolderName ||!accountNumber || !ifscCode || !amount) {
      Alert.alert('Error', 'Please fill in all fields');
      return;
    }

    
    navigation.navigate("BankDetailsSecond", {
      accountHolderName,
      accountNumber,
      ifscCode,
      amount
    });
  };
  return (
    <View style={styles.container}>
      <WalletMainBackground onBackPress={() => navigation.navigate("AddToWallet")} />
      <View style={styles.formContainer}>
        <Text style={styles.title}>Sending money from Bank to Wallet</Text>
        <TextInput
          style={styles.input}
          placeholder="Account Holder Name"
          placeholderTextColor="#ccc"
          value={accountHolderName}
          onChangeText={setAccountHolderName}
        />
        <TextInput
          style={styles.input}
          placeholder="Account n."
          placeholderTextColor="#ccc"
          value={accountNumber}
          onChangeText={setAccountNumber}
          keyboardType="numeric"
        />
        <TextInput
          style={styles.input}
          placeholder="IFSC code"
          placeholderTextColor="#ccc"
          value={ifscCode}
          onChangeText={setIfscCode}
        />
        <TextInput
          style={styles.input}
          placeholder="Amount"
          placeholderTextColor="#ccc"
          value={amount}
          onChangeText={setAmount}
          keyboardType="numeric"
        />
         <GradientVarientOneBtn 
          btnText={"Proceed Securely"}
          onPress={handleTransfer}
        />
      </View>
    </View>
  );
};

export default BankDetails;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#2A2E2E',
  },
  walletContainer: {
    backgroundColor: '#2A2E2E',
    padding: 20,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
  },
  backButton: {
    marginRight: 10,
  },
  balanceContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    flex: 1,
  },
  balanceText: {
    fontSize: 18,
    color: 'white',
    marginLeft: 10,
    flex: 1,
  },
  balanceAmount: {
    fontSize: 18,
    color: '#ECB425',
    fontWeight: 'bold',
  },
  formContainer: {
    // flex: 1,
    backgroundColor: '#FFFFFF',
    borderRadius: 20,
    padding: 20,
    alignItems: 'center',
    marginTop: 80
    
    
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#001F54',
    marginBottom: 80,
  },
  input: {
    width: '100%',
    height:50,
    borderColor: '#ccc',
    borderWidth: 1,
    borderRadius: 5,
    marginBottom: 15,
    paddingHorizontal: 10,
    fontSize: 16,
    backgroundColor: '#fff',
  },
  
 
});
