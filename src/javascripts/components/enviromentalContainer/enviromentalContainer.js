import enviroData from '../../helpers/data/envReadings';
import readingComponent from '../enviromentalReadings/enviromentalReadings';
import utils from '../../helpers/utils';

const buildReadings = () => {
  enviroData.getEnvironmentalData()
    .then((enviroRead) => {
      let domString = '';
      domString += '<div class = "pageDisplay">';
      domString += '<h1 class="headingDisplay softEmboss"><p class = "typewriter">Enviromental Readings</p>';
      enviroRead.forEach((reading) => {
        domString += readingComponent.envReadingMaker(reading);
      });
      domString += '</div>';
      utils.printToDom('envReadings', domString);
    })
    .catch((err) => console.error('problem with Peta', err));
};

export default { buildReadings };
