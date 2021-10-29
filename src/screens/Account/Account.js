import React from 'react';
import {View, Text} from 'react-native';
import AccountMarkup from './AccountMarkup';

const Account = props => {
  return (
    <View>
      <AccountMarkup {...props} />
    </View>
  );
};

export default Account;
