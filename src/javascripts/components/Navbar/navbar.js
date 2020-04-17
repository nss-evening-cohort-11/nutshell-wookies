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

const buttonClick = (e) => {
  e.preventDefault();
  const page = e.target.id;
  if (page === 'dashBoardLink') {
    $('#destinations').addClass('hide');
    $('#envReadings').addClass('hide');
    $('#species').addClass('hide');
    $('#crew').addClass('hide');
    $('#dashboard').removeClass('hide');
  } else if (page === 'crewLink') {
    $('#destinations').addClass('hide');
    $('#envReadings').addClass('hide');
    $('#species').addClass('hide');
    $('#crew').removeClass('hide');
    $('#dashboard').addClass('hide');
  } else if (page === 'destinationsLink') {
    $('#envReadings').addClass('hide');
    $('#species').addClass('hide');
    $('#crew').addClass('hide');
    $('#destinations').removeClass('hide');
    $('#dashboard').addClass('hide');
  } else if (page === 'envReadingsLink') {
    $('#crew').addClass('hide');
    $('#destinations').addClass('hide');
    $('#species').addClass('hide');
    $('#envReadings').removeClass('hide');
    $('#dashboard').addClass('hide');
  } else if (page === 'speciesLink') {
    $('#dashboard').addClass('hide');
    $('#destinations').addClass('hide');
    $('#envReadings').addClass('hide');
    $('#species').removeClass('hide');
    $('#crew').addClass('hide');
  }
};

$('#dashBoardLink').click(buttonClick);
$('#destinationsLink').click(buttonClick);
$('#envReadingsLink').click(buttonClick);
$('#speciesLink').click(buttonClick);
$('#crewLink').click(buttonClick);


export default { logoutEvent };
