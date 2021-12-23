/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {View, Text, Image, TouchableOpacity, ScrollView} from 'react-native';
import {AccountStyles} from './AccountStyles';
import FileIcon from 'react-native-vector-icons/Ionicons';
import SettingsIcon from 'react-native-vector-icons/Feather';
import ArrowRightIcon from 'react-native-vector-icons/MaterialIcons';
import {responsiveScreenWidth} from '../../Components/Utility/ResponsiveDimensions/Responsive';

const AccountMarkup = props => {
  return (
    <ScrollView style={AccountStyles.mainContainer}>
      <View style={AccountStyles.container}>
        <View>
          <Image
            source={props?.currentUserData?.dpImage ? {uri: props.currentUserData.dpImage} : require('../../Components/Utility/Images/profile.png')}
            style={[AccountStyles.image, props?.currentUserData?.dpImage && {borderRadius: 50}]}
          />
        </View>
        <View style={AccountStyles.main}>
          <Text style={AccountStyles.userName}>
            {props.currentUserData ? props.currentUserData.userName : 'Log in'}
          </Text>
          <TouchableOpacity
            onPress={() =>
              props.currentUserData
                ? props.navigation.navigate('BasicInformation', {
                    data: props.currentUserData,
                  })
                : props.navigation.navigate('SignUpAndSignInMenu')
            }>
            <Text style={AccountStyles.text}>
              {props.currentUserData
                ? 'View and edit profile'
                : 'Log in to your account'}
            </Text>
            <View
              style={[
                AccountStyles.textLine,
                {
                  width: props.currentUserData
                    ? responsiveScreenWidth(35)
                    : responsiveScreenWidth(38),
                },
              ]}
            />
          </TouchableOpacity>
        </View>
      </View>

      <View style={AccountStyles.containerTwo}>
        {props.currentUserData ? (
          <>
            <TouchableOpacity
              style={AccountStyles.containerOne}
              onPress={() => props.navigation.navigate('InvoicessAndBilling')}>
              <FileIcon name="file-tray-full-outline" size={20} />

              <View style={AccountStyles.allTextContainer}>
                <Text style={AccountStyles.allTextOne}>
                  Buy Packages & My Orders
                </Text>
                <Text style={AccountStyles.allTextTwo}>
                  Packages, orders, billing and invoices
                </Text>
              </View>

              <View style={AccountStyles.iconContainer}>
                <ArrowRightIcon name="keyboard-arrow-right" size={30} />
              </View>
            </TouchableOpacity>
            <TouchableOpacity
              style={AccountStyles.containerOne}
              onPress={() => props.navigation.navigate('Settings')}>
              <SettingsIcon name="settings" size={20} />

              <View style={AccountStyles.allTextContainer}>
                <Text style={AccountStyles.allTextOne}>Settings</Text>
                <Text style={AccountStyles.allTextTwo}>Privacy and logout</Text>
              </View>

              <View style={AccountStyles.iconContainer}>
                <ArrowRightIcon name="keyboard-arrow-right" size={30} />
              </View>
            </TouchableOpacity>
          </>
        ) : null}

        <TouchableOpacity
          style={AccountStyles.containerOne}
          onPress={() => props.navigation.navigate('HelpAndSupport')}>
          <Image
            source={require('../../Components/Utility/Images/logo.png')}
            style={AccountStyles.olxImg}
          />

          <View style={AccountStyles.allTextContainer}>
            <Text style={AccountStyles.allTextOne}>Help & support</Text>
            <Text style={AccountStyles.allTextTwo}>
              Help center and legal terms
            </Text>
          </View>

          <View style={AccountStyles.iconContainer}>
            <ArrowRightIcon name="keyboard-arrow-right" size={30} />
          </View>
        </TouchableOpacity>

        {props.currentUserData ? null : (
          <View style={AccountStyles.buttonParentContainer}>
            <TouchableOpacity
              style={AccountStyles.buttonContainer}
              onPress={() => props.navigation.navigate('SignUpAndSignInMenu')}>
              <Text style={AccountStyles.buttonText}>Login or register</Text>
            </TouchableOpacity>
          </View>
        )}
      </View>
    </ScrollView>
  );
};

export default AccountMarkup;
