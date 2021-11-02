/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  Image,
  ScrollView,
} from 'react-native';
import IconLeft from 'react-native-vector-icons/Feather';
import {Styles} from './Styles';

const SignUpMarkup = props => {
  return (
    <>
      <View style={Styles.white}>
        <View style={Styles.headerContainer}>
          <TouchableOpacity
            onPress={() => props.navigation.navigate('SignUpAndSignInMenu')}>
            <IconLeft name="chevron-left" size={30} color="#0b2a2e" />
          </TouchableOpacity>
          <Text style={Styles.categoriesStyle}>Sign Up</Text>
        </View>
      </View>
      <ScrollView style={Styles.container}>
        <View style={Styles.mainContainer}>
          <Image
            source={require('../../../Components/Utility/Images/logo.png')}
            style={Styles.img}
          />

          <View>
            <Text style={Styles.emailLabel}>user name</Text>
            <TextInput
              placeholder="Enter your user name"
              style={Styles.emailInput}
              value={props.userName}
              onChangeText={text => props.userNameHandler(text)}
            />
          </View>

          <View style={Styles.passwordContainer}>
            <Text style={Styles.emailLabel}>Phone</Text>
            <TextInput
              placeholder="Enter your phone no"
              style={Styles.emailInput}
              keyboardType="phone-pad"
              value={props.phone}
              onChangeText={text => props.phoneHandler(text)}
            />
          </View>

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
              <Text style={{color: 'red', fontSize: 16, fontWeight: 'bold'}}>
                {props.errMsg}
              </Text>
            </View>
          ) : null}

          <View style={Styles.dontHaveContainer}>
            <Text style={Styles.dontHave}>Already have an account? </Text>
            <View style={Styles.dot} />
            <TouchableOpacity
              onPress={() => props.navigation.navigate('SignIn')}>
              <Text style={Styles.register}> SignIn</Text>
            </TouchableOpacity>
          </View>

          <View style={Styles.buttonParentContainer}>
            <TouchableOpacity
              disabled={
                !props.userName &&
                !props.phone &&
                !props.email &&
                !props.password
              }
              style={[
                Styles.buttonContainer,
                {
                  backgroundColor:
                    props.userName &&
                    props.phone &&
                    props.email &&
                    props.password
                      ? '#023034'
                      : '#e4e7ee',
                },
              ]}
              onPress={() => props.signUpButtonHandler()}>
              <Text
                style={[
                  Styles.buttonText,
                  {
                    color:
                      props.userName &&
                      props.phone &&
                      props.email &&
                      props.password
                        ? 'white'
                        : '#bcc2ce',
                  },
                ]}>
                SignUp
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>
    </>
  );
};

export default SignUpMarkup;
