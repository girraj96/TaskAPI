import React from 'react'
import { View, Text } from 'react-native'
import {createStackNavigator} from "@react-navigation/stack"
import navigationStrings from '../constants/navigationStrings';
import { Home } from '../Screens';

const Stack=createStackNavigator();
export default function TopRoutes() {
  return (
   <Stack.Navigator>
     <Stack.Screen name={navigationStrings.HOME} component={Home} options={{headerShown:false}} />
   </Stack.Navigator>
  )
}
