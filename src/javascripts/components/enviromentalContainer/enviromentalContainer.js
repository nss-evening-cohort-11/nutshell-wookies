// import firebase from 'firebase/app';
import enviroData from '../../helpers/data/envReadings';
import readingComponent from '../enviromentalReadings/enviromentalReadings';
import addEnviroModal from '../enviromentalModalForm/enviromentModalForm';
import utils from '../../helpers/utils';

const removeEnviroData = (e) => {
  const enviroId = e.target.closest('.card').id;
  enviroData.deleteEnviroRead(enviroId)
    .then(() => {
      // eslint-disable-next-line no-use-before-define
      buildReadings();
      // utils.printToDom('envReadings', 'delete-data');
    })
    .catch((err) => console.error('could not delete', err));
};

const buildReadings = () => {
  enviroData.getEnvironmentalData()
    .then((enviroRead) => {
      let domString = '';
      domString += '<div class="pageDisplay">';
      domString += '<h1 class="headingDisplay softEmboss"><p class = "typewriter">Enviromental Readings</p></h1>';
      domString += '<input type="button" class="col-6 btn-default btn-lg crudButtonColor glowing data-target="#modalAddEnviroment" id="button-add-enviroment" value="Add">';
      // domString += '<button id="button-add-destination" type="button" class="btn-default btn-lg crudButtonColor glowing mt-5 mr-2" data-toggle="modal" data-target="#modalAddDestination"><i class="fas fa-calendar-plus"></i></button>'
      domString += '</div>';
      domString += 'div class = "d-flex flex-wrap">';
      enviroRead.forEach((reading) => {
        domString += readingComponent.envReadingMaker(reading);
      });
      domString += '</div>';
      utils.printToDom('envReadings', domString);
    })
    .catch((err) => console.error('problem with Peta', err));
};
const makeNewEnviro = (e) => {
  e.preventDefault();
  const newEnviroData = {
    name: $('#enviroment-location').val(),
    Url: $('#enviroment-imageUrl').val(),
    // destinationId: $('destination-name').val(),
    // TimeStamp: $('TimeStamp').val(),
    Latitude: $('#enviroment-latitude').val() * 1,
    Longitude: $('#enviroment-longitude').val() * 1,
    Temperature: $('#enviroment-temperature').val() * 1,
    Depth: $('#enviroment-depth').val() * 1,
    Current: $('#enviroment-current').val(),
    Pressure: $('#enviroment-pressure').val() * 1,
    // uid: firebase.auth().currentUser.uid,
  };
  enviroData.addEnviroData(newEnviroData)
    .then(() => {
      $('.modal-body input').val('');
      $('#modalAddEnviroment').modal('hide');
      buildReadings();
      // utils.printToDom('envReadings', '');
    })
    .catch((err) => console.error('could not add Data', err));
};

const enviroEvents = () => {
  $('body').on('click', '.delete-enviroment', removeEnviroData);
  $('body').on('click', '#button-add-enviroment', addEnviroModal.showEnviromentModalForm);
  $('body').on('click', '#button-save-enviroment', makeNewEnviro);
};


export default { buildReadings, enviroEvents };
