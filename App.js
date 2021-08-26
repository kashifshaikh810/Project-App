import React from 'react';
import {StatusBar, View} from 'react-native';
import Nav from './src/screens/Navigation/Nav';

const App = () => {
  return (
    <View style={{flex: 1}}>
      <StatusBar barStyle="light-content" backgroundColor="grey" />
      <Nav />
    </View>
  );
};

export default App;
