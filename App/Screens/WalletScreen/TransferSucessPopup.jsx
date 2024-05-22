import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import WalletMainBackground from '../../Components/Wallet/WalletMainBackground';

const TransferSuccessPopup = ({ route,navigation }) => {
  const { amount, accountNumber } = route.params;

  return (
    <View style={styles.popupContainer}>
        <WalletMainBackground  onBackPress={() => navigation.goBack()} />
      <Text style={styles.popupHeader}>Transferred to wallet</Text>
      <Text style={styles.popupAmount}>₹{amount}</Text>
      <Text style={styles.popupAccountNumber}>A/c No. {accountNumber}</Text>
    </View>
  );
};

export default TransferSuccessPopup;

const styles = StyleSheet.create({
  popupContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#333',
  },
  popupHeader: {
    fontSize: 24,
    color: 'white',
    marginBottom: 10,
  },
  popupAmount: {
    fontSize: 36,
    color: 'green',
    marginBottom: 10,
  },
  popupAccountNumber: {
    fontSize: 18,
    color: 'white',
  },
});
