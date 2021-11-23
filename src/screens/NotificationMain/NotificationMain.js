import React from 'react';
import {View, Text, TouchableOpacity, Image, ScrollView} from 'react-native';
import {Styles} from './Styles';
import CloseIcon from 'react-native-vector-icons/AntDesign';

const NotificationMain = props => {
  return (
    <ScrollView style={Styles.container}>
      <View style={Styles.headerContainer}>
        <TouchableOpacity onPress={() => props.navigation.navigate('HOME')}>
          <CloseIcon name="close" size={25} color="#0b2a2e" />
        </TouchableOpacity>
        <Text style={Styles.headerText}>Notifications</Text>
      </View>

      <View style={Styles.bottomContainer}>
        <View>
          <Image
            source={require('../../Components/Utility/Images/noNotification.png')}
            style={Styles.bellImg}
          />
        </View>
        <Text style={Styles.noNotificationText}>No Notifications yet</Text>
        <Text style={Styles.updateText}>Check back here for updates</Text>
      </View>
    </ScrollView>
  );
};

export default NotificationMain;
