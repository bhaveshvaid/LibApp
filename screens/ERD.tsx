import {Linking, ScrollView, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React, {PropsWithChildren, useState} from 'react';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import {faCircleInfo} from '@fortawesome/free-solid-svg-icons';


type AccordionItemPros = PropsWithChildren<{
  title: string;
}>;
const AccordionItem = ({children, title}: AccordionItemPros): JSX.Element => {
  const [expanded, setExpanded] = useState(false);
  const toggle = () => {
    setExpanded(!expanded);
  };

  const body = <View style={styles.accordBody}>{children}</View>;
  return (
    <View style={styles.accordContainer}>
      <TouchableOpacity style={styles.accordHeader} onPress={toggle}>
        <Text style={styles.accordTitle}>{title}</Text>
        <FontAwesomeIcon icon={faCircleInfo} style={{color: '#9e2d06'}} />
        {/* <FontAwesomeIcon icon={faUserTag} style={{color:'#9e2d06'}} /> */}
        {/* <FontAwesome name="search" color="#ff0000" size={20} /> */}
      </TouchableOpacity>
      {expanded && body}
    </View>
  );
};

const ERD = () => {
  return (
    <View style={{padding: 10, flex: 1}}>
      <Text style={{fontSize: 18, color: '#9e2d06'}}>E-Resources Division</Text>
      <ScrollView>
      <AccordionItem title="Introduction">
        <View>
          <Text>
            Electronic Resources Division of Central Library, IIT Delhi, caters
            for the needs of the users by providing them with bibliographic and
            full-text databases, journals, proceedings, eBooks, archives,
            standards and other resources. IIT Delhi has access to more than
            71,000 full-text electronic journals, 8300 eBooks and 2900 archives.
            The subscription is made either through e Shodh Sindhu (eSS)
            consortia or directly from the publishers/exclusive distributors.
            The division is responsible for performing each step of the
            electronic resources management lifecycle, from investigation to
            renewal. This division investigates, acquires, implements,
            evaluates, review, and renew electronic resources. Access to the
            subscribed resources is provided to the stakeholders through IP,
            Shibboleth and, in some cases, on a username and password basis. It
            provides a Remote Access facility of Subscribed E-Resources,
            exclusively restricted to the authorized users of the Institute
            through following link: https://idp.iitd.ac.in/. This division
            maintains the A-Z list of journals, eBooks and archives for easy
            access. Throughout the year, the division compiles various reports.
            These reports help in the overall analysis of usage and strategic
            planning, and policymaking. The specialized interests of the
            division include ERMS, open access, scholarly communication, and
            taking advantage of the latest technologies to facilitate all steps
            of the ERM lifecycle
          </Text>
        </View>
      </AccordionItem>

      <AccordionItem title="Bibliographic Database">
        <View>
          <Text style={{fontSize:16, fontWeight:'500', color:'#000'}}>
            Bibliographic Resources
          </Text>
          <View>
            <View style={{padding:5, borderWidth:1, borderRadius:15, flexDirection:'row', justifyContent:'space-evenly',margin:3}}>
              <TouchableOpacity onPress={()=>{Linking.openURL('http://www.ams.org/mathscinet/')}}>
                <Text style={{color:'blue', fontSize:16}}>MathSciNet</Text>
              </TouchableOpacity>
              {/* <Text>Database</Text> */}
            </View>


            <View style={{padding:5, borderWidth:1, borderRadius:15, flexDirection:'row', justifyContent:'space-evenly',margin:5}}>
              <TouchableOpacity onPress={()=>{Linking.openURL('http://www.cas.org/products/scifinder')}}>
                <Text style={{color:'blue', fontSize:16}}>SciFinder Scholar</Text>
              </TouchableOpacity>
              {/* <Text>Database</Text> */}
            </View>

            <View style={{padding:5, borderWidth:1, borderRadius:15, flexDirection:'row', justifyContent:'space-evenly',margin:5}}>
              <TouchableOpacity onPress={()=>{Linking.openURL('https://www.scopus.com/')}}>
                <Text style={{color:'blue', fontSize:16}}>SCOPUS</Text>
              </TouchableOpacity>
              {/* <Text>Database</Text> */}
            </View>

            <View style={{padding:5, borderWidth:1, borderRadius:15, flexDirection:'row', justifyContent:'space-evenly',margin:5}}>
              <TouchableOpacity onPress={()=>{Linking.openURL('http://apps.webofknowledge.com/UA_GeneralSearch_input.do?product=UA&search_mode=GeneralSearch&SID=W14cMyhLzvFL2mOOjdG&preferencesSaved=')}}>
                <Text style={{color:'blue', fontSize:16}}>Web of Science</Text>
              </TouchableOpacity>
              {/* <Text>Database</Text> */}
            </View>
          </View>
        </View>
      </AccordionItem>

      <AccordionItem title="Stanndards">
        <View>
          <View>
            <View style={{padding:15, borderRadius:2, flexDirection:'row', justifyContent:'space-evenly',margin:0,elevation:1}}>
              <TouchableOpacity onPress={()=>{Linking.openURL('https://compass.astm.org/')}}>
                <Text style={{color:'blue', fontSize:16}}>ASTM</Text>
              </TouchableOpacity>
              {/* <Text>Database</Text> */}
            </View>


            <View style={{padding:15, borderRadius:2, flexDirection:'row', justifyContent:'space-evenly',margin:0,elevation:1,backgroundColor:'#9e2d0622'}}>
              <TouchableOpacity onPress={()=>{Linking.openURL('https://library.iitd.ac.in/index.php/standards-tab/')}}>
                <Text style={{color:'blue', fontSize:16}}>BIS</Text>
              </TouchableOpacity>
              {/* <Text>Database</Text> */}
            </View>

            <View style={{padding:15, borderRadius:2, flexDirection:'row', justifyContent:'space-evenly',margin:0,elevation:1, }}>
              <TouchableOpacity onPress={()=>{Linking.openURL('https://standards.bsbedge.com/')}}>
                <Text style={{color:'blue', fontSize:16}}>IEC</Text>
              </TouchableOpacity>
              {/* <Text>Database</Text> */}
            </View>

            <View style={{padding:15, borderRadius:2, flexDirection:'row', justifyContent:'space-evenly',margin:0,elevation:1, backgroundColor:'#9e2d0622'}}>
              <TouchableOpacity onPress={()=>{Linking.openURL('https://standards.bsbedge.com/')}}>
                <Text style={{color:'blue', fontSize:16}}>ISO Standards </Text>
              </TouchableOpacity>
              {/* <Text>Database</Text> */}
            </View>
          </View>
        </View>
      </AccordionItem>

      
      </ScrollView>
    </View>
  );
};

export default ERD;

const styles = StyleSheet.create({
  accordContainer: {
    paddingBottom: 4,
  },
  accordHeader: {
    padding: 12,
    backgroundColor: '#9e2d0622',
    color: '#9e2d0622',
    // flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 10,
    borderRadius: 20,
    paddingLeft: 20,
    alignItems: 'center',
  },
  accordTitle: {
    fontSize: 15,
    color: '#9e2d06',
    fontWeight: 'bold',
  },
  accordBody: {
    padding: 12,
  },
});
