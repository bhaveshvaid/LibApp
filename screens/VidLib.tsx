import {
  Image,
  Linking,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React from 'react';
import {VidLibArray} from '../components/ViDLibArray';

const VidLib = () => {
  const VidArray = VidLibArray;
  return (
    <ScrollView style={{padding: 10}}>
      <Text style={{fontSize: 23, fontWeight: '500', color: '#9e2d06'}}>
        Video Library Services
      </Text>
      <View style={{flex: 1, alignItems: 'center'}}>
        <Image
          source={require('../assets/VidLib.png')}
          style={{height: 130, width: 130, alignItems: 'center'}}
        />
        <Text style={{fontSize: 14, color: '#000', paddingBottom: 0}}>
          The Central Library has a collection of more than 1,800 CDs.The Video
          CDs are kept in the computer Application Division of the Central
          Library for viewing. Most of the video CDs collection in the Library
          consists of video recording of series of class room lectures delivered
          by the IIT faculty to the undergraduate engineering students. These
          video recordings are done by the professionals video recorders
          employed by the Educational Technology Services Centre. The videos in
          the CD/DVD format have been kept in the computer application division
          in the central library. This facility can be availed from 9.00 A.M. to
          5.30 P.M. on all working days. A number of such other lectures from
          other IITs and IISc Bangalore are also available at NPTEL website 
          <Text style={{color: 'blue'}} onPress={()=>{Linking.openURL('https://nptel.ac.in/')}}> https://nptel.ac.in/</Text>
        </Text>
        {/* <TouchableOpacity
          onPress={() => {
            Linking.openURL(' http://nptel.iitm.ac.in/');
          }}>
          <Text style={{color: 'blue'}}>http://nptel.iitm.ac.in/</Text>
        </TouchableOpacity> */}
      </View>
      <View>
        <Text style={{color:'#000',fontSize:15, margin:2}}>List of Video CD available in Central Library, IIT Delhi:</Text>
      </View>
      <Text style={styles.note}>
        {' '}
        Showing enteries {VidArray.length} of {VidArray.length}:
      </Text>

      <View style={{marginBottom:15}}>
        {VidArray.map(item => {
          return (
            <View
              style={{
                flex: 1,
                borderWidth: 1,
                borderRadius: 5,
                justifyContent: 'center',
                alignItems: 'center',
                padding: 5,
                marginBottom: 5,
                flexDirection: 'row',
              }} key={item.id}>
              <View
                style={{
                  borderRightWidth: 1,
                  height: '100%',
                  padding: 5,
                  justifyContent: 'center',
                  alignItems: 'center',
                }}>
                <Text>{item.id}</Text>
              </View>
              <View
                style={{
                  flex: 1,
                  justifyContent: 'center',
                  alignItems: 'center',
                  padding: 5,
                  marginBottom: 5,
                }}>
                <TouchableOpacity
                  onPress={() => {
                    Linking.openURL(item.link);
                  }}>
                  <Text
                    style={{fontSize: 16, fontWeight: '500', color: '#9e2d06'}}>
                    {item.title}
                    <Text style={{color:'#777', fontSize:12, fontWeight:'300'}}> [click]</Text>
                  </Text>
                  
                </TouchableOpacity>
                <Text style={{color:'#000', fontSize:14,}}>Author: {item.author}</Text>
                <Text style={{color:'#000', fontSize:14,}}>CD No.: {item.cd}</Text>
                <Text style={{color:'#000', fontSize:14,}}>Units: {item.units}</Text>
              </View>
            </View>
          );
        })}
      </View>
    </ScrollView>
  );
};

export default VidLib;

const styles = StyleSheet.create({
  note: {
    // marginLeft:13,
    // marginBottom:15,
    fontSize: 13,
  },
});
