import { Linking, ScrollView, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { TouchableOpacity } from 'react-native'
import { pathArray } from '../components/PathArray'
import PathCarousel from '../components/PathCarousel'

const PathFinder = () => {
    
  return (
    <ScrollView>
      <Text style={styles.heading}>PathFinder</Text>
      <PathCarousel/>
      <Text style={styles.para}>
      A pathfinder is a bibliography on the author, subject, and known personality, to promote usage and to create awareness among the user community. It lists the various resources available in the Central Library and helps library users for teaching, learning, and research. Some of such pathfinder(s) compiled are given below which are being updated time-to-time:
      </Text>
      <Text style={styles.note}> Showing enteries {pathArray.length} of {pathArray.length}:</Text>
      <View style={styles.linkBox}>
        {pathArray.map((item)=>{
            return (
                <View >
                <TouchableOpacity onPress={()=>Linking.openURL(item.link)} style={styles.touchBox}>
                    <Text style={styles.links}> -{'>'} {item.title}</Text>
                </TouchableOpacity>
                </View>
            )
        })}        
      </View>
    </ScrollView>
  )
}

export default PathFinder

const styles = StyleSheet.create({
    heading:{
        fontSize:30,
        color:'#9e2d06',
        marginLeft:15,
        marginTop:15,
        fontWeight:'600'
    },
    para:{
        color:'#000',
        fontSize:16,
        paddingLeft:15,
        paddingRight:15,
        paddingTop:5
    },
    links:{
        marginLeft:20,
        color:'#9e2d06'
    },
    linkBox:{
        width:260,
        marginBottom:20,
        marginLeft:40,
        gap:10
        // alignItems:'center'
    },
    touchBox:{
        borderRadius:2,
        elevation:1,
        justifyContent:'center',
        padding:10,
        
    },
    note:{
        marginLeft:13,
        marginBottom:15,
        fontSize:13
    }
})