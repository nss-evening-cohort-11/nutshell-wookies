import firebase from 'firebase/app';
import apiKeys from './helpers/apiKeys.json';
// import authData from './helpers/data/authData';
import '../styles/main.scss';

import envReading from './components/enviromentalContainer/enviromentalContainer';

console.error('Hello');

const init = () => {
  firebase.initializeApp(apiKeys.firebaseKeys);
  // authData.checkLoginStatus();
  envReading.buildReadings();
};

init();
