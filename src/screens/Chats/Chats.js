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

const Tab = createMaterialTopTabNavigator();

const Chats = () => {
  return (
    <>
      <View style={{height: 50, width: 80, justifyContent: 'center', alignItems: 'center'}}>
        <Text style={{fontWeight: 'bold', color: 'black', fontSize: 18}}>Chats</Text>
      </View>
      <Tab.Navigator
        screenOptions={{
          tabBarIndicatorStyle: {borderWidth: 2.5, borderRadius: 5},
          tabBarLabelStyle: {color: 'black'},
          tabBarStyle: {elevation: 0, backgroundColor: '#f1f1f1'}
        }}>
        <Tab.Screen name={All_Page} component={All} />
        <Tab.Screen name={Buying_Page} component={Buying} />
        <Tab.Screen name={Selling_Page} component={Selling} />
      </Tab.Navigator>
    </>
  );
};

export default Chats;
