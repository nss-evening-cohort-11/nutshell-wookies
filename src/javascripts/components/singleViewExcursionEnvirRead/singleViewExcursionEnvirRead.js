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
  const excursionId = e.target.closest('.pageDisplay').dataset.id;
  const envirReadExcursionId = e.target.id;
  envirReadingExcursionData.deleteEnvirReadExcursion(envirReadExcursionId)
    .then(() => {
      buildAllEnvExcursionCards(excursionId);
    })
    .catch((err) => console.error('cannot delete', err));
};
const envExcursionEvent = () => {
  $('body').on('click', '.delete-envir-read-excursion-btn', removeEnvirReadExcursion);
};

export default { buildAllEnvExcursionCards, envExcursionEvent };
