/* eslint-disable react-hooks/exhaustive-deps */
import React, {useEffect, useState} from 'react';
import {View} from 'react-native';
import AccountMarkup from './AccountMarkup';
import {firebase, Database} from '../../../Setup';

const Account = props => {
  const [currentUserData, setCurrentUserData] = useState('');
  const [isLoading, setIsLoading] = useState(Boolean);

  useEffect(() => {
    const uid = firebase?.auth()?.currentUser?.uid;
    setIsLoading(true);
    Database()
      .ref(`/userSignUp/${uid}`)
      .on('value', snapshot => {
        setCurrentUserData(snapshot.val());
        setIsLoading(false);
      });
  }, [isLoading]);

  return (
    <View>
      <AccountMarkup
        {...props}
        currentUserData={currentUserData}
        isLoading={isLoading}
      />
    </View>
  );
};

export default Account;
