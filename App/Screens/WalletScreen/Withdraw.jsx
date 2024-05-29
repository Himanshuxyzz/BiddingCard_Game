import React, { useState } from 'react';
import { StyleSheet, Text, TextInput, View, Alert } from 'react-native';
import WalletMainBackground from '../../Components/Wallet/WalletMainBackground';
import GradientVariantOneBtn from '../../Components/Gradient/GradientVariantOneBtn';

const Withdraw = ({ navigation, route }) => {
  const [amount, setAmount] = useState('');
  const currentBalance = route.params?.currentBalance || 6000;

  const handleWithdraw = () => {
    const amountValue = parseFloat(amount);
    if (!amount) {
      Alert.alert('Error', 'Please enter an amount to withdraw');
      return;
    }

    if (amountValue > currentBalance / 2) {
      Alert.alert('Error', 'You can only withdraw up to 50% of your current balance');
      return;
    }

    navigation.navigate('WithdrawAccount', { amount: amountValue, currentBalance });
  };

  return (
    <View style={styles.container}>
      <WalletMainBackground balance={currentBalance} onBackPress={() => navigation.navigate('WalletMainVerified')} />
      <View style={styles.contentContainer}>
        <Text style={styles.title}>Withdraw Amount</Text>
        <TextInput
          style={styles.input}
          placeholder="₹ 0"
          placeholderTextColor="#ccc"
          value={amount}
          onChangeText={(text) => setAmount(text.replace(/[^0-9]/g, ''))} // only digits allowed
          keyboardType="numeric"
        />
        <GradientVariantOneBtn
          style={styles.submitButton}
          btnText="Submit"
          onPress={handleWithdraw}
        />
        <Text style={styles.note}>
          you can only withdraw 50% from your BC in once{'\n'}wanna know why read <Text style={styles.link} onPress={navigation.navigate("TermnConditions")}>Terms & Conditions</Text>
        </Text>
      </View>
    </View>
  );
};

export default Withdraw;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#2A2E2E',
  },
  contentContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#FFFFFF',
    marginBottom: 20,
  },
  input: {
    width: '80%',
    height: 50,
    backgroundColor: '#FFFFFF',
    borderRadius: 10,
    paddingHorizontal: 10,
    fontSize: 18,
    textAlign: 'center',
    marginBottom: 20,
  },
  submitButton: {
    width: '80%',
    borderRadius: 10,
  },
  note: {
    color: '#FFFFFF',
    textAlign: 'center',
    marginTop: 20,
  },
  link: {
    color: '#ADD8E6',
    textDecorationLine: 'underline',
  },
});
