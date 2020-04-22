import firebase from 'firebase/app';
import apiKeys from './helpers/data/apiKeys.json';

import 'bootstrap';
import authData from './helpers/data/authData';
import logoutButton from './components/logout/logout';
import authActions from './components/Auth/auth';

import '../styles/main.scss';

const init = () => {
  firebase.initializeApp(apiKeys.firebaseKeys);
  authData.checkLoginStatus();
  authActions.loginButton();
  logoutButton.logoutEvent();
};

init();
