import React, {useState} from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  FlatList,
  ImageBackground,
} from 'react-native';
import {Styles} from './Styles';
import MyAdsIcon from 'react-native-vector-icons/Entypo';
import HeartWhite from 'react-native-vector-icons/Ionicons';

const dummyDataTwo = [
  {
    description: 'Furnture Sofa Set-6 seater',
    rs: '36,000',
    image: require('../../../Components/Utility/Images/sofa.jpg'),
  },
  {
    description: 'Furnture Sofa Set-6 seater',
    rs: '36,000',
    image: require('../../../Components/Utility/Images/sofa.jpg'),
  },
  {
    description: 'Furnture Sofa Set-6 seater',
    rs: '36,000',
    image: require('../../../Components/Utility/Images/sofa.jpg'),
  },
  {
    description: 'Furnture Sofa Set-6 seater',
    rs: '36,000',
    image: require('../../../Components/Utility/Images/sofa.jpg'),
  },
  {
    description: 'Furnture Sofa Set-6 seater',
    rs: '36,000',
    image: require('../../../Components/Utility/Images/sofa.jpg'),
  },
  {
    description: 'Furnture Sofa Set-6 seater',
    rs: '36,000',
    image: require('../../../Components/Utility/Images/sofa.jpg'),
  },
];

export const renderItemsTwo = ({item}, isChange, setIsChange) => {
  return (
    <TouchableOpacity style={Styles.renderItemContainer} activeOpacity={0.5}>
      <View style={Styles.renderItemContent}>
        <ImageBackground source={item.image} style={Styles.imgBackground}>
          <View style={Styles.insideContainer}>
            <View style={Styles.iconContainer}>
              {isChange ? (
                <HeartWhite
                  name="heart-circle"
                  size={25}
                  onPress={() => setIsChange(!isChange)}
                />
              ) : (
                <TouchableOpacity
                  style={Styles.iconMain}
                  onPress={() => setIsChange(true)}>
                  <MyAdsIcon name="heart-outlined" size={25} color="white" />
                </TouchableOpacity>
              )}
            </View>
          </View>
        </ImageBackground>

        <View>
          <Text style={Styles.description} numberOfLines={2}>
            {item.description}
          </Text>
        </View>
        <View style={Styles.flexContainer}>
          <Text style={Styles.rsStyle}>Rs {item.rs}</Text>
        </View>
      </View>
    </TouchableOpacity>
  );
};

const Favourites = () => {
  const [isChange, setIsChange] = useState(false);
  return (
    <View style={Styles.container}>
      <View style={Styles.midContainer}>
        <View style={Styles.midContainerChild}>
          <Text style={Styles.heavyDiscountText}>
            Heavy discount on packages
          </Text>
          <View style={Styles.viewPackageBoxContainer}>
            <TouchableOpacity style={Styles.viewPackageBox} activeOpacity={0.6}>
              <Text style={Styles.viewPackageText}>View packages</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>

      <FlatList
        data={dummyDataTwo}
        renderItem={item => renderItemsTwo(item, isChange, setIsChange)}
        numColumns={2}
      />
    </View>
  );
};

export default Favourites;
