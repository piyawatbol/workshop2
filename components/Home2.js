import React from 'react';
import {
  View,
  Text,
  SafeAreaView,
  ScrollView,
  Image,
  TouchableOpacity,
} from 'react-native';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Entypo from 'react-native-vector-icons/Entypo';

export default function Home2() {
  return (
    <>
      <View
        style={{
          height: '36%',
        }}>
        <View
          style={{
            alignItems: 'center',
            //backgroundColor: 'red',
            marginTop: 35,
          }}>
          <TouchableOpacity>
            <Image
              source={require('../assets/me6.jpg')}
              style={{width: 200, height: 200, borderRadius: 100}}
            />
          </TouchableOpacity>
        </View>
      </View>
      <ScrollView>
        {/* กล่องใหญ่ */}
        <View style={{flexDirection: 'column', height: 850}}>
          {/* กล่องดำ */}
          <View
            style={{
              alignItems: 'flex-start',
              marginTop: 20,
              marginLeft: 10,
              backgroundColor: 'black',
              width: '95%',
              height: 50,
              justifyContent: 'center',
              borderTopStartRadius: 20,
              borderTopEndRadius: 20,
            }}>
            <Text
              style={{
                fontSize: 28,
                fontWeight: '800',
                padding: 10,
                marginLeft: 15,
                color: 'white',
                top: -4,
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
            {/* กรอบใน */}
            <View
              style={{
                width: '97.5%',
                backgroundColor: '#D82929',
                height: 340,
                top: -10,
                left: 5,
                borderBottomEndRadius: 20,
                borderBottomStartRadius: 20,
              }}>
              <View
                style={{
                  left: 25,
                  paddingTop: 15,
                  alignItems: 'flex-start',
                  width: 300,
                  top: 10,
                }}>
                {/* ้ข้อมูลด้านใน */}

                <FontAwesome5
                  name="school"
                  size={40}
                  style={{top: -6, color: 'white'}}
                />
                <Text
                  style={{fontWeight: 'bold', fontSize: 20, color: 'white'}}>
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
                  left: 38,
                  alignItems: 'flex-end',
                  width: 300,
                  top: -20,
                }}>
                <Ionicons
                  name="ios-school"
                  size={46}
                  style={{color: 'white'}}
                />
                <Text
                  style={{fontWeight: 'bold', fontSize: 20, color: 'white'}}>
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
                <Entypo
                  name="arrow-bold-down"
                  size={34}
                  style={{fontWeight: '900', left: -125, bottom: -5}}
                />
              </View>
            </View>
          </View>
          <View
            style={{
              alignItems: 'flex-start',
              marginLeft: 10,
              backgroundColor: 'black',
              width: '95%',
              height: 55,
              justifyContent: 'center',
              borderTopStartRadius: 20,
              borderTopEndRadius: 20,
              top: -40,
            }}>
            <Text
              style={{
                fontSize: 28,
                fontWeight: '800',
                padding: 10,
                marginLeft: 15,
                color: 'white',
                top: 180,
              }}>
              SKILLS
            </Text>
            <View
              style={{
                backgroundColor: '#D82929',
                width: '100%',
                height: 345,
                top: 175,
                borderBottomEndRadius: 20,
                borderBottomStartRadius: 20,
                marginTop: 13,
              }}>
              <View
                style={{
                  padding: 8,
                  flexDirection: 'row',
                  marginTop: 34,
                  left: 8,
                }}>
                <Image
                  source={require('../assets/js.png')}
                  style={{width: 110, height: 110}}
                />
                <Image
                  source={require('../assets/html.png')}
                  style={{width: 110, height: 110}}
                />
                <Image
                  source={require('../assets/php.png')}
                  style={{width: 110, height: 110}}
                />
              </View>
              <View
                style={{
                  padding: 16,
                  flexDirection: 'row',
                  marginTop: 10,
                  left: 42,
                }}>
                <Image
                  source={require('../assets/flutter.png')}
                  style={{width: 110, height: 110}}
                />
                <Image
                  source={require('../assets/ps.png')}
                  style={{width: 110, height: 110, marginLeft: 20}}
                />
              </View>
            </View>
          </View>
        </View>
      </ScrollView>
    </>
  );
}
