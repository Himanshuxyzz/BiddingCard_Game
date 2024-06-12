import { View,
  Text ,
   StyleSheet , 
   Image ,
    TextInput,
    ScrollView,
    TouchableOpacity,
   } from 'react-native'
import React, { useState ,useRef } from 'react'
import { LinearGradient } from 'expo-linear-gradient'
import Modal from 'react-native-modal'
import Colors from '../../Utils/Colors'
import { OtpInput } from 'react-native-otp-entry'
import VerifyBtn from '../../Components/Gradient/VerifyBtn'



// backimg

const ProfileDetail = ({navigation}) => {
 
 const [modelvisible , setModalVisible] = useState(false)
 const [emailverdone , setEmailVerDone] = useState(false)
 const [wrongemail , setWrongEmail] = useState(false)
 const[ phonevisible , setPhoneVisible] = useState(false)
 const otpInputRef = useRef(null);
 const [otp, setOtp] = useState(null);
 // const [resendText, setResendText] = useState(false);
 const [otpmatched, setOtpMatched] = useState(null);
 let TestOtp = 1234;
 const toggleModal = () => {
   setModalVisible(!modelvisible);
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
 
  <View style={styles.container}>
     <ScrollView>
     <TouchableOpacity 
     style={styles.backimg}
     onPress={()=>navigation.navigate("EditProfile")}>
     <Image source={require('../../../assets/lets-icons_back.png')}/> 
     </TouchableOpacity>

     <View>
       <Text style={styles.tstprofile}>User Profile</Text>
     </View>
     <View style={styles.inputcontainer}>
       <View style={styles.inputname}>
         <Text style={{color:"white", fontSize:22, marginBottom:0,}}>Name</Text>
           <TextInput
             placeholder=''
              placeholderTextColor={"#ffffff"}
              keyboardType='default'
              style ={{borderBottomColor:"rgba(255, 255, 255, 0.5)" , borderBottomWidth:1, color:"white", fontSize:18, paddingBottom:10}}
                    />
       <View style={styles.email}>
           <Text style={{color:"white", fontSize:22, bottom:20}}>Email</Text>
             <View style={styles.emailflex}>
            
               <TextInput
                  style ={{borderBottomColor:"rgba(255, 255, 255, 0.5)",width:320, borderBottomWidth:1, color:"white"}}
                 />
                 
                   <View>
                     <TouchableOpacity >
                        <Text style={styles.emailbox} 
                         onPress={() => setModalVisible(true) }
                        >verify</Text>
                     </TouchableOpacity>
                    </View>
            </View> 
         </View>
         <View style={styles.Phone}>
           <Text style={{color:"white", fontSize:22, bottom:20}}>Phone</Text>
             <View style={styles.phoneflex}>
               <TextInput
               
                  style ={{borderBottomColor:"rgba(255, 255, 255, 0.5)",width:320, borderBottomWidth:1, color:"white"}}
                 />
                   <View>
                     <TouchableOpacity 
                       >
                        <Text style={styles.phonebtn} 
                         onPress={() => setPhoneVisible(true)}
                        >verify</Text>
                     </TouchableOpacity>
                    </View>
            </View> 
            
         </View>
         <View style={styles.dateofbirth}>
               <Text style={{color:"white", fontSize:22,bottom:20,}}>Date</Text>
                     <TextInput
                      placeholder=''
                      placeholderTextColor={"#ffffff"}
                      keyboardType='default'
                      style ={{borderBottomColor:"rgba(255, 255, 255, 0.5)" , borderBottomWidth:1, color:"white", fontSize:18, }}
                />
         </View>
         <View style={styles.adharcard}>
               <Text style={{color:"white", fontSize:22, marginBottom:0, bottom:10}}>AdharCard No.</Text>
                     <TextInput
                      placeholder=''
                      placeholderTextColor={"#ffffff"}
                      keyboardType='default'
                      style ={{borderBottomColor:"rgba(255, 255, 255, 0.5)" , borderBottomWidth:1, color:"white", fontSize:18, paddingBottom:10}}
                />
         </View>
        </View>
        <TouchableOpacity
           onPress={() => navigation.navigate("Home")}
         
          
         >
         <LinearGradient
          colors = {['#EA59E4','#C508BD','#910C8C']}
          style={styles.btnstyle}
          start = {{x :0.0 , y : 0.0}}
          end = {{x:0.5 , y : 0.15}}
          
         >
           <Text 
           style={{textAlign:"center" , color:"#FFFFFF", fontSize:30 , textTransform:"capitalize"}}>SAVE</Text>
         </LinearGradient>
         </TouchableOpacity>
         <View>
           <Text style={{color:"#FFFFFF" , fontSize:9,fontWeight:"600", marginVertical:0, textAlign:"center"}}>For security purpose only specific fields can be changed</Text>
         </View>
  </View>
   {/* this modeel is working on otp box */}
     <Modal
       theme={
        {colors: {backdrop: 'rgba(255, 255, 255,)'}
          }}
           animationType="fade"
            transparent={true}
            isVisible={modelvisible}
            backdropOpacity={0.9}
         
>
         <View style={styles.main}>
         <Text style={styles.subHeading}>
         Enter OTP, Check your Mail
         </Text>  
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
               borderRadius: 50,
               width: 50,
               height: 50,
               marginVertical:80,
               backgroundColor: "rgba(255,255,255,0.1)",
               borderColor: "rgba(199,194,194,0.77)",
             },
             pinCodeTextStyle: {
               fontSize: 15,
               color:"white",
               fontWeight: "700",
              
             },
           }}
         />
         </View>
         <View
           style={{
             flexDirection: "column",
             gap: 1.5,
             alignItems: "center",
           }}
         >
           <View
             style={{ flexDirection: "row", gap: 5, alignItems: "center",top:-60 }}
           >
             <Text
               style={{ color:"white", fontSize: 13, fontWeight: "500" }}
             >
               If you didn't receive a code!
             </Text>
             <TouchableOpacity onPress={() => setResendText(false)}>
               <Text
                 style={{
                   color:"red",
                   fontSize: 15,
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
          () => {
                 setOtp(null);
                 otpInputRef.current.clear();
                 if( otp === TestOtp){
                   setEmailVerDone(true)
                 } else{
                   setWrongEmail(true)
                 }
                   
                 
               }
           
       }
       isDisabled={otp == ""}
       style={styles.btn}
     />
      
         </View>
        
        </Modal>

       {/* this box in email verificatio */}
      <Modal
          theme={
           {colors: {backdrop: 'rgba(255, 255, 255)'}
               }}
              animationType="fade"
              transparent={true}
               isVisible={emailverdone}
               backdropOpacity={0.3}
>
             <View style={styles.main}>
                <Text style={styles.subHeading}>
                   YAY! OTP verified
                 </Text>  
         
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
            
            <Image
       style={styles.tinyLogo}
       source={require('../../../assets/verfied 1.png')}
     />
            
           </View>
         </View>
         <VerifyBtn
       btnText={"Next"}
       onPress={
        ()=>{ navigation.navigate("Home");}
                
       }
       style={styles.btnemaildn}
     />
      
         </View>
        
      </Modal>
   {/* email otp wrong try again */}
      
   <Modal
           theme={
                {colors: {backdrop: 'rgba(35, 39, 39, 1)'}
                }}
                 animationType="fade"
                transparent={true}
                visible={wrongemail}
                backdropOpacity={0.3}
>
   <View style={styles.main}>
   <Text
               style={{
                 fontSize: 23,
                 fontWeight: "800",
                 color:"rgba(245, 118, 118, 1)",
                  alignSelf:"center"
               }}
             >
               Try again!
             </Text>
             <Text
               style={{ fontSize: 14, fontWeight: "600", color:"white",textAlign:"center", marginVertical:20 }}
             >
               Oops, Seems like something is
               <Text style={{ color:"rgba(245, 118, 118, 1)"}}> wrong</Text>
             </Text> 
         <View  style={styles.otp}>  
         <OtpInput
               autoFocus={false}
               numberOfDigits={4}
               focusColor={"white"}
               onFilled={(otp) => verifyOtp(otp)}
               textInputProps={{
                 accessibilityLabel: "One-Time Password",
               }}
               theme={{
                 pinCodeContainerStyle: {
                   borderRadius: 100,
                   width: 50,
                   height: 50,
                   backgroundColor: "rgba(255,255,255,0.1)",
                   borderColor: "rgba(199,194,194,0.77)",
                 },
                 pinCodeTextStyle: {
                   fontSize: 20,
                   color:"white",
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
             style={{ flexDirection: "row", gap: 2.5, alignItems: "center",top:10 }}
           >
             <Text
               style={{ color: Colors.WHITE, fontSize: 12, fontWeight: "500" }}
             >
               If you didn't receive a code!
             </Text>
             <TouchableOpacity onPress={() => setResendText(false)}>
               <Text
                 style={{
                   color:"rgba(245, 118, 118, 1)",
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
          () => {
                 setOtp(null);
                 otpInputRef.current.clear();
                 if( otp == "null" ){
                    console.log("hello")
                 } else{
                    setEmailVerDone(true)
                 }
                
               }
           
       }
       isDisabled={otp ==""}
       style={styles.btntry}
     />
      
         </View>
        
</Modal>


     {/* phone otp box start */}
     <Modal
       // theme={
       //  {colors: {backdrop: 'rgba(255, 255, 255, )'}
       //    }}
           animationType="fade"
            transparent={true}
            visible={phonevisible}
            backdropOpacity={0.8}
>
         <View style={styles.main}>
         <Text style={styles.subHeading}>
         Enter OTP sent in your mobile n.
         </Text>  
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
               borderRadius: 100,
               width: 50,
               height: 50,
               marginVertical:80,
               backgroundColor: "rgba(255,255,255,0.1)",
               borderColor: "rgba(199,194,194,0.77)",
             },
             pinCodeTextStyle: {
               fontSize: 15,
               color:"white",
               fontWeight: "700",
              
             },
           }}
         />
         </View>
         <View
           style={{
             flexDirection: "column",
             gap: 1.5,
             alignItems: "center",
           }}
         >
           <View
             style={{ flexDirection: "row", gap: 5, alignItems: "center",top:-60 }}
           >
             <Text
               style={{ color:"white", fontSize: 13, fontWeight: "500" }}
             >
               If you didn't receive a code!
             </Text>
             <TouchableOpacity onPress={() => setResendText(false)}>
               <Text
                 style={{
                   color:"red",
                   fontSize: 15,
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
          () => {
                 setOtp(null);
                 otpInputRef.current.clear();
                 if( otp === TestOtp){
                   setEmailVerDone(true)
                 } else{
                   setWrongEmail(true)
                 } 
               }
           
       }
       isDisabled={otp == ""}
       style={styles.btn}
     />
      
         </View>
        
        </Modal>
     </ScrollView>
   </View>
 )

}

export default ProfileDetail;

const styles = StyleSheet.create({
 container: {
   backgroundColor:"black",
   flex : 1,
  
 },

 backimg : {
   marginHorizontal:20,
   marginVertical:20
 },
 tstprofile :{
   color:"#FFFFFF",
   fontSize:28,
   fontWeight:"700",
   textAlign:"center",
  //  marginTop:20,
   position:"relative",
 },
 inputcontainer:{
   alignSelf:"center",
   justifyContent:"center",
   marginTop:50
 },
 email:{
   marginVertical:40,
   position:"relative"


 },
 emailbox:{
   width:70,
   textAlign:"center",
   padding:10,
   borderRadius:10,
   textTransform:"capitalize",
   color:"#FFFFFF",
   backgroundColor:"#2ED813",
   position:"absolute",
   bottom:10,
   right:0,

 },
 otp:{
 paddingHorizontal:20,
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
   left:250,
 },
 dateofbirth:{
   marginVertical:-5 
 },
 adharcard:{
   marginVertical:30 
 },
 btnstyle:{
   width:320,
   marginVertical:10,
   alignContent:"center",
   alignSelf:"center",
   borderWidth:1,
   padding:10,
   borderColor:"#FFFFFF",
   borderRadius:15,

 },
 Otpbox:{
   width:305,
   height:250,
   borderRadius:15,
   backgroundColor:"rgba(35, 39, 39,.9)",
   position:"relative",
   alignSelf:"center"
 },
 Otpbox3:{
   width:355,
   height:200,
   borderRadius:15,
   backgroundColor:"rgba(35, 39, 39,.9)",
   position:"relative",
   alignSelf:"center"
 },
 inputflex:{
   flexDirection:"row",
   marginVertical:30,
   gap:20,
   justifyContent:"center",
   color:"FFFFFF"

   },
   otpinput:{
     borderColor:"#FFFFFF",
     borderWidth:2,
     borderRadius:100,
     width:50,
     padding:10,
     paddingHorizontal:20,
     color:"#FFFFFF",
     backgroundColor:"rgba(217, 217, 217, 0.2)"
    
   },
   otpresend:{
     flexDirection:"row",
     gap:10,
     justifyContent:"center",
     marginVertical:-20

   },
   verify:{
     width:280,
     textAlign:"center",
     padding:12,
     borderRadius:10,
     textTransform:"capitalize",
     color:"#FFFFFF",
     backgroundColor:"#2ED813",
     alignSelf:"center",
     marginVertical:40,
     borderWidth:1,
     borderColor:"#FFFFFF",
     fontSize:15,

   },
   verificationdone:{
     width:305,
     height:320,
   borderRadius:15,
   backgroundColor:"rgba(35, 39, 39,1)",
   position:"relative",
   alignSelf:"center"
   },
   next:{
     width:280,
     textAlign:"center",
     padding:12,
     borderRadius:10,
     textTransform:"capitalize",
     color:"#FFFFFF",
     backgroundColor:"#2ED813",
     alignSelf:"center",
     borderWidth:1,
     borderColor:"#FFFFFF",
     fontSize:15,
   },
   wrongemail:{
     width:200,
     height:200,
     backgroundColor:"red"
   },
   main:{
     width:305,
     height:300,
     borderRadius:12,
     backgroundColor:"rgba(35, 39, 39, 1.1)",
     position:"relative",
     alignSelf:"center"
   },
   subHeading:{
    color:"white",
    fontSize:18,
    position:"absolute",
    top:20,
    alignSelf:"center"


   },
   btn:{
     width:280,
     marginVertical:-30,
     alignContent:"center",
     alignSelf:"center",
     borderWidth:1,
     borderColor:"#FFFFFF",
     borderRadius:5,
    
   },
   btntry:{
     width:280,
     marginVertical:25,
     alignContent:"center",
     alignSelf:"center",
     borderWidth:1,
     borderColor:"#FFFFFF",
     borderRadius:5,
   },
   btnemaildn:{
     width:280,
     marginVertical:55,
     alignContent:"center",
     alignSelf:"center",
     borderWidth:1,
     borderColor:"#FFFFFF",
     borderRadius:5,
   }

  
})

