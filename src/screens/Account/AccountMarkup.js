import React from 'react';
import {View, Text, Image, TouchableOpacity} from 'react-native';
import {AccountStyles} from './AccountStyles';
import FileIcon from 'react-native-vector-icons/Ionicons';
import SettingsIcon from 'react-native-vector-icons/Feather';
// import FileIcon from 'react-native-vector-icons/Ionicons';
import ArrowRightIcon from 'react-native-vector-icons/MaterialIcons';
import {useNavigation} from '@react-navigation/native';

const AccountMarkup = () => {
  const navigation = useNavigation();
  return (
    <View style={AccountStyles.mainContainer}>
      <View style={AccountStyles.container}>
        <View>
          <Image
            source={require('../../Components/Utility/Images/profile.png')}
            style={AccountStyles.image}
          />
        </View>
        <View style={AccountStyles.main}>
          <Text style={AccountStyles.userName}>Sebestian</Text>
          <TouchableOpacity
            onPress={() => navigation.navigate('BasicInformation')}>
            <Text style={AccountStyles.text}>View and edit profile</Text>
            <View style={AccountStyles.textLine} />
          </TouchableOpacity>
        </View>
      </View>

      <View style={AccountStyles.containerTwo}>
        <TouchableOpacity
          style={AccountStyles.containerOne}
          onPress={() => navigation.navigate('InvoicessAndBilling')}>
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
          onPress={() => navigation.navigate('Settings')}>
          <SettingsIcon name="settings" size={20} />

          <View style={AccountStyles.allTextContainer}>
            <Text style={AccountStyles.allTextOne}>Settings</Text>
            <Text style={AccountStyles.allTextTwo}>Privacy and logout</Text>
          </View>

          <View style={AccountStyles.iconContainer}>
            <ArrowRightIcon name="keyboard-arrow-right" size={30} />
          </View>
        </TouchableOpacity>

        <TouchableOpacity
          style={AccountStyles.containerOne}
          onPress={() => navigation.navigate('HelpAndSupport')}>
          <Image
            source={require('../../Components/Utility/Images/olx.jpg')}
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
      </View>
    </View>
  );
};

export default AccountMarkup;
