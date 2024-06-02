import React, { useState } from 'react';
import { StyleSheet, Text, TextInput, View, Alert, TouchableOpacity, Modal, Image, ScrollView, KeyboardAvoidingView, Platform, TouchableWithoutFeedback, Keyboard, Dimensions } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import WalletMainBackground from '../../Components/Wallet/WalletMainBackground';
import GradientVariantOneBtn from '../../Components/Gradient/GradientVariantOneBtn';

const { height: screenHeight } = Dimensions.get('window');

const BankPassword = ({ navigation, route }) => {
  const [enteredPassword, setEnteredPassword] = useState('password123');
  const [showPassword, setShowPassword] = useState(false);
  const [isModalVisible, setModalVisible] = useState(false);
  const amount = parseInt(route.params?.amount, 10) || 1000; // Mock amount
  const accountNumber = route.params?.accountNumber || 'XXXX';
  const balance = route.params?.balance || 0;

  const handleContinue = async () => {
    const validatePassword = async () => {
      await new Promise(resolve => setTimeout(resolve, 500));
      return enteredPassword === 'password123'; // Mock password validation
    };

    const isValid = await validatePassword();

    if (isValid) {
      setModalVisible(true);
      setTimeout(() => {
        setModalVisible(false);
        navigation.navigate('WalletMainVerified', { amountAdded: amount });
      }, 2000);
    } else {
      Alert.alert('Error', 'Wrong password');
    }
  };

  return (
    <KeyboardAvoidingView
      style={styles.container}
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      keyboardVerticalOffset={Platform.OS === 'ios' ? 60 : 80}
    >
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <View style={styles.inner}>
          <ScrollView contentContainerStyle={styles.scrollContainer}>
            <WalletMainBackground onBackPress={() => navigation.goBack()} balance={balance} />
            <View style={styles.contentContainer}>
              <Text style={styles.title}>Total Amount sent to your wallet</Text>
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
              <TouchableOpacity onPress={() => navigation.navigate('forgotPassword')}>
                <Text style={styles.forgotPassword}>Forgot Password?</Text>
              </TouchableOpacity>
              <GradientVariantOneBtn
                btnText="Continue"
                onPress={handleContinue}
              />
            </View>

            <Modal
              animationType="slide"
              transparent={true}
              visible={isModalVisible}
              onRequestClose={() => {
                setModalVisible(!isModalVisible);
              }}
            >
              <View style={styles.modalContainer}>
                <View style={styles.modalContent}>
                  <Image
                    source={require('../../../assets/Images/money.png')}
                    style={styles.successImage}
                  />
                  <Text style={styles.modalText}>Transferred to Wallet</Text>
                  <Text style={styles.modalAmount}>₹{amount}</Text>
                  <Text style={styles.modalAccount}>A/c No. {accountNumber}</Text>
                </View>
              </View>
            </Modal>
          </ScrollView>
        </View>
      </TouchableWithoutFeedback>
    </KeyboardAvoidingView>
  );
};

export default BankPassword;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#333',
  },
  inner: {
    flex: 1,
    justifyContent: 'flex-end',
    height: screenHeight,
  },
  scrollContainer: {
    flexGrow: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingVertical: 20,
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
  modalContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  modalContent: {
    width: 300,
    padding: 20,
    backgroundColor: 'white',
    borderRadius: 10,
    alignItems: 'center',
  },
  successImage: {
    width: 50,
    height: 50,
    marginBottom: 20,
  },
  modalText: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 10,
  },
  modalAmount: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 10,
  },
  modalAccount: {
    fontSize: 16,
    color: '#333',
  },
});
