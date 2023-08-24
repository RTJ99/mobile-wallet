import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

import Icon from 'react-native-vector-icons/Entypo';
import Home from './screens/Home';
import Schedule from './screens/Schedule';
import Profile from './screens/Profile';
import Chat from './screens/Chat';
import {Pressable, View} from 'react-native';
import {Avatar} from 'native-base';
import pic from '../assets/avatar.jpeg';
import {useNavigation} from '@react-navigation/native';
import Landing from './screens/Landing';
import colors from './constants/colors';
import Statistics from './screens/Statistics';
import Settings from './screens/Settings';

const screenOptions = (route, color) => {
  let iconLink;
  let screenName;

  switch (route.name) {
    case 'Profile':
      iconLink = 'user';
      screenName = 'Profile';
      break;
    case 'Home':
      iconLink = 'home';
      screenName = 'Home';
      break;
    case 'Settings':
      iconLink = 'cog';
      screenName = 'Settings';
      break;
    case 'Stats':
      iconLink = 'bar-graph';
      screenName = 'Stats';
      break;
    default:
      break;
  }

  return <Icon name={iconLink} size={30} color={color} />;
};

const Tab = createBottomTabNavigator();

const Tabs = () => {
  const navigation = useNavigation();
  return (
    <Tab.Navigator
      // change the color of the active tab

      // change the background color of the tab bar
      barStyle={{backgroundColor: '#000'}}
      screenOptions={({route}) => ({
        tabBarActiveTintColor: colors.primary,
        tabBarInactiveTintColor: '#f9f9f9',
        tabBarStyle: {
          backgroundColor: colors.dark,
        },
        tabBarLabelStyle: {
          fontSize: 12,
          fontWeight: 'bold',
        },
        // CHANGE ICON COLOR WHEN ACTIVE

        style: {
          borderTopColor: '#f54',
          backgroundColor: '#1E2426',
          elevation: 1,
        },
        tabBarIcon: ({color}) => screenOptions(route, color),
      })}>
      <Tab.Screen
        options={{
          headerShown: false,
          headerTitle: '',
          headerStyle: {
            // transparent header

            backgroundColor: colors.dark,
          },
          headerTitleAlign: 'center',
          headerTitleStyle: {
            color: '#fff',
            fontSize: 20,
            fontWeight: 'bold',
            textAlign: 'center',
          },
        }}
        name="Home"
        component={Landing}
      />
      <Tab.Screen
        options={{
          headerShown: false,
          headerTitle: 'Statistics',
          headerTitleAlign: 'center',
          headerTitleStyle: {
            color: '#fff',
            fontSize: 20,
            fontWeight: 'bold',
            textAlign: 'center',
          },
        }}
        name="Stats"
        component={Statistics}
      />
      <Tab.Screen
        options={{
          headerTitle: 'Settings',
          headerShown: false,
        }}
        name="Settings"
        component={Settings}
      />
      <Tab.Screen
        options={{headerShown: false}}
        name="Profile"
        component={Profile}
      />
    </Tab.Navigator>
  );
};
export default Tabs;
