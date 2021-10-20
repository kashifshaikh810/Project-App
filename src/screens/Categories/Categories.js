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
          <TouchableOpacity onPress={() => navigation.goBack()}>
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

          <TouchableOpacity
            style={Styles.seeAllContainer}
            onPress={() => navigation.navigate('AllCategories')}>
            <Text style={Styles.seeAll}>See all</Text>
          </TouchableOpacity>
        </View>
      </View>

      <View style={Styles.flatListMain}>
        <FlatList
          data={iconsData}
          renderItem={item => renderIcons(item, navigation)}
          numColumns={3}
          style={Styles.flatList}
        />
      </View>
    </View>
  );
};

export default Categories;
