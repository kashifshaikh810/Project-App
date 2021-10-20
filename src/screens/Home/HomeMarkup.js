import React from 'react';
import {
  View,
  Text,
  ScrollView,
  FlatList,
  TouchableOpacity,
  Image,
} from 'react-native';
import LocationIcon from 'react-native-vector-icons/Ionicons';
import DropIcon from 'react-native-vector-icons/MaterialIcons';
import SearchIcon from 'react-native-vector-icons/Feather';

import {HomeStyles} from './HomeStyles';
import {renderItems, renderItemsTwo, renderIcons} from './AllRendersItem';
import {iconsData, dummyData, dummyDataTwo} from './Data';

const HomeMarkup = props => {
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
          <TouchableOpacity
            onPress={() => props.navigation.navigate('NotificationMain')}>
            <SearchIcon name="bell" size={20} />
          </TouchableOpacity>
        </View>
      </View>

      <View style={HomeStyles.categoriesContainer}>
        <Text>Browse Categories</Text>
        <TouchableOpacity
          style={HomeStyles.topIconsContainer}
          onPress={() =>
            props.navigation.navigate('AllCategories', {routeName: 'Home'})
          }>
          <Text style={HomeStyles.sellAll}>See all</Text>
        </TouchableOpacity>
      </View>

      <FlatList
        data={iconsData}
        renderItem={item => renderIcons(item, props)}
        horizontal={true}
      />

      <View>
        <Text style={HomeStyles.basedHeading}>Based on your search</Text>

        <FlatList
          data={dummyData}
          renderItem={item => renderItems(item, props)}
          horizontal={true}
        />

        <Text style={HomeStyles.freshHeading}>Fresh recommendations</Text>

        <FlatList
          data={dummyDataTwo}
          renderItem={item => renderItemsTwo(item, props)}
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
