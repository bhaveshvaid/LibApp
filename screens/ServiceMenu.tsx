import { Button, Image, Linking, ScrollView, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { NativeStackScreenProps } from '@react-navigation/native-stack'
import { ServiceParamList } from './Services'
import { TouchableOpacity } from 'react-native'

type ServiceScreenProps = NativeStackScreenProps<ServiceParamList, 'Service'>
const ServiceMenu = ({navigation}:ServiceScreenProps) => {
  return (
    <ScrollView>
      <View style={styles.grid}>
        <View style={styles.gridBox}>
            <Image source={require("../assets/bookBank.png")} style={styles.gridBoxLogo}></Image>
            <Text>Book Bank</Text>
        </View>
        <View style={styles.gridBox}>
            <Image source={require("../assets/new.png")} style={styles.gridBoxLogo}></Image>
            <Text>New Arrivals</Text>
        </View>
        <TouchableOpacity onPress={()=>navigation.navigate('PathFinder')}>
        <View style={styles.gridBox}>
            <Image source={require("../assets/path.png")} style={styles.gridBoxLogo}></Image>
            <Text>Path Finder</Text>
        </View>
        </TouchableOpacity>
        <View style={styles.gridBox}>
            <Image source={require("../assets/eres.png")} style={styles.gridBoxLogo}></Image>
            <Text>Electronic Division</Text>
        </View>
        <View style={styles.gridBox}>
            <Image source={require("../assets/tools.png")} style={styles.gridBoxLogo}></Image>
            <Text>Remote tools</Text>
        </View>
        <TouchableOpacity onPress={()=>{Linking.openURL('https://library.iitd.ac.in/news-clipping-services')}}>
            <View style={styles.gridBox}>
                <Image source={require("../assets/news.png")} style={styles.gridBoxLogo}></Image>
                <Text>News Clippings</Text>
            </View>
        </TouchableOpacity>
        <View style={styles.gridBox}>
            <Image source={require("../assets/videoLib.png")} style={styles.gridBoxLogo}></Image>
            <Text>Video Lib</Text>
        </View>
        <View style={styles.gridBox}>
            <Image source={require("../assets/new.png")} style={styles.gridBoxLogo}></Image>
            <Text>Video Lib</Text>
        </View>
      </View>
    </ScrollView>
  )
}

export default ServiceMenu

const styles = StyleSheet.create({
    grid:{
        flex:1,
        flexDirection:'row',
        flexWrap:'wrap',
        justifyContent:'space-evenly',
        marginTop:10
    },
    gridBox:{
        // flex:1,
        alignItems:'center',
        justifyContent:'space-evenly',
        backgroundColor:'#efefef',
        borderRadius:10,
        height:140,
        width:140,
        // margin:5,
        shadowColor: '#000000',
        elevation: 10,
        marginBottom:20,
        padding:10
    },
    gridBoxLogo:{
        height:50,
        width:50
    }
})