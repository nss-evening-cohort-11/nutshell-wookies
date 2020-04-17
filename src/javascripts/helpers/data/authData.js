import firebase from 'firebase/app';
import 'firebase/auth';

import destinationsContainer from '../../components/destinationsContainer/destinationsContainer';

import envRead from '../../components/enviromentalContainer/enviromentalContainer';

const authDiv = $('#auth');
const envReadingDiv = $('#envReadings');

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
      authDiv.addClass('hide');
      envReadingDiv.removeClass('hide');
      envRead.buildReadings();
      destinationsContainer.buildDestinationsContainer();
    } else {
      // person is NOT logged in
      authDiv.removeClass('hide');
      envReadingDiv.addClass('hide');
      destinationsContainer.buildDestinationsContainer();
    }
  });
};

export default { checkLoginStatus };
