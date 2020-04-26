import excursionData from '../../helpers/data/excursionData';
import utils from '../../helpers/utils';
import excursionCards from '../excursionCards/excursionCards';

const buildExcursion = () => {
  excursionData.getExcursion()
    .then((excursions) => {
      let domString = '';
      domString += '<div class="pageDisplay">';
      domString += '<div class="row">';
      domString += '<h1 class="col-8 headingDisplay softEmboss"><p class="typewriter">Excursions</p></h1>';
      domString += '</div>';
      domString += '<div class="d-flex flex-wrap justify-content-center">';
      excursions.forEach((makeExcursionCardsInfo) => {
        domString += excursionCards.buildExcursionCards(makeExcursionCardsInfo);
      });
      domString += '</div>';
      domString += '</div>';

      utils.printToDom('excursion', domString);
    })
    .catch((err) => console.error('Build Excursion is not working', err));
};

export default { buildExcursion };
