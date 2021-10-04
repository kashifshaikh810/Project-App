import React from 'react';
import {View, Text, TouchableOpacity, FlatList} from 'react-native';
import {Styles} from './Styles';

const Favourites = () => {
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

      {/* <FlatList
          data={dummyDataTwo}
          renderItem={item => renderItemsTwo(item)}
          horizontal={true}
        /> */}
    </View>
  );
};

export default Favourites;
