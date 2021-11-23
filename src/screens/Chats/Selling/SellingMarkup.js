/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {View, Text, Image, TouchableOpacity} from 'react-native';
import {useNavigation} from '@react-navigation/native';

import {Styles} from '../Styles';

const SellingMarkup = () => {
  const navigation = useNavigation();
  return (
    <View style={Styles.sellingContainer}>
      <View style={Styles.contentContainer}>
        <Image
          source={require('../../../Components/Utility/Images/noMessages.png')}
          style={Styles.noMessageImg}
        />

        <Text style={Styles.noMessageTxt}>No messages, yet?</Text>
        <Text style={Styles.titileText}>
          We'll keep messages for my any items you're selling in here
        </Text>

        <TouchableOpacity
          style={Styles.buttonContainer}
          onPress={() => navigation.navigate('Categories')}>
          <Text style={[Styles.button, {color: 'white'}]}>Start selling</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default SellingMarkup;
