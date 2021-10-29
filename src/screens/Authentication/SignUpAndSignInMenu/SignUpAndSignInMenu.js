/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  ImageBackground,
  Image,
  ScrollView,
} from 'react-native';
import {Styles} from './Styles';
import CloseIcon from 'react-native-vector-icons/AntDesign';
import LoginIcon from 'react-native-vector-icons/AntDesign';

const SignUpAndSignInMenu = props => {
  return (
    <ScrollView style={Styles.container}>
      <View style={Styles.iconContainer}>
        <TouchableOpacity onPress={() => props.navigation.navigate('ACCOUNT')}>
          <CloseIcon name="close" size={30} />
        </TouchableOpacity>
      </View>

      <View style={Styles.imageBackContainer}>
        <ImageBackground
          source={require('../../../Components/Utility/Images/logo.png')}
          style={Styles.imageBack}>
          <View style={Styles.welcomeTextContainer}>
            <Text style={Styles.welcomeText}>welcome to olx</Text>
          </View>
        </ImageBackground>
        <Text style={Styles.trustedText}>
          The trusted community of buyers and sellers
        </Text>
      </View>

      <View style={Styles.buttonParentContainer}>
        <TouchableOpacity
          style={Styles.buttonContainer}
          onPress={() => props.navigation.navigate('SignIn')}>
          <LoginIcon name="login" size={20} style={Styles.loginIcon} />
          <Text style={Styles.buttonText}>Continue with Log In</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={Styles.buttonContainer}
          onPress={() => props.navigation.navigate('SignUp')}>
          <Image
            source={require('../../../Components/Utility/Images/register.png')}
            style={Styles.registerIcon}
          />
          <Text style={Styles.buttonText}>Continue with Register</Text>
        </TouchableOpacity>
      </View>

      <View style={Styles.bottomTextContainer}>
        <Text style={Styles.ifYou}>If you continue, you are accepting</Text>
        <Text style={Styles.olxTerms}>
          OLX Terms and Conditions and Privacy Policy
        </Text>
      </View>
    </ScrollView>
  );
};

export default SignUpAndSignInMenu;
