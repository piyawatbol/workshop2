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
        <Text
          style={{
            color: '#19123B',
            bottom: '7%',
            fontSize: 20,
            fontWeight: '600',
            fontFamily: 'Itim-Regular',
            top: -65,
          }}>
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
            <Text
              style={{
                fontSize: 25,
                fontWeight: '600',
                color: '#19123B',
                top: -20,
                left: 10,
                fontFamily: 'Itim-Regular',
              }}>
              CONTACT
            </Text>
          </View>
          <View
            style={{
              flexDirection: 'column',
              backgroundColor: '#DCDCDC',
              borderRadius: 19,
              alignContent: 'center',
              flexDirection: 'column',
              alignItems: 'flex-start',
              height: 260,
              top: -15,
            }}>
            <View
              style={{
                flexDirection: 'row',
                //backgroundColor: 'green',

                marginLeft: 19,
                bottom: -8,
              }}>
              <AntDesign
                name="phone"
                size={35}
                style={{marginTop: 10, color: 'green'}}
              />
              <Text
                style={{
                  fontSize: 20,
                  padding: 10,
                  fontWeight: '500',
                  color: '#646464',
                  top: 5,
                  left: 4,
                  fontFamily: 'Itim-Regular',
                }}>
                0620623676
              </Text>
            </View>
            <View
              style={{
                flexDirection: 'row',
                // backgroundColor: 'green',

                marginLeft: 19,
              }}>
              <Entypo
                name="mail"
                size={35}
                style={{marginTop: 10, color: '#4285F4'}}
              />
              <Text
                style={{
                  fontSize: 20,
                  padding: 10,
                  fontWeight: '500',
                  color: '#646464',
                  top: 3,
                  left: 4,
                  fontFamily: 'Itim-Regular',
                }}>
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
                size={35}
                style={{marginTop: 10, color: '#0D88EF'}}
              />
              <Text
                style={{
                  fontSize: 20,
                  padding: 10,
                  fontWeight: '500',
                  color: '#646464',
                  top: 3,
                  left: 4,
                  fontFamily: 'Itim-Regular',
                }}>
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
              <Fontisto
                name="line"
                size={35}
                style={{marginTop: 10, color: '#00B900'}}
              />
              <Text
                style={{
                  fontSize: 20,
                  fontWeight: '500',
                  padding: 10,
                  color: '#646464',
                  top: 3,
                  left: 1,
                  fontFamily: 'Itim-Regular',
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
                size={35}
                style={{marginTop: 10, color: '#CA2379'}}
              />
              <Text
                style={{
                  fontSize: 20,
                  fontWeight: '500',
                  padding: 10,
                  color: '#646464',
                  left: 3,
                  top: 3,
                  fontFamily: 'Itim-Regular',
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
    borderTopEndRadius: 55,
    borderTopStartRadius: 55,
    alignItems: 'center',
  },
  profile: {
    height: 120,
    width: 120,
    borderRadius: 25,
    bottom: '10%',
  },
  name: {
    fontSize: 35,
    fontWeight: '600',
    bottom: '8%',
    color: '#19123B',
    fontFamily: 'Itim-Regular',
  },
});
