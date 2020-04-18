import enviroData from '../../helpers/data/envReadings';
import readingComponent from '../enviromentalReadings/enviromentalReadings';
import utils from '../../helpers/utils';

const removeEnviroData = (e) => {
  const enviroId = e.target.closest('.card').id;
  console.error('enviroId', enviroId);
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
      domString += '<h1 class="headingDisplay softEmboss"><p class = "typewriter">Enviromental Readings</p>';
      domString += '<input type="button" class="col-6 btn-default btn-lg crudButtonImage glowing" value="Add Data">';
      enviroRead.forEach((reading) => {
        domString += readingComponent.envReadingMaker(reading);
      });
      domString += '</div>';
      utils.printToDom('envReadings', domString);
    })
    .catch((err) => console.error('problem with Peta', err));
};


const enviroEvents = () => {
  $('body').on('click', '.delete-enviroment', removeEnviroData);
};


export default { buildReadings, enviroEvents };
