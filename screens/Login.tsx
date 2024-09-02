import { StyleSheet, Text, View, KeyboardAvoidingView, TextInput, Pressable, Platform, TouchableOpacity, Image, SafeAreaView, ScrollView } from 'react-native'
import React, { useContext, useState } from 'react'
import { faEnvelope } from '@fortawesome/free-regular-svg-icons/faEnvelope'
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'
import { faLock } from '@fortawesome/free-solid-svg-icons/faLock'
import { AuthStackParamList } from '../routes/AuthStack'
import { NativeStackScreenProps } from '@react-navigation/native-stack'
import axios from 'axios'
import { SignInContext } from '../context/SignInContext'
import LoggingLoad from '../components/LogginLoad'
// import {AppwriteContext} from '../appwrite/AppwriteContext'
// import { useContext } from 'react'
// import Snackbar from 'react-native-snackbar'

type LoginScreenProps = NativeStackScreenProps<AuthStackParamList, 'LogIn'>
const Login = ({navigation}:LoginScreenProps) => {

    const [error, setError]= useState<string>('')
    // const [name, setName]= useState<string>('')
    const [email, setEmail]= useState<string>('')
    const [password, setPassword]= useState<string>('')
    const [isLoading, setIsLoading]= useState<boolean>(false)
    const {userInfo,setUserInfo, isLoggedIn, setIsLoggedIn} = useContext(SignInContext)
    // const [repeatPassword, setRepeatPassword]= useState<string>('')

    const handleLogin = () => {
      if (email.length < 1 || password.length < 1) {
        setIsLoading(false)
        return setError('All fields are required')
      }
      setIsLoading(true)
      const user = {
          email,
          password
        }
        
      axios.post("https://lib-server.vercel.app/login", user).then((res)=>{
        console.log(JSON.stringify(res.data.user) + ' ye answer aaaya h')
        setUserInfo(JSON.stringify(res.data.user));
        setIsLoggedIn(res.data.shouldLog);
        if(res.data.shouldLog!==true){
          setError('Unidentified user || Invalid credentials')
        }
        setIsLoading(false)
        // console.log(res.data)
      }).catch(e=>{
        setIsLoading(false)
        setError(e.data)
        console.log(e)
      })
    }

    if(isLoading){
      return <LoggingLoad/>
  }


  return (
   <SafeAreaView style={styles.container}>
    <View style={styles.main}>
        <View>
            <Image source={require('../assets/IITDLogo.png')} style={styles.logo}></Image>
        </View>
        {/* Input form box */}
        <View>
            <Text style={styles.headingTxt}>Indian Institute of Technology, Delhi</Text>
        </View>
        {/* Form box */}
        <ScrollView style={styles.formContainer}>

      {/* Email */}
      <View style={[styles.input,styles.inline1]}>
      <FontAwesomeIcon icon={faEnvelope} />
      <TextInput
        value={email}
        keyboardType="email-address"
        onChangeText={text => {
          setError('');
          setEmail(text);
        }}
        placeholderTextColor={'#AEAEAE'}
        placeholder="Email"
        style={styles.input1}
      />
      </View>  
      {/* Password */}
      <View style={[styles.input,styles.inline1]}>
      <FontAwesomeIcon icon={faLock} />
      <TextInput
        value={password}
        onChangeText={text => {
          setError('');
          setPassword(text);
        }}
        placeholderTextColor={'#AEAEAE'}
        placeholder="Password"
        secureTextEntry
        style={styles.input1}
      />
      </View>
      {/* Validation error */}
      {error ? <Text style={styles.errorText}>{error}</Text> : null}

      {/* Login button */}
      <Pressable
        onPress={handleLogin}
        style={[styles.btn, {marginTop: error ? 10 : 20}]}>
        <Text style={styles.btnText}>Log In</Text>
      </Pressable>

      {/* Login navigation */}
      <TouchableOpacity
        onPress={() => navigation.navigate('SignUp')}
        style={styles.loginContainer}>
        <Text style={styles.haveAccountLabel}>
          Don't have an account?{'  '}
          <Text style={styles.loginLabel}>Sign Up</Text>
        </Text>
      </TouchableOpacity>
        </ScrollView>
    </View>
   </SafeAreaView>
  )
}

export default Login

const styles = StyleSheet.create({
    logo:{
        height:145,
        width:300
    },
      container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        // backgroundColor:'#aaa',
        marginTop:30
      },
      headingTxt:{
        alignSelf:'center',
        fontSize:20,
        marginTop:30,
        fontWeight:'800',
      },
      formContainer: {
        flex:1,
        marginTop:40,
        // justifyContent: 'center',
        alignContent: 'center',
        // height: '100%',
      },
      main:{
        marginTop:40,
      },
      input: {
        height: 40,
        alignSelf: 'center',
        borderRadius: 0,
        borderBottomWidth:1,
        borderBottomEndRadius:5,
        width: '80%',
        color: '#000000',
        marginTop: 10,
        shadowColor: '#fff',
        shadowOffset: {
          width: 0,
          height: 2,
        },
        shadowOpacity: 0.23,
        shadowRadius: 2.62,
    
        elevation: 1,
      },
      input1: {
            height: 40,
            borderRadius: 0,
            borderBottomEndRadius:5,
            width: '80%',
            color: '#000000',
            shadowColor: '#fff',
            elevation: 1,
          },
      errorText: {
        color: 'red',
        alignSelf: 'center',
        marginTop: 10,
      },
      btn: {
        backgroundColor: '#9e2d06',
        padding: 10,
        height: 45,
        alignSelf: 'center',
        borderRadius: 5,
        width: '80%',
        marginTop: 10,
    
        shadowColor: '#000',
        shadowOffset: {
          width: 0,
          height: 2,
        },
        shadowOpacity: 0.23,
        shadowRadius: 2.62,
    
        elevation: 3,
      },
      btnText: {
        color: '#eeeeee',
        alignSelf: 'center',
        fontWeight: 'bold',
        fontSize: 18,
      },
      loginContainer: {
        marginTop: 60,
      },
      haveAccountLabel: {
        color: '#484848',
        alignSelf: 'center',
        fontWeight: 'bold',
        fontSize: 15,
      },
      loginLabel: {
        color: '#1d9bf0',
      },
      inline1:{
        flex:1,
        flexDirection:'row',
        gap:10,
        alignItems:'center'
    },
})

