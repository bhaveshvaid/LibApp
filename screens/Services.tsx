import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import ServiceMenu from './ServiceMenu';
import ERD from './ERD';
import PathFinder from './PathFinder';


export type ServiceParamList= {
    Service: undefined;
    ERD: undefined;
    PathFinder:undefined
}
const Stack = createNativeStackNavigator<ServiceParamList>();

const Services = () => {
  return (
        <Stack.Navigator
        screenOptions={{
            // headerTitleAlign:'center',
            // headerBackTitleVisible:true
            headerShown: false
        }}>
                <Stack.Screen
                    name="Service"
                    component={ServiceMenu}
                />
                <Stack.Screen
                    name="ERD"
                    component={ERD}
                />
                <Stack.Screen
                    name="PathFinder"
                    component={PathFinder}
                />
    </Stack.Navigator>   

  )
}

export default Services

const styles = StyleSheet.create({})