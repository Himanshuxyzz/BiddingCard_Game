import React, { useState } from 'react';
import { StyleSheet, Text, TextInput, View, Alert, ScrollView, KeyboardAvoidingView, Platform, TouchableWithoutFeedback, Keyboard } from 'react-native';
import WalletMainBackground from '../../Components/Wallet/WalletMainBackground';
import GradientVarientOneBtn from '../../Components/Gradient/GradientVariantOneBtn';

const BankDetails = ({ navigation, route }) => {
  const currentBalance = parseInt(route.params?.currentBalance, 10) || 0;
  const [accountHolderName, setAccountHolderName] = useState('Test');
  const [accountNumber, setAccountNumber] = useState('12345678901');
  const [ifscCode, setIfscCode] = useState('ABC123');
  const [amount, setAmount] = useState('');
  const [accountNumberError, setAccountNumberError] = useState(false);

  const handleTransfer = () => {
    if (!accountHolderName || !accountNumber || !ifscCode || !amount) {
      Alert.alert('Error', 'Please fill in all fields');
      return;
    }

    if (accountNumber.length !== 11) {
      setAccountNumberError(true);
      return;
    } else {
      setAccountNumberError(false);
    }

    navigation.navigate("BankDetailsSecond", {
      accountHolderName,
      accountNumber,
      ifscCode,
      amount,
      balance: currentBalance,
    });
  };

  return (
    <KeyboardAvoidingView
      style={styles.container}
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      keyboardVerticalOffset={Platform.OS === 'ios' ? 60 : 80}
    >
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <ScrollView contentContainerStyle={styles.scrollContainer}>
          <WalletMainBackground balance={currentBalance} onBackPress={() => navigation.goBack()} />
          <View style={styles.formContainer}>
            <Text style={styles.title}>Sending money from Bank to Wallet</Text>
            <TextInput
              style={styles.input}
              placeholder="Account Holder Name"
              placeholderTextColor="#ccc"
              value={accountHolderName}
              onChangeText={setAccountHolderName}
              autoCapitalize="characters"
            />
            <TextInput
              style={[styles.input, accountNumberError && { borderColor: 'red' }]}
              placeholder="Account Number"
              placeholderTextColor="#ccc"
              value={accountNumber}
              onChangeText={(text) => {
                setAccountNumber(text);
                if (text.length !== 11) {
                  setAccountNumberError(true);
                } else {
                  setAccountNumberError(false);
                }
              }}
              keyboardType="numeric"
            />
            {accountNumberError && (
              <Text style={styles.errorText}>Please enter a valid 11-digit account number</Text>
            )}
            <TextInput
              style={styles.input}
              placeholder="IFSC Code"
              placeholderTextColor="#ccc"
              value={ifscCode}
              onChangeText={setIfscCode}
              autoCapitalize="characters"
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
        </ScrollView>
      </TouchableWithoutFeedback>
    </KeyboardAvoidingView>
  );
};

export default BankDetails;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#2A2E2E',
  },
  scrollContainer: {
    flexGrow: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingVertical: 20,
  },
  formContainer: {
    backgroundColor: '#FFFFFF',
    borderRadius: 20,
    padding: 20,
    alignItems: 'center',
    width: '90%',
    marginTop: 20,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#001F54',
    marginBottom: 20,
  },
  input: {
    width: '100%',
    height: 50,
    borderColor: '#ccc',
    borderWidth: 1,
    borderRadius: 5,
    marginBottom: 15,
    paddingHorizontal: 10,
    fontSize: 16,
    backgroundColor: '#fff',
  },
  errorText: {
    color: 'red',
    marginBottom: 10,
  },
});
