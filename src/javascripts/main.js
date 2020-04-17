import firebase from 'firebase/app';
import apiKeys from './helpers/apiKeys.json';
import authData from './helpers/data/authData';
import logoutButton from './components/logout/logout';
import destinationsContainer from './components/destinationsContainer/destinationsContainer';
import authActions from './components/auth/auth';
import '../styles/main.scss';

const init = () => {
  firebase.initializeApp(apiKeys.firebaseKeys);
  authData.checkLoginStatus();
  authActions.loginButton();
  logoutButton.logoutEvent();
  destinationsContainer.buildDestinationsContainer();
};

init();
