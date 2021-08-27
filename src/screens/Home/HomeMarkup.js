import React from 'react';
import {View, Text, ScrollView} from 'react-native';
import LocationIcon from 'react-native-vector-icons/Ionicons';
import DropIcon from 'react-native-vector-icons/MaterialIcons';
import SearchIcon from 'react-native-vector-icons/Feather';
import MobileIcon from 'react-native-vector-icons/FontAwesome5';

const HomeMarkup = () => {
  return (
    <View>
      <View
        style={{marginHorizontal: 20, marginVertical: 7, flexDirection: 'row'}}>
        <LocationIcon name="location-outline" size={20} />
        <Text style={{marginHorizontal: 10, marginVertical: 3}}>
          Karachi, Sindh
        </Text>
        <View
          style={{flex: 1, justifyContent: 'flex-end', alignItems: 'flex-end'}}>
          <DropIcon name="keyboard-arrow-down" size={20} />
        </View>
      </View>

      <View
        style={{marginHorizontal: 20, marginVertical: 7, flexDirection: 'row'}}>
        <SearchIcon name="search" size={20} />
        <Text style={{marginHorizontal: 10, marginVertical: 3}}>
          Karachi, Sindh
        </Text>
        <View
          style={{flex: 1, justifyContent: 'flex-end', alignItems: 'flex-end'}}>
          <SearchIcon name="bell" size={20} />
        </View>
      </View>

      <View
        style={{
          marginHorizontal: 15,
          marginVertical: 10,
          flexDirection: 'row',
        }}>
        <Text>Browse Categories</Text>
        <View
          style={{flex: 1, justifyContent: 'flex-end', alignItems: 'flex-end'}}>
          <Text style={{borderBottomWidth: 1}}>Sell all</Text>
        </View>
      </View>

      <ScrollView horizontal={true} >
        <View style={{flexDirection: 'row'}}>
          <View
            style={{
              width: 45,
              height: 45,
              backgroundColor: '#b3b3b3',
              borderRadius: 25,
              alignItems: 'center',
              justifyContent: 'center',
              marginHorizontal: 10,
            }}>
            <MobileIcon name="mobile-alt" size={20} />
          </View>
          <View
            style={{
              width: 45,
              height: 45,
              backgroundColor: '#b3b3b3',
              borderRadius: 25,
              alignItems: 'center',
              justifyContent: 'center',
              marginHorizontal: 10,
            }}>
            <MobileIcon name="mobile-alt" size={20} />
          </View>
          <View
            style={{
              width: 45,
              height: 45,
              backgroundColor: '#b3b3b3',
              borderRadius: 25,
              alignItems: 'center',
              justifyContent: 'center',
              marginHorizontal: 10,
            }}>
            <MobileIcon name="mobile-alt" size={20} />
          </View>
          <View
            style={{
              width: 45,
              height: 45,
              backgroundColor: '#b3b3b3',
              borderRadius: 25,
              alignItems: 'center',
              justifyContent: 'center',
              marginHorizontal: 10,
            }}>
            <MobileIcon name="mobile-alt" size={20} />
          </View>
          <View
            style={{
              width: 45,
              height: 45,
              backgroundColor: '#b3b3b3',
              borderRadius: 25,
              alignItems: 'center',
              justifyContent: 'center',
              marginHorizontal: 10,
            }}>
            <MobileIcon name="mobile-alt" size={20} />
          </View>
          <View
            style={{
              width: 45,
              height: 45,
              backgroundColor: '#b3b3b3',
              borderRadius: 25,
              alignItems: 'center',
              justifyContent: 'center',
              marginHorizontal: 10,
            }}>
            <MobileIcon name="mobile-alt" size={20} />
          </View>
        </View>
          <View>
            <Text>Mobiles</Text>
          </View>
          <View>
            <Text>Mobiles</Text>
          </View>

          <View>
            <Text>Mobiles</Text>
          </View>

          <View>
            <Text>Mobiles</Text>
          </View>

          <View>
            <Text>Mobiles</Text>
          </View>

          <View>
            <Text>Mobiles</Text>
          </View>
      </ScrollView>
    </View>
  );
};

export default HomeMarkup;
