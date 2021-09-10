import React from 'react';
import {View, Text, TouchableOpacity, FlatList} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import CloseIcon from 'react-native-vector-icons/AntDesign';

import {renderIcons} from './RenderItem';
import {iconsData} from './Data';
import {Styles} from './Styles';

const Categories = () => {
  const navigation = useNavigation();
  return (
    <View>
      <View style={Styles.container}>
        <View style={Styles.iconContainer}>
          <TouchableOpacity onPress={() => navigation.navigate('SELLING')}>
            <CloseIcon name="close" size={25} />
          </TouchableOpacity>
          <Text style={Styles.offeringTxt}>What are you offering?</Text>
        </View>
      </View>

      <View style={Styles.textContainer}>
        <View style={Styles.contentContainer}>
          <View>
            <Text style={Styles.browseTxt}>Browse Categories</Text>
          </View>

          <View style={Styles.seeAllContainer}>
            <Text style={Styles.seeAll}>See all</Text>
          </View>
        </View>
      </View>

      <FlatList
        data={iconsData}
        renderItem={item => renderIcons(item)}
        numColumns={3}
        style={Styles.flatList}
      />
    </View>
  );
};

export default Categories;
