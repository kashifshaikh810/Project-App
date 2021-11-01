import * as React from 'react';
import App from './App';
import firebase from '@react-native-firebase/app';
import Auth from '@react-native-firebase/auth';
import Database from '@react-native-firebase/database';

const firebaseConfig = {
  apiKey: 'AIzaSyBdYDq3IFjMTdocQQtOWa49436o6NPIo_U',
  authDomain: 'project-app-47f4c.firebaseapp.com',
  databaseURL: 'https://project-app-47f4c-default-rtdb.firebaseio.com',
  projectId: 'project-app-47f4c',
  storageBucket: 'project-app-47f4c.appspot.com',
  messagingSenderId: '71081699261',
  appId: '1:71081699261:web:f08cc5b1b3703d341154d4',
  measurementId: 'G-HSHJ9YBSWZ',
};

if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
}

export {firebase, Auth, Database};

function Setup() {
  return <App />;
}

export default Setup;
