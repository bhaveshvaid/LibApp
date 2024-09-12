import { StyleSheet, Text, View, Image, ScrollView, TouchableOpacity, Button } from 'react-native'
import React, { PropsWithChildren, useContext, useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'
// import { faUser } from '@fortawesome/free-regular-svg-icons/faUser'
import { faCircleInfo } from '@fortawesome/free-solid-svg-icons/faCircleInfo'
import { faCalendarDays} from '@fortawesome/free-regular-svg-icons/faCalendarDays'
import { faUserTag } from '@fortawesome/free-solid-svg-icons/faUserTag'
import { SignInContext } from '../context/SignInContext'
// import { faIndianRupeeSign } from '@fortawesome/free-solid-svg-icons/faIndianRupeeSign'
type AccordionItemPros = PropsWithChildren<{
    title: string;
  }>;
const AccordionItem=({children, title}:AccordionItemPros):JSX.Element=>{
    const [expanded, setExpanded]= useState(false);
    const toggle=()=>{
        setExpanded(!expanded);
    }

    const body = <View style={styles.accordBody}>{ children }</View>;
    return(
        <View style={styles.accordContainer}>
      <TouchableOpacity style={styles.accordHeader} onPress={ toggle }>
        <Text style={styles.accordTitle}>{ title }</Text>
        <FontAwesomeIcon icon={faCircleInfo} style={{color:'#9e2d06'}}/>
        {/* <FontAwesomeIcon icon={faUserTag} style={{color:'#9e2d06'}} /> */}
        {/* <FontAwesome name="search" color="#ff0000" size={20} /> */} 
      </TouchableOpacity>
      { expanded && body }
    </View>
    )
}


const Account = () => {
  const {userInfo,setUserInfo, isLoggedIn, setIsLoggedIn} = useContext(SignInContext)
  var user={name:'Error',email:'',password:'',memId:''};
  if(isLoggedIn){
    user = JSON.parse(userInfo)
  }
  return (
    <View style={{flex:1,padding:10}}>
      <Text>User Account Data...</Text>
      <View style={{alignItems:'center',flex:1}}>
        <Image source={require('../assets/account.png')} style={{width:250,height:200}}/>
        <ScrollView style={[styles.box]}>
                <View style={[styles.container,styles.box1]}>
                    <Text style={styles.text}>MemberShip Id:{'\n'} </Text>
                    <View style={styles.inline}>
                    <FontAwesomeIcon icon={faUserTag} style={{color:'#9e2d06'}} />
                    <Text style={styles.text2}>{user.memId}</Text>
                    </View>
                </View>
                <View style={[styles.container,styles.box1]}>
                    <Text style={styles.text}>Valid upto:{'\n'} </Text>

                    <View style={styles.inline}>
                    <FontAwesomeIcon icon={faCalendarDays} style={{color:'#9e2d06'}} />
                    {/* <FontAwesomeIcon icon={faCalendarDays} /> */}
                    <Text style={styles.text2}>26/02/2060</Text>
                    </View>
                </View>
                
               {/* test  */}
        <AccordionItem title="Currently issued books">
            <Text style={styles.textSmall}>As soon as the database is connected and the data is loaded the Details of
             currently issued books will be shown in this tab. </Text>
        </AccordionItem>
        <AccordionItem title="Previously issued books">
            <Text style={styles.textSmall}>As soon as the database is connected and the data is loaded the Details of
             Previously issued books will be shown in this tab. </Text>
        </AccordionItem>

        <Text style={styles.footerTxt}>
            These details are taken from your existing Account with the library. In case of any concerns, 
            please contact the helpdesk at the library.
        </Text>
                
        </ScrollView>
      </View>
    </View>
  )
}

export default Account

const styles = StyleSheet.create({
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
    text:{
        color:'#9e2d06',
        fontSize:15,
        fontWeight:'bold'
    },
    text2:{
        color:'#111111',
        fontSize:15,
        // fontWeight:'bold'
    },
    inline:{
        flex:1,
        flexDirection:'row',
        gap:10,
        alignItems:'center'
    },
    accordContainer: {
        paddingBottom: 4
      },
      accordHeader: {
        padding: 12,
        backgroundColor: '#9e2d0622',
        color: '#9e2d0622',
        flex: 1,
        flexDirection: 'row',
        justifyContent:'space-between',
        marginTop:10,
        borderRadius:20,
        paddingLeft:20,
        alignItems:'center'
      },
      accordTitle: {
        fontSize: 15,
        color:'#9e2d06',
        fontWeight:'bold'
      },
      accordBody: {
        padding: 12
      },
      textSmall: {
        fontSize: 16
      },
      seperator: {
        height: 12
      },
      footerTxt:{
        marginTop:20,
        fontSize:12.5,
        padding:10,
      }

})