import React, {useEffect, useState} from 'react';
import SignUpMarkup from './SignUpMarkup';
import {Auth, Database} from '../../../../Setup';

const SignUp = props => {
  const [showPassword, setShowPassword] = useState(true);
  const [userName, setUserName] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const signUpButtonHandler = () => {
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
        await Auth().signOut();
        props.navigation.navigate('SignIn');
      })
      .catch(err => {
        console.log(err);
      });
  };

  useEffect(() => {
    setUserName('');
    setPhone('');
    setEmail('');
    setPassword('');
  }, [props.route.params]);

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
    />
  );
};

export default SignUp;
