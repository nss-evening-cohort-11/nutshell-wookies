import firebase from 'firebase/app';
import apiKeys from './helpers/apiKeys.json';
import authData from './helpers/data/authData';
import logoutButton from './components/logout/logout';
import destinationsContainer from './components/destinationsContainer/destinationsContainer';
import speciesContainer from './components/SpeciesContainer/speciesContainer';
import authActions from './components/Auth/auth';
import '../styles/main.scss';

import envReading from './components/enviromentalContainer/enviromentalContainer';

console.error('Hello');

const init = () => {
  firebase.initializeApp(apiKeys.firebaseKeys);
  authData.checkLoginStatus();
  authActions.loginButton();
  logoutButton.logoutEvent();
  destinationsContainer.buildDestinationsContainer();
  speciesContainer.buildSpeciesContainer();
  envReading.buildReadings();
};

init();
