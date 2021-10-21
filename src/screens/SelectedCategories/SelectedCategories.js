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
import {
  AnimalsDataHome,
  BikesDataHome,
  BooksDataHome,
  BusinessDataHome,
  ElectronicsDataHome,
  FashionDataHome,
  FurnitureDataHome,
  JobsDataHome,
  KidsDataHome,
  MobilesDataHome,
  PropertyDataHome,
  PropertyRentDataHome,
  ServicesDataHome,
  VehiclesDataHome,
} from './DataOfHome';
import {Styles} from './Styles';
import {responsiveScreenWidth} from '../../Components/Utility/ResponsiveDimensions/Responsive';

const SelectedCategories = data => {
  const navigation = useNavigation();
  const routeName = data.route.params.routeData;
  const name = data.route.params.routeName;

  const renderWidth =
    (routeName === 'Mobiles' && responsiveScreenWidth(35)) ||
    (routeName === 'Vehicles' && responsiveScreenWidth(35)) ||
    (routeName === 'Property for Sale' && responsiveScreenWidth(55)) ||
    (routeName === 'Property for Rent' && responsiveScreenWidth(55)) ||
    (routeName === 'Electronics & Home Appliances' &&
      responsiveScreenWidth(85)) ||
    (routeName === 'Bikes' && responsiveScreenWidth(30)) ||
    (routeName === 'Services' && responsiveScreenWidth(30)) ||
    (routeName === 'Business, Industrial & Agriculture' &&
      responsiveScreenWidth(90)) ||
    (routeName === 'Jobs' && responsiveScreenWidth(28)) ||
    (routeName === 'Animals' && responsiveScreenWidth(30)) ||
    (routeName === 'Furniture & Home Decor' && responsiveScreenWidth(68)) ||
    (routeName === 'Bikes' && responsiveScreenWidth(30)) ||
    (routeName === 'Fashion & Beauty' && responsiveScreenWidth(55)) ||
    (routeName === 'Books, Sports & Hobbies' && responsiveScreenWidth(70)) ||
    (routeName === 'Kids' && responsiveScreenWidth(28));

  const renderData =
    (routeName === 'Mobiles' && MobilesData) ||
    (routeName === 'Vehicles' && VehiclesData) ||
    (routeName === 'Property for Sale' && PropertyData) ||
    (routeName === 'Property for Rent' && PropertyRentData) ||
    (routeName === 'Electronics & Home Appliances' && ElectronicsData) ||
    (routeName === 'Bikes' && BikesData) ||
    (routeName === 'Business, Industrial & Agriculture' && BusinessData) ||
    (routeName === 'Services' && ServicesData) ||
    (routeName === 'Jobs' && JobsData) ||
    (routeName === 'Animals' && AnimalsData) ||
    (routeName === 'Furniture & Home Decor' && FurnitureData) ||
    (routeName === 'Fashion & Beauty' && FashionData) ||
    (routeName === 'Books, Sports & Hobbies' && BooksData) ||
    (routeName === 'Kids' && KidsData);

  const renderHomeData =
    (routeName === 'Mobiles' && MobilesDataHome) ||
    (routeName === 'Vehicles' && VehiclesDataHome) ||
    (routeName === 'Property for Sale' && PropertyDataHome) ||
    (routeName === 'Property for Rent' && PropertyRentDataHome) ||
    (routeName === 'Electronics & Home Appliances' && ElectronicsDataHome) ||
    (routeName === 'Bikes' && BikesDataHome) ||
    (routeName === 'Business, Industrial & Agriculture' && BusinessDataHome) ||
    (routeName === 'Services' && ServicesDataHome) ||
    (routeName === 'Jobs' && JobsDataHome) ||
    (routeName === 'Animals' && AnimalsDataHome) ||
    (routeName === 'Furniture & Home Decor' && FurnitureDataHome) ||
    (routeName === 'Fashion & Beauty' && FashionDataHome) ||
    (routeName === 'Books, Sports & Hobbies' && BooksDataHome) ||
    (routeName === 'Kids' && KidsDataHome);

  return (
    <View>
      <View style={[Styles.routeNameContainer, {width: renderWidth}]}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <IconLeft name="chevron-left" size={22} color="#0b2a2e" />
        </TouchableOpacity>
        <Text style={Styles.routeName}>{routeName}</Text>
      </View>

      <FlatList
        keyExtractor={(item, index) => String(index)}
        data={name === 'Home' ? renderHomeData : renderData}
        renderItem={item => testRenderItem(item, navigation, data)}
        style={Styles.flatList}
      />
    </View>
  );
};

export default SelectedCategories;
