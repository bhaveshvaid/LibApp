import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  TextInput,
  Pressable,
  Linking,
} from 'react-native';
import React, {useContext, useState} from 'react';
import {Image} from 'react-native';
import {TouchableOpacity} from 'react-native';
import { SignInContext } from '../context/SignInContext';

const Contact = () => {
  const [write, setWrite] = useState('');
  const [error, setError] = useState<string>('');
  const [isDepartment, setIsDepartment] = useState(false);
  const [reciver, setReciver] = useState('');

  const {userInfo,setUserInfo, isLoggedIn, setIsLoggedIn} = useContext(SignInContext)
  var user={name:'Error fetching!',email:'',password:'',memId:'membershipId'};
  if(isLoggedIn){
    user = JSON.parse(userInfo)
    // user=userInfo
  }

  const sendQuery =()=>{
    const date = new Date()
    const subject = 'Request raised: '+reciver.slice(0,3)+'/'+user.memId+'/'+date.getDate()+date.getMonth()+date.getFullYear();
    const cc= 'hodlibrary@admin.iitd.ac.in';
    setWrite(write+'          '+'From: '+ user.name+'  Membership Id: '+ user.memId);
    // console.log(subject)
    Linking.openURL(`mailto:${reciver}?subject=${subject}&body=${write}&cc=${cc}`);
  }

  const styles = StyleSheet.create({
    headImg: {
      height: 100,
      width: 200,
      // flex:1,
      // justifyContent:'center'
    },
    container: {
      // flex:1,
    },
    imgContainer: {
      // justifyContent:'center',
      alignItems: 'center',
      marginTop: 15,
    },
    wel: {
      textAlign: 'center',
      marginTop: 20,
      fontSize: 25,
    },
    contactBox: {
      marginLeft: 40,
      gap: 7,
      marginTop: 20,
    },
    containerTxt: {
      color: 'black',
      fontSize: 17,
    },
    writeBox: {
      // height:200,
      // width: 320,
      margin: 20,
      borderColor: '#9e2d06',
      borderWidth: 1,
      borderRadius: 10,
      padding: 10,
    },
    btn: {
      backgroundColor: '#9e2d06',
      padding: 10,
      height: 45,
      alignSelf: 'center',
      borderRadius: 5,
      width: '60%',
      marginBottom: 10,

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
      // fontWeight: 'bold',
      fontSize: 18,
    },
    buttonView: {
      flex: 1,
      flexWrap: 'wrap',
      flexDirection: 'row',
      // justifyContent:'center',
      alignItems:'center'
    },
    erdButton: {
      borderRadius: 5,
      elevation:5,
      padding:10,
      width: 140,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: `${reciver === 'erd@library.iitd.ac.in' ? '#9e2d06' : '#eeeeee'}`,
      margin:5
    },
    rsdButton: {
      borderRadius: 5,
      elevation:5,
      padding:10,
      width: 140,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: `${reciver === 'rsd@library.iitd.ac.in' ? '#9e2d06' : '#eeeeee'}`,
      margin:5
    },
    cddButton: {
      borderRadius: 5,
      elevation:5,
      padding:10,
      width: 140,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: `${reciver === 'cdd@library.iitd.ac.in' ? '#9e2d06' : '#eeeeee'}`,
      margin:5
    },
    tbbButton: {
      borderRadius: 5,
      elevation:5,
      padding:10,
      width: 140,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: `${reciver === 'tbb@library.iitd.ac.in' ? '#9e2d06' : '#eeeeee'}`,
      margin:5
    },
    cadButton: {
      borderRadius: 5,
      elevation:5,
      padding:10,
      width: 140,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: `${reciver === 'cad@library.iitd.ac.in' ? '#9e2d06' : '#eeeeee'}`,
      margin:5
    },
    erdText:{
      color:`${reciver === 'erd@library.iitd.ac.in' ? '#fff' : '#9e2d06'}`,
      fontSize:15,
      fontWeight:'500'
    },
    rsdText:{
      color:`${reciver === 'rsd@library.iitd.ac.in' ? '#fff' : '#9e2d06'}`,
      fontSize:15,
      fontWeight:'500'
    },
    cddText:{
      color:`${reciver === 'cdd@library.iitd.ac.in' ? '#fff' : '#9e2d06'}`,
      fontSize:15,
      fontWeight:'500'
    },
    tbbText:{
      color:`${reciver === 'tbb@library.iitd.ac.in' ? '#fff' : '#9e2d06'}`,
      fontSize:15,
      fontWeight:'500'
    },
    cadText:{
      color:`${reciver === 'cad@library.iitd.ac.in' ? '#fff' : '#9e2d06'}`,
      fontSize:15,
      fontWeight:'500'
    },
    h4:{
      color:'black',
      fontWeight:'300',
      fontSize:16
    }
  });

  return (
    <View style={styles.container}>
      <ScrollView>
        <View style={[styles.container, styles.imgContainer]}>
          <Image
            source={require('../assets/contact-bg.png')}
            style={styles.headImg}
          />
        </View>
        <View>
          <Text style={styles.wel}>Welcome to IIT Delhi Library</Text>
          <View style={styles.contactBox}>
            <Text style= {styles.h4}>Please choose your concerned department: </Text>
            <View style={styles.buttonView}>
              <TouchableOpacity
                onPress={() => {
                  setReciver('erd@library.iitd.ac.in');
                }}
                style={[styles.erdButton]}>
                <Text style={styles.erdText}>E-Resources</Text>
              </TouchableOpacity>
              <TouchableOpacity
                onPress={() => {
                  setReciver('rsd@library.iitd.ac.in');
                }}
                style={[styles.rsdButton]}>
                <Text style={styles.rsdText}>Circulation</Text>
              </TouchableOpacity>
              <TouchableOpacity
                onPress={() => {
                  setReciver('cdd@library.iitd.ac.in');
                }}
                style={[styles.cddButton]}>
                <Text style={styles.cddText}>Print Resources</Text>
              </TouchableOpacity>
              <TouchableOpacity
                onPress={() => {
                  setReciver('tbb@library.iitd.ac.in');
                }}
                style={[styles.tbbButton]}>
                <Text style={styles.tbbText}>Text Book</Text>
              </TouchableOpacity>
              <TouchableOpacity
                onPress={() => {
                  setReciver('cad@library.iitd.ac.in');
                }}
                style={[styles.cadButton]}>
                <Text style={styles.cadText}>Computer</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
        <View>
          <TextInput
            value={write}
            multiline
            numberOfLines={10}
            maxLength={80}
            onChangeText={text => {
              setError('');
              setWrite(text);
            }}
            placeholderTextColor={'#AEAEAE'}
            placeholder={
              'Enter your feedback/ suggestion/ general contact message'
            }
            style={styles.writeBox}
          />
          <Pressable
            onPress={sendQuery}
            style={[styles.btn]}>
            <Text style={styles.btnText}>Send</Text>
          </Pressable>
        </View>
      </ScrollView>
    </View>
  );
};

export default Contact;
