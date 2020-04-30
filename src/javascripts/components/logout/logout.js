import firebase from 'firebase/app';
import 'firebase/auth';

const logoutEvent = () => {
  $('#navbar-logout-button').click((e) => {
    e.preventDefault();
    firebase.auth().signOut();
  });
};

const buttonClick = (e) => {
  e.preventDefault();
  const page = e.target.id;
  if (page === 'dashboard') {
    $('#single-view-excursion').addClass('hide');
    $('#excursion').addClass('hide');
    $('#crew').addClass('hide');
    $('#destinations').addClass('hide');
    $('#envReadings').addClass('hide');
    $('#species').addClass('hide');
    $('#dashboard').removeClass('hide');
  } else if (page === 'excursionLink') {
    $('#single-view-excursion').addClass('hide');
    $('#dashboard').addClass('hide');
    $('#excursion').removeClass('hide');
    $('#destinations').addClass('hide');
    $('#envReadings').addClass('hide');
    $('#crew').addClass('hide');
    $('#species').addClass('hide');
  } else if (page === 'crewLink') {
    $('#single-view-excursion').addClass('hide');
    $('#dashboard').addClass('hide');
    $('#excursion').addClass('hide');
    $('#destinations').addClass('hide');
    $('#envReadings').addClass('hide');
    $('#crew').removeClass('hide');
    $('#species').addClass('hide');
  } else if (page === 'destinationsLink') {
    $('#single-view-excursion').addClass('hide');
    $('#dashboard').addClass('hide');
    $('#excursion').addClass('hide');
    $('#crew').addClass('hide');
    $('#envReadings').addClass('hide');
    $('#destinations').removeClass('hide');
    $('#species').addClass('hide');
  } else if (page === 'envReadingsLink') {
    $('#single-view-excursion').addClass('hide');
    $('#dashboard').addClass('hide');
    $('#excursion').addClass('hide');
    $('#crew').addClass('hide');
    $('#destinations').addClass('hide');
    $('#envReadings').removeClass('hide');
    $('#species').addClass('hide');
  } else if (page === 'speciesLink') {
    $('#single-view-excursion').addClass('hide');
    $('#dashboard').addClass('hide');
    $('#excursion').addClass('hide');
    $('#crew').addClass('hide');
    $('#destinations').addClass('hide');
    $('#species').removeClass('hide');
    $('#envReadings').addClass('hide');
  }
};

$('#dasboardLink').click(buttonClick);
$('#excursionLink').click(buttonClick);
$('#crewLink').click(buttonClick);
$('#destinationsLink').click(buttonClick);
$('#envReadingsLink').click(buttonClick);
$('#speciesLink').click(buttonClick);

export default { logoutEvent };
