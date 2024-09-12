import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import ServiceMenu from './ServiceMenu';
import ERD from './ERD';
import PathFinder from './PathFinder';
import ETD from './ETD';
import VidLib from './VidLib';


export type ServiceParamList= {
    Service: undefined;
    ERD: undefined;
    PathFinder:undefined,
    ETD:undefined,
    VidLib:undefined
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
                <Stack.Screen
                    name="ETD"
                    component={ETD}
                />
                <Stack.Screen
                    name="VidLib"
                    component={VidLib}
                />
    </Stack.Navigator>   

  )
}

export default Services

const styles = StyleSheet.create({})