import firebase from 'firebase/app';
import 'firebase/auth';
import destinationsContainer from '../../components/destinationsContainer/destinationsContainer';
import speciesContainer from '../../components/SpeciesContainer/speciesContainer';
// const dashboardDiv = $('#dashboard');
// const crewDiv = $('#crew');
// const destinationsDiv = $('#destinations');
// const envReadingsDiv = $('#envReadings');
// const speciesDiv = $('#species');
const logoutButton = $('#navbar-logout-button');
const loginButton = $('#auth');

const checkLoginStatus = () => {
  firebase.auth().onAuthStateChanged((user) => {
    if (user) {
      // person is logged in
      loginButton.addClass('hide');
      logoutButton.removeClass('hide');
      destinationsContainer.buildDestinationsContainer();
      speciesContainer.buildSpeciesContainer();
    } else {
      // person is not logged in
      loginButton.removeClass('hide');
      logoutButton.addClass('hide');
      destinationsContainer.buildDestinationsContainer();
      speciesContainer.buildSpeciesContainer();
    }
  });
};

export default { checkLoginStatus };
