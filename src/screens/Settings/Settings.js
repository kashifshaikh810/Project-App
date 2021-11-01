import React from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import {Styles} from './Styles';
import RightIcon from 'react-native-vector-icons/Entypo';
import IconLeft from 'react-native-vector-icons/Feather';
import {Auth} from '../../../Setup';

const Settings = props => {
  const logOut = async () => {
    await Auth()
      .signOut()
      .then(() => console.log('user signOut'));
    props.navigation.navigate('ACCOUNT');
  };

  return (
    <View style={Styles.container}>
      <View style={Styles.headerContainer}>
        <TouchableOpacity onPress={() => props.navigation.navigate('ACCOUNT')}>
          <IconLeft name="chevron-left" size={23} color="#0b2a2e" />
        </TouchableOpacity>
        <Text style={Styles.headerText}>Settings</Text>
      </View>

      <TouchableOpacity
        style={Styles.flexContainer}
        onPress={() => props.navigation.navigate('Privacy')}>
        <View style={Styles.flexContainerChild}>
          <Text style={Styles.firstText}>Privacy</Text>
          <View style={Styles.rowContainer}>
            <Text style={Styles.sellTxt}>Phone number visibility</Text>
            <View style={Styles.iconContainer}>
              <RightIcon name="chevron-small-right" size={30} />
            </View>
          </View>
        </View>
      </TouchableOpacity>

      <View style={Styles.line} />

      <TouchableOpacity
        style={Styles.flexContainer}
        onPress={() => props.navigation.navigate('Notifications')}>
        <View style={Styles.flexContainerChild}>
          <Text style={Styles.firstText}>Notifications</Text>
          <View style={Styles.rowContainer}>
            <Text style={Styles.sellTxt}>
              Recommendations and special communication
            </Text>
            <View style={Styles.iconContainer}>
              <RightIcon name="chevron-small-right" size={30} />
            </View>
          </View>
        </View>
      </TouchableOpacity>

      <View style={Styles.line} />

      <TouchableOpacity style={Styles.logOutContainer} onPress={() => logOut()}>
        <View style={Styles.flexContainerChild}>
          <View>
            <Text style={Styles.firstText}>Logout</Text>
          </View>
        </View>
      </TouchableOpacity>

      <View style={Styles.line} />
    </View>
  );
};

export default Settings;
