import speciesExcursionCards from '../speciesExcursionCards/speciesExcursionCards';
import speciesExcursionData from '../../helpers/data/speciesExcursionData';
import smash from '../../helpers/data/smash';
import utils from '../../helpers/utils';

// delete a species from the excursion
const removeSpeciesExcursion = (e) => {
  const excursionId = e.target.closest('.pageDisplay').dataset.id;
  const speciesExcursionId = e.target.closest('.card').id;
  speciesExcursionData.deleteSpeciesExcursion(speciesExcursionId)
    .then(() => {
      // eslint-disable-next-line no-use-before-define
      buildSpeciesExcursionView(excursionId);
    })
    .catch((err) => console.error('failed to delete', err));
};


// build single view excursion species container
const buildSpeciesExcursionView = (excursionId) => {
  smash.getSpeciesinExcursion(excursionId)
    .then((species) => {
      let domString = '';
      domString += '<div id="single-view-species-excursion">';
      domString += '<h2>Species Seen</h2>';
      species.forEach((creature) => {
        domString += speciesExcursionCards.buildSpeciesExcursionCards(creature);
      });
      domString += '</div>';
      utils.printToDom('build-the-dang-cards', domString);
    })
    .catch((err) => console.error('could not get available species', err));
};


export default { buildSpeciesExcursionView, removeSpeciesExcursion };
