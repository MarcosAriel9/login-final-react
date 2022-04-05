import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import Index from '../screens/index'
import { Icon } from 'react-native-elements'
import navigation from './navigation'
import Training from '../screens/training'
import Register from '../screens/register'

const Stack = createStackNavigator();

export default function indexStack(props) {
  const {navigation}=props;
  return (
      <Stack.Navigator>
          <Stack.Screen name='Index' component={Index} 
          options={{headerShown:false, title: "Inicio", headerLeft:()=><Icon onPress={() => navigation.openDrawer()} type='material-community' name='menu' size={22} color={"black"}/>}}/>
          <Stack.Screen name='Register' component={Register} options={{title: "Registrate"}}/>
      </Stack.Navigator>
  )
}