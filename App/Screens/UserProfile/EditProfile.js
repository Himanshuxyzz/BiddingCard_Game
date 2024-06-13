import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image, TextInput ,} from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { useNavigation } from '@react-navigation/native';



const EditProfile = () => {
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
     
      <View style={styles.content}>
        <View style={styles.backimg}>
        <TouchableOpacity 
        onPress={()=> navigation.goBack()}
        >
          <Image source={require('../../../assets/lets-icons_back.png')} />
          </TouchableOpacity>
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
              <Text style={styles.labeE} >Email</Text>
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
            onPress={() => navigation.navigate('profile')}>
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
    flex: 1,
  },
  backimg: {
    marginHorizontal: 20,
    marginVertical: 20
  },
  tstprofile: {
   textAlign:"center",
   marginVertical:10
  },
  tstprofileText: {
    color: '#FFFFFF',
    fontSize: 30,
    fontWeight: '700',
    textAlign: 'center',
  },
  inputcontainer: {
    alignSelf: 'center',
    justifyContent:"center",
    marginTop:40
  },
  inputSection: {
    marginBottom: 20,
  },
  label: {
    color: '#FFFFFF',
    fontSize: 22,
  },
  labeE:{
    color: '#FFFFFF',
    fontSize: 22,
    paddingTop:15
  },
  input: {
    borderBottomColor: 'rgba(255, 255, 255, 0.5)',
    width: 320,
    borderBottomWidth: 1,
    color: '#FFFFFF',
    fontSize: 22,
    paddingBottom: 10
  },
  emailInput: {
    flexDirection: 'row',
  },
  phoneInput: {
    flexDirection: 'row',
  },
  icon: {
    marginLeft:-30
  },
  termsText: {
    color: '#FFF',
    fontSize: 18,
    fontWeight: '700',
    marginVertical: 12,
    textAlign: 'center',
    textDecorationLine: 'underline',
  },
  btnStyle: {
    width: 320,
    alignSelf: 'center',
    borderWidth: 1,
    padding: 10,
    borderColor: '#FFFFFF',
    borderRadius: 15,
    top:130
  },
  btnText: {
    textAlign: 'center',
    color: '#FFFFFF',
    padding: 8,
    fontSize: 22
  }
});
