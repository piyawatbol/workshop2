import React from 'react';
import {
  View,
  Text,
  Image,
  ScrollView,
  TouchableOpacity,
  Container,
} from 'react-native';
import AntDesign from 'react-native-vector-icons/AntDesign';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Feather from 'react-native-vector-icons/Feather';

export default function Home() {
  return (
    <View style={{backgroundColor: '#659FE3', flex: 1}}>
      <View
        style={{
          backgroundColor: 'white',
          height: '100%',
          width: '100%',
          position: 'relative',
          marginTop: '28%',
          padding: 10,
        }}>
        <View>
          <TouchableOpacity>
            <Image
              source={require('../assets/me.jpg')}
              style={{
                width: 100,
                height: 100,
                borderRadius: 100,
                top: -60,
                left: 19,
              }}
            />
          </TouchableOpacity>
          <TouchableOpacity>
            <Feather
              name="edit"
              style={{
                left: 320,
                top: -100,
                fontSize: 40,
                position: 'absolute',
              }}
            />
          </TouchableOpacity>
        </View>
        <View
          style={{
            top: -40,
            left: 20,
            flexDirection: 'column',
            //backgroundColor: 'red'
          }}>
          <Text style={{fontSize: 28, fontWeight: '900', color: 'black'}}>
            PROFILE
          </Text>
        </View>
        <View>
          <View
            style={{
              flexDirection: 'row',
              // backgroundColor: 'red',
              top: -30,
              left: 20,
              marginLeft: 8,
            }}>
            <AntDesign name="calendar" style={{fontSize: 20}} />
            <Text style={{marginLeft: 8, fontSize: 15}}>5 September 2000</Text>
          </View>
          <View
            style={{
              flexDirection: 'row',
              // backgroundColor: 'red',
              top: -30,
              left: 20,
              marginLeft: 8,
              marginTop: 10,
            }}>
            <MaterialCommunityIcons
              name="face-profile"
              style={{fontSize: 20}}
            />
            <Text style={{marginLeft: 8, fontSize: 15}}>Piyawat Sakdadet</Text>
          </View>
          <View
            style={{
              flexDirection: 'row',
              // backgroundColor: 'red',
              top: -30,
              left: 20,
              marginLeft: 8,
              marginTop: 10,
            }}>
            <AntDesign name="idcard" style={{fontSize: 20}} />
            <Text style={{marginLeft: 8, fontSize: 15}}>62012468</Text>
          </View>
          <View
            style={{
              flexDirection: 'row',
              // backgroundColor: 'red',
              top: -30,
              left: 20,
              marginLeft: 8,
              marginTop: 10,
            }}>
            <Ionicons name="school" style={{fontSize: 20}} />
            <Text style={{marginLeft: 8, fontSize: 15}}>
              Rattana Bundit Univercity
            </Text>
          </View>
        </View>
        <View
          style={{
            width: '100%',
            height: 3,
            backgroundColor: '#F5F5F5',
            marginBottom: 10,
          }}></View>

        <ScrollView horizontal={true}>
          <View style={{flexDirection: 'row', padding: 5}}>
            <View style={{marginLeft: 1}}>
              <TouchableOpacity>
                <Image
                  source={require('../assets/me2.jpg')}
                  style={{height: 270, width: 170, borderRadius: 10}}
                />
              </TouchableOpacity>
            </View>
            <View style={{marginLeft: 5}}>
              <TouchableOpacity>
                <Image
                  source={require('../assets/me3.jpg')}
                  style={{height: 270, width: 170, borderRadius: 10}}
                />
              </TouchableOpacity>
            </View>
            <View style={{marginLeft: 5}}>
              <TouchableOpacity>
                <Image
                  source={require('../assets/me4.jpg')}
                  style={{height: 270, width: 170, borderRadius: 10}}
                />
              </TouchableOpacity>
            </View>
            <View style={{marginLeft: 5}}>
              <TouchableOpacity>
                <Image
                  source={require('../assets/me5.jpg')}
                  style={{height: 270, width: 170, borderRadius: 10}}
                />
              </TouchableOpacity>
            </View>
          </View>
        </ScrollView>
      </View>
    </View>
  );
}
