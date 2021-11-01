import React, {useState} from 'react';
import SignInMarkup from './SignInMarkup';
import {Auth} from '../../../../Setup';

const SignIn = props => {
  const [showPassword, setShowPassword] = useState(true);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const loginButtonHandler = () => {
    Auth().signInWithEmailAndPassword(email, password);
    setEmail('');
    setPassword('');
    props.navigation.navigate('HOME');
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
    />
  );
};

export default SignIn;
