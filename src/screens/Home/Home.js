import React from 'react';
import {View, Text} from 'react-native';
import HomeMarkup from './HomeMarkup';

const Home = props => {
  return (
    <View>
      <HomeMarkup {...props} />
    </View>
  );
};

export default Home;
