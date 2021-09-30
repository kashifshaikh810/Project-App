import React from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import {Styles} from './Styles';
import RightIcon from 'react-native-vector-icons/Entypo';
import IconLeft from 'react-native-vector-icons/Feather';

const Settings = props => {
  return (
    <View style={Styles.container}>
      <View style={Styles.headerContainer}>
        <TouchableOpacity onPress={() => props.navigation.navigate('ACCOUNT')}>
          <IconLeft name="chevron-left" size={23} color="#0b2a2e" />
        </TouchableOpacity>
        <Text style={Styles.headerText}>Settings</Text>
      </View>

      <View style={Styles.flexContainer}>
        <View style={Styles.flexContainerChild}>
          <Text style={Styles.firstText}>Privacy</Text>
          <TouchableOpacity style={Styles.rowContainer}>
            <Text style={Styles.sellTxt}>Phone number visibility</Text>
            <TouchableOpacity style={Styles.iconContainer}>
              <RightIcon name="chevron-small-right" size={30} />
            </TouchableOpacity>
          </TouchableOpacity>
        </View>
      </View>

      <View style={Styles.line} />

      <View style={Styles.flexContainer}>
        <View style={Styles.flexContainerChild}>
          <Text style={Styles.firstText}>Notifications</Text>
          <TouchableOpacity style={Styles.rowContainer}>
            <Text style={Styles.sellTxt}>
              Recommendations and special communication
            </Text>
            <TouchableOpacity style={Styles.iconContainer}>
              <RightIcon name="chevron-small-right" size={30} />
            </TouchableOpacity>
          </TouchableOpacity>
        </View>
      </View>

      <View style={Styles.line} />

      <View style={Styles.logOutContainer}>
        <View style={Styles.flexContainerChild}>
          <TouchableOpacity>
            <Text style={Styles.firstText}>Logout</Text>
          </TouchableOpacity>
        </View>
      </View>

      <View style={Styles.line} />
    </View>
  );
};

export default Settings;
