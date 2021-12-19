import React from 'react';
import {View, Text, Image, StyleSheet, ScrollView} from 'react-native';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Entypo from 'react-native-vector-icons/Entypo';
import Fontisto from 'react-native-vector-icons/Fontisto';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

export default function Home3() {
  return (
    <View style={styles.containerImage}>
      <Image style={styles.bgImage} source={require('../assets/japan.jpg')} />
      <View style={styles.bottomContainer}>
        <Image style={styles.profile} source={require('../assets/me3.jpg')} />
        <Text style={styles.name}>Piyawat Sakdadet</Text>
        <Text style={{color: 'grey', bottom: '7%', fontSize: 20}}>
          Engineer Computer
        </Text>
        <View
          style={{
            //backgroundColor: 'red',
            width: '100%',
            height: '40%',
            bottom: '6%',
            padding: 15,
          }}>
          <View style={{marginLeft: 10}}>
            <Text style={{fontSize: 25, fontWeight: 'bold',color: 'black',top: -5}}> Contact </Text>
          </View>
          <View
            style={{
              flexDirection: 'column',
              backgroundColor: '#DCDCDC',
              borderRadius: 19,
              bottom: -6,
              alignContent: 'center',
              flexDirection: 'column',
              alignItems: 'flex-start',
            }}>
            <View
              style={{
                flexDirection: 'row',
                //backgroundColor: 'green',

                marginLeft: 19,
                bottom: -8,
              }}>
              <AntDesign name="phone" size={25} style={{marginTop: 10}} />
              <Text style={{fontSize: 17, padding: 10, fontWeight: 'bold'}}>
                0620623676
              </Text>
            </View>
            <View
              style={{
                flexDirection: 'row',
                // backgroundColor: 'green',

                marginLeft: 19,
              }}>
              <Entypo name="mail" size={25} style={{marginTop: 10}} />
              <Text style={{fontSize: 17, padding: 10, fontWeight: 'bold'}}>
                Piyawatbol@gmail.com
              </Text>
            </View>
            <View
              style={{
                flexDirection: 'row',
                // backgroundColor: 'green',

                marginLeft: 19,
                top: -8,
              }}>
              <AntDesign
                name="facebook-square"
                size={25}
                style={{marginTop: 10}}
              />
              <Text style={{fontSize: 17, padding: 10, fontWeight: 'bold'}}>
                Piyawat Sakdadet
              </Text>
            </View>
            <View
              style={{
                flexDirection: 'row',
                // backgroundColor: 'green',

                marginLeft: 19,
                top: -11,
              }}>
              <Fontisto name="line" size={25} style={{marginTop: 10}} />
              <Text
                style={{
                  fontSize: 17,
                  fontWeight: 'bold',
                  padding: 10,
                }}>
                pywsd_050943
              </Text>
            </View>
            <View
              style={{
                flexDirection: 'row',
                // backgroundColor: 'green',
                marginLeft: 19,
                top: -11,
              }}>
              <MaterialCommunityIcons
                name="instagram"
                size={25}
                style={{marginTop: 10}}
              />
              <Text
                style={{
                  fontSize: 17,
                  fontWeight: 'bold',
                  padding: 10,
                }}>
                sakkda_05
              </Text>
            </View>
          </View>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  bgImage: {
    flex: 1,
    position: 'absolute',
    width: '100%',
    height: '30%',
    justifyContent: 'center',
    resizeMode: 'cover',
  },
  bottomContainer: {
    marginTop: '52%',
    height: '90%',
    width: 400,
    backgroundColor: '#FFFAFA',
    borderTopEndRadius: 50,
    borderTopStartRadius: 50,
    alignItems: 'center',
  },
  profile: {
    height: 120,
    width: 120,
    borderRadius: 25,
    bottom: '10%',
  },
  name: {
    fontSize: 30,
    fontWeight: 'bold',
    bottom: '8%',
    color: 'black',
  },
});
