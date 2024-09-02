import { StyleSheet, Text, View } from 'react-native'
import React, { useContext } from 'react'
import { NavigationContainer } from '@react-navigation/native';

import SignUp from './SignUp'
import Login from './Login'
import Profile from './Profile'
import Contact from './Contact';
import Account from './Account';
// *.local;

import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'
import { faRightFromBracket } from '@fortawesome/free-solid-svg-icons/faRightFromBracket'

//import statements


import {
    SafeAreaView,
    Image,
    Linking,
  } from 'react-native';
  
  import {
    DrawerContentScrollView,
    DrawerItemList,
    DrawerItem,
  } from '@react-navigation/drawer';

import { createDrawerNavigator } from '@react-navigation/drawer';
import Main from './Main';
import { TouchableOpacity } from 'react-native';
import { SignInContext } from '../context/SignInContext';
import Repositories from './Repositories';
import Services from './Services';

const Drawer = createDrawerNavigator();

function MyDrawer() {
  const {userInfo,setUserInfo, isLoggedIn, setIsLoggedIn} = useContext(SignInContext)
  const handleLogOut=()=>{
    setUserInfo('');
    setIsLoggedIn(false);
    // console.log("logout k baad ki value"+ isLoggedIn)
  }
  
  var user={name:'Error',email:'',password:'',memId:'',image:''};
  if(isLoggedIn){
    user = JSON.parse(userInfo)
    // user=userInfo
  }
  return (
    <>
       <Drawer.Navigator
       drawerContent={
        (props)=>{
            return(
                <View style={{flex:1}}>
                    <SafeAreaView style={{flex: 1}}>
                        {/*Top Large Image */}
                        {user.image!=null?<Image
                            source={{uri:user.image}}
                            style={styles.sideMenuProfileIcon}
                        />:<Image
                        source={require('../assets/profile.png')}
                        style={styles.sideMenuProfileIcon}
                    />}
                        <Text style={styles.drawerInfo}>
                            {user.name}
                        </Text>
                        
                        <DrawerContentScrollView {...props}>
                            <DrawerItemList {...props} />
                            <TouchableOpacity style={{flexDirection:'row', height:50, padding:15, marginTop:30, alignItems:'center'}} onPress={handleLogOut}>
                        <FontAwesomeIcon icon={faRightFromBracket} style={{color:'#9e2d06'}} />
                        <Text
                            style={{
                            fontSize: 16,
                            color: '#9e2d06',
                            marginLeft:10
                            }}>
                            LogOut
                        </Text>
                        </TouchableOpacity>
                        </DrawerContentScrollView>
                           
                        <Text
                            style={{
                            fontSize: 16,
                            textAlign: 'center',
                            color: 'grey'
                            }}>
                            Central Library IIT Delhi
                        </Text>
                    </SafeAreaView>
                </View>
            )
        }
       }
       screenOptions={{
        drawerStyle: {
          width: 240,
          padding:5
        },
        headerTintColor:  '#9e2d06',
        drawerActiveBackgroundColor : '#9e2d0611',
        drawerActiveTintColor: "#9e2d06"
      }}
       >
      <Drawer.Screen name="Home" component={Main} />
      <Drawer.Screen name="Profile" component={Profile} />
      <Drawer.Screen name="Account" component={Account} /> 
      <Drawer.Screen name="Contact" component={Contact} />
      <Drawer.Screen name="All of IR-IIT D" component={Repositories} />
      <Drawer.Screen name="Services" component={Services} />
      {/* <Drawer.Screen name="SignUp" component={SignUp} /> */}
      {/* <Drawer.Screen name="Profile" component={Profile} /> */}
        </Drawer.Navigator>
    </>
  );
}


const Home = () => {
  return (
        <View style={styles.home}>
            {/* <Text>Home</Text> */}
            <MyDrawer/>
        </View>
  )
}

export default Home

const styles = StyleSheet.create({
    home:{
        flex:1,
        // margin:10,
        // padding:10,
        backgroundColor:'#cceeff'
    },

    sideMenuProfileIcon: {
        resizeMode: 'cover',
        width: 170,
        height: 170,
        borderRadius: 100,
        alignSelf: 'center',
        marginTop:15
      },
      iconStyle: {
        width: 15,
        height: 15,
        marginHorizontal: 5,
      },
      customItem: {
        padding: 16,
        flexDirection: 'row',
        alignItems: 'center',
      },
      drawerInfo:{
        alignSelf:'center',
        fontSize:17,
        marginBottom:20,
        marginTop:5
      }
})

