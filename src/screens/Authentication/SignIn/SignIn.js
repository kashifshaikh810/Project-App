import React, {useState} from 'react';
import SignInMarkup from './SignInMarkup';
import {Auth} from '../../../../Setup';

const SignIn = props => {
  const [showPassword, setShowPassword] = useState(true);
  const [isLoading, setisLoading] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errMsg, setErrMsg] = useState('');

  const loginButtonHandler = () => {
    setisLoading(true);
    Auth()
      .signInWithEmailAndPassword(email, password)
      .then(user => {
        setEmail('');
        setPassword('');
        setisLoading(false);
        props.navigation.navigate('ACCOUNT');
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
          '[auth/wrong-password] The password is invalid or the user does not have a password.'
        ) {
          setErrMsg(
            'The password is invalid or the user does not have a password',
          );
        } else if (
          err.message ===
          '[auth/user-not-found] There is no user record corresponding to this identifier. The user may have been deleted.'
        ) {
          setErrMsg(
            'There is no user record corresponding to this identifier. The user may have been deleted',
          );
        }
      });
  };

  const emailHandler = text => {
    setEmail(text);
    setErrMsg('');
  };

  const passwordHandler = text => {
    setPassword(text);
    setErrMsg('');
  };

  return (
    <SignInMarkup
      showPassword={showPassword}
      setShowPassword={setShowPassword}
      email={email}
      setEmail={setEmail}
      password={password}
      setPassword={setPassword}
      loginButtonHandler={loginButtonHandler}
      {...props}
      errMsg={errMsg}
      emailHandler={emailHandler}
      passwordHandler={passwordHandler}
      isLoading={isLoading}
    />
  );
};

export default SignIn;
