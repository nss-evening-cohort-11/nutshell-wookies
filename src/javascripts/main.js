import firebase from 'firebase/app';
import apiKeys from './helpers/apiKeys.json';

import 'bootstrap';
import authData from './helpers/data/authData';
import logoutButton from './components/logout/logout';
import authActions from './components/auth/auth';

import '../styles/main.scss';
import '../images-wookies/nautilus.png';
import '../images-wookies/submarine_inside.jpg';

const init = () => {
  firebase.initializeApp(apiKeys.firebaseKeys);
  authData.checkLoginStatus();
  authActions.loginButton();
  logoutButton.logoutEvent();
};

init();
