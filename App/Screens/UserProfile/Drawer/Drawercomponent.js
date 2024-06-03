import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { createDrawerNavigator } from '@react-navigation/drawer'
import Mainpage from '../Mainpage'; 
import Customedrawer from './Customedrawer';
import EditProfile from '../EditProfile';
import Logout from '../Logout';
import Bankaccount from '../Bankaccount';
import Quicktask from '../Support/Quicktask';






const Drawer = createDrawerNavigator();

const Drawercomponent = (props) => {
  return (
  <Drawer.Navigator drawerContent={props => <Customedrawer {...props}/>} 
  screenOptions={{headerShown: false,
  drawerActiveBackgroundColor:"false",
   drawerLabelStyle:{borderWidth:2 ,
    borderColor:"#FFFFFF",
     borderRadius:10,
     width:240,
     textAlign:"center",
     color:"rgba(255,255,255,1)",fontSize:20,fontWeight:"bold",padding:10}}}>

      <Drawer.Screen
         name='Home'
         component={Mainpage}   
         />

        <Drawer.Screen
         name='user profile'
         component={EditProfile}   
         />
       <Drawer.Screen
        name='Bank Account'
        component={Bankaccount}
       />
         
        <Drawer.Screen
        name='Wallet'
        component={Logout}
        />

        <Drawer.Screen
            name='Support'
            component={Quicktask}
        />
      
       
        <Drawer.Screen
            name='Logout'
            component={Logout}
        />
        

  </Drawer.Navigator>
  )
}

export default Drawercomponent
