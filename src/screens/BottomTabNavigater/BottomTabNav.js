/* eslint-disable react-native/no-inline-styles */
import React, {useState} from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {TouchableOpacity} from 'react-native';
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
import {styles} from './styles';

const Tab = createBottomTabNavigator();

const BottomTabNav = () => {
  const [showTopLine, setShowTopLine] = useState('');
  return (
    <Tab.Navigator
      screenOptions={{headerShown: false, tabBarItemStyle: {paddingBottom: 5}, tabBarStyle: {backgroundColor: '#f1f1f1'}}}>
      <Tab.Screen
        name={Home_Page}
        component={Home}
        listeners={routeName => setShowTopLine(routeName)}
        options={{
          tabBarIcon: () => (
            <HomeIcon
              name="home"
              size={20}
              style={[
                styles.TopLine,
                {
                  borderTopWidth:
                    showTopLine?.route?.name === 'HOME' ? 3 : null,
                },
              ]}
            />
          ),
        }}
      />
      <Tab.Screen
        name={Chats_Page}
        component={Chats}
        listeners={routeName => setShowTopLine(routeName)}
        options={{
          tabBarIcon: () => (
            <ChatsIcon
              style={[
                styles.TopLine,
                {
                  borderTopWidth:
                    showTopLine?.route?.name === 'CHATS' ? 3 : null,
                },
              ]}
              name="message-processing-outline"
              size={20}
            />
          ),
        }}
      />
      <Tab.Screen
        name={Sell_Page}
        component={Sell}
        listeners={routeName => setShowTopLine(routeName)}
        options={{
          tabBarIcon: () => (
            <TouchableOpacity style={styles.adsIcon}>
              <MyAdsIcon name="plus" size={20} />
            </TouchableOpacity>
          ),
        }}
      />
      <Tab.Screen
        name={MyAds_Page}
        component={MyAds}
        listeners={routeName => setShowTopLine(routeName)}
        options={{
          tabBarIcon: () => (
            <MyAdsIcon
              style={[
                styles.TopLine,
                {
                  borderTopWidth:
                    showTopLine?.route?.name === 'MY ADS' ? 3 : null,
                },
              ]}
              name="heart-outlined"
              size={20}
            />
          ),
        }}
      />
      <Tab.Screen
        name={Account_Page}
        component={Account}
        listeners={routeName => setShowTopLine(routeName)}
        options={{
          tabBarIcon: () => (
            <ChatsIcon
              style={[
                styles.TopLine,
                {
                  borderTopWidth:
                    showTopLine?.route?.name === 'ACCOUNT' ? 3 : null,
                },
              ]}
              name="account-outline"
              size={20}
            />
          ),
        }}
      />
    </Tab.Navigator>
  );
};

export default BottomTabNav;
