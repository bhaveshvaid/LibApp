import {
  Image,
  Linking,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {useState} from 'react';

const ETD = () => {
  const [searchTxt, setSearchTxt] = useState('');
  return (
    <View style={{padding: 5}}>
      <Text
        style={{
          marginLeft: 5,
          fontSize: 20,
          color: '#111111',
          fontWeight: '500',
        }}>
        Electronic Thesis & Desertation
      </Text>

      <View style={styles.searchDiv}>
        <TextInput
          style={styles.searchBox}
          value={searchTxt}
          keyboardType="default"
          onChangeText={text => {
            // setError('');
            setSearchTxt(text);
          }}
          placeholderTextColor={'#AEAEAE'}
          placeholder="Enter your search text "
          // style={styles.input1}
        />
      </View>
      <View style={{flexDirection: 'row', justifyContent: 'space-evenly'}}>
        <TouchableOpacity
          onPress={() => {
            Linking.openURL(
              'http://10.17.50.243/search?query=' + `${searchTxt}`,
            );
          }}>
          <View style={styles.gridBox}>
            <Text style={styles.gridBoxTxt}>Extended Abstract </Text>
          </View>
        </TouchableOpacity>

        <TouchableOpacity
          onPress={() => {
            Linking.openURL(
              'https://shodhganga.inflibnet.ac.in:8443/jspui/simple-search?query=' +
                `${searchTxt}`,
            );
          }}>
          <View style={styles.gridBox}>
            <Text style={styles.gridBoxTxt}>Full Text Thesis</Text>
          </View>
        </TouchableOpacity>
      </View>

      <View>
        <Text style={{textAlign: 'justify', color: '#111111', margin: 10,fontSize:16}}>
          The Online Dictionary for Library & Information Science (ODLIS)
          defines Electronic Theses and Dissertations (ETD) as "The Master's
          theses and Ph.D. dissertations submitted in digital form rather than
          in print on paper, as opposed to those submitted in hard copy and
          subsequently converted to a machine-readable format." ETDs are
          transforming the scholarly communication landscape through knowledge
          creation and sharing for industrialization and modernization. ETD
          repositories have become platforms for the intellectual achievements
          of scholars and their institutions by making their research output
          available globally. It provides easy & wider access to theses and
          dissertations. To enable the researchers to access ETD contents from a
          single point, many institutional, national and international networks
          and organizations have taken initiatives to establish ETD
          repositories.
        </Text>
      </View>
    </View>
  );
};

export default ETD;

const styles = StyleSheet.create({
  grid: {
    flex: 1,
    justifyContent: 'space-evenly',
    alignItems: 'center',
  },
  gridBox: {
    // flex:1,
    alignItems: 'center',
    justifyContent: 'space-evenly',
    backgroundColor: '#9e2d06',
    borderRadius: 10,
    height: 70,
    width: 140,
    // margin:5,
    shadowColor: '#000000',
    elevation: 10,
    marginBottom: 20,
    padding: 10,
  },
  gridBoxLogo: {
    height: 50,
    width: 50,
  },
  searchBox: {
    borderRadius: 10,
    borderColor: '#9e2d06',
    borderWidth: 1,
    margin: 10,
    padding: 5,
    width: '90%',
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
  gridBoxTxt: {
    color: '#fefefe',
    fontSize: 15,
  },
});
