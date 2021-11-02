/* eslint-disable react-hooks/exhaustive-deps */
import React, {useEffect, useState} from 'react';
import BasicInformationMarkup from './BasicInformationMarkup';
import {firebase, Database, Auth} from '../../../Setup';

const BasicInformation = props => {
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [userName, setUserName] = useState('');
  const [aboutYou, setAboutYou] = useState('');
  const userInformation = props.route.params.data;

  const save = () => {
    const uid = firebase.auth().currentUser.uid;
    let password = userInformation.password;
    Auth()
      .createUserWithEmailAndPassword(email, password)
      .then(async ({user}) => {
        Database().ref(`/userSignUp/${user.uid}`).set({
          email: email,
          password: password,
          phone: phone,
          userName: userName,
          aboutYou: aboutYou,
        });
      });
  };

  useEffect(() => {
    setEmail(userInformation.email);
    setPhone(userInformation.phone);
    setUserName(userInformation.userName);
    setAboutYou(userInformation ? userInformation.aboutYou : '');
  }, [props.route.params]);

  return (
    <>
      <BasicInformationMarkup
        {...props}
        save={save}
        email={email}
        setEmail={setEmail}
        phone={phone}
        setPhone={setPhone}
        userName={userName}
        setUserName={setUserName}
        aboutYou={aboutYou}
        setAboutYou={setAboutYou}
      />
    </>
  );
};

export default BasicInformation;
