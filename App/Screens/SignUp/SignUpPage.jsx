import { ImageBackground, StyleSheet, Text, View, TextInput, TouchableOpacity } from 'react-native'
import React,{useState,useRef} from 'react'
import GradientVarientOneBtn from '../../Components/GradientBtn/GradientVariantOneBtn'
import { Modal } from 'react-native'
import WhiteText from '../../Components/WhiteText/WhiteText'
import { OtpInput } from 'react-native-otp-entry'
import Colors from '../../Utils/Colors'
import VerifyBtn from '../../Components/GradientBtn/VerifyBtn'

   
const SignUpPage = ({ navigation }) => {
const [ismodalVisible, setModalVisible] = useState(false);
const otpInputRef = useRef(null);
const [otp, setOtp] = useState(null);
const [resendText, setResendText] = useState(false);

const [otpMatched, setOtpMatched] = useState(null);
let TestOtp = 1234;
const toggleModal = () => {
  setModalVisible(!ismodalVisible);
};

const verifyOtp = (otpValue) => {
  const otpNumber = parseInt(otpValue);
  setOtp(otpNumber);
  // Check if the parsed value is a valid number
  if (!isNaN(otpNumber)) {
    // Check if otpNumber matches TestOtp
    setOtpMatched(otpNumber === TestOtp);
  } else {
    // Handle case where otpValue is not a valid number
    console.log("Invalid OTP:", otpValue);
    // Optionally, you can handle this case by setting otpMatched to false
    setOtpMatched(false);
  }
};
  return (

    <View style={styles.whole} >

      <Text style={styles.txt}>Sign Up </Text>
      <Text style={styles.txt1}>Create an account!</Text>
      <TextInput
        style={styles.input}
        placeholder='First Name'
        placeholderTextColor={Colors.INPUT_PLACEHOLDER}
      />
      <TextInput
        style={styles.input}
        placeholder='Last Name'
        placeholderTextColor={Colors.INPUT_PLACEHOLDER}
      />
      <TextInput
        style={styles.input}
        placeholder='Phone no.'
        placeholderTextColor={Colors.INPUT_PLACEHOLDER}
      />
      <TouchableOpacity
        onPress={() => setModalVisible(true)}>
        <Text style={styles.phonebtn} >verify</Text>
      </TouchableOpacity>
      <TextInput
        style={styles.input1}
        placeholder='Email'
        placeholderTextColor={Colors.INPUT_PLACEHOLDER}
      />
       <TouchableOpacity
         onPress={() => setModalVisible(true)}>
        <Text style={styles.phonebtn1} >verify</Text>
      </TouchableOpacity>
      <TextInput
        style={styles.input2}
        placeholder='Password'
        placeholderTextColor={Colors.INPUT_PLACEHOLDER}
      />
      <TextInput
        style={styles.input2}
        placeholder='Confirm Password'
        placeholderTextColor={Colors.INPUT_PLACEHOLDER}
      />
      <GradientVarientOneBtn
        btnText={"Submit"}
        onPress={() => navigation.navigate("LoginPage")}
        style={styles.btn1}
      />
      <Text style={styles.txt2}>Already have an account?</Text>
      <TouchableOpacity onPress={() => navigation.navigate("LoginPage")}><Text style={styles.txt3} >Login</Text></TouchableOpacity>
<Modal
theme={
  {colors: {backdrop: 'rgba(255, 255, 255, 0.2)'}
}}
  animationType="fade"
  transparent={true}
  visible={ismodalVisible}
  backdropOpacity={0.3}
>
    <View style={styles.main}>
          <WhiteText style={styles.subHeading}>
          Enter OTP, Check your Mail
          </WhiteText>  
          <View  style={styles.otp}>  
          <OtpInput
         
            ref={otpInputRef}
            autoFocus={false}
            numberOfDigits={4}
            focusColor={"white"}
            onFilled={(otp) => verifyOtp(otp)}
            textInputProps={{
              accessibilityLabel: "One-Time Password",
            }}
            theme={{
              pinCodeContainerStyle: {
                borderRadius: 99,
                width: 66,
                height: 64,
                backgroundColor: "rgba(255,255,255,0.1)",
                borderColor: "rgba(199,194,194,0.77)",
              },
              pinCodeTextStyle: {
                fontSize: 20,
                color: Colors.WHITE,
                fontWeight: "700",
              },
            }}
          />
          </View>
          <View
            style={{
              flexDirection: "column",
              gap: 2.5,
              alignItems: "center",
            }}
          >
            <View
              style={{ flexDirection: "row", gap: 2.5, alignItems: "center",top:40 }}
            >
              <Text
                style={{ color: Colors.WHITE, fontSize: 14, fontWeight: "500" }}
              >
                If you didn’t receive a code!
              </Text>
              <TouchableOpacity onPress={() => setResendText(true)}>
                <Text
                  style={{
                    color: Colors.LINK_COLOR,
                    fontSize: 18,
                    fontWeight: "700",
                    textDecorationLine: "underline",
                  }}
                >
                  Resend
                </Text>
              </TouchableOpacity>
             
            </View>
          </View>
          <VerifyBtn
        btnText={"Verify"}
        onPress={
          otp !== null && otp !== ""
            ? otpMatched !== null && !otpMatched
              ? toggleModal
              : () => {
                  navigation.navigate("LoginPage");
                  setOtp(null);
                  otpInputRef.current.clear();
                  setModalVisible(false);
                }
            : () => console.log("Please enter a valid OTP")
        }
        isDisabled={otp == ""}
        style={styles.btn}
      />
       
          </View>
         
</Modal>
    </View>

  )
}

export default SignUpPage

const styles = StyleSheet.create({

  whole: {
    flex: 1,
    justifyContent: 'center',
    paddingLeft: 100,
    backgroundColor: '#2A2E2E',
    paddingBottom: 50

  },
  txt: {
    fontWeight: 'bold',
    fontSize: 30,
    color: 'white',
    paddingLeft: 30,
    
  },
  txt1: {
    color: 'white',
    fontSize: 20,

  },
  input: {
    backgroundColor: '#FFFFFF1A',
    width: 290,
    height: 57,
    borderRadius: 10,
    paddingLeft: 20,
    marginTop: 20,
    right: 60,

  },
  input1: {
    backgroundColor: '#FFFFFF1A',
    width: 290,
    height: 57,
    borderRadius: 10,
    paddingLeft: 20,
    marginTop: 20,
    right: 60,
    bottom:40

  },
  input2: {
    backgroundColor: '#FFFFFF1A',
    width: 290,
    height: 57,
    borderRadius: 10,
    paddingLeft: 20,
    marginTop: 20,
    right: 60,
    bottom:80

  },
  btn1: {
    right: 40,
    top:-30,
    minWidth: "70%",
    borderWidth: 1,
    borderColor: "#DDBBE6",
    borderRadius: 15,
    overflow: "hidden",
  },
  txt2: {
    color: 'white',
    top: -120,
    right: 30
  },
  txt3: {
    color: 'blue',
    top: -140,
    right: 30,
    left: 130,
    textDecorationLine: 'underline',

  },
    phonebtn:{
    backgroundColor:"#2ED813",
    width:70,
    textAlign:"center",
    padding:10,
    borderRadius:10,
    textTransform:"capitalize",
    color:"#FFFFFF",
    top:-50,
    left:150,
  },
   phonebtn1:{
    backgroundColor:"#2ED813",
    width:70,
    textAlign:"center",
    padding:10,
    borderRadius:10,
    textTransform:"capitalize",
    color:"#FFFFFF",
    top:-90,
    left:150,
  },
  subHeading: {
    padding: 10,
    fontSize: 18,
    fontWeight: "500",
    // fontFamily: "Inter-Medium",
    textAlign: "center",
    top:20,
  },
  main:{
    backgroundColor: '#232727',
   minHeight:323,
   top:200,
   maxWidth:340,
   left:10,
   right:80,
   borderRadius:10


  },
  btn: {
    width:300,
    top: 70,
    left:18,
    minWidth: "80%",
    borderWidth: 1,
    borderColor: "#DDBBE6",
    borderRadius: 15,
    overflow: "hidden",
    backgroundColor:'green'
  },
  otp:{
    top:30,
    left:10,
    width:320
  },
  btnTwoVarientStyle: {
    backgroundColor: "#2ED813",
    padding: 15,
  },
})