import { View, Text } from 'react-native'
import React, { useMemo } from 'react'
import { useState, useContext, useEffect } from 'react'
import {NavigationContainer} from '@react-navigation/native'

// import { AppwriteContext, AppwriteProvider } from '../appwrite/AppwriteContext'
import Loading from '../components/Loading'

import { AppStack } from './AppStack'
import { AuthStack } from './AuthStack'
import { SignInContext, SignInProvider } from '../context/SignInContext'
import Home from '../screens/Home'

export const Router = () => {
    const [isLoading, setIsLoading]= useState<boolean>(true)
    // const memoizedIsLoggedIn = useMemo(() => isLoggedIn, [true]);
    const {userInfo,setUserInfo, isLoggedIn, setIsLoggedIn} = useContext(SignInContext)
    useEffect(() => {
      // setIsLoggedIn(isLoggedIn)
      // console.log('is logged in ki value '+ isLoggedIn)
    }, [isLoggedIn, userInfo])
    
    // if(isLoading){
    //     return <Loading/>
    // }
    // useEffect(() => {
    //   appwrite
    //   .getCurrentUser()
    //   .then(response=>{
    //     setIsLoading(false)
    //     console.log('Effect hook working correctly when user is known')
    //     if(response){
    //         setIsLoggedIn(true)
    //     }
    //   })
    //   .catch(_=>{
    //     console.log('Effect hook working correctly when user is not known')
    //     setIsLoading(false)
    //     setIsLoggedIn(false)
    //   })
    // }, [appwrite,isLoggedIn])
    
    
// console.log('isLogin:: '+ isLoggedIn);
// const isLoggedIn= false;
  return (
    // <SignInProvider>
    <NavigationContainer>
    {isLoggedIn?  <Home/>:<AuthStack/>}
    </NavigationContainer>
  //  </SignInProvider>
  )
}

