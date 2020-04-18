import firebase from 'firebase/app';
import 'firebase/auth';
import destinationsContainer from '../../components/destinationsContainer/destinationsContainer';
import crewMemberContainer from '../../components/crewMemberContainer/crewMemberContainer';

// import envRead from '../../components/enviromentalContainer/enviromentalContainer';

// const dashboardDiv = $('#dashboard');
// const crewDiv = $('#crew');
// const destinationsDiv = $('#destinations');
// const envReadingsDiv = $('#envReadings');
// const speciesDiv = $('#species');
const loginButton = $('#navbar-login-button');
const logoutButton = $('#navbar-logout-button');


const checkLoginStatus = () => {
  firebase.auth().onAuthStateChanged((user) => {
    if (user) {
      // person is logged in
      loginButton.addClass('hide');
      logoutButton.removeClass('hide');
      $('.crudButtonImage').removeClass('hide');
      destinationsContainer.destinationEvents();
      crewMemberContainer.crewEvents();

    } else {
      // person is not logged in
      loginButton.removeClass('hide');
      logoutButton.addClass('hide');
      $('.crudButtonImage').addClass('hide');
    }
  });
};

export default { checkLoginStatus };
