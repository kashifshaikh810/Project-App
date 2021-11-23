/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  Image,
  TextInput,
  ActivityIndicator,
} from 'react-native';
import CloseIcon from 'react-native-vector-icons/AntDesign';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scrollview';
import {Styles} from './Styles';

const BasicInformationMarkup = props => {
  return (
    <KeyboardAwareScrollView>
      <View style={Styles.container}>
        <View style={Styles.headerContainer}>
          <View style={Styles.headerMain}>
            <TouchableOpacity
              onPress={() => props.navigation.navigate('ACCOUNT')}>
              <CloseIcon name="close" size={25} />
            </TouchableOpacity>

            <TouchableOpacity
              disabled={!props.email || !props.userName || !props.phone}
              style={Styles.saveButtonContainer}
              onPress={() => props.save()}>
              {props.isLoading ? (
                <ActivityIndicator size="small" color="black" />
              ) : (
                <Text style={Styles.saveButton}>Save</Text>
              )}
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
                  <TextInput
                    placeholder="Your name"
                    style={Styles.txtInput}
                    value={props.userName}
                    onChangeText={text => props.userNameHandler(text)}
                  />
                </View>
              </View>
            </View>
            <Text style={Styles.aboutYouTxt}>Something about you</Text>
            <TextInput
              placeholder="Type here"
              style={Styles.middileSectionLastInput}
              value={props.aboutYou}
              onChangeText={text => props.aboutYouHandler(text)}
            />
          </View>
        </View>

        <View style={Styles.footerContainer}>
          <View style={Styles.middileContainerChild}>
            <Text style={Styles.informationTxt}>Contact information</Text>

            <View style={Styles.footerInputContainer}>
              <Text style={Styles.aboutYouTxt}>Phone Number</Text>
              <TextInput
                placeholder="Enter your phone number"
                keyboardType="number-pad"
                style={Styles.middileSectionLastInput}
                value={props.phone}
                onChangeText={text => props.phoneHandler(text)}
              />
              <Text style={Styles.footerGuideText}>
                This is the number for buyers contacts, reminders, and other
                notifications.
              </Text>
            </View>

            <View style={Styles.footerInputContainer}>
              <Text style={Styles.aboutYouTxt}>Email</Text>
              <TextInput
                placeholder="Enter your email"
                style={Styles.middileSectionLastInput}
                keyboardType="email-address"
                value={props.email}
                onChangeText={text => props.emailHandler(text)}
              />
              <Text style={Styles.footerGuideText}>
                This email will be useful to keep in touch. we won't share your
                private email address with other OLX users
              </Text>
            </View>
          </View>
        </View>

        {props.errMsg ? (
          <View
            style={{
              width: 340,
              height: 80,
              justifyContent: 'center',
              alignItems: 'center',
            }}>
            <Text style={{color: 'red', fontSize: 16, fontWeight: 'bold'}}>
              {props.errMsg}
            </Text>
          </View>
        ) : null}
      </View>
    </KeyboardAwareScrollView>
  );
};

export default BasicInformationMarkup;
