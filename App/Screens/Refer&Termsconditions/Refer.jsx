import { StyleSheet, Text, View, TouchableOpacity, Linking } from 'react-native'
import React from 'react'
import Ionicons from 'react-native-vector-icons/Ionicons'
import GradientVarientOneBtn from '../../Components/Gradient/GradientVariantOneBtn'

const Refer = ({ navigation }) => {
  return (
    <View style={styles.main}>
      <View style={styles.container}>
        <Text style={styles.earnText}>Refer now & earn up to <Text style={styles.earnAmount}>₹50</Text></Text>
        <Text style={styles.sendText}>Send a referral link to your friends via</Text>
        <View style={styles.iconContainer}>
          <TouchableOpacity onPress={() => Linking.openURL('https://www.whatsapp.com')}>
            <Ionicons name="logo-whatsapp" size={40} color="#25D366" />
          </TouchableOpacity>
          <TouchableOpacity onPress={() => Linking.openURL('https://www.facebook.com')}>
            <Ionicons name="logo-facebook" size={40} color="#4267B2" />
          </TouchableOpacity>
          <TouchableOpacity onPress={() => Linking.openURL('https://play.google.com/store/apps/details?id=com.google.android.apps.messaging&hl=en&gl=US')}>
            <Ionicons name="chatbubble-ellipses-outline" size={40} color="#000000" />
          </TouchableOpacity>
        </View>
      </View>

      <TouchableOpacity style={styles.backButton} onPress={() => navigation.goBack()}>
        <Ionicons name="arrow-back" size={30} color="#000000" />
      </TouchableOpacity>

      <Text style={styles.referralText}>Referral Code</Text>
      <View style={[styles.wrapper, styles.simpleButton]}>
        <Text style={styles.referralCode}>AMITXV500</Text>
      </View>

      <Text style={styles.howItWorksText}>How does it work?</Text>

      <View style={styles.stepContainer}>
        <View style={styles.circle}></View>
        <Text style={styles.stepText}>Invite your friends to register on BC game</Text>
      </View>

      <View style={styles.stepContainer}>
        <View style={styles.circle}></View>
        <Text style={styles.stepText}>When your friend registers on the App, both of you will get ₹50 worth of Reward Points</Text>
      </View>

      <View style={styles.stepContainer}>
        <View style={styles.circle}></View>
        <Text style={styles.stepText}>Reward money can be used in your game</Text>
      </View>

      <GradientVarientOneBtn
        btnText={"REFER NOW"}
        onPress={() => navigation.navigate("ReferModal")}
        style={styles.btn}
      />
    </View>
  )
}

export default Refer

const styles = StyleSheet.create({
  main: {
    flex: 1,
    backgroundColor: 'white',
  },
  container: {
    backgroundColor: '#960D91',
    paddingTop: 80,
    paddingBottom: 40,
  },
  earnText: {
    color: '#FFFFFF',
    fontWeight: '600',
    textAlign: 'center',
    marginTop: 20,
  },
  earnAmount: {
    color: '#F9B60C',
  },
  sendText: {
    color: '#FFFFFF',
    fontWeight: '600',
    textAlign: 'center',
    marginTop: 5,
  },
  iconContainer: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    padding: 30,
    paddingBottom: 20,
    paddingTop: 40,
  },
  backButton: {
    position: 'absolute',
    top: 40,
    left: 20,
  },
  referralText: {
    color: '#910C8C',
    fontSize: 25,
    fontWeight: '600',
    textAlign: 'center',
    marginTop: 20,
  },
  wrapper: {
    borderRadius: 10,
    paddingVertical: 10,
    paddingHorizontal: 25,
    alignSelf: 'center',
    marginTop: 10,
  },
  simpleButton: {
    backgroundColor: "#F2CF19",
  },
  referralCode: {
    fontSize: 25,
    fontWeight: '600',
    color: 'black',
  },
  howItWorksText: {
    color: '#910C8C',
    fontSize: 25,
    fontWeight: '600',
    textAlign: 'center',
    marginTop: 20,
  },
  stepContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 20,
    paddingHorizontal: 20,
  },
  circle: {
    width: 60,
    height: 60,
    backgroundColor: '#D9D9D9',
    borderRadius: 30,
  },
  stepText: {
    color: '#910C8C',
    fontSize: 18,
    fontWeight: '500',
    marginLeft: 20,
    flex: 1,
  },
  btn: {
    alignSelf: 'center',
    marginTop: 30,
    borderWidth: 1,
    borderColor: "#DDBBE6",
    borderRadius: 15,
    overflow: "hidden",
  },
})
