import React, {useState} from 'react';
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
  const [showPassword, setShowPassword] = useState(true);

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
              <TouchableOpacity onPress={() => setShowPassword(!showPassword)}>
                <Text style={Styles.hide}>
                  {showPassword ? 'show' : 'hide'}
                </Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>

        <View style={Styles.dontHaveContainer}>
          <Text style={Styles.dontHave}>Dont have an account? </Text>
          <View style={Styles.dot} />
          <TouchableOpacity onPress={() => props.navigation.navigate('SignUp')}>
            <Text style={Styles.register}> Register</Text>
          </TouchableOpacity>
        </View>

        <View style={Styles.buttonParentContainer}>
          <TouchableOpacity
            style={Styles.buttonContainer}
            onPress={() => props.navigation.navigate('ACCOUNT')}>
            <Text style={Styles.buttonText}>Login</Text>
          </TouchableOpacity>
        </View>
      </View>
    </ScrollView>
  );
};

export default SignInMarkup;
