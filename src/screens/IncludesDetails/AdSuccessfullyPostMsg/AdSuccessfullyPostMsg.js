import React from 'react';
import {View, Text, ImageBackground} from 'react-native';
import {Styles} from './Styles';
import Icon from 'react-native-vector-icons/MaterialIcons';

const AdSuccessfullyPostMsg = props => {
  return (
    <View style={Styles.container}>
      <View>
        <ImageBackground style={Styles.backgroundColor}>
          <View style={Styles.adAndCongContainer}>
            <View style={Styles.checkIconContainer}>
              <Icon
                name="check"
                size={85}
                color="white"
                style={Styles.checkIcon}
              />
            </View>

            <Text style={Styles.congText}>CONGRATULATIONS!</Text>
            <Text style={Styles.adText}>Your Ad will go live shortly...</Text>
          </View>
        </ImageBackground>
      </View>
    </View>
  );
};

export default AdSuccessfullyPostMsg;
