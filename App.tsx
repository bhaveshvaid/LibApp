import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { Profiler, useContext, useEffect, useState } from 'react'
// import { AppwriteProvider } from './appwrite/AppwriteContext';
import  {Router}  from './routes/Router';
// import { NavigationContainer } from '@react-navigation/native';

import 'react-native-gesture-handler';
import Home from './screens/Home';
import { NavigationContainer } from '@react-navigation/native';
import { AuthStack } from './routes/AuthStack';
import { SignInContext, SignInProvider } from './context/SignInContext';
import Loading from './components/Loading';

// const Drawer = createDrawerNavigator();

const App = () => {
   const {userInfo,setUserInfo, isLoggedIn, setIsLoggedIn} = useContext(SignInContext)
  //  console.log(isLoggedIn+" Value abhi print kari h")
   
  //  const isLoggedIn = false;
   useEffect(() => {
    // console.log(isLoggedIn+" after change")
    }, [userInfo,isLoggedIn])

  const handlePress=()=>{
    setIsLoggedIn(true)
  }
  return (
  <SignInProvider>
        {/* <Text>Change</Text> */}
    {/* <NavigationContainer> */}
      {/* <TouchableOpacity onPress={handlePress}>
       
        </TouchableOpacity> \ */}
      {/* {isLoggedIn?  <Home/>:<AuthStack/>} */}
      {/* <Home/> */}
      <Router/>
    {/* </NavigationContainer> */}
  </SignInProvider>
  )
}

export default App

const styles = StyleSheet.create({
  container:{
    flex:1,
  }
})