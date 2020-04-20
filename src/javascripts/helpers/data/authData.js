import firebase from 'firebase/app';
import 'firebase/auth';
import destinationsContainer from '../../components/destinationsContainer/destinationsContainer';
import enviromentalContainer from '../../components/enviromentalContainer/enviromentalContainer';
import speciesContainer from '../../components/SpeciesContainer/speciesContainer';
import crewMemberContainer from '../../components/crewMemberContainer/crewMemberContainer';

const loginButton = $('#navbar-login-button');
const logoutButton = $('#navbar-logout-button');
// const newEnviroDiv = $('new-envReadings');

const checkLoginStatus = () => {
  firebase.auth().onAuthStateChanged((user) => {
    if (user) {
      // person is logged in
      loginButton.addClass('hide');
      logoutButton.removeClass('hide');
      $('.crudButtonColor').removeClass('hide');
      destinationsContainer.destinationEvents();
    } else {
      // person is not logged in
      loginButton.removeClass('hide');
      logoutButton.addClass('hide');
      $('.crudButtonColor').addClass('hide');
    }
    enviromentalContainer.enviroEvents();
    crewMemberContainer.crewEvents();
    destinationsContainer.buildDestinationsContainer();
    speciesContainer.buildSpeciesContainer();
    enviromentalContainer.buildReadings();
    crewMemberContainer.buildCrewContainer();
  });
};

export default { checkLoginStatus };
