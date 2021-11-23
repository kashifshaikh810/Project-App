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

      <TouchableOpacity style={Styles.flexContainer}>
        <View style={Styles.flexContainerChild}>
          <Text style={Styles.firstText}>Help Center</Text>
          <View style={Styles.rowContainer}>
            <Text style={Styles.sellTxt}>See FAQ and contact support</Text>
            <View style={Styles.iconContainer}>
              <RightIcon name="chevron-small-right" size={30} />
            </View>
          </View>
        </View>
      </TouchableOpacity>

      <View style={Styles.line} />

      <TouchableOpacity style={Styles.flexContainer}>
        <View style={Styles.flexContainerChild}>
          <Text style={Styles.firstText}>Rate us</Text>
          <View style={Styles.rowContainer}>
            <Text style={Styles.sellTxt}>
              If you love our app, take a moment to rate it
            </Text>
            <View style={Styles.iconContainer}>
              <RightIcon name="chevron-small-right" size={30} />
            </View>
          </View>
        </View>
      </TouchableOpacity>

      <View style={Styles.line} />

      <TouchableOpacity style={Styles.flexContainer}>
        <View style={Styles.flexContainerChild}>
          <Text style={Styles.firstText}>Invite friends to OLX</Text>
          <View style={Styles.rowContainer}>
            <Text style={Styles.sellTxt}>
              Invite your friends to buy and sell
            </Text>
            <View style={Styles.iconContainer}>
              <RightIcon name="chevron-small-right" size={30} />
            </View>
          </View>
        </View>
      </TouchableOpacity>

      <View style={Styles.line} />

      <TouchableOpacity style={Styles.flexContainer}>
        <View style={Styles.flexContainerChild}>
          <Text style={Styles.firstText}>Become a beta tester</Text>
          <View style={Styles.rowContainer}>
            <Text style={Styles.sellTxt}>Test new features in advance</Text>
            <View style={Styles.iconContainer}>
              <RightIcon name="chevron-small-right" size={30} />
            </View>
          </View>
        </View>
      </TouchableOpacity>

      <View style={Styles.line} />

      <View style={Styles.flexContainer}>
        <View style={Styles.flexContainerChild}>
          <Text style={Styles.firstText}>Version</Text>
          <View style={Styles.rowContainer}>
            <Text style={Styles.sellTxt}>15.0.11617</Text>
          </View>
        </View>
      </View>

      <View style={Styles.line} />
    </View>
  );
};

export default HelpAndSupport;
