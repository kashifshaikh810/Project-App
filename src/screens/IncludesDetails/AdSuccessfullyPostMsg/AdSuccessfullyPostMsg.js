import React from 'react';
import {
  View,
  Text,
  ImageBackground,
  Image,
  TouchableOpacity,
} from 'react-native';
import {Styles} from './Styles';
import Icon from 'react-native-vector-icons/MaterialIcons';

const AdSuccessfullyPostMsg = props => {
  return (
    <View style={Styles.container}>
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

      <View style={Styles.bottomContainer}>
        <Image
          source={require('../../../Components/Utility/Images/label.png')}
          style={Styles.labelImg}
        />

        <Text style={Styles.reachText}>
          Reach more buyers and sell faster now
        </Text>
        <Text style={Styles.upgradingText}>
          Upgrading ad helps you to reach more buyers
        </Text>

        <TouchableOpacity style={Styles.buttonTouchAble} onPress={() => {}}>
          <Text style={Styles.buttonTxt}>Sell faster now</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={Styles.previewbuttonTouchAble}
          onPress={() => props.navigation.navigate('ADS')}>
          <Text style={Styles.previewbuttonTxt}>Preview Ad</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default AdSuccessfullyPostMsg;
