import React from 'react'
import { NavigationContainer, TabActions } from '@react-navigation/native'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { Icon } from 'react-native-elements'
//import Profile from '../screens/profile'
//import Index from '../screens/index'
//import Smart from '../screens/smart'
//import SmartGo from '../screens/smartGo'
import IndexStack from './indexStack'
import ProfileStack from './profileStack'
import SmartStack from './smartStack'
import SmartGoStack from './smartGoStack'

const Tab = createBottomTabNavigator()

export default function Navigation() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        initialRouteName="Index"
        tabBarOptions={{ inactiveTintColor: 'green', activeTintColor: 'red' }}
        screenOptions={({ route }) => ({
          tabBarIcon: ({ color }) => screenOption(route, color),
        })}
      >
        <Tab.Screen
          name="Index"
          component={IndexStack}
          options={{ tittle: 'Inicio' }}
        />
        <Tab.Screen
          name="Smart"
          component={SmartStack}
          options={{ tittle: 'Smart' }}
        />
        <Tab.Screen
          name="SmartGo"
          component={SmartGoStack}
          options={{ tittle: 'Smart Go' }}
        />
        <Tab.Screen
          name="Profile"
          component={ProfileStack}
          options={{ tittle: 'Perfil' }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  )
}
function screenOption(route, color) {
  let icon
  switch (route.name) {
    case 'Index':
      icon = 'view-grid-outline'
      break
    case 'Smart':
      icon = 'weight-lifter'
      break
    case 'SmartGo':
      icon = 'google'
      break
    case 'Profile':
      icon = 'account-outline'
      break
    default:
      break
  }
  return <Icon type="material-community" name={icon} size={22} color={color} />
}
