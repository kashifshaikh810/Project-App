import React from 'react';
import LocationIcon from 'react-native-vector-icons/Ionicons';
import DropIcon from 'react-native-vector-icons/MaterialIcons';
import MobileIcon from 'react-native-vector-icons/FontAwesome5';
import SaleIcon from 'react-native-vector-icons/Foundation';
import TvIcon from 'react-native-vector-icons/FontAwesome';
import RentIcon from 'react-native-vector-icons/AntDesign';
import FurnitureIcon from 'react-native-vector-icons/MaterialCommunityIcons';
import TShirtIcon from 'react-native-vector-icons/Ionicons';

import {HomeStyles} from './HomeStyles';

export const dummyData = [
  {
    featured: 'FEATURED',
    rs: '25,500',
    description: 'Computer/Study table',
    location: 'Bahadurabad, Karachi',
    date: `${27}Jul`,
    image: require('../../Components/Utility/Images/table.jpg'),
  },

  {
    featured: 'FEATURED',
    rs: '10,000',
    description: 'Work from home computer/la...',
    location: 'Gulshan-E-Iqbal block 11,K...',
    date: `${5}Aug`,
    image: require('../../Components/Utility/Images/image.jpeg'),
  },

  {
    featured: 'FEATURED',
    rs: '10,000',
    description: 'Work from home computer/la...',
    location: 'Gulshan-E-Iqbal block 11,K...',
    date: `${5}Aug`,
    image: require('../../Components/Utility/Images/image.jpeg'),
  },

  {
    featured: 'FEATURED',
    rs: '10,000',
    description: 'Work from home computer/la...',
    location: 'Gulshan-E-Iqbal block 11,K...',
    date: `${5}Aug`,
    image: require('../../Components/Utility/Images/image.jpeg'),
  },

  {
    featured: 'FEATURED',
    rs: '10,000',
    description: 'Work from home computer/la...',
    location: 'Gulshan-E-Iqbal block 11,K...',
    date: `${5}Aug`,
    image: require('../../Components/Utility/Images/image.jpeg'),
  },
];

export const dummyDataTwo = [
  {
    featured: 'FEATURED',
    rs: '36,000',
    description: 'Furnture Sofa Set-6 seater So...',
    location: 'North Karachi, Karachi',
    date: `${11}Aug`,
    image: require('../../Components/Utility/Images/sofa.jpg'),
  },

  {
    featured: 'FEATURED',
    rs: '45,000',
    description: 'ACP UPS 10KVA/6KVA/5KVA...',
    location: 'Cantt, Karachi',
    date: `${3}Aug`,
    image: require('../../Components/Utility/Images/tableTwo.jpg'),
  },

  {
    featured: 'FEATURED',
    rs: '45,000',
    description: 'ACP UPS 10KVA/6KVA/5KVA...',
    location: 'Cantt, Karachi',
    date: `${3}Aug`,
    image: require('../../Components/Utility/Images/tableTwo.jpg'),
  },

  {
    featured: 'FEATURED',
    rs: '45,000',
    description: 'ACP UPS 10KVA/6KVA/5KVA...',
    location: 'Cantt, Karachi',
    date: `${3}Aug`,
    image: require('../../Components/Utility/Images/tableTwo.jpg'),
  },

  {
    featured: 'FEATURED',
    rs: '45,000',
    description: 'ACP UPS 10KVA/6KVA/5KVA...',
    location: 'Cantt, Karachi',
    date: `${3}Aug`,
    image: require('../../Components/Utility/Images/tableTwo.jpg'),
  },
];

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
    iconName: 'Electronics & Home A...',
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
      <FurnitureIcon
        name="table-furniture"
        size={24}
        style={[HomeStyles.horizontalIcons, {backgroundColor: '#d0b482'}]}
      />
    ),
    iconName: 'Furniture & Home D...',
  },

  {
    icon: (
      <TShirtIcon
        name="shirt-outline"
        size={24}
        style={[HomeStyles.horizontalIcons, {backgroundColor: '#39e4da'}]}
      />
    ),
    iconName: 'Fashion & Beauty',
  },

  {
    icon: (
      <FurnitureIcon
        name="piano"
        size={24}
        style={[HomeStyles.horizontalIcons, {backgroundColor: '#f9dd3c'}]}
      />
    ),
    iconName: 'Books, Sports &...',
  },

  {
    icon: (
      <FurnitureIcon
        name="pencil"
        size={24}
        style={[HomeStyles.horizontalIcons, {backgroundColor: '#99b8fc'}]}
      />
    ),
    iconName: 'Kids',
  },

  {
    icon: (
      <TvIcon
        name="industry"
        size={22}
        style={[HomeStyles.horizontalIcons, {backgroundColor: '#fee893'}]}
      />
    ),
    iconName: 'Business, industrial...',
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

  {
    icon: (
      <FurnitureIcon
        name="dog"
        size={24}
        style={[HomeStyles.horizontalIcons, {backgroundColor: '#8df2ee'}]}
      />
    ),
    iconName: 'Animals',
  },
];
