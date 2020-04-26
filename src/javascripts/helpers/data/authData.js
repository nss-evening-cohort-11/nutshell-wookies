import firebase from 'firebase/app';
import 'firebase/auth';

import destinationsContainer from '../../components/destinationsContainer/destinationsContainer';
import enviromentalContainer from '../../components/enviromentalContainer/enviromentalContainer';
import speciesContainer from '../../components/SpeciesContainer/speciesContainer';
import crewMemberContainer from '../../components/crewMemberContainer/crewMemberContainer';
import excursionComponent from '../../components/excursionComponent/excursion';

const loginButton = $('#navbar-login-button');
const logoutButton = $('#navbar-logout-button');
const excursionsInNavbar = $('#excursionLink');

const checkLoginStatus = () => {
  firebase.auth().onAuthStateChanged((user) => {
    if (user) {
      // person is logged in
      loginButton.addClass('hide');
      logoutButton.removeClass('hide');
      excursionsInNavbar.removeClass('hide');
    } else {
      // person is not logged in
      loginButton.removeClass('hide');
      logoutButton.addClass('hide');
      excursionsInNavbar.addClass('hide');
    }
    enviromentalContainer.enviroEvents();
    crewMemberContainer.crewEvents();
    destinationsContainer.destinationEvents();
    excursionComponent.excursionEvents();
    destinationsContainer.buildDestinationsContainer();
    speciesContainer.buildSpeciesContainer();
    enviromentalContainer.buildReadings();
    crewMemberContainer.buildCrewContainer();
    excursionComponent.buildExcursion();
  });
};

export default { checkLoginStatus };
