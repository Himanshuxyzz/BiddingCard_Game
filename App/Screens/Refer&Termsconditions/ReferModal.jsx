import { StyleSheet, Text, View, Modal, Image, TouchableOpacity ,Linking} from 'react-native'
import React from 'react'
import GradientVarientOneBtn from '../../Components/Gradient/GradientVariantOneBtn'

const ReferModal = ({ navigation }) => {
  return (
    <View style={{ backgroundColor: '#960D91', overflow: 'visible', height: 800 }}>

      <TouchableOpacity onPress={() => navigation.navigate('Refer')} >
        <Image style={{ marginLeft: 30, top: 20, }}
          source={require('../../../assets/back1.png')} />
        </TouchableOpacity>
      <Modal
        theme={
          {
            colors: { backdrop: 'rgba(246, 223, 244, 1)' }
          }}
        animationType="fade"
        transparent={true}
        backdropOpacity={0.3}
        style={{ backgroundColor: 'rgba(246, 223, 244, 1)' }}
      >
        <View style={styles.main}>

          <TouchableOpacity onPress={() => Linking.openURL('https://www.whatsapp.com')} >
            <Image source={require('../../../assets/whatsapp.png')} style={{ marginLeft: 30, top: 50, }} />
          </TouchableOpacity>
          <Text style={{ top: 60, left: 30 }}>Whatsapp</Text>
          <TouchableOpacity onPress={() => Linking.openURL('https://www.facebook.com')} >

            <Image source={require('../../../assets/facebook2.png')} style={{ marginLeft: 50, left: 60, bottom: 30 }} />
          </TouchableOpacity>

          <Text style={{ left: 110, bottom: 20 }}>Facebook</Text>
          <TouchableOpacity onPress={() => Linking.openURL('https://play.google.com/store/apps/details?id=com.google.android.apps.messaging&hl=en&gl=US')} >

            <Image source={require('../../../assets/message1.png')} style={{ marginLeft: 50, left: 140, bottom: 110 }} />
          </TouchableOpacity>

          <Text style={{ left: 190, bottom: 102 }}>Messaging</Text>
          <TouchableOpacity onPress={() => Linking.openURL('https://mail.google.com')} >


            <Image source={require('../../../assets/email.png')} style={{ marginLeft: 50, left: 220, bottom: 193 }} />
          </TouchableOpacity>

          <Text style={{ left: 285, bottom: 185 }}>Email</Text>
          <TouchableOpacity onPress={() => Linking.openURL('')} >

            <Image source={require('../../../assets/copy.png')} style={{ left: 20, bottom: 180 }} />
          </TouchableOpacity>

          <Text style={{ left: 40, bottom: 175 }}>Copy</Text>
          <TouchableOpacity onPress={() => Linking.openURL('https://play.google.com/store/apps/details?id=com.google.android.apps.docs&hl=en_IN')} >

            <Image source={require('../../../assets/addtodrive.png')} style={{ left: 110, bottom: 260 }} />
          </TouchableOpacity>

          <Text style={{ left: 100, bottom: 255 }}>Add To Drive</Text>
          <TouchableOpacity onPress={() => Linking.openURL('')} >

            <Image source={require('../../../assets/more.png')} style={{ left: 200, bottom: 340 }} />
          </TouchableOpacity>

          <Text style={{ left: 215, bottom: 335 }}>More</Text>
        </View>

      </Modal>

      <GradientVarientOneBtn
        btnText={"SHARE"}
        onPress={() => navigation.navigate("")}
        style={styles.btn}
      />
    </View>
  )
}

export default ReferModal

const styles = StyleSheet.create({

  main: {
    backgroundColor: '#998787',
    maxHeight: 300,
    top: 200,
    maxWidth: 340,
    left: 10,
    right: 80,
    borderRadius: 10


  },
  btn: {
    top: 470,
    left: 20,
    bottom: 40,
    maxWidth: "90%",
    borderWidth: 1,
    borderColor: "#DDBBE6",
    borderRadius: 15,
    overflow: "hidden",
  },
})