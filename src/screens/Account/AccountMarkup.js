import React from 'react';
import {View, Text, Image} from 'react-native';
import {AccountStyles} from './AccountStyles';
import FileIcon from 'react-native-vector-icons/Ionicons';
import SettingsIcon from 'react-native-vector-icons/Feather';
// import FileIcon from 'react-native-vector-icons/Ionicons';
import ArrowRightIcon from 'react-native-vector-icons/MaterialIcons';

const AccountMarkup = () => {
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
          <Text style={AccountStyles.text}>View and edit profile</Text>
          <View style={AccountStyles.textLine} />
        </View>
      </View>

      <View style={AccountStyles.containerTwo}>
        <View style={AccountStyles.containerOne}>
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
        </View>

        <View style={AccountStyles.containerOne}>
          <SettingsIcon name="settings" size={20} />

          <View style={AccountStyles.allTextContainer}>
            <Text style={AccountStyles.allTextOne}>Settings</Text>
            <Text style={AccountStyles.allTextTwo}>Privacy and logout</Text>
          </View>

          <View style={AccountStyles.iconContainer}>
            <ArrowRightIcon name="keyboard-arrow-right" size={30} />
          </View>
        </View>

        <View style={AccountStyles.containerOne}>
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
        </View>
      </View>
    </View>
  );
};

export default AccountMarkup;
