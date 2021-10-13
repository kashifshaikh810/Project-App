import React from 'react';
import {View, Text, TouchableOpacity, Image} from 'react-native';
import {Styles} from './Styles';
import CloseIcon from 'react-native-vector-icons/AntDesign';

const NotificationMain = props => {
  return (
    <View style={Styles.container}>
    <View style={Styles.headerContainer}>
        <TouchableOpacity onPress={() => props.navigation.navigate('HOME')}>
          <CloseIcon name="close" size={25} color="#0b2a2e" />
        </TouchableOpacity>
        <Text style={Styles.headerText}>Notifications</Text>
      </View>

        <View style={{flex: 0.5, justifyContent: 'space-around', alignItems: 'center'}}>
        <View>
            <Image source={require('../../Components/Utility/Images/noNotification.png')} style={{width: 200, height: 200}} />
        </View>
            <Text style={{fontSize: 18, fontWeight: 'bold', color: '#09363b'}}>No Notifications yet</Text>
            <Text style={{fontSize: 14, color: '#9badae'}}>Check back here for updates</Text>
        </View>
    </View>
  );
};

export default NotificationMain;
