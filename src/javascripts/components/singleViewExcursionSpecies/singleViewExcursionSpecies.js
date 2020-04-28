import speciesExcursionCards from '../speciesExcursionCards/speciesExcursionCards';
import smash from '../../helpers/data/smash';
import utils from '../../helpers/utils';

const buildSpeciesExcursionView = (excursionId) => {
  // const excursionId = $('.species-excursion-container').data('id');
  console.error('excursion', excursionId);
  smash.getSpeciesinExcursion(excursionId)
    .then((species) => {
      let domString = '';
      domString += '<div id="single-view-species-excursion">';
      domString += '<h2>Species Seen</h2>';
      species.forEach((creature) => {
        domString += speciesExcursionCards.buildSpeciesExcursionCards(creature);
      });
      domString += '</div>';
      console.error('available species', species);
      utils.printToDom('build-the-dang-cards', domString);
    })
    .catch((err) => console.error('could not get available species', err));
};

export default { buildSpeciesExcursionView };
