import { View, Text } from 'react-native'
import React from 'react'
import { createDrawerNavigator } from '@react-navigation/drawer'
import Logout from '../../Logout'
import Mainpage from '../../Mainpage'
import Customedrawer from './Customedrawer'
import EditProfile from '../../EditProfile'
import BankAccount from '../../BankAccount'
import Quicktask from '../Quicktask'




const Drawer = createDrawerNavigator()

const Drawercomponent = () => {
  return (
    <Drawer.Navigator  drawerContent={props => <Customedrawer {...props}/>} 
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
        name='User Profile'
        component={EditProfile}
        />
     

        <Drawer.Screen
        name='Wallet'
        component={Logout}
        />
       <Drawer.Screen
        name='BankAccount'
        component={BankAccount}
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