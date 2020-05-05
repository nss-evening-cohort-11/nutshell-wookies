import utils from '../../helpers/utils';
import smash from '../../helpers/data/smash';
import crewExcursionCards from '../crewExcursionCards/crewExcursionCards';
import crewExcursionData from '../../helpers/data/crewExcursionData';

// delete a crew member from excursion
const removeCrewFromExcursion = (e) => {
  const excursionId = e.target.closest('.pageDisplay').dataset.id;
  const crewExcursionId = e.target.closest('.crewCard').id;
  crewExcursionData.deleteCrewExcursion(crewExcursionId)
    .then(() => {
      // eslint-disable-next-line no-use-before-define
      buildCrewMemberExcursionCards(excursionId);
    })
    .catch((err) => console.error('failed to delete crew member', err));
};

// build single view excursion crew container
const buildCrewMemberExcursionCards = (excursionId) => {
  smash.getCrewInExcursion(excursionId)
    .then((crew) => {
      let domString = '';
      domString += '<div id="single-view-crew-excursion">';
      domString += '<h2>Crew</h2>';
      crew.forEach((person) => {
        domString += crewExcursionCards.buildCrewExcursionCards(person);
      });
      domString += '</div>';
      utils.printToDom('single-view-crew', domString);
    })
    .catch((err) => console.error('Could not get available crew', err));
};

export default { buildCrewMemberExcursionCards, removeCrewFromExcursion };
