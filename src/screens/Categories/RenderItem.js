import React from 'react';
import {View, Text} from 'react-native';

import {Styles} from './Styles';

export const renderIcons = ({item}) => {
  return (
    <View style={Styles.renderListContainer}>
      <View>{item.icon}</View>
      {item.iconName.length > 20 ? (
        <View style={Styles.listTextContainerOne}>
          <Text style={Styles.textStyle}>{item.iconName}</Text>
        </View>
      ) : (
        <View style={Styles.listTextContainerTwo}>
          <Text style={Styles.textStyle}>{item.iconName}</Text>
        </View>
      )}
    </View>
  );
};
