import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, TouchableOpacity, FlatList, Image } from 'react-native';
import WalletMainBackground from '../../Components/Wallet/WalletMainBackground';

const WithdrawAccount = ({ navigation, route }) => {
  const currentBalance = route.params?.currentBalance || 6000;
  const amount = route.params?.amount || 0;
  const [bankAccounts, setBankAccounts] = useState([]);

  // Mock data 
  useEffect(() => {
    const fetchBankAccounts = async () => {
      const mockData = [
        { id: '1', name: 'ICICI Bank', logo: 'https://i.pinimg.com/originals/ff/d5/31/ffd531a6a78464512a97848e14506738.png' },
        
      ];
      setBankAccounts(mockData);
    };
    fetchBankAccounts();
  }, []);

  const renderItem = ({ item }) => (
    <TouchableOpacity style={styles.bankCard} onPress={() => navigation.navigate('WithdrawDetails', { bank: item, amount, currentBalance })}>
      <View style={styles.bankInfo}>
        <Image source={{ uri: item.logo }} style={styles.bankLogo} />
        <Text style={styles.bankName}>{item.name}</Text>
      </View>
      <Text style={styles.proceedText}>Proceed {'>'}</Text>
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
      <WalletMainBackground balance={currentBalance} onBackPress={() => navigation.navigate('Withdraw')} />
      <View style={styles.contentContainer}>
        <Text style={styles.title}>Select Bank account</Text>
        <FlatList
          data={bankAccounts}
          renderItem={renderItem}
          keyExtractor={item => item.id}
        />
      </View>
    </View>
  );
};

export default WithdrawAccount;

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
    color: '#FFFFFF',
    marginBottom: 20,
  },
  bankCard: {
    width: '100%',
    backgroundColor: '#FFFFFF',
    borderRadius: 10,
    padding: 20,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 15,
  },
  bankInfo: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  bankLogo: {
    width: 40,
    height: 40,
    marginRight: 15,
  },
  bankName: {
    fontSize: 18,
    color: '#001F54',
  },
  proceedText: {
    fontSize: 16,
    color: '#007BFF',
  },
});
