/* eslint-disable react-native/no-inline-styles */
import React, {useEffect, useState} from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {Text, TouchableOpacity, View} from 'react-native';
import HomeIcon from 'react-native-vector-icons/FontAwesome5';
import ChatsIcon from 'react-native-vector-icons/MaterialCommunityIcons';
import MyAdsIcon from 'react-native-vector-icons/Entypo';
import FullBlackHomeIcon from 'react-native-vector-icons/Feather';
import LinearGradient from 'react-native-linear-gradient';
import SignUpAndSignInMenu from '../Authentication/SignUpAndSignInMenu/SignUpAndSignInMenu';

import {
  Account_Page,
  Categories_Page,
  Chats_Page,
  Home_Page,
  MyAds_Page,
  Sell_Page,
} from '../../Components/NavigationTitileNames/Name';
import Home from '../Home/Home';
import Chats from '../Chats/Chats';
import Categories from '../Categories/Categories';
import MyAds from '../MyAds/MyAds';
import Account from '../Account/Account';
import {styles} from './styles';
import {Auth} from '../../../Setup';

const Tab = createBottomTabNavigator();

const BottomTabNav = props => {
  const [showTopLine, setShowTopLine] = useState('');
  const [userId, setuserId] = useState('');
  let uid = Auth()?.currentUser?.uid;

  const click = routeName => {
    setShowTopLine(routeName);
    if (uid) {
      props.navigation.navigate('SELL');
    } else {
      props.navigation.navigate('SignUpAndSignInMenu');
    }
  };

  useEffect(() => {
    setuserId(uid);
    console.log(uid);
    return () => {
      console.log('cleanup');
    };
  }, []);

  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarLabelStyle: {fontSize: 14, fontWeight: 'bold', color: '#36585b',},
        tabBarStyle: {backgroundColor: 'white', paddingBottom: 2, width: '100%', height: 60},
        tabBarActiveTintColor: 'black',
        tabBarInactiveTintColor: 'black',
      }}>
      <Tab.Screen
        name={Home_Page}
        component={Home}
        listeners={routeName => setShowTopLine(routeName)}
        options={{
          tabBarIcon: () =>
            showTopLine?.route?.name === 'HOME' ? (
              <HomeIcon
                name="home"
                size={25}
                style={[
                  styles.TopLine,
                  {
                    borderTopWidth:
                      showTopLine?.route?.name === 'HOME' ? 3 : null,
                  },
                ]}
              />
            ) : (
              <FullBlackHomeIcon name="home" size={25} style={styles.TopLine} />
            ),
        }}
      />
      <Tab.Screen
        name={Chats_Page}
        component={userId ? Chats : SignUpAndSignInMenu}
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
              name={
                showTopLine?.route?.name === 'CHATS'
                  ? 'message-processing'
                  : 'message-processing-outline'
              }
              size={25}
              onPress={() =>
                userId ? '' : props.navigation.navigate('SignUpAndSignInMenu')
              }
            />
          ),
        }}
      />
      <Tab.Screen
        name={Sell_Page}
        component={uid ? Categories : SignUpAndSignInMenu}
        listeners={routeName => ({tabPress: () => click(routeName)})}
        options={{
          tabBarIcon: () => (
            <View style={styles.container}>
              <LinearGradient
                colors={['#3e7dfa', '#39e5dc', '#fecd37']}
                start={{x: 0.0, y: 1.2}}
                end={{x: 1.9, y: 1.0}}
                style={styles.grediant}>
                <TouchableOpacity
                  style={styles.buttonContainer}
                  onPress={() =>
                    userId
                      ? props.navigation.navigate('Categories')
                      : props.navigation.navigate('SignUpAndSignInMenu')
                  }
                  activeOpacity={0.9}>
                  <MyAdsIcon name="plus" size={25} color="#222222" />
                </TouchableOpacity>
              </LinearGradient>
            </View>
          ),
        }}
      />
      <Tab.Screen
        name={MyAds_Page}
        component={MyAds}
        listeners={routeName => setShowTopLine(routeName)}
        options={{
          tabBarIcon: () =>
            showTopLine?.route?.name === 'MY ADS' ? (
              <MyAdsIcon
                style={[
                  styles.TopLine,
                  {
                    borderTopWidth:
                      showTopLine?.route?.name === 'MY ADS' ? 3 : null,
                  },
                ]}
                name="heart"
                size={25}
              />
            ) : (
              <MyAdsIcon
                style={styles.TopLine}
                name="heart-outlined"
                size={25}
              />
            ),
        }}
      />
      <Tab.Screen
        name={Account_Page}
        component={Account}
        listeners={routeName => setShowTopLine(routeName)}
        options={{
          tabBarIcon: () =>
            showTopLine?.route?.name === 'ACCOUNT' ? (
              <ChatsIcon
                style={[
                  styles.TopLine,
                  {
                    borderTopWidth:
                      showTopLine?.route?.name === 'ACCOUNT' ? 3 : null,
                  },
                ]}
                name="account"
                size={25}
              />
            ) : (
              <ChatsIcon
                style={styles.TopLine}
                name="account-outline"
                size={25}
              />
            ),
        }}
      />
    </Tab.Navigator>
  );
};

export default BottomTabNav;
