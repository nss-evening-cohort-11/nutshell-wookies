import envReadingsData from '../../helpers/data/envReadings';
// import envReadExcursionComponent from '../singleEnvirReadCard/singleEnvirReadCard';
import utils from '../../helpers/utils';

const buildAllEnvExcursionCards = () => {
  envReadingsData.getEnvironmentalData()
    .then((envReading) => {
      let domString = '';
      // domString += `<div class="text-center envReadExcursionContainer" data-id=${excursionId}>`;
      domString += '<h2 class="mt-3"> Environmental Reading </h2>';
      domString += '</div>';
      domString += '<div class="container-fluid d-flex flex-wrap col-9">';
      envReading.forEach((reading) => {
        domString += envReadExcursionComponent.buildSingleEnvReadExcursionCard(reading);
      });
      domString += '</div>';
      utils.printToDom('single-view-excursion-envir-read', domString);
    })
    .catch((err) => console.error('no souvenirs for you', err));
};

export default { buildAllEnvExcursionCards };
