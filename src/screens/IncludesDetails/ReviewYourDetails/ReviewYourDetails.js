import React from 'react';
import {View, Text} from 'react-native';
import {Styles} from './Styles';

const ReviewYourDetails = props => {
  return (
    <View style={Styles.container}>
      <Text onPress={() => props.navigation.navigate('AdSuccessfullyPostMsg')}>Review Your Details</Text>
    </View>
  );
};

export default ReviewYourDetails;
