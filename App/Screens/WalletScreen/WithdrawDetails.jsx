import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';
import WalletMainBackground from '../../Components/Wallet/WalletMainBackground';
import GradientVariantOneBtn from '../../Components/Gradient/GradientVariantOneBtn';

const WithdrawDetails = ({ navigation, route }) => {
  const currentBalance = route.params?.currentBalance || 0;
  const amountToBeSent = route.params?.amount || 0;
  const gstCharges = (amountToBeSent * 0.05).toFixed(2);
  const totalAmountToBeReturned = (amountToBeSent - gstCharges).toFixed(2);

  const bank = route.params?.bank;

  const [userDetails, setUserDetails] = useState({
    name: 'Raj Singh',
    bankName: bank?.name || 'ICIC Bank',
    accountNumber: 'XXXX XXXX 4387',
    logo: bank?.logo || 'https://via.placeholder.com/40',
  });

  useEffect(() => {
    //Backend url
  }, []);

  const handleProceed = () => {
    navigation.navigate("WithdrawPassword", {
      currentBalance: currentBalance,
      amountToBeReturned: totalAmountToBeReturned,
      accountNumber: userDetails.accountNumber
    });
  };

  return (
    <View style={styles.container}>
      <WalletMainBackground balance={currentBalance} onBackPress={() => navigation.navigate("WithdrawAccount")} />
      <View style={styles.contentContainer}>
        <Text style={styles.title}>Sending money from wallet to Bank</Text>
        <View style={styles.userDetailsContainer}>
          <Text style={styles.userName}>{userDetails.name}</Text>
          <Text style={styles.bankDetails}>
            {userDetails.bankName} A/c No. {userDetails.accountNumber}
          </Text>
          <Image source={{ uri: userDetails.logo }} style={styles.bankLogo} />
        </View>
        <View style={styles.amountDetailsContainer}>
          <Text style={styles.amountDetailText}>
            Amount to be sent  <Text style={styles.amount}>₹{amountToBeSent}</Text>
          </Text>
          <Text style={styles.amountDetailText}>
            Charges GST(5%) <Text style={styles.amount}>-₹{gstCharges}</Text>
          </Text>
          <Text style={styles.totalAmountText}>
            Total Amount to be returned <Text style={styles.totalAmount}>₹{totalAmountToBeReturned}</Text>
          </Text>
        </View>
        <GradientVariantOneBtn 
          btnText={"Proceed Securely"}
          onPress={handleProceed}
        />
      </View>
    </View>
  );
};

export default WithdrawDetails;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#2A2E2E',
  },
  contentContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#001F54',
    marginBottom: 20,
  },
  userDetailsContainer: {
    backgroundColor: '#FFFFFF',
    borderRadius: 10,
    padding: 20,
    alignItems: 'center',
    marginBottom: 20,
  },
  userName: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#001F54',
  },
  bankDetails: {
    fontSize: 16,
    color: '#001F54',
    marginBottom: 10,
  },
  bankLogo: {
    width: 40,
    height: 40,
  },
  amountDetailsContainer: {
    backgroundColor: '#E0BBE4',
    borderRadius: 10,
    padding: 20,
    alignItems: 'center',
    marginBottom: 20,
  },
  amountDetailText: {
    fontSize: 16,
    color: '#001F54',
    marginBottom: 10,
  },
  totalAmountText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#001F54',
    marginBottom: 10,
  },
  amount: {
    fontWeight: 'bold',
  },
  totalAmount: {
    fontWeight: 'bold',
    color: '#D80032',
  },
});
