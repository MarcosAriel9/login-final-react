import React from 'react'
import { NavigationContainer, TabActions } from '@react-navigation/native'
import { createDrawerNavigator } from '@react-navigation/drawer'
import { Icon } from 'react-native-elements'
//import Profile from '../screens/profile'
//import Index from '../screens/index'
//import Smart from '../screens/smart'
//import SmartGo from '../screens/smartGo'
import IndexStack from './indexStack'
import ProfileStack from './profileStack'
import SmartStack from './smartStack'
import SmartGoStack from './smartGoStack'
import { HeaderTitle } from '@react-navigation/stack'


const Drawer = createDrawerNavigator()

export default function Navigation() {
  return (
    <NavigationContainer>
      <Drawer.Navigator>
        <Drawer.Screen
        name='Index' component={IndexStack} options={{title: "Inicio", drawerIcon:()=><Icon type='material-community' size={22} name={"view-grid-outline"}/>}}/>
        <Drawer.Screen
        name='Smart' component={SmartStack} options={{title: "Smart", drawerIcon:()=><Icon type='material-community' size={22} name={"weight-lifter"}/>}}/>
        <Drawer.Screen
        name='Profile' component={ProfileStack} options={{title: "Perfil", drawerIcon:()=><Icon type='material-community' size={22} name={"account-outline"} color={"lightblue"}/>}}/>
      </Drawer.Navigator>
    </NavigationContainer>
  )
}
// function screenOption(route, color) {
//   let icon
//   switch (route.name) {
//     case 'Index':
//       icon = 'view-grid-outline'
//       break
//     case 'Smart':
//       icon = 'weight-lifter'
//       break
//     case 'SmartGo':
//       icon = 'google'
//       break
//     case 'Profile':
//       icon = 'account-outline'
//       break
//     default:
//       break
//   }
//   return <Icon type="material-community" name={icon} size={22} color={color} />
// }
