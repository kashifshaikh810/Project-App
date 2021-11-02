/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  Image,
  TextInput,
  ScrollView,
} from 'react-native';
import IconLeft from 'react-native-vector-icons/Feather';
import {Styles} from './Styles';

const SignInMarkup = props => {
  return (
    <ScrollView style={Styles.container}>
      <View style={Styles.headerContainer}>
        <TouchableOpacity
          onPress={() => props.navigation.navigate('SignUpAndSignInMenu')}>
          <IconLeft name="chevron-left" size={30} color="#0b2a2e" />
        </TouchableOpacity>
        <Text style={Styles.categoriesStyle}>Log In</Text>
      </View>

      <View style={Styles.mainContainer}>
        <Image
          source={require('../../../Components/Utility/Images/logo.png')}
          style={Styles.img}
        />

        <View>
          <Text style={Styles.emailLabel}>Email</Text>
          <TextInput
            placeholder="Enter your email"
            style={Styles.emailInput}
            keyboardType="email-address"
            value={props.email}
            onChangeText={text => props.emailHandler(text)}
          />
        </View>

        <View style={Styles.passwordContainer}>
          <Text style={Styles.emailLabel}>Password</Text>
          <View style={[Styles.emailInput, Styles.row]}>
            <TextInput
              placeholder="Enter your password"
              secureTextEntry={props.showPassword}
              style={Styles.password}
              value={props.password}
              onChangeText={text => props.passwordHandler(text)}
            />
            <View style={Styles.hideContainer}>
              <TouchableOpacity
                onPress={() => props.setShowPassword(!props.showPassword)}>
                <Text style={Styles.hide}>
                  {props.showPassword ? 'show' : 'hide'}
                </Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>

        {props.errMsg ? (
          <View style={Styles.err}>
            <Text style={Styles.errTxt}>{props.errMsg}</Text>
          </View>
        ) : null}

        <View style={Styles.dontHaveContainer}>
          <Text style={Styles.dontHave}>Dont have an account? </Text>
          <View style={Styles.dot} />
          <TouchableOpacity onPress={() => props.navigation.navigate('SignUp')}>
            <Text style={Styles.register}> Register</Text>
          </TouchableOpacity>
        </View>

        <View style={Styles.buttonParentContainer}>
          <TouchableOpacity
            disabled={!props.email && !props.password}
            style={[
              Styles.buttonContainer,
              {
                backgroundColor:
                  props.email && props.password ? '#023034' : '#e4e7ee',
              },
            ]}
            onPress={() => props.loginButtonHandler()}>
            <Text
              style={[
                Styles.buttonText,
                {
                  color: props.email && props.password ? 'white' : '#bcc2ce',
                },
              ]}>
              Login
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </ScrollView>
  );
};

export default SignInMarkup;
