/* eslint-disable react-hooks/exhaustive-deps */
import React, {useEffect, useState} from 'react';
import BasicInformationMarkup from './BasicInformationMarkup';
import {Database, Auth} from '../../../Setup';

const BasicInformation = props => {
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [userName, setUserName] = useState('');
  const [aboutYou, setAboutYou] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [errMsg, setErrMsg] = useState('');
  const userInformation = props.route.params.data;

  const save = () => {
    let password = userInformation.password;
    if (email && phone && userName && aboutYou) {
      setIsLoading(true);
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
          setIsLoading(false);
        })
        .catch(err => {
          setIsLoading(false);
          if (
            err.message ===
            '[auth/invalid-email] The email address is badly formatted.'
          ) {
            setErrMsg('The email address is badly formatted');
          } else if (
            err.message ===
            '[auth/email-already-in-use] The email address is already in use by another account.'
          ) {
            setErrMsg('The email address is already in use by another account');
          } else if (
            err.message ===
            '[auth/network-request-failed] A network error (such as timeout, interrupted connection or unreachable host) has occurred.'
          ) {
            setErrMsg(
              'A network error (such as timeout, interrupted connection or unreachable host) has occurred',
            );
          }
        });
    }
  };

  const userNameHandler = text => {
    setUserName(text);
    setErrMsg('');
  };

  const phoneHandler = text => {
    setPhone(text);
    setErrMsg('');
  };

  const emailHandler = text => {
    setEmail(text);
    setErrMsg('');
  };

  const aboutYouHandler = text => {
    setAboutYou(text);
    setErrMsg('');
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
        isLoading={isLoading}
        errMsg={errMsg}
        userNameHandler={userNameHandler}
        emailHandler={emailHandler}
        phoneHandler={phoneHandler}
        aboutYouHandler={aboutYouHandler}
      />
    </>
  );
};

export default BasicInformation;
