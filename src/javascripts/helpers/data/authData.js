import firebase from 'firebase/app';
import 'firebase/auth';
import destinationsContainer from '../../components/destinationsContainer/destinationsContainer';

// const dashboardDiv = $('#dashboard');
// const crewDiv = $('#crew');
// const destinationsDiv = $('#destinations');
// const envReadingsDiv = $('#envReadings');
// const speciesDiv = $('#species');
// const logoutButton = $('#navbar-logout-button');

const checkLoginStatus = () => {
  firebase.auth().onAuthStateChanged((user) => {
    if (user) {
      // person is logged in
      destinationsContainer.buildDestinationsContainer();
    } else {
      // person is not logged in
      destinationsContainer.buildDestinationsContainer();
    }
  });
};

export default { checkLoginStatus };
