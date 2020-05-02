import utils from '../../helpers/utils';
import smash from '../../helpers/data/smash';
import crewExcursionCards from '../crewExcursionCards/crewExcursionCards';

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

export default { buildCrewMemberExcursionCards };
