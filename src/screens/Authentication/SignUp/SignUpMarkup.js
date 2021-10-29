import React, {useState} from 'react';
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
  const [showPassword, setShowPassword] = useState(true);

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
            />
          </View>

          <View style={Styles.passwordContainer}>
            <Text style={Styles.emailLabel}>Phone</Text>
            <TextInput
              placeholder="Enter your phone no"
              style={Styles.emailInput}
              keyboardType="phone-pad"
            />
          </View>

          <View>
            <Text style={Styles.emailLabel}>Email</Text>
            <TextInput
              placeholder="Enter your email"
              style={Styles.emailInput}
              keyboardType="email-address"
            />
          </View>

          <View style={Styles.passwordContainer}>
            <Text style={Styles.emailLabel}>Password</Text>
            <View style={[Styles.emailInput, Styles.row]}>
              <TextInput
                placeholder="Enter your password"
                secureTextEntry={showPassword}
                style={Styles.password}
              />
              <View style={Styles.hideContainer}>
                <TouchableOpacity
                  onPress={() => setShowPassword(!showPassword)}>
                  <Text style={Styles.hide}>
                    {showPassword ? 'show' : 'hide'}
                  </Text>
                </TouchableOpacity>
              </View>
            </View>
          </View>

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
              style={Styles.buttonContainer}
              onPress={() => props.navigation.navigate('SignIn')}>
              <Text style={Styles.buttonText}>SignUp</Text>
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>
    </>
  );
};

export default SignUpMarkup;
