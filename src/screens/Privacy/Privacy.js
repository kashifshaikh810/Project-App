import React, {useState} from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import IconLeft from 'react-native-vector-icons/Feather';
import {Styles} from './Styles';
import ArrowRightIcon from 'react-native-vector-icons/MaterialIcons';
import ToggleIcon from 'react-native-vector-icons/FontAwesome5';

const Privacy = props => {
  const [toggleOff, setToggleOff] = useState(false);

  return (
    <View style={Styles.container}>
      <View style={Styles.headerContainer}>
        <TouchableOpacity onPress={() => props.navigation.navigate('Settings')}>
          <IconLeft name="chevron-left" size={23} color="#0b2a2e" />
        </TouchableOpacity>
        <Text style={Styles.headerText}>Privacy</Text>
      </View>

      <View style={Styles.containerOne}>
        <View style={Styles.allTextContainer}>
          <Text style={Styles.headerText}>Show my phone number in ads</Text>
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

      <TouchableOpacity
        style={Styles.containerOne}
        onPress={() => props.navigation.navigate('CreatePassword')}>
        <View style={Styles.allTextContainer}>
          <Text style={Styles.headerText}>Create password</Text>
        </View>

        <View style={Styles.iconContainer}>
          <ArrowRightIcon name="keyboard-arrow-right" size={30} />
        </View>
      </TouchableOpacity>
    </View>
  );
};

export default Privacy;
