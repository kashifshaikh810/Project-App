import React from 'react';
import {View, Text} from 'react-native';
import {Styles} from './Styles';

const SearchItems = props => {
  console.log(props.route.params.itemData);
  return (
    <View style={Styles.container}>
      <Text>SearchItems</Text>
    </View>
  );
};

export default SearchItems;
