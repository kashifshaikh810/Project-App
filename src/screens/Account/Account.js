/* eslint-disable react-hooks/rules-of-hooks */
/* eslint-disable no-shadow */
/* eslint-disable react-hooks/exhaustive-deps */
import React, {useEffect, useState} from 'react';
import {View} from 'react-native';
import AccountMarkup from './AccountMarkup';
import {firebase, Database} from '../../../Setup';

const Account = props => {
  const [currentUserData, setCurrentUserData] = useState('');

  useEffect(() => {
    const unsubscribe = props.navigation.addListener('focus', () => {
      data();
    });

    return unsubscribe;
  }, [props.navigation]);

  const data = () => {
    const uid = firebase?.auth() ? firebase?.auth()?.currentUser?.uid : '';
    Database()
      .ref(`/userSignUp/${uid}`)
      .on('value', snapshot => {
        let data = snapshot ? snapshot?.val() : {};
        setCurrentUserData(data);
      });
  };

  return (
    <View>
      <AccountMarkup {...props} currentUserData={currentUserData} />
    </View>
  );
};

export default Account;
