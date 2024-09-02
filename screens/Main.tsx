import { ImageBackground, Linking, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { useContext, useEffect, useState } from 'react'
import axios from 'axios'
import { FlatList, ScrollView, TextInput } from 'react-native';
import MyCarousel from '../components/MyCarousel';


const Main = () => {
  // const {userInfo,setUserInfo, isLoggedIn, setIsLoggedIn} = useContext(SignInContext)
  const [search,setSearch]= useState('');
  const [announcements,setAnnouncements]=useState([{title:'hellllo',link:'hrhrhr'}])
  var st='trial';
  const BASE_URL='https://iitd.summon.serialssolutions.com/#!/search';
  const SUMMON_API='7HmWGseNnTEkdZwu3iZY5y+R3oig3ahpaPJeptpCymA='
 
  const click= async()=>{
    const URL ='https://iitd.summon.serialssolutions.com/#!/search?pn=1&ho=t&include.ft.matches=f&l=en&q='
    Linking.openURL(URL+search)
  }
  const checkAnnouncements= async ( )=>{
    const announcement = await axios.get("https://lib-server.vercel.app/announcements/get")
    console.log(announcement.data);
    setAnnouncements(announcement.data.array);
  }
  useEffect(()=>{
      checkAnnouncements();
    
  },[])
  return (

      <ScrollView style={{paddingBottom:70}}>
        
        <MyCarousel/>
        <Text style={styles.welcome}>Welcome to Central Library IIT Delhi</Text>

        <View style={styles.searchDiv}>
      <TextInput
        style={styles.searchBox}
        value={search}
        keyboardType="default"
        onChangeText={text => {
          // setError('');
          setSearch(text);
        }}
        placeholderTextColor={'#AEAEAE'}
        placeholder="Enter your search text "
        // style={styles.input1}
      />

      <TouchableOpacity
        onPress={click}
        style={styles.searchBtn}
      >
        <Text style={styles.searchBtnTxt}>Search</Text>
      </TouchableOpacity>
        </View>
        {/* <Text></Text> */}
        <Text style={{marginLeft:5, fontSize:20, color:'#111111',fontWeight:'500'}}>Computer Applications Division (CAD):</Text>
        <Text style={{textAlign:'justify', color:'#111111', margin:10}}>
         is the heart of Central Library for its innovative Integrated Automated Services. The division is responsible for managing the Integrated Library Management System using Koha open source software, Institutional Repository based on the latest DSpace, Servers and Networking Management and overall, the Library Website and services through it. The division has recently launched the Drupal based Website using its In-House resources. The division provides support to all the sections of the Central Library and Departmental Libraries for providing and customizing different types of Library Resources, Services and Products using different state of the art innovative systems and services. More recently, the division has achieved a unique distinction by shifting all its Automation, Database and other Computerized services on the Cloud, known as the BAADAL. The CAD also maintains the state of the art computer lab of the Central Library, helps in troubleshooting in networking and other computer-related issues apart from need-based support to the institute as a whole.
        
        // 
        The Library has its sub-LAN which is connected to the Campus LAN. It has a Computer Lab for the users of the Library as well. The Wi-Fi facilities is also available in the library. For Wi-Fi setting and configuration click here  http://csc.iitd.ac.in/services-network-campus-wifi.php or through http://library.iitd.ac.in
        </Text>
        <View>
          <Text>Announcements</Text>
          {announcements.map((obj)=>{
            return(
              <Text>{obj.title}</Text>
            )
          })}
        </View>
        <Text>
          Announcements...
        </Text>
        <Text>
          Virtual tour video
        </Text>

      </ScrollView>
      

  )
}

export default Main

const styles = StyleSheet.create({
    mainScreen:{
        height:'80%',
        width:'100%',
        alignSelf:'center',
    },
    searchBox:{
      borderRadius:10,
      borderColor:'#9e2d06',
      borderWidth:1,
      margin:10,
      padding:5,
      width:'73%',
      height:40,
      marginLeft:0,
      marginRight:0
    },
    searchDiv:{
      // flex:1,
      flexDirection:'row',
      // backgroundColor:'#e6e4f3',
      justifyContent:'space-around',
      alignItems:'center',                                                                                                                  
      // height:50
    },
    searchBtn:{
      // color:'#fefefe'
      borderRadius:7,
      backgroundColor:'#9e2d06',
      padding:10
    },
    searchBtnTxt:{
      color:'#fefefe',
    },
    welcome:{
      fontSize:25,
      margin:5,
      color:'#9e2d06',
      textAlign:'center'
    }
})