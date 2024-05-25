import React, { useState } from 'react';
import { StyleSheet, Text, TextInput, View, Alert, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import WalletMainBackground from '../../Components/Wallet/WalletMainBackground';
import GradientVarientOneBtn from '../../Components/Gradient/GradientVariantOneBtn';

const BankPassword = ({ navigation, route }) => {
  const [enteredPassword, setEnteredPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);

  const { amount, accountNumber } = route.params ?? { amount: 0, accountNumber: '' };

  const handleContinue = () => {
    if (!enteredPassword) {
      Alert.alert('Error', 'Please enter the password');
      return;
    }

    if (enteredPassword === '1234') {
      navigation.navigate('TransferSuccessPopup', { amount, accountNumber });
    } else {
      Alert.alert('Error', 'Wrong password');
    }
  };

  return (
    <View style={styles.container}>
      <WalletMainBackground onBackPress={() => navigation.goBack()} />
      <View style={styles.contentContainer}>
        <Text style={styles.title}>Total Amount to be Sent</Text>
        <Text style={styles.amount}>₹{amount}</Text>
        <View style={styles.inputContainer}>
          <Ionicons name="key-outline" size={24} color="white" style={styles.icon} />
          <TextInput
            style={styles.input}
            placeholder="Enter Password"
            placeholderTextColor="#ccc"
            secureTextEntry={!showPassword}
            value={enteredPassword}
            onChangeText={setEnteredPassword}
          />
          <TouchableOpacity
            style={styles.eyeIcon}
            onPress={() => setShowPassword(!showPassword)}
          >
            <Ionicons name={showPassword ? "eye-outline" : "eye-off-outline"} size={24} color="white" />
          </TouchableOpacity>
        </View>
        <TouchableOpacity onPress={() => navigation.navigate('ForgotPassword')}>
          <Text style={styles.forgotPassword}>Forgot Password?</Text>
        </TouchableOpacity>
        <GradientVarientOneBtn
          btnText="Continue"
          onPress={handleContinue}
        />
      </View>
    </View>
  );
};

export default BankPassword;

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
  },
  title: {
    fontSize: 18,
    color: 'white',
    marginBottom: 10,
  },
  amount: {
    fontSize: 24,
    color: 'white',
    fontWeight: 'bold',
    marginBottom: 20,
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#444',
    borderRadius: 10,
    marginBottom: 10,
    paddingHorizontal: 10,
  },
  icon: {
    marginRight: 10,
  },
  input: {
    flex: 1,
    height: 50,
    color: 'white',
  },
  eyeIcon: {
    marginLeft: 10,
  },
  forgotPassword: {
    color: 'white',
    marginBottom: 20,
    textDecorationLine: 'underline',
  },
});
