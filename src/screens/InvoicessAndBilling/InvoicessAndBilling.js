import React from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import IconLeft from 'react-native-vector-icons/Feather';
import {Styles} from './Styles';
import RightIcon from 'react-native-vector-icons/Entypo';

const InvoicessAndBilling = props => {
  return (
    <View style={Styles.container}>
      <View style={Styles.headerContainer}>
        <TouchableOpacity onPress={() => props.navigation.navigate('ACCOUNT')}>
          <IconLeft name="chevron-left" size={23} color="#0b2a2e" />
        </TouchableOpacity>
        <Text style={Styles.headerText}>Invoices & Billing</Text>
      </View>

      <TouchableOpacity
        style={Styles.flexContainer}
        onPress={() => props.navigation.navigate('BuyPackages')}>
        <View style={Styles.flexContainerChild}>
          <Text style={Styles.firstText}>Buy packages</Text>
          <View style={Styles.rowContainer}>
            <Text style={Styles.sellTxt}>
              Sell faster, more & higher margins with packages
            </Text>
            <View style={Styles.iconContainer}>
              <RightIcon name="chevron-small-right" size={30} />
            </View>
          </View>
        </View>
      </TouchableOpacity>

      <View style={Styles.line} />

      <TouchableOpacity
        style={Styles.flexContainer}
        onPress={() => props.navigation.navigate('MyOrders')}>
        <View style={Styles.flexContainerChild}>
          <Text style={Styles.firstText}>My Orders</Text>
          <View style={Styles.rowContainer}>
            <Text style={Styles.sellTxt}>
              Active, scheduled and expired orders
            </Text>
            <View style={Styles.iconContainer}>
              <RightIcon name="chevron-small-right" size={30} />
            </View>
          </View>
        </View>
      </TouchableOpacity>

      <View style={Styles.line} />

      <TouchableOpacity
        style={Styles.flexContainer}
        onPress={() => props.navigation.navigate('BillingInformation')}>
        <View style={Styles.flexContainerChild}>
          <Text style={Styles.firstText}>Billing Information</Text>
          <View style={Styles.rowContainer}>
            <Text style={Styles.sellTxt}>
              Edit your billing name, address, etc.
            </Text>
            <View style={Styles.iconContainer}>
              <RightIcon name="chevron-small-right" size={30} />
            </View>
          </View>
        </View>
      </TouchableOpacity>

      <View style={Styles.line} />
    </View>
  );
};

export default InvoicessAndBilling;
