import React from 'react';
import {View, Text, TouchableOpacity} from 'react-native';

import {Styles} from './Styles';

export const renderIcons = ({item}, navigation) => {
  let name = item.iconName;
  return (
    <TouchableOpacity
      style={Styles.renderListContainer}
      onPress={() =>
        navigation.navigate('SelectedCategories', {routeData: name})
      }>
      <View>{item.icon}</View>
      {item.iconName.length > 20 ? (
        <View style={Styles.listTextContainerOne}>
          <Text numberOfLines={2} style={Styles.textStyle}>
            {item.iconName}
          </Text>
        </View>
      ) : (
        <View style={Styles.listTextContainerTwo}>
          <Text style={Styles.textStyle}>{item.iconName}</Text>
        </View>
      )}
    </TouchableOpacity>
  );
};
