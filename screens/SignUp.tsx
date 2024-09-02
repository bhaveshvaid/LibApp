import { StyleSheet, Text, View, KeyboardAvoidingView, TextInput, Pressable, Platform, TouchableOpacity, Image, SafeAreaView, ScrollView, Linking, Button, Alert } from 'react-native'
import React, { useEffect, useState,useContext, useRef } from 'react'
import { faUser } from '@fortawesome/free-regular-svg-icons/faUser'
import { faEnvelope } from '@fortawesome/free-regular-svg-icons/faEnvelope'
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'
import { faLock } from '@fortawesome/free-solid-svg-icons/faLock'
import { faBuilding } from '@fortawesome/free-regular-svg-icons/faBuilding'
import { faUserTag } from '@fortawesome/free-solid-svg-icons/faUserTag'
import { faShieldHalved } from '@fortawesome/free-solid-svg-icons/faShieldHalved'
import axios from 'axios'
// import AsyncStorage from '@react-native-async-storage/async-storage';
// import InAppBrowser from 'react-native-inappbrowser-reborn';
// import { GoogleSignin, GoogleSigninButton, statusCodes } from '@react-native-google-signin/google-signin';
import { NativeStackScreenProps } from '@react-navigation/native-stack'
import { AuthStackParamList } from '../routes/AuthStack'
import { SignInContext } from '../context/SignInContext'
import Loading from '../components/Loading'
import {launchCamera, launchImageLibrary} from 'react-native-image-picker';

type SignUpScreenProps = NativeStackScreenProps<AuthStackParamList, 'SignUp'>




const SignUp = ({navigation}:SignUpScreenProps) => {

    // const {appwrite, setIsLoggedIn}= useContext(AppwriteContext);
    const {userInfo,setUserInfo, isLoggedIn, setIsLoggedIn} = useContext(SignInContext)
    const [error, setError]= useState<string>('')
    const [name, setName]= useState<string>('')
    const [memId, setMemId]= useState<string>('')
    const [department,setDepartment]=useState<string>('')
    const [email, setEmail]= useState<string>('')
    const [password, setPassword]= useState<string>('')
    const [repeatPassword, setRepeatPassword]= useState<string>('')
    const [isLoading, setIsLoading]= useState<boolean>(false)
    const [res, setRes]= useState('')
    const[base,setBase]= useState()

   



    useEffect(() => {
    
    }, []);


    const handleSignUp=()=>{
        console.log('SignUp hitted')
        if(password!== repeatPassword){
          setError("Passwords do not match");
          return;
        }
        if(name.length<=2||email.length<=5){
          setError("Enter proper credentials");
          return;
        }
        if(password.length<=6){
          setError("Choose a stronger password");
          return;
        }
        const userData = {name:name, email:email , password:password, memId:memId, image:`data:image/png;base64,${base}`}; 
        axios.post("https://lib-server.vercel.app/register", userData).then((res)=>{
          setIsLoading(true)
          // setIsLoggedIn(true);
          // const user = JSON.stringify(userData)
          // setUserInfo(user)
          console.log(res.data)
          navigation.navigate('LogIn')
        }).catch(e=>{
          setIsLoading(false)
          setError(e.data)
          // console.log("click working")
        })

        
    }
    if(isLoading){
          return <Loading/>
      }

      // upload image function
      const uploadImage=async ()=>{
          try {
            setError('');
            const result = await launchCamera({
              mediaType:'photo',
              quality:1,
              includeBase64: true,
              maxHeight: 250,
              maxWidth: 250,
            });
            if(result.didCancel)console.log('user cancled action')

            else if(result.errorMessage){
              console.log(result.errorMessage);
              setError(result.errorMessage)
            }

            else{
              setRes(result?JSON.stringify(result):'error')
              const rese = JSON.parse(res)
              setBase(rese.assets[0].base64)
              // setImage(result.uri)
              // console.log(image +'-----------------');
            }
          } catch (error) {
            console.log(error)
            setError('error accessing camera')
          }
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
      {/* Name */}
      <View style={[styles.input,styles.inline1]}>
      <FontAwesomeIcon icon={faUser} />
      <TextInput
        value={name}
        onChangeText={text => {
          setError('');
          setName(text);
        }}
        placeholderTextColor={'#AEAEAE'}
        placeholder={"Name"}
        style={styles.input1}
      />
      </View>

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

      {/* MemberShip Id */}
      <View style={[styles.input,styles.inline1]}>
      <FontAwesomeIcon icon={faUserTag} />
      <TextInput
        value={memId}
        onChangeText={text => {
          setError('');
          setMemId(text);
        }}
        placeholderTextColor={'#AEAEAE'}
        placeholder={"Membership id"}
        style={styles.input1}
      />
      </View>

       {/* Department */}
       {/* <View style={[styles.input,styles.inline1]}>
      <FontAwesomeIcon icon={faBuilding} />
      <TextInput
        value={department}
        onChangeText={text => {
          setError('');
          setDepartment(text);
        }}
        placeholderTextColor={'#AEAEAE'}
        placeholder={"Department"}
        style={styles.input1}
      />
      </View> */}

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

      {/* Repeat password */}
      <View style={[styles.input,styles.inline1]}>
      <FontAwesomeIcon icon={faShieldHalved} />
      <TextInput
        secureTextEntry
        value={repeatPassword}
        onChangeText={text => {
          setError('');
          setRepeatPassword(text);
        }}
        placeholderTextColor={'#AEAEAE'}
        placeholder="Repeat Password"
        style={styles.input1}
      />
      </View>
      <View style={{flexDirection:'row',justifyContent:'center', alignItems:'center',marginTop:10}}>
        <Text>Upload your profile picture here: </Text>
        <Pressable
          onPress={uploadImage}
          style={{marginTop: 2,borderColor:'#000',borderRadius:5,borderWidth:2,padding:5}}>
          <Text style={{color:'black'}}>Capture</Text>
        </Pressable>
      </View>
      
      
      
     
      {/* Validation error */}
      {error ? <Text style={styles.errorText}>{error}</Text> : null}

      {/* Signup button */}
      <Pressable
        onPress={handleSignUp}
        style={[styles.btn, {marginTop: error ? 10 : 20}]}>
        <Text style={styles.btnText}>Sign Up</Text>
      </Pressable>

      {/* Login navigation */}
      <TouchableOpacity
        onPress={() => navigation.navigate('LogIn')}
        style={styles.loginContainer}>
        <Text style={styles.haveAccountLabel}>
          Already have an account?{'  '}  
          <Text style={styles.loginLabel}>Login</Text>
        </Text>
      </TouchableOpacity>

        </ScrollView>
    </View>
   </SafeAreaView>
  )
}

export default SignUp

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
        // marginTop:100,
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
            marginLeft:5
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
        marginTop: 30,
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