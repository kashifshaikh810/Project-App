/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {Text, TouchableOpacity} from 'react-native';
import {Styles} from './Styles';

export const testRenderItem = ({item}, props, data) => {
  let name = data.route.params.routeName;

  const itemOnClick = () => {
    if (name === 'Home') {
      props.navigate('SearchItems', {itemData: item});
    } else {
      props.navigate('IncludesDetails', {routeData: item});
    }
  };

  return (
    <TouchableOpacity style={Styles.renderContainer} onPress={itemOnClick}>
      {name === 'Home' ? (
        <Text
          style={[
            Styles.renderText,
            {color: item.id === 1 ? 'blue' : '#637777'},
          ]}>
          {item.name}
        </Text>
      ) : (
        <Text style={Styles.renderText}>{item.name}</Text>
      )}
    </TouchableOpacity>
  );
};
