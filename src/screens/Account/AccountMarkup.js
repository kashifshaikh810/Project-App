import React from 'react';
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  ScrollView,
  ActivityIndicator,
} from 'react-native';
import {AccountStyles} from './AccountStyles';
import FileIcon from 'react-native-vector-icons/Ionicons';
import SettingsIcon from 'react-native-vector-icons/Feather';
import ArrowRightIcon from 'react-native-vector-icons/MaterialIcons';

const AccountMarkup = props => {
  return (
    <>
      {props.isloading ? (
        <ActivityIndicator size="large" color="green" />
      ) : (
        <>
          <ScrollView style={AccountStyles.mainContainer}>
            <View style={AccountStyles.container}>
              <View>
                <Image
                  source={require('../../Components/Utility/Images/profile.png')}
                  style={AccountStyles.image}
                />
              </View>
              <View style={AccountStyles.main}>
                <Text style={AccountStyles.userName}>
                  {props.currentUserData
                    ? props.currentUserData.userName
                    : 'Log in'}
                </Text>
                <TouchableOpacity
                  disabled={!props.currentUserData}
                  activeOpacity={props.currentUserData ? 0.5 : 1}
                  onPress={() =>
                    props.currentUserData &&
                    props.navigation.navigate('BasicInformation', {
                      data: props.currentUserData,
                    })
                  }>
                  <Text style={AccountStyles.text}>
                    {props.currentUserData
                      ? 'View and edit profile'
                      : 'Log in to your account'}
                  </Text>
                  <View style={AccountStyles.textLine} />
                </TouchableOpacity>
              </View>
            </View>

            <View style={AccountStyles.containerTwo}>
              {props.currentUserData ? (
                <>
                  <TouchableOpacity
                    style={AccountStyles.containerOne}
                    onPress={() =>
                      props.navigation.navigate('InvoicessAndBilling')
                    }>
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
                      <Text style={AccountStyles.allTextTwo}>
                        Privacy and logout
                      </Text>
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
                    onPress={() =>
                      props.navigation.navigate('SignUpAndSignInMenu')
                    }>
                    <Text style={AccountStyles.buttonText}>
                      Login or register
                    </Text>
                  </TouchableOpacity>
                </View>
              )}
            </View>
          </ScrollView>
        </>
      )}
    </>
  );
};

export default AccountMarkup;
