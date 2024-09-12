import {Linking, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React, {useEffect, useState} from 'react';
import axios from 'axios';
import {ScrollView, TextInput} from 'react-native';
import MyCarousel from '../components/MyCarousel';
import YoutubePlayer from 'react-native-youtube-iframe';

const Main = () => {
  // const {userInfo,setUserInfo, isLoggedIn, setIsLoggedIn} = useContext(SignInContext)
  const [search, setSearch] = useState('');
  const [announcements, setAnnouncements] = useState([
    {title: 'hellllo', link: 'hrhrhr'},
  ]);

  const click = async () => {
    const URL =
      'https://iitd.summon.serialssolutions.com/#!/search?pn=1&ho=t&include.ft.matches=f&l=en&q=';
    Linking.openURL(URL + search);
  };
  const checkAnnouncements = async () => {
    const announcement = await axios.get(
      'https://lib-server.vercel.app/announcements/get',
    );
    console.log(announcement.data);
    setAnnouncements(announcement.data.array);
  };
  useEffect(() => {
    checkAnnouncements();
  }, []);
  return (
    <ScrollView style={{paddingBottom: 70,}}>
      <View style={{paddingBottom: 70,}}>
      <MyCarousel />
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

        <TouchableOpacity onPress={click} style={styles.searchBtn}>
          <Text style={styles.searchBtnTxt}>Search</Text>
        </TouchableOpacity>
      </View>


      <View style={styles.announcementBox}>
        <View style={styles.announcementHead}>
          <Text style={styles.announcementHeadText}>Announcements</Text>
        </View>

        <View style={styles.announcementView}>
          {announcements.map(obj => {
            return (
              <TouchableOpacity
                onPress={() => {
                  Linking.openURL(obj.link);
                }} key={obj.title}>
                <Text style={styles.announcementViewLinks}>
                  {`\u25C8` + ' ' + obj.title}
                </Text>
              </TouchableOpacity>
            );
          })}
        </View>
      </View>
      <Text>Virtual tour video</Text>
      <View style={{
          // flex: 1,
          // height: 320,
          // width: '90%',
          // backgroundColor: '#bbb',
          // // justifyContent: 'center',
          // // alignItems: 'center',
          // margin: 10,+
          marginLeft:10,
          marginRight:10
        }}>
        <YoutubePlayer height={230} play={false} videoId={'XqTnzmJvPOI'} />
      </View>
      {/* Text Vision and mission */}
     <View>
     <Text
        style={{
          marginLeft: 5,
          fontSize: 20,
          color: '#111111',
          fontWeight: '500',
        }}>
        Vision of the Central Library
      </Text>
      <Text style={{textAlign: 'justify', color: '#111111', margin: 10}}>
        To be a dynamic hub of knowledge, technological innovation,
        collaboration, quality scientific and technical education, and research
        by providing access to diverse information resources and
        state-of-the-art library services to the user communities and remain a
        source of inspiration for other libraries in India and the world.
      </Text>
      <Text
        style={{
          marginLeft: 5,
          fontSize: 20,
          color: '#111111',
          fontWeight: '500',
        }}>
        Mission of the Central Library, IIT Delhi
      </Text>
      <Text style={{textAlign: 'justify', color: '#111111', margin: 10}}>
        Our mission is to support and empower the intellectual growth of our
        user communities by providing an inclusive and dynamic learning
        environment, innovative library services, comprehensive and easily
        accessible information resources, cutting-edge technology, expert
        guidance, and collaboration. We are dedicated to:
      </Text>

      <View>
        <Text
          style={{
            textAlign: 'justify',
            color: '#111111',
            margin: 10,
            marginTop: 0,
          }}>
          {`\u25CF`} Support and facilitate the academic and research goals of
          our user communities in the central and unit libraries with an easily
          accessible diverse collection of information resources,
          state-of-the-art library services, tools, and expert guidance.
        </Text>
      </View>

      <View>
        <Text
          style={{
            textAlign: 'justify',
            color: '#111111',
            margin: 10,
            marginTop: 0,
          }}>
          {`\u25CF`} Be alert and responsive to the changing needs of user
          communities and technological advancements.
        </Text>
      </View>

      <View>
        <Text
          style={{
            textAlign: 'justify',
            color: '#111111',
            margin: 10,
            marginTop: 0,
          }}>
          {`\u25CF`} Actively engage in emerging tools and technologies and use
          them in our services.
        </Text>
      </View>
      <View>
        <Text
          style={{
            textAlign: 'justify',
            color: '#111111',
            margin: 10,
            marginTop: 0,
          }}>
          {`\u25CF`} Create an environment that fosters a sense of inclusion
          among users and staff.
        </Text>
      </View>
      <View>
        <Text
          style={{
            textAlign: 'justify',
            color: '#111111',
            margin: 10,
            marginTop: 0,
            marginBottom: 0,
          }}>
          {`\u25CF`} Promote information literacy skills among users and staff.
          Create a comfortable physical and virtual space where our user
          communities can study, collaborate, and exchange ideas, and staff
          members deliver their best.
        </Text>
      </View>
      <View>
        <Text
          style={{
            textAlign: 'justify',
            color: '#111111',
            margin: 10,
            marginTop: 0,
          }}>
          {`\u25CF`} Encourage the principle of open science and open access.
        </Text>
      </View>
     </View>

      {/* announcements view */}
      

      

      
      </View>
    </ScrollView>
  );
};

export default Main;

const styles = StyleSheet.create({
  mainScreen: {
    height: '80%',
    width: '100%',
    alignSelf: 'center',
  },
  searchBox: {
    borderRadius: 10,
    borderColor: '#9e2d06',
    borderWidth: 1,
    margin: 10,
    padding: 5,
    width: '73%',
    height: 40,
    marginLeft: 0,
    marginRight: 0,
  },
  searchDiv: {
    // flex:1,
    flexDirection: 'row',
    // backgroundColor:'#e6e4f3',
    justifyContent: 'space-around',
    alignItems: 'center',
    // height:50
  },
  searchBtn: {
    // color:'#fefefe'
    borderRadius: 7,
    backgroundColor: '#9e2d06',
    padding: 10,
  },
  searchBtnTxt: {
    color: '#fefefe',
  },
  welcome: {
    fontSize: 25,
    margin: 5,
    color: '#9e2d06',
    textAlign: 'center',
  },
  announcementBox: {
    borderRadius: 10,
    borderWidth: 1,
    // padding:5,
    margin: 10,
  },
  announcementHead: {
    backgroundColor: '#9e2d06',
    padding: 5,
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
    borderTopLeftRadius: 9,
    borderTopRightRadius: 9,
  },
  announcementHeadText: {
    fontSize: 18,
    fontWeight: '600',
    color: '#fefefe',
  },
  announcementView: {
    padding: 5,
  },
  announcementViewLinks: {
    margin: 5,
    color: 'blue',
  },
});
