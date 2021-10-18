import React, {useState} from 'react';
import {View, Text, TouchableOpacity, TextInput, Image} from 'react-native';
import IconLeft from 'react-native-vector-icons/Feather';
import CheckIcon from 'react-native-vector-icons/MaterialIcons';
import ToggleIcon from 'react-native-vector-icons/FontAwesome';
import {Styles} from './Styles';

const ReviewYourDetails = props => {
  const [toggleOnOff, setToggleOnOff] = useState(false);
  return (
    <View style={Styles.container}>
      <View style={Styles.headerContainer}>
        <View style={Styles.headerMain}>
          <TouchableOpacity
            onPress={() => props.navigation.navigate('AdSuccessfullyPostMsg')}>
            <IconLeft name="chevron-left" size={22} color="#0b2a2e" />
          </TouchableOpacity>

          <Text style={Styles.heading}>Review Your Details</Text>
        </View>
      </View>

      <View style={Styles.imageAndInputContainer}>
        <View style={Styles.imageContainer}>
          <Image
            source={require('../../../Components/Utility/Images/profile.png')}
            style={Styles.image}
          />
        </View>

        <View style={Styles.yourNameAndInputContainer}>
          <Text style={Styles.yourNameTxt}>Your name</Text>
          <TextInput
            placeholder="Your name"
            style={Styles.txtInput}
            defaultValue="Kashif Sheikh"
          />
        </View>
      </View>

      <View style={Styles.labelAndPhonenumContainer}>
        <View style={Styles.labelAndPhonenumContainerChild}>
          <Text style={Styles.phoneNumLabel}>Verified phone number</Text>
          <CheckIcon
            name="check-circle"
            size={30}
            color="#218386"
            style={Styles.checkIcon}
          />
          <Text style={Styles.phoneNum}>+923138432591</Text>
        </View>
      </View>

      <View style={Styles.showPhonNumAndIconContainer}>
        <View>
          <Text style={Styles.showPhonNum}>Show my phone number in ads</Text>
        </View>
        <View style={Styles.toggleIconContainer}>
          <TouchableOpacity
            activeOpacity={2}
            onPress={() => setToggleOnOff(!toggleOnOff)}>
            <ToggleIcon
              name={toggleOnOff ? 'toggle-off' : 'toggle-on'}
              size={45}
              color="#023034"
            />
          </TouchableOpacity>
        </View>
      </View>

      <View style={Styles.buttonContainer}>
        <TouchableOpacity
          style={Styles.buttonTouchAble}
          onPress={() => props.navigation.navigate('AdSuccessfullyPostMsg')}>
          <Text style={Styles.buttonTxt}>Post Now</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default ReviewYourDetails;
