import React from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import IconLeft from 'react-native-vector-icons/Feather';
import {Styles} from './Styles';
import RightIcon from 'react-native-vector-icons/Entypo';

const HelpAndSupport = props => {
  return (
    <View style={Styles.container}>
      <View style={Styles.headerContainer}>
        <TouchableOpacity onPress={() => props.navigation.navigate('ACCOUNT')}>
          <IconLeft name="chevron-left" size={23} color="#0b2a2e" />
        </TouchableOpacity>
        <Text style={Styles.headerText}>Help and Support</Text>
      </View>

      <View style={Styles.flexContainer}>
        <View style={Styles.flexContainerChild}>
          <Text style={Styles.firstText}>Help Center</Text>
          <TouchableOpacity style={Styles.rowContainer}>
            <Text style={Styles.sellTxt}>
              See FAQ and contact support
            </Text>
            <TouchableOpacity style={Styles.iconContainer}>
              <RightIcon name="chevron-small-right" size={30} />
            </TouchableOpacity>
          </TouchableOpacity>
        </View>
      </View>

      <View style={Styles.line} />

      <View style={Styles.flexContainer}>
        <View style={Styles.flexContainerChild}>
          <Text style={Styles.firstText}>Rate us</Text>
          <TouchableOpacity style={Styles.rowContainer}>
            <Text style={Styles.sellTxt}>
              If you love our app, take a moment to rate it
            </Text>
            <TouchableOpacity style={Styles.iconContainer}>
              <RightIcon name="chevron-small-right" size={30} />
            </TouchableOpacity>
          </TouchableOpacity>
        </View>
      </View>

      <View style={Styles.line} />

      <View style={Styles.flexContainer}>
        <View style={Styles.flexContainerChild}>
          <Text style={Styles.firstText}>Invite friends to OLX</Text>
          <TouchableOpacity style={Styles.rowContainer}>
            <Text style={Styles.sellTxt}>
              Invite your friends to buy and sell
            </Text>
            <TouchableOpacity style={Styles.iconContainer}>
              <RightIcon name="chevron-small-right" size={30} />
            </TouchableOpacity>
          </TouchableOpacity>
        </View>
      </View>

      <View style={Styles.line} />

      <View style={Styles.flexContainer}>
        <View style={Styles.flexContainerChild}>
          <Text style={Styles.firstText}>Invite friends to OLX</Text>
          <TouchableOpacity style={Styles.rowContainer}>
            <Text style={Styles.sellTxt}>
              Invite your friends to buy and sell
            </Text>
            <TouchableOpacity style={Styles.iconContainer}>
              <RightIcon name="chevron-small-right" size={30} />
            </TouchableOpacity>
          </TouchableOpacity>
        </View>
      </View>

      <View style={Styles.line} />

      <View style={Styles.flexContainer}>
        <View style={Styles.flexContainerChild}>
          <Text style={Styles.firstText}>Invite friends to OLX</Text>
          <TouchableOpacity style={Styles.rowContainer}>
            <Text style={Styles.sellTxt}>
              Invite your friends to buy and sell
            </Text>
          </TouchableOpacity>
        </View>
      </View>

      <View style={Styles.line} />

    </View>
  );
};

export default HelpAndSupport;
