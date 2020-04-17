import firebase from 'firebase/app';
import 'firebase/auth';
import auth from '../Auth/auth';

const loginButton = $('#dashboard');
const logoutButton = $('#navbar-logout-button');


const logoutEvent = () => {
  logoutButton.click((e) => {
    e.preventDefault();
    firebase.auth().signOut()
      .then(() => {
      }).catch((err) => console.error('You are still logged in', err));
  });
  loginButton.click((e) => {
    e.preventDefault();
    auth.signMeIn();
  });
};

export default { logoutEvent };
