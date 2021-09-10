import React from 'react';
import {Text, View} from 'react-native';

export const testRenderItem = ({item}) => {
  return (
    <View>
      <Text>{item.name}</Text>
    </View>
  );
};
