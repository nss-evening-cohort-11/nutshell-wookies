import smash from '../../helpers/data/smash';
import envirReadingExcursionData from '../../helpers/data/envirReadingExcursionData';
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
    .catch((err) => console.error('no env readings for you', err));
};
const removeEnvirReadExcursion = (e) => {
  envirReadingExcursionData.deleteEnvirReadExcursion(e)
    .then(() => {
      buildAllEnvExcursionCards();
      utils.printToDom('single-view-excursion-envir-read', '');
    })
    .catch((err) => console.error('cannot delete', err));
};
const envExcursionEvent = () => {
  $('body').on('click', '#envirReadExcursionId', removeEnvirReadExcursion);
};

export default { buildAllEnvExcursionCards, envExcursionEvent };
