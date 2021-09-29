import React from 'react';
import {View, Text, TouchableOpacity, Image, TextInput} from 'react-native';
import CloseIcon from 'react-native-vector-icons/AntDesign';
import {Styles} from './Styles';

const BasicInformationMarkup = props => {
  return (
    <View>
      <View style={Styles.headerContainer}>
        <View style={Styles.headerMain}>
          <TouchableOpacity
            onPress={() => props.navigation.navigate('ACCOUNT')}>
            <CloseIcon name="close" size={25} />
          </TouchableOpacity>

          <TouchableOpacity style={Styles.saveButtonContainer}>
            <Text style={Styles.saveButton}>Save</Text>
          </TouchableOpacity>
        </View>
      </View>

      <View style={Styles.middileContainer}>
        <View style={Styles.middileContainerChild}>
          <Text style={Styles.informationTxt}>Basic information</Text>

          <View style={Styles.middileSectionInputContainer}>
            <Image
              source={require('../../Components/Utility/Images/profile.png')}
              style={Styles.defaultImg}
            />

            <View style={Styles.inputContainer}>
              <View style={Styles.inputContainerChild}>
                <Text style={Styles.yourNameTxt}>Enter your name</Text>
                <TextInput style={Styles.txtInput} />
              </View>
            </View>
          </View>
          <Text style={Styles.aboutYouTxt}>Something about you</Text>
          <TextInput style={Styles.middileSectionLastInput} />
        </View>
      </View>

      <View style={Styles.footerContainer}>
        <View style={Styles.middileContainerChild}>
          <Text style={Styles.informationTxt}>Contact information</Text>

          <View style={{height: 130, justifyContent: 'center'}}>
            <Text style={Styles.aboutYouTxt}>Phone Number</Text>
            <TextInput
              placeholder="Enter your phone number"
              keyboardType="number-pad"
              style={Styles.middileSectionLastInput}
            />
            <Text style={{marginVertical: 3, color: '#3a5752', fontSize: 13}}>
              This is the number for buyers contacts, reminders, and other
              notifications.
            </Text>
          </View>

          <View style={{height: 130, justifyContent: 'center'}}>
            <Text style={Styles.aboutYouTxt}>Email</Text>
            <TextInput
              placeholder="Enter your email"
              style={Styles.middileSectionLastInput}
              keyboardType="email-address"
            />
            <Text style={{marginVertical: 3, color: '#3a5752', fontSize: 13}}>
              This email will be useful to keep in touch. we won't share your
              private email address with other OLX users
            </Text>
          </View>
        </View>
      </View>
    </View>
  );
};

export default BasicInformationMarkup;
