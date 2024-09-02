import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

import SignUp from '../screens/SignUp';
import LogIn from '../screens/Login';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

export type AuthStackParamList= {
    SignUp: undefined;
    LogIn: undefined;
}

const Stack = createNativeStackNavigator<AuthStackParamList>();


export const AuthStack = () => {
  return (
    <Stack.Navigator 
    screenOptions={{
        // headerTitleAlign:'center',
        // headerBackTitleVisible:true
        headerShown: false
    }}
    >
      <Stack.Screen name='SignUp' component={SignUp} />
      <Stack.Screen name='LogIn' component={LogIn} />
    </Stack.Navigator>
  )
}



