import React from 'react';
import {View, Text} from 'react-native';

const AppHeader = props => {
  return (
    <View
      style={{
        width: '100%',
        height: 50,
        backgroundColor: 'grey',
        justifyContent: 'center',
        alignItems: 'center',
      }}>
      {props.centerText && (
        <View>
          <Text style={{fontSize: 20, color: 'white'}}>{props.centerText}</Text>
        </View>
      )}
    </View>
  );
};

export default AppHeader;
