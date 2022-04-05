import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import Profile from '../screens/profile'
import Smart from '../screens/smart'
import Locations from '../screens/locations'

const Stack = createStackNavigator();

export default function profileStack() {
  return (
      <Stack.Navigator>
          <Stack.Screen name='Profile' component={Profile} options={{title: "Perfil"}}/>
          <Stack.Screen name='Location' component={Locations} options={{title: "Localización"}}/>
      </Stack.Navigator>
  )
}