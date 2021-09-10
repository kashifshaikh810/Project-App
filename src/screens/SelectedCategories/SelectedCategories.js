import React from 'react';
import {View, Text, FlatList, TouchableOpacity} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import IconLeft from 'react-native-vector-icons/Feather';

import {testRenderItem} from './RenderItems';
import {
  AnimalsData,
  BikesData,
  BooksData,
  BusinessData,
  ElectronicsData,
  FashionData,
  FurnitureData,
  JobsData,
  KidsData,
  MobilesData,
  PropertyData,
  PropertyRentData,
  ServicesData,
  VehiclesData,
} from './Data';

const SelectedCategories = data => {
  const navigation = useNavigation();
  const routeName = data.route.params.routeData;
  console.log(routeName.length);
  return (
    <View>
      <View style={{flexDirection: 'row', height: 50, width:  120, justifyContent: 'space-evenly', alignItems: 'center'}}>
    <TouchableOpacity onPress={() => navigation.navigate('AllCategories')}>
      <IconLeft name="chevron-left" size={22} color="#0b2a2e" />
    </TouchableOpacity>
        <Text style={{color: '#0b2a2e', fontWeight: 'bold', fontSize: 17,}}>{routeName}</Text>
      </View>

      <FlatList
        data={
          (routeName === 'Mobiles' && MobilesData) ||
          (routeName === 'Vehicles' && VehiclesData) ||
          (routeName === 'Property for Sale' && PropertyData) ||
          (routeName === 'Property for Rent' && PropertyRentData) ||
          (routeName === 'Electronics & Home Appliances' && ElectronicsData) ||
          (routeName === 'Bikes' && BikesData) ||
          (routeName === 'Business, Industrial & Agriculture' &&
            BusinessData) ||
          (routeName === 'Services' && ServicesData) ||
          (routeName === 'Jobs' && JobsData) ||
          (routeName === 'Animals' && AnimalsData) ||
          (routeName === 'Furniture & Home Decor' && FurnitureData) ||
          (routeName === 'Fashion & Beauty' && FashionData) ||
          (routeName === 'Books, Sports & Hobbies' && BooksData) ||
          (routeName === 'Kids' && KidsData)
        }
        renderItem={item => testRenderItem(item)}
      />
    </View>
  );
};

export default SelectedCategories;
