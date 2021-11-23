import React, {useEffect, useState} from 'react';
import SignUpMarkup from './SignUpMarkup';
import {Auth, Database} from '../../../../Setup';

const SignUp = props => {
  const [showPassword, setShowPassword] = useState(true);
  const [isLoading, setisLoading] = useState(false);
  const [userName, setUserName] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errMsg, setErrMsg] = useState('');

  const signUpButtonHandler = () => {
    setisLoading(true);
    if (phone.length <= 11) {
      setErrMsg('Phone should be at least 11 characters');
      setisLoading(false);
    } else {
      Auth()
        .createUserWithEmailAndPassword(email, password)
        .then(async ({user}) => {
          Database().ref(`/userSignUp/${user.uid}`).set({
            userName: userName,
            phone: phone,
            email: email,
            password: password,
          });
          setUserName('');
          setPhone('');
          setEmail('');
          setPassword('');
          setisLoading(false);
          await Auth().signOut();
          props.navigation.navigate('SignIn');
        })
        .catch(err => {
          setisLoading(false);
          if (
            err.message ===
            '[auth/invalid-email] The email address is badly formatted.'
          ) {
            setErrMsg('The email address is badly formatted');
          } else if (
            err.message ===
            '[auth/weak-password] The given password is invalid. [ Password should be at least 6 characters ]'
          ) {
            setErrMsg('Password should be at least 6 characters');
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
          console.log(err.message);
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

  const passwordHandler = text => {
    setPassword(text);
    setErrMsg('');
  };

  useEffect(() => {
    setUserName('');
    setPhone('');
    setEmail('');
    setPassword('');
    setErrMsg('');
  }, []);

  return (
    <SignUpMarkup
      {...props}
      showPassword={showPassword}
      setShowPassword={setShowPassword}
      userName={userName}
      setUserName={setUserName}
      phone={phone}
      setPhone={setPhone}
      email={email}
      setEmail={setEmail}
      password={password}
      setPassword={setPassword}
      signUpButtonHandler={signUpButtonHandler}
      errMsg={errMsg}
      userNameHandler={userNameHandler}
      phoneHandler={phoneHandler}
      emailHandler={emailHandler}
      passwordHandler={passwordHandler}
      isLoading={isLoading}
    />
  );
};

export default SignUp;
