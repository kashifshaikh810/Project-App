import React from 'react';
import {
  View,
  Text,
  ScrollView,
  ImageBackground,
  FlatList,
  TouchableOpacity,
  Image,
} from 'react-native';
import LocationIcon from 'react-native-vector-icons/Ionicons';
import DropIcon from 'react-native-vector-icons/MaterialIcons';
import SearchIcon from 'react-native-vector-icons/Feather';
import MobileIcon from 'react-native-vector-icons/FontAwesome5';
import SaleIcon from 'react-native-vector-icons/Foundation';
import TvIcon from 'react-native-vector-icons/FontAwesome';
import RentIcon from 'react-native-vector-icons/AntDesign';
import MyAdsIcon from 'react-native-vector-icons/Entypo';
import FurnitureIcon from 'react-native-vector-icons/MaterialCommunityIcons';
import TShirtIcon from 'react-native-vector-icons/Ionicons';
import {HomeStyles} from './HomeStyles';

const HomeMarkup = () => {
  const dummyData = [
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

  const dummyDataTwo = [
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

  const renderItems = ({item}) => {
    return (
      <View style={HomeStyles.renderItemContainer}>
        <View style={HomeStyles.renderItemContent}>
          <ImageBackground source={item.image} style={HomeStyles.imgBackground}>
            <View style={HomeStyles.insideContainer}>
              <View style={HomeStyles.featuredTextContainer}>
                <Text style={HomeStyles.featuredText}>{item.featured}</Text>
              </View>
              <View style={HomeStyles.iconContainer}>
                <View style={HomeStyles.iconMain}>
                  <MyAdsIcon name="heart-outlined" size={16} color="white" />
                </View>
              </View>
            </View>
          </ImageBackground>

          <Text style={HomeStyles.rsStyle}>Rs {item.rs}</Text>
          <View style={HomeStyles.flexContainer}>
            <Text style={HomeStyles.description}>{item.description}</Text>
            <View style={HomeStyles.rowContainer}>
              <Text style={HomeStyles.locationStyle}>{item.location}</Text>
              <View style={HomeStyles.dateContainer}>
                <Text style={HomeStyles.locationStyle}>{item.date}</Text>
              </View>
            </View>
          </View>
        </View>
      </View>
    );
  };

  const renderItemsTwo = ({item}) => {
    return (
      <View style={HomeStyles.renderItemContainer}>
        <View style={HomeStyles.renderItemContent}>
          <ImageBackground source={item.image} style={HomeStyles.imgBackground}>
            <View style={HomeStyles.insideContainer}>
              <View style={HomeStyles.featuredTextContainer}>
                <Text style={HomeStyles.featuredText}>{item.featured}</Text>
              </View>
              <View style={HomeStyles.iconContainer}>
                <View style={HomeStyles.iconMain}>
                  <MyAdsIcon name="heart-outlined" size={16} color="white" />
                </View>
              </View>
            </View>
          </ImageBackground>

          <View>
            <Text style={HomeStyles.rsStyle}>Rs {item.rs}</Text>
          </View>
          <View style={HomeStyles.flexContainer}>
            <Text style={HomeStyles.description}>{item.description}</Text>
            <View style={HomeStyles.rowContainer}>
              <Text style={HomeStyles.locationStyle}>{item.location}</Text>
              <View style={HomeStyles.dateContainer}>
                <Text style={HomeStyles.locationStyle}>{item.date}</Text>
              </View>
            </View>
          </View>
        </View>
      </View>
    );
  };

  return (
    <ScrollView>
      <View style={HomeStyles.areaContainer}>
        <LocationIcon name="location-outline" size={20} />
        <Text style={HomeStyles.areaContent}>Karachi, Sindh</Text>
        <View style={HomeStyles.topIconsContainer}>
          <DropIcon name="keyboard-arrow-down" size={20} />
        </View>
      </View>

      <View style={HomeStyles.areaContainer}>
        <SearchIcon name="search" size={20} />
        <Text style={HomeStyles.areaContent}>Karachi, Sindh</Text>
        <View style={HomeStyles.topIconsContainer}>
          <SearchIcon name="bell" size={20} />
        </View>
      </View>

      <View style={HomeStyles.categoriesContainer}>
        <Text>Browse Categories</Text>
        <View style={HomeStyles.topIconsContainer}>
          <Text style={HomeStyles.sellAll}>Sell all</Text>
        </View>
      </View>

      <ScrollView horizontal={true}>
        <View style={HomeStyles.iconsHorizontalContainer}>
          <View>
            <MobileIcon
              name="mobile-alt"
              size={20}
              style={[
                HomeStyles.horizontalIcons,
                {backgroundColor: 'lightblue'},
              ]}
            />
            <View style={HomeStyles.smallTextContainer}>
              <Text style={HomeStyles.allTextStyle}>Mobiles</Text>
            </View>
          </View>
          <View>
            <LocationIcon
              name="car-outline"
              size={24}
              style={[HomeStyles.horizontalIcons, {backgroundColor: '#ae5858'}]}
            />
            <View style={HomeStyles.smallTextContainer}>
              <Text style={HomeStyles.allTextStyle}>Vehicales</Text>
            </View>
          </View>
          <View>
            <SaleIcon
              name="burst-sale"
              size={25}
              style={[
                HomeStyles.horizontalIcons,
                {backgroundColor: 'lightblue'},
              ]}
            />
            <View style={HomeStyles.bigTextContainer}>
              <Text style={HomeStyles.allTextStyle}>Property for Sale</Text>
            </View>
          </View>
          <View>
            <RentIcon
              name="trademark"
              size={24}
              style={[HomeStyles.horizontalIcons, {backgroundColor: 'yellow'}]}
            />
            <View style={HomeStyles.bigTextContainer}>
              <Text style={HomeStyles.allTextStyle}>Property for Rent</Text>
            </View>
          </View>
          <View>
            <TvIcon
              name="tv"
              size={22}
              style={[
                HomeStyles.horizontalIcons,
                {backgroundColor: '#3333919c'},
              ]}
            />
            <View style={HomeStyles.bigTextContainer}>
              <Text style={HomeStyles.allTextStyle}>
                Electronics & Home A...
              </Text>
            </View>
          </View>
          <View>
            <DropIcon
              name="pedal-bike"
              size={24}
              style={[HomeStyles.horizontalIcons, {backgroundColor: '#b3b3b3'}]}
            />
            <View style={HomeStyles.smallTextContainer}>
              <Text style={HomeStyles.allTextStyle}>Bikes</Text>
            </View>
          </View>

          <View>
            <FurnitureIcon
              name="table-furniture"
              size={24}
              style={[HomeStyles.horizontalIcons, {backgroundColor: 'brown'}]}
            />
            <View style={HomeStyles.smallTextContainer}>
              <Text style={HomeStyles.allTextStyle}>Furniture & Home D...</Text>
            </View>
          </View>

          <View>
            <TShirtIcon
              name="shirt-outline"
              size={24}
              style={[HomeStyles.horizontalIcons, {backgroundColor: 'grey'}]}
            />
            <View style={HomeStyles.smallTextContainer}>
              <Text style={HomeStyles.allTextStyle}>Fashion & Beauty</Text>
            </View>
          </View>

          <View>
            <FurnitureIcon
              name="piano"
              size={24}
              style={[HomeStyles.horizontalIcons, {backgroundColor: 'yellow'}]}
            />
            <View style={HomeStyles.smallTextContainer}>
              <Text style={HomeStyles.allTextStyle}>Books, Sports &...</Text>
            </View>
          </View>

          <View>
            <FurnitureIcon
              name="pencil"
              size={24}
              style={[
                HomeStyles.horizontalIcons,
                {backgroundColor: 'lightblue'},
              ]}
            />
            <View style={HomeStyles.smallTextContainer}>
              <Text style={HomeStyles.allTextStyle}>Kids</Text>
            </View>
          </View>

          <View>
            <TvIcon
              name="industry"
              size={22}
              style={[HomeStyles.horizontalIcons, {backgroundColor: 'orange'}]}
            />
            <View style={HomeStyles.smallTextContainer}>
              <Text style={HomeStyles.allTextStyle}>
                Business, industrial...
              </Text>
            </View>
          </View>

          <View>
            <FurnitureIcon
              name="room-service-outline"
              size={24}
              style={[HomeStyles.horizontalIcons, {backgroundColor: 'red'}]}
            />
            <View style={HomeStyles.smallTextContainer}>
              <Text style={HomeStyles.allTextStyle}>Services</Text>
            </View>
          </View>

          <View>
            <MobileIcon
              name="journal-whills"
              size={24}
              style={[
                HomeStyles.horizontalIcons,
                {backgroundColor: 'lightblue'},
              ]}
            />
            <View style={HomeStyles.smallTextContainer}>
              <Text style={HomeStyles.allTextStyle}>Jobs</Text>
            </View>
          </View>

          <View>
            <FurnitureIcon
              name="dog"
              size={24}
              style={[
                HomeStyles.horizontalIcons,
                {backgroundColor: 'lightgrey'},
              ]}
            />
            <View style={HomeStyles.smallTextContainer}>
              <Text style={HomeStyles.allTextStyle}>Animals</Text>
            </View>
          </View>
        </View>
      </ScrollView>

      <View>
        <Text style={HomeStyles.basedHeading}>Based on your search</Text>

        <FlatList
          data={dummyData}
          renderItem={item => renderItems(item)}
          horizontal={true}
        />

        <Text style={HomeStyles.freshHeading}>Fresh recommendations</Text>

        <FlatList
          data={dummyDataTwo}
          renderItem={item => renderItemsTwo(item)}
          horizontal={true}
        />
      </View>

      <View style={HomeStyles.arrowAndButtonContainer}>
        <View style={HomeStyles.arrowMain}>
          <Image
            source={require('../../Components/Utility/Images/home.png')}
            style={HomeStyles.arrow}
          />
        </View>
        <TouchableOpacity style={HomeStyles.startButton}>
          <Text style={HomeStyles.start}>START</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
};

export default HomeMarkup;
