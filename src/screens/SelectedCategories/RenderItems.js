import React from 'react';
import {Text, TouchableOpacity} from 'react-native';
import {Styles} from './Styles';

export const testRenderItem = ({item}, props) => {
  return (
    <TouchableOpacity
      style={Styles.renderContainer}
      onPress={() => props.navigate('IncludesDetails', {routeData: item})}>
      <Text style={Styles.renderText}>{item.name}</Text>
    </TouchableOpacity>
  );
};
