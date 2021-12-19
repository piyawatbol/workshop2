import React from 'react';
import {View, Text, SafeAreaView, ScrollView, Image} from 'react-native';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import Ionicons from 'react-native-vector-icons/Ionicons';

export default function Home2() {
  return (
    <View
      style={{
        backgroundColor: '#D3D3D3',
      }}>
      <View
        style={{
          alignItems: 'center',
          //backgroundColor: 'red',
          marginTop: 35,
        }}>
        <Image
          source={require('../assets/me6.jpg')}
          style={{width: 200, height: 200, borderRadius: 100}}
        />
      </View>
      <View
        style={{
          alignItems: 'flex-start',
          marginTop: 20,
          marginLeft: 10,
          backgroundColor: 'black',
          width: '95%',
          height: 50,
          justifyContent: 'center',
          borderTopStartRadius: 30,
          borderBottomEndRadius: 30,
        }}>
        <Text
          style={{
            fontSize: 24,
            fontWeight: '800',
            padding: 10,
            marginLeft: 15,
            color: 'white',
          }}>
          EDUCATION
        </Text>
      </View>
      <View
        style={{
          // backgroundColor: 'red',
          top: 15,
          width: '100%',
          height: 400,
          padding: 5,
        }}>
        <View
          style={{
            width: '92%',
            backgroundColor: '#778899',
            height: 340,
            top: -10,
            left: 5,
          }}>
          <View
            style={{
              left: 30,
              paddingTop: 15,
              alignItems: 'center',
              width: 300,
              top: 10,
            }}>
            <FontAwesome5 name="school" size={25} style={{top: -6}} />
            <Text style={{fontWeight: 'bold', fontSize: 20, color: 'white'}}>
              High school
            </Text>
            <Text
              style={{
                fontWeight: 'bold',
                fontSize: 20,
                color: 'white',
              }}>
              Nongkipittayakom School
            </Text>
            <Text
              style={{
                fontSize: 18,
                fontWeight: 'bold',
                color: 'white',
              }}>
              Science - Math
            </Text>
            <Text
              style={{
                fontSize: 18,
                fontWeight: 'bold',
                color: 'white',
              }}>
              GPA : 3.01
            </Text>
          </View>
          <View
            style={{
              left: 30,
              top: 5,
              alignItems: 'center',
              width: 300,
              top: 30,
            }}>
            <Ionicons name="ios-school" size={30} />
            <Text style={{fontWeight: 'bold', fontSize: 20, color: 'white'}}>
              Bachelor's degree
            </Text>
            <Text
              style={{
                fontWeight: 'bold',
                fontSize: 20,
                left: 15,
                color: 'white',
                left: 0,
              }}>
              Rattanabundit Univercity
            </Text>
            <Text
              style={{
                left: 35,
                fontSize: 18,
                fontWeight: 'bold',
                color: 'white',
                left: 0,
              }}>
              Facluty Engineer Computer
            </Text>
            <Text
              style={{
                fontSize: 18,
                fontWeight: 'bold',
                color: 'white',
              }}>
              GPA : 3.51
            </Text>
          </View>
        </View>
      </View>
    </View>
  );
}
