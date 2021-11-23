import React from 'react';
import {View, Text, FlatList, TouchableOpacity} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import IconLeft from 'react-native-vector-icons/Feather';

import {iconsData, renderIcons} from './Data';
import {Styles} from './Styles';

const AllCategories = props => {
  const navigation = useNavigation();
  console.log(props);
  return (
    <View>
      <View style={Styles.headerContainer}>
        <TouchableOpacity onPress={() => navigation.navigate('Categories')}>
          <IconLeft name="chevron-left" size={25} color="#0b2a2e" />
        </TouchableOpacity>
        <Text style={Styles.categoriesStyle}>All categories</Text>
      </View>

      <FlatList
        data={iconsData}
        renderItem={item => renderIcons(item, navigation, props)}
        style={Styles.flatList}
      />
    </View>
  );
};

export default AllCategories;
