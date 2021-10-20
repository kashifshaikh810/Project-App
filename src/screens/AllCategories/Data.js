import React from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import LocationIcon from 'react-native-vector-icons/Ionicons';
import DropIcon from 'react-native-vector-icons/MaterialIcons';
import MobileIcon from 'react-native-vector-icons/FontAwesome5';
import SaleIcon from 'react-native-vector-icons/Foundation';
import TvIcon from 'react-native-vector-icons/FontAwesome';
import RentIcon from 'react-native-vector-icons/AntDesign';
import FurnitureIcon from 'react-native-vector-icons/MaterialCommunityIcons';
import TShirtIcon from 'react-native-vector-icons/Ionicons';
import RightIcon from 'react-native-vector-icons/Entypo';

import {Styles} from './Styles';

export const iconsData = [
  {
    icon: (
      <MobileIcon
        name="mobile-alt"
        size={30}
        style={[Styles.horizontalIcons, {backgroundColor: '#8df2ee'}]}
      />
    ),
    iconName: 'Mobiles',
  },

  {
    icon: (
      <LocationIcon
        name="car-outline"
        size={30}
        style={[Styles.horizontalIcons, {backgroundColor: '#d2b981'}]}
      />
    ),
    iconName: 'Vehicles',
  },

  {
    icon: (
      <SaleIcon
        name="burst-sale"
        size={30}
        style={[Styles.horizontalIcons, {backgroundColor: '#3ce6d8'}]}
      />
    ),
    iconName: 'Property for Sale',
  },

  {
    icon: (
      <RentIcon
        name="trademark"
        size={30}
        style={[Styles.horizontalIcons, {backgroundColor: '#f9dd3c'}]}
      />
    ),
    iconName: 'Property for Rent',
  },

  {
    icon: (
      <TvIcon
        name="tv"
        size={30}
        style={[Styles.horizontalIcons, {backgroundColor: '#9cb8fc'}]}
      />
    ),
    iconName: 'Electronics & Home Appliances',
  },

  {
    icon: (
      <DropIcon
        name="pedal-bike"
        size={30}
        style={[Styles.horizontalIcons, {backgroundColor: '#fb645c'}]}
      />
    ),
    iconName: 'Bikes',
  },

  {
    icon: (
      <TvIcon
        name="industry"
        size={30}
        style={[Styles.horizontalIcons, {backgroundColor: '#fee893'}]}
      />
    ),
    iconName: 'Business, Industrial & Agriculture',
  },

  {
    icon: (
      <FurnitureIcon
        name="room-service-outline"
        size={30}
        style={[Styles.horizontalIcons, {backgroundColor: '#fb645c'}]}
      />
    ),
    iconName: 'Services',
  },

  {
    icon: (
      <MobileIcon
        name="journal-whills"
        size={30}
        style={[Styles.horizontalIcons, {backgroundColor: '#cadefc'}]}
      />
    ),
    iconName: 'Jobs',
  },

  {
    icon: (
      <FurnitureIcon
        name="dog"
        size={30}
        style={[Styles.horizontalIcons, {backgroundColor: '#8df2ee'}]}
      />
    ),
    iconName: 'Animals',
  },

  {
    icon: (
      <FurnitureIcon
        name="table-furniture"
        size={30}
        style={[Styles.horizontalIcons, {backgroundColor: '#d0b482'}]}
      />
    ),
    iconName: 'Furniture & Home Decor',
  },

  {
    icon: (
      <TShirtIcon
        name="shirt-outline"
        size={30}
        style={[Styles.horizontalIcons, {backgroundColor: '#39e4da'}]}
      />
    ),
    iconName: 'Fashion & Beauty',
  },

  {
    icon: (
      <FurnitureIcon
        name="piano"
        size={30}
        style={[Styles.horizontalIcons, {backgroundColor: '#f9dd3c'}]}
      />
    ),
    iconName: 'Books, Sports & Hobbies',
  },

  {
    icon: (
      <FurnitureIcon
        name="pencil"
        size={30}
        style={[Styles.horizontalIcons, {backgroundColor: '#99b8fc'}]}
      />
    ),
    iconName: 'Kids',
  },
];

export const renderIcons = ({item}, navigation, props) => {
  const name = props.route.params.routeName;
  return (
    <View style={Styles.mainContainer}>
      <TouchableOpacity
        style={Styles.listContainer}
        onPress={() =>
          navigation.navigate('SelectedCategories', {routeData: item.iconName, routeName: name})
        }>
        <View>{item.icon}</View>
        <View>
          <Text style={{color: '#31484a', fontSize: 16, width: 240}}>
            {item.iconName}
          </Text>
        </View>

        <RightIcon name="chevron-small-right" size={25} />
      </TouchableOpacity>
    </View>
  );
};
