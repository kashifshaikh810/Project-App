import React, {useState} from 'react';
import {View, Text, TouchableOpacity, TextInput} from 'react-native';
import {Styles} from './Styles';
import IconLeft from 'react-native-vector-icons/Feather';
import EyeIcon from 'react-native-vector-icons/Ionicons';

const CreatePassword = props => {
  const [visiblePass, setVisiblePass] = useState(false);
  const [visibleConfirmPass, setVisibleConfirmPass] = useState(false);

  return (
    <View style={Styles.container}>
      <View style={Styles.headerParent}>
        <View style={Styles.headerContainer}>
          <TouchableOpacity
            onPress={() => props.navigation.navigate('Privacy')}>
            <IconLeft name="chevron-left" size={23} color="#0b2a2e" />
          </TouchableOpacity>
          <Text style={Styles.headerText}>Create Password</Text>
        </View>
      </View>

      <View style={Styles.secondInputContainer}>
        <View style={Styles.inputContainer}>
          <View style={Styles.input}>
            <TextInput
              secureTextEntry={visiblePass}
              placeholder="Password"
              style={Styles.inputMain}
            />
            <View style={Styles.eyeIconContainer}>
              <EyeIcon
                name={visiblePass ? 'md-eye-off-outline' : 'eye-outline'}
                size={20}
                onPress={() => setVisiblePass(!visiblePass)}
              />
            </View>
          </View>
        </View>
      </View>

      <View style={Styles.secondInputContainer}>
        <View style={Styles.inputContainer}>
          <View style={Styles.input}>
            <TextInput
              secureTextEntry={visibleConfirmPass}
              placeholder="Confirm new Password"
              style={Styles.inputMain}
            />
            <View style={Styles.eyeIconContainer}>
              <EyeIcon
                name={visibleConfirmPass ? 'md-eye-off-outline' : 'eye-outline'}
                size={20}
                onPress={() => setVisibleConfirmPass(!visibleConfirmPass)}
              />
            </View>
          </View>
        </View>
      </View>

      <View style={Styles.buttonContainer}>
        <TouchableOpacity style={Styles.buttonTouchAble} onPress={() => {}}>
          <Text style={Styles.buttonTxt}>Create Password</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default CreatePassword;
