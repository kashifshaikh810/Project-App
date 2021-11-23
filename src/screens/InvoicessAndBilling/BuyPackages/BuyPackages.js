import React from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import IconLeft from 'react-native-vector-icons/Feather';
import {Styles} from './Styles';
import RightIcon from 'react-native-vector-icons/Entypo';

const BuyPackages = props => {
  return (
    <View style={Styles.container}>
      <View style={Styles.headerContainer}>
        <TouchableOpacity
          onPress={() => props.navigation.navigate('InvoicessAndBilling')}>
          <IconLeft name="chevron-left" size={23} color="#0b2a2e" />
        </TouchableOpacity>
        <Text style={Styles.headerText}>Buy Packages</Text>
      </View>

      <View style={Styles.middileTextContainer}>
        <Text style={Styles.headerText}>SELECT OPTIONS TO SHOW PACKAGES</Text>
      </View>

      <TouchableOpacity
        style={Styles.flexContainer}
        onPress={() => console.log('BuyPackages')}>
        <View style={Styles.flexContainerChild}>
          <Text style={Styles.firstText}>Categories</Text>
          <View style={Styles.rowContainer}>
            <Text style={Styles.sellTxt}>No category selected</Text>
            <View style={Styles.iconContainer}>
              <RightIcon name="chevron-small-right" size={25} />
            </View>
          </View>
        </View>
      </TouchableOpacity>

      <View style={Styles.line} />

      <TouchableOpacity
        style={Styles.flexContainer}
        onPress={() => console.log('BuyPackages')}>
        <View style={Styles.flexContainerChild}>
          <Text style={Styles.firstText}>Locations</Text>
          <View style={Styles.rowContainer}>
            <Text style={Styles.sellTxt}>No location selected</Text>
            <View style={Styles.iconContainer}>
              <RightIcon name="chevron-small-right" size={25} />
            </View>
          </View>
        </View>
      </TouchableOpacity>

      <View style={Styles.line} />

      <View style={Styles.buttonParent}>
        <View style={Styles.buttonContainer}>
          <TouchableOpacity style={Styles.buttonTouchAble} onPress={() => {}}>
            <Text style={Styles.buttonTxt}>Show packages</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default BuyPackages;
