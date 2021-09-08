import React from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import CloseIcon from 'react-native-vector-icons/AntDesign';

const Categories = () => {
  const navigation = useNavigation();
  return (
    <View>
      <View style={{justifyContent: 'center', alignItems: 'flex-start'}}>
        <View
          style={{
            flexDirection: 'row',
            height: 60,
            width: 320,
            justifyContent: 'space-around',
            alignItems: 'center',
          }}>
          <TouchableOpacity onPress={() => navigation.navigate('SELLING')}>
            <CloseIcon name="close" size={25} />
          </TouchableOpacity>
          <Text style={{fontWeight: 'bold', fontSize: 25}}>
            What are you offering?
          </Text>
        </View>
      </View>

      <View style={{flexDirection: 'row'}}>
        <View>
          <Text>Browse Categories</Text>
        </View>

        <View style={{flex: 1, alignItems: 'flex-end'}}>
          <Text>See all</Text>
        </View>
      </View>
    </View>
  );
};

export default Categories;
