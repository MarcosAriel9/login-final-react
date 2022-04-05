import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import Smart from '../screens/smart'
import Training from '../screens/training'

const Stack = createStackNavigator();

export default function smartStack() {
  return (
      <Stack.Navigator>
          <Stack.Screen name='Smart' component={Smart} options={{title: "Smart"}}/>
          <Stack.Screen name='Training' component={Training} options={{title: "Training"}}/>
      </Stack.Navigator>
  )
}