import React from 'react';
import LocationIcon from 'react-native-vector-icons/Ionicons';
import DropIcon from 'react-native-vector-icons/MaterialIcons';
import MobileIcon from 'react-native-vector-icons/FontAwesome5';
import SaleIcon from 'react-native-vector-icons/Foundation';
import TvIcon from 'react-native-vector-icons/FontAwesome';
import RentIcon from 'react-native-vector-icons/AntDesign';
import FurnitureIcon from 'react-native-vector-icons/MaterialCommunityIcons';

import {HomeStyles} from '../Home/HomeStyles';

export const iconsData = [
  {
    icon: (
      <MobileIcon
        name="mobile-alt"
        size={20}
        style={[HomeStyles.horizontalIcons, {backgroundColor: '#8df2ee'}]}
      />
    ),
    iconName: 'Mobiles',
    // onPress: () => 
  },

  {
    icon: (
      <LocationIcon
        name="car-outline"
        size={24}
        style={[HomeStyles.horizontalIcons, {backgroundColor: '#d2b981'}]}
      />
    ),
    iconName: 'Vehicles',
  },

  {
    icon: (
      <SaleIcon
        name="burst-sale"
        size={25}
        style={[HomeStyles.horizontalIcons, {backgroundColor: '#3ce6d8'}]}
      />
    ),
    iconName: 'Property for Sale',
  },

  {
    icon: (
      <RentIcon
        name="trademark"
        size={24}
        style={[HomeStyles.horizontalIcons, {backgroundColor: '#f9dd3c'}]}
      />
    ),
    iconName: 'Property for Rent',
  },

  {
    icon: (
      <TvIcon
        name="tv"
        size={22}
        style={[HomeStyles.horizontalIcons, {backgroundColor: '#9cb8fc'}]}
      />
    ),
    iconName: 'Electronics & Home Appliances',
  },

  {
    icon: (
      <DropIcon
        name="pedal-bike"
        size={24}
        style={[HomeStyles.horizontalIcons, {backgroundColor: '#fb645c'}]}
      />
    ),
    iconName: 'Bikes',
  },

  {
    icon: (
      <TvIcon
        name="industry"
        size={22}
        style={[HomeStyles.horizontalIcons, {backgroundColor: '#fee893'}]}
      />
    ),
    iconName: 'Business, industrial & Agri...',
  },

  {
    icon: (
      <FurnitureIcon
        name="room-service-outline"
        size={24}
        style={[HomeStyles.horizontalIcons, {backgroundColor: '#fb645c'}]}
      />
    ),
    iconName: 'Services',
  },

  {
    icon: (
      <MobileIcon
        name="journal-whills"
        size={24}
        style={[HomeStyles.horizontalIcons, {backgroundColor: '#cadefc'}]}
      />
    ),
    iconName: 'Jobs',
  },

];
