import React from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import IconLeft from 'react-native-vector-icons/Feather';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
import {Styles} from './Styles';
import {
  Active_Page,
  Scheduled_Page,
  Expired_Page,
} from '../../../Components/NavigationTitileNames/Name';
import Active from '../MyOrders/Active/Active';
import Scheduled from '../MyOrders/Scheduled/Scheduled';
import Expired from '../MyOrders/Expired/Expired';

const Tab = createMaterialTopTabNavigator();

const MyOrders = props => {
  return (
    <>
      <View style={Styles.headerContainer}>
        <TouchableOpacity
          onPress={() => props.navigation.navigate('InvoicessAndBilling')}>
          <IconLeft name="chevron-left" size={23} color="#0b2a2e" />
        </TouchableOpacity>
        <Text style={Styles.headerText}>My Orders</Text>
      </View>
      <Tab.Navigator
        screenOptions={{
          tabBarIndicatorStyle: Styles.tabBarIndicator,
          tabBarLabelStyle: Styles.tabBarLabel,
          tabBarStyle: Styles.tabBar,
        }}>
        <Tab.Screen name={Active_Page} component={Active} />
        <Tab.Screen name={Scheduled_Page} component={Scheduled} />
        <Tab.Screen name={Expired_Page} component={Expired} />
      </Tab.Navigator>
    </>
  );
};

export default MyOrders;
