import React from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import {Styles} from './Styles';
import ArrowDown from 'react-native-vector-icons/MaterialIcons';

const Ads = () => {
  return (
    <View style={Styles.container}>
      <View style={Styles.borderBottom}>
        <View style={Styles.dropDownContainer}>
          <Text style={Styles.dropDownText}>Active Ads (0) </Text>
          <ArrowDown name="keyboard-arrow-down" size={25} />
        </View>
      </View>

      <View style={Styles.midContainer}>
        <View style={Styles.midContainerChild}>
          <Text style={Styles.heavyDiscountText}>
            Heavy discount on packages
          </Text>
          <View style={Styles.viewPackageBoxContainer}>
            <TouchableOpacity style={Styles.viewPackageBox} activeOpacity={0.6}>
              <Text style={Styles.viewPackageText}>View packages</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>

      <View style={Styles.youDontHaveTextContainer}>
        <Text style={Styles.youDontHaveText}>You don't have any ads yet.</Text>
      </View>
    </View>
  );
};

export default Ads;
