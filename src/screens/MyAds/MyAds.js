import React from 'react';
import {View, Text} from 'react-native';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
import {Styles} from './Styles';
import {
  Ads_Page,
  Favourites_Page,
} from '../../Components/NavigationTitileNames/Name';
import Ads from './Ads/Ads';
import Favourites from './Favourites/Favourites';

const Tab = createMaterialTopTabNavigator();

const MyAds = () => {
  return (
    <View style={{flex: 1, backgroundColor: 'white'}}>
      <View style={Styles.headerContainer}>
        <Text style={Styles.headerText}>My Ads</Text>
      </View>
      <Tab.Navigator
        screenOptions={{
          tabBarIndicatorStyle: Styles.tabBarIndicator,
          tabBarLabelStyle: Styles.tabBarLabel,
          tabBarStyle: Styles.tabBar,
        }}>
        <Tab.Screen name={Ads_Page} component={Ads} />
        <Tab.Screen name={Favourites_Page} component={Favourites} />
      </Tab.Navigator>
    </View>
  );
};

export default MyAds;
