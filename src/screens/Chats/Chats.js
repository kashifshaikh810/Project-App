import React from 'react';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
import {
  All_Page,
  Buying_Page,
  Selling_Page,
} from '../../Components/NavigationTitileNames/Name';
import All from './All/All';
import Buying from './Buying/Buying';
import Selling from './Selling/Selling';
import {Text, View} from 'react-native';
import {Styles} from './Styles';

const Tab = createMaterialTopTabNavigator();

const Chats = () => {
  return (
    <>
      <View style={Styles.chatHeader}>
        <Text style={Styles.chat}>Chats</Text>
      </View>
      <Tab.Navigator
        screenOptions={{
          tabBarIndicatorStyle: Styles.tabBarIndicator,
          tabBarLabelStyle: Styles.tabBarLabel,
          tabBarStyle: Styles.tabBar,
        }}>
        <Tab.Screen name={All_Page} component={All} />
        <Tab.Screen name={Buying_Page} component={Buying} />
        <Tab.Screen name={Selling_Page} component={Selling} />
      </Tab.Navigator>
    </>
  );
};

export default Chats;
