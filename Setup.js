import * as React from 'react';
import App from './App';
import firebase from '@react-native-firebase/app';
import Auth from '@react-native-firebase/auth';
import Database from '@react-native-firebase/database';

function Setup() {
  return <App />;
}

export {firebase, Auth, Database};
export default Setup;
