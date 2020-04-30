import smash from '../../helpers/data/smash';
import envReadExcursionComponent from '../singleEnvirReadCard/singleEnvirReadCard';
import utils from '../../helpers/utils';

const buildAllEnvExcursionCards = (excursionId) => {
  smash.getEnvirReadingInExcursion(excursionId)
    .then((envReading) => {
      let domString = '';
      domString += '<div id="single-view-envir-reading-excursion">';
      domString += '<h2> Log Readings </h2>';
      envReading.forEach((reading) => {
        domString += envReadExcursionComponent.buildSingleEnvReadExcursionCard(reading);
      });
      domString += '</div>';
      utils.printToDom('single-view-excursion-envir-read', domString);
    })
    .catch((err) => console.error('no souvenirs for you', err));
};

export default { buildAllEnvExcursionCards };
