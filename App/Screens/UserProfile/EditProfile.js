import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image, TextInput } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import Header from '../../Components/DashboardHeader/Header';

const EditProfile = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Header />
      <View style={styles.content}>
        <View style={styles.backimg}>
          <Image source={require('../../../assets/lets-icons_back.png')} />
        </View>
        <View style={styles.tstprofile}>
          <Text style={styles.tstprofileText}>User Profile</Text>
        </View>
        <View style={styles.inputcontainer}>
          <View style={styles.inputSection}>
            <Text style={styles.label}>Name</Text>
            <TextInput
              placeholder=''
              placeholderTextColor={'#ffffff'}
              keyboardType='default'
              style={styles.input}
            />
            <View style={styles.inputSection}>
              <Text style={styles.label}>Email</Text>
              <View style={styles.emailInput}>
                <TextInput
                  placeholder=''
                  placeholderTextColor={'#FFFFFF'}
                  style={styles.input}
                />
                <Image style={styles.icon} source={require('../../../assets/verifynumber.png')} />
              </View>
            </View>
            <View style={styles.inputSection}>
              <Text style={styles.label}>Phone</Text>
              <View style={styles.phoneInput}>
                <TextInput
                  placeholder=''
                  placeholderTextColor={'#FFFFFF'}
                  style={styles.input}
                />
                <Image style={styles.icon} source={require('../../../assets/verifynumber.png')} />
              </View>
            </View>
            <View style={styles.inputSection}>
              <Text style={styles.label}>Date</Text>
              <TextInput
                placeholder=''
                placeholderTextColor={'#ffffff'}
                keyboardType='default'
                style={styles.input}
              />
            </View>
            <View style={styles.inputSection}>
              <Text style={styles.label}>AdharCard No.</Text>
              <TextInput
                placeholder=''
                placeholderTextColor={'#ffffff'}
                keyboardType='default'
                style={styles.input}
              />
            </View>
          </View>
          <View>
            <Text style={styles.termsText}>Terms & Conditions</Text>
          </View>
          <TouchableOpacity
            onPress={() => navigation.navigate('profile Detail')}>
            <LinearGradient
              colors={['#EA59E4', '#C508BD', '#910C8C']}
              style={styles.btnStyle}
              start={{ x: 0.0, y: 0.0 }}
              end={{ x: 0.5, y: 0.15 }}>
              <Text style={styles.btnText}>Edit Details</Text>
            </LinearGradient>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default EditProfile;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'black',
  },
  content: {
    marginTop: 30, 
    flex: 1,
  },
  backimg: {
    marginHorizontal: 20,
    marginVertical: 20
  },
  tstprofile: {
    top: -15
  },
  tstprofileText: {
    color: '#FFFFFF',
    fontSize: 25,
    fontWeight: '700',
    textAlign: 'center',
  },
  inputcontainer: {
    alignSelf: 'center',
    top: 15
  },
  inputSection: {
    marginBottom: 20,
  },
  label: {
    color: '#FFFFFF',
    fontSize: 18,
    marginBottom: -5,
  },
  input: {
    borderBottomColor: 'rgba(255, 255, 255, 0.5)',
    width: 280,
    borderBottomWidth: 1,
    color: '#FFFFFF',
    fontSize: 18,
    paddingBottom: 10
  },
  emailInput: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  phoneInput: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  icon: {
    marginLeft: 10,
  },
  termsText: {
    color: '#910C8C',
    fontSize: 15,
    fontWeight: '700',
    marginVertical: 10,
    textAlign: 'center',
    textDecorationLine: 'underline',
  },
  btnStyle: {
    width: 300,
    alignSelf: 'center',
    borderWidth: 1,
    padding: 10,
    borderColor: '#FFFFFF',
    borderRadius: 15,
  },
  btnText: {
    textAlign: 'center',
    color: '#FFFFFF',
    padding: 6,
    fontSize: 18
  }
});
