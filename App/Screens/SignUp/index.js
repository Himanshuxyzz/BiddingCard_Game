
import { StyleSheet, Text, View ,ImageBackground, Image,Button} from 'react-native'
import React from 'react'
const image = {uri: 'https://s3-alpha-sig.figma.com/img/0dcb/6ab1/493cee69dff21de53748e472f9e454e7?Expires=1714953600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=GWww2vOKhWrrQIWxov9uCwFEZAHz3-s27vkjG1nmKMXmkPqA~dxBOmbWPGxEpVVi-e3A0Pinr6U1Ezqeap269O5fywKvv8t7Z0Gxt99hdW8JhS-ITBYfNGOz4HIYXwhPKYjaUdC42J97KjLsv3DiFyYjudbQbbg-W1r3PgDPg-AHrgcJNYRncBx26E5dJDSA30zKxD-hi0iKorTf~zzUchll-tSc9qHeQDN-XlQ8RG7yPABiNm14EG1GvOce6AZP4SiJ~6jnFbxpGuGho-3aR~xXpKYvGVW-o3IWU00Zf6H3pXIevrqvJxddwd1K93aPyD1kO-PxzqRbPEBSOosIiA__'};

const img={uri:'https://s3-alpha-sig.figma.com/img/7760/4a5a/de51b82039e07b00c53296efb1a89607?Expires=1714953600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=SsJsuKqfjyg3gccgQkSgTud4E6-9YcS~EM1zXT5KOOE6a6piCyGX6LWuSfHfHJQuUaxrCyZJi20EsSG6INoJh3Bvf8NiGJTfU2NRRypHQ5AnFrg8iGk2nqvVeAY1CMxr5i~JZwtbajzm6Wnd6qqpzofZBXvtCLarz6SL0YYBbgHNANNIGJRYOYnyX4lVIiFc~ywP0DsuQWx3FPu3s-7yWuQR5vEw1svfvCZksZsZTrsuXeLYQ7Xl2DqFPGaF57eSqyV4RLmMBG7RHcGqAlSEERcZdu6-FUiZwDU9Ozpll-UCpQcydMLLIEljiDMpp7Sf8KxA1bPtDsWqISKeJc30lA__'}

const FirstPage = () => {
  return (
    <View style={styles.container}>
      <ImageBackground source={image} resizeMode="cover" style={styles.image}>
        <Image source={img} style={styles.img}/>
        <Text style={styles.txt} >BC game</Text>
        <View style={[styles.wrapper, styles.simpleButton]}>
        <Text style={styles.text} >Create Account</Text>
    </View>
    <View style={[styles.wrap]}>
        <Text style={styles.text1} >Log In</Text>
    </View>
     </ImageBackground>
    
    </View>
  )
}

export default FirstPage

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent:'center'
    },
   image: {
    flex: 1,
    justifyContent: 'center',
    width:400,
    height:800,
    
  },
  img:{
    width:207,
    height:247,
    left:90,
    top:-120
  },
  txt:{
   fontFamily:'',
   fontSize:25,
   left:130,
   top:-140
},
wrapper: {
  borderRadius: 10,
  paddingVertical: 10,
  paddingHorizontal: 20,
  maxWidth:250
},
simpleButton: {
  backgroundColor: "#FFFFFF",
  color:'black',
  marginLeft:50,
  bottom:70,
  
},

text:{
  paddingLeft:40,
  fontSize:20
},
wrap:{
  borderRadius: 10,
  paddingVertical: 10,
  paddingHorizontal: 20,
  maxWidth:250,
  backgroundColor: "#FFFFFF",
  color:'black',
  marginLeft:50,
  bottom:40
},
text1:{
  fontSize:20,
  paddingLeft:70
}
})