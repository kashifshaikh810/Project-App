import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {TouchableOpacity, View} from 'react-native';
import HomeIcon from 'react-native-vector-icons/FontAwesome5';
import ChatsIcon from 'react-native-vector-icons/MaterialCommunityIcons';
import MyAdsIcon from 'react-native-vector-icons/Entypo';

import {
  Account_Page,
  Chats_Page,
  Home_Page,
  MyAds_Page,
  Sell_Page,
} from '../../Components/NavigationTitileNames/Name';
import Home from '../Home/Home';
import Chats from '../Chats/Chats';
import Sell from '../Sell/Sell';
import MyAds from '../MyAds/MyAds';
import Account from '../Account/Account';

const Tab = createBottomTabNavigator();

const BottomTabNav = () => {
  return (
    <Tab.Navigator screenOptions={{headerShown: false}}>
      <Tab.Screen
        name={Home_Page}
        component={Home}
        options={{tabBarIcon: () => <HomeIcon name="home" size={20} />}}
      />
      <Tab.Screen
        name={Chats_Page}
        component={Chats}
        options={{
          tabBarIcon: () => (
            <ChatsIcon name="message-processing-outline" size={20} />
          ),
        }}
      />
      <Tab.Screen
        name={Sell_Page}
        component={Sell}
        options={{
          tabBarIcon: () => (
            <TouchableOpacity
              style={{
                height: 40,
                width: 40,
                borderWidth: 1,
                borderRadius: 50,
                alignItems: 'center',
                justifyContent: 'center',
                position: 'absolute',
                bottom: 5,
                backgroundColor: 'white'
              }}>
              <MyAdsIcon name="plus" size={20} />
            </TouchableOpacity>
          ),
        }}
      />
      <Tab.Screen
        name={MyAds_Page}
        component={MyAds}
        options={{
          tabBarIcon: () => <MyAdsIcon name="heart-outlined" size={20} />,
        }}
      />
      <Tab.Screen
        name={Account_Page}
        component={Account}
        options={{
          tabBarIcon: () => <ChatsIcon name="account-outline" size={20} />,
        }}
      />
    </Tab.Navigator>
  );
};

export default BottomTabNav;
