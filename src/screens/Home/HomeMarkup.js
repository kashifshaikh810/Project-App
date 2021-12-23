import React, {useState} from 'react';
import {
  View,
  Text,
  ScrollView,
  FlatList,
  TouchableOpacity,
  Image,
  ActivityIndicator,
  LogBox
} from 'react-native';
import LocationIcon from 'react-native-vector-icons/Ionicons';
import DropIcon from 'react-native-vector-icons/MaterialIcons';
import SearchIcon from 'react-native-vector-icons/Feather';

import {HomeStyles} from './HomeStyles';
import {renderItems, renderItemsTwo, renderIcons} from './AllRendersItem';
import {iconsData, dummyData, dummyDataTwo} from './Data';

const HomeMarkup = props => {
  const [scrollVal, setScrollVal] = useState('');

  LogBox.ignoreLogs(['VirtualizedLists should never be nested inside plain ScrollViews with the same orientation - use another VirtualizedList-backed container instead.']);

  return (
    <>
      {/* {scrollVal > 0 && (
        <View style={HomeStyles.areaContainer}>
          <SearchIcon name="search" size={20} />
          <Text style={HomeStyles.areaContent}>
            Find Cars, Mobile Phones and more
          </Text>
          <View style={HomeStyles.topIconsContainer}>
            <TouchableOpacity
              onPress={() => props.navigation.navigate('NotificationMain')}>
              <SearchIcon name="bell" size={20} />
            </TouchableOpacity>
          </View>
        </View>
      )} */}
      <ScrollView
      // onScroll={e => setScrollVal(e.nativeEvent.contentOffset.y)}
      nestedScrollEnabled={true}
      style={{flexGrow: 1}}
      >
        <View>
          <View style={HomeStyles.areaContainer}>
            <LocationIcon name="location-outline" size={20} />
            <Text style={HomeStyles.areaContent}>Karachi, Sindh</Text>
            <View style={HomeStyles.topIconsContainer}>
              <DropIcon name="keyboard-arrow-down" size={20} />
            </View>
          </View>

          {!scrollVal && (
            <View style={HomeStyles.areaContainer}>
              <TouchableOpacity
                style={{flexDirection: 'row'}}
                onPress={() => props.navigation.navigate('QuickFilter')}>
                <SearchIcon name="search" size={20} />
                <Text style={HomeStyles.areaContent}>
                  Find Cars, Mobile Phones and more
                </Text>
              </TouchableOpacity>
              <View style={HomeStyles.topIconsContainer}>
                <TouchableOpacity
                  onPress={() => props.navigation.navigate('NotificationMain')}>
                  <SearchIcon name="bell" size={20} />
                </TouchableOpacity>
              </View>
            </View>
          )}

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
            scrollEnabled={false}
                keyExtractor={(item, index) => index.toString()}
          />

          <View>
            {props.allAdsData === false && (
              <>
                <Text style={HomeStyles.basedHeading}>
                  Based on your search
                </Text>
                <FlatList
                  data={dummyDataTwo}
                  renderItem={item => renderItemsTwo(item, props)}
                  horizontal={true}
                  scrollEnabled={false}
                keyExtractor={(item, index) => index.toString()}
                />
              </>
            )}

            <Text style={HomeStyles.freshHeading}>Fresh recommendations</Text>
            {!props.isLoading && !props.allAdsData && (
              <View
                style={{
                  height: 400,
                  justifyContent: 'center',
                  alignItems: 'center',
                }}>
                <Text style={HomeStyles.basedHeading}>No data found</Text>
              </View>
            )}

            {props.isLoading ? (
              <View style={{height: 270, width: 360, justifyContent: 'center', alignItems: 'center'}}>
                <ActivityIndicator size={50} color="#b3b3b3" />
              </View>
            ) : (
              <FlatList
                data={props.allAdsData}
                renderItem={item => renderItems(item, props)}
                // horizontal={true}
                keyExtractor={(item, index) => index.toString()}
                scrollEnabled={false}
                numColumns={2}
                refreshing={props.isLoading}
                />
            )}
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
        </View>
      </ScrollView>
    </>
  );
};

export default HomeMarkup;
