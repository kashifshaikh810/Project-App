import React, {useState} from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import IconLeft from 'react-native-vector-icons/Feather';
import {Styles} from './Styles';
import ToggleIcon from 'react-native-vector-icons/FontAwesome5';

const Notifications = props => {
  const [toggleOff, setToggleOff] = useState(true);
  const [toggleTwoOff, setToggleTwoOff] = useState(true);

  return (
    <View style={Styles.container}>
      <View style={Styles.headerContainer}>
        <TouchableOpacity onPress={() => props.navigation.navigate('Settings')}>
          <IconLeft name="chevron-left" size={23} color="#0b2a2e" />
        </TouchableOpacity>
        <Text style={Styles.headerText}>Notifications</Text>
      </View>

      <View style={Styles.containerOne}>
        <View style={Styles.allTextContainer}>
          <Text style={Styles.headerText}>Recommendations</Text>
          <Text style={Styles.allTextTwo}>
            Receive recommendations based on your activity
          </Text>
        </View>

        <View style={Styles.iconContainer}>
          <TouchableOpacity
            onPress={() => setToggleOff(!toggleOff)}
            activeOpacity={10}>
            <ToggleIcon
              name={toggleOff ? 'toggle-off' : 'toggle-on'}
              size={45}
            />
          </TouchableOpacity>
        </View>
      </View>

      <View style={Styles.containerOne}>
        <View style={Styles.allTextContainer}>
          <Text style={Styles.headerText}>Special communications & offers</Text>
          <Text style={Styles.allTextTwo}>
            Receive updates, offers, surveys and more
          </Text>
        </View>

        <View style={Styles.iconContainer}>
          <TouchableOpacity
            onPress={() => setToggleTwoOff(!toggleTwoOff)}
            activeOpacity={10}>
            <ToggleIcon
              name={toggleTwoOff ? 'toggle-off' : 'toggle-on'}
              size={45}
            />
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default Notifications;
