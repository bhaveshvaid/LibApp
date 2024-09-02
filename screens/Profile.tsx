import { Image, StyleSheet, Text, View,ScrollView } from 'react-native'
import React, { useContext } from 'react'

import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'
import { faUser } from '@fortawesome/free-regular-svg-icons/faUser'
import { faEnvelope } from '@fortawesome/free-regular-svg-icons/faEnvelope'
import { faBuilding } from '@fortawesome/free-regular-svg-icons/faBuilding'
import { faUserTag } from '@fortawesome/free-solid-svg-icons/faUserTag'
import { faIndianRupeeSign } from '@fortawesome/free-solid-svg-icons/faIndianRupeeSign'
import { SignInContext } from '../context/SignInContext'

// const myButton = (
//     <Icon
//     name='check'
//     color='rgba(0, 0, 0, 0.38)'
//     size={25}
//     type="entypo"
//   />
// );

const Profile = () => {
    const {userInfo,setUserInfo, isLoggedIn, setIsLoggedIn} = useContext(SignInContext)
    var user={name:'Error',email:'',password:'',memId:'',image:''};
    if(isLoggedIn){
      user = JSON.parse(userInfo)
    }

  return (
        <View style={styles.container}>
            {/* <Text style={styles.heading}>Your Profile</Text> */}
            <View style={[styles.container,styles.mTop]}>
            {user.image!=null?<Image
                            source={{uri:user.image}}
                            style={styles.profilePic}
                        />:<Image
                        source={require('../assets/profile.png')}
                        style={styles.profilePic}
                    />}
                {/* <Image style={styles.profilePic} source={require('../assets/profile.jpeg')}></Image> */}
                <ScrollView style={[styles.container,styles.box]}>
                <View style={[styles.container,styles.box1]}>
                    <Text style={styles.text}>UserName:{'\n'} </Text>
                    <View style={styles.inline}>
                    <FontAwesomeIcon icon={faUser} style={{color:'#9e2d06'}} />
                    <Text style={styles.text2}>{user.name}</Text>
                    </View>
                </View>
                <View style={[styles.container,styles.box1,styles.box2]}>
                    <Text style={styles.text}>E-Mail Id:{'\n'} </Text>

                    <View style={styles.inline}>
                    <FontAwesomeIcon icon={faEnvelope} style={{color:'#9e2d06'}} />
                    <Text style={styles.text2}>{user.email}</Text>
                    </View>
                </View>
                <View style={[styles.container,styles.box1,styles.box3]}>
                    <Text style={styles.text}>Membership Id:{'\n'} </Text>

                    <View style={styles.inline}>
                    <FontAwesomeIcon icon={faUserTag} style={{color:'#9e2d06'}}/>
                    <Text style={styles.text2}>{user.memId}</Text>
                    </View>
                </View>
                <View style={[styles.container,styles.box1,styles.box4]}>
                    <Text style={styles.text}>Fine: {'\n'}</Text>

                    <View style={styles.inline}>
                    <FontAwesomeIcon icon={faIndianRupeeSign} style={{color:'#9e2d06'}}/>
                    <Text style={styles.text2}>0.0000</Text>
                    </View>
                </View>
                <View style={[styles.container,styles.box1,styles.box5]}>
                    <Text style={styles.text}>Department: {'\n'}</Text>

                    <View style={styles.inline}>
                    <FontAwesomeIcon icon={faBuilding} style={{color:'#9e2d06'}} />                    
                    <Text style={styles.text2}>Information Technology</Text>
                    </View>
                </View>
                
                </ScrollView>
            </View>
            
        </View>
  )
}

export default Profile

const styles = StyleSheet.create({
    heading:{
        marginTop:30,
        marginLeft:25,
    },
    inline:{
        flex:1,
        flexDirection:'row',
        gap:10,
        alignItems:'center'
    },
    mTop:{
        marginTop:30,
        alignItems:'center', 
    },
    profilePic:{
        // flex:1,
        justifyContent:'center',
        // alignItems:'center',
        borderRadius:0,
        height:150,
        width:150
    },
    container:{
        flex:1,
        // alignItems:'center',
        // marginTop:40
        // justifyContent:'center',
    },
    box:{
        marginTop:10,
        marginLeft:20,
        marginRight:20,
    },
    box1:{
        marginTop:5,
        flex:1,
        height:80,
        width:300,
        backgroundColor:'#9e2d0622',
        padding:10,
        borderRadius:20,
        paddingLeft:20,
        // width:200
    },
    box2:{
        backgroundColor:'#9e2d0622',
    },
    box3:{
        backgroundColor:'#9e2d0622',
    },
    box4:{
        backgroundColor:'#9e2d0622',
    },
    box5:{
        backgroundColor:'#9e2d0622',
    },
    text:{
        color:'#9e2d06',
        fontSize:15,
        fontWeight:'bold'
    },
    text2:{
        color:'#111111',
        fontSize:15,
        // fontWeight:'bold'
    }
})