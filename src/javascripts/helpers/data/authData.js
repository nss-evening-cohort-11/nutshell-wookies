import firebase from 'firebase/app';
import 'firebase/auth';

import envRead from '../../components/enviromentalContainer/enviromentalContainer';

const authDiv = $('#auth');
const envReadingDiv = $('#envReadings');

const checkLoginStatus = () => {
  firebase.auth().onAuthStateChanged((user) => {
    if (user) {
      // person is logged in
      authDiv.addClass('hide');
      envReadingDiv.removeClass('hide');
      envRead.buildReadings();
    } else {
      // person is NOT logged in
      authDiv.removeClass('hide');
      envReadingDiv.addClass('hide');
    }
  });
};

export default { checkLoginStatus };
