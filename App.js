import React from 'react';
import {View, Text} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Home from './components/Home';
import Home2 from './components/Home2';
import Home3 from './components/Home3';
import Ionic from 'react-native-vector-icons/Ionicons';

export default function App() {
  const Stack = createNativeStackNavigator();
  const Tab = createBottomTabNavigator();

  const bottomTapScreen = () => {
    return (
      <Tab.Navigator
        screenOptions={({route}) => ({
          tabBarHideOnKeyboard: true,
          tabBarShowLabel: false,
          headerShown: false,
          tabBarShowStyle: {
            height: 100,
          },
          tabBarIcon: ({focused, size}) => {
            let iconName;
            if (route.name === 'Home') {
              iconName = focused ? 'home-sharp' : 'home-outline';
              size = focused ? size + 6 : size + 1;
            } else if (route.name === 'Home2') {
              iconName = focused ? 'ios-book' : 'ios-book-outline';
              size = focused ? size + 6 : size + 1;
            } else if (route.name === 'Home3') {
              iconName = focused
                ? 'ios-person-circle-sharp'
                : 'ios-person-circle-outline';
              size = focused ? size + 6 : size + 1;
            }

            return <Ionic name={iconName} size={size} color="black" />;
          },
        })}>
        <Tab.Screen name="Home" component={Home} />
        <Tab.Screen name="Home2" component={Home2} />
        <Tab.Screen name="Home3" component={Home3} />
      </Tab.Navigator>
    );
  };

  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
        }}>
        <Stack.Screen name="Bottom" component={bottomTapScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
