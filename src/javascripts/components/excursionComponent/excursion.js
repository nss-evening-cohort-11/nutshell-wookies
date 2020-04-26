import excursionData from '../../helpers/data/excursionData';
import utils from '../../helpers/utils';
import excursionCards from '../excursionCards/excursionCards';

const deleteExcursionEvent = (e) => {
  const excursionId = e.target.closest('.excursionCard').id;
  excursionData.removeExcursion(excursionId)
    // eslint-disable-next-line no-use-before-define
    .then(() => buildExcursion())
    .catch((err) => console.error('Delete Excursion Event not working', err));
};

const buildExcursion = () => {
  excursionData.getExcursion()
    .then((excursions) => {
      let domString = '';
      domString += '<div class="pageDisplay">';
      domString += '<div class="row">';
      domString += '<h1 class="col-8 headingDisplay softEmboss"><p class="typewriter">Excursions</p></h1>';
      domString += '<button type="button" class="btn-default btn-lg buttonHeadingDisplay glowing col-2"><i class="fas fa-plus"></i> Excursion</button>';
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

const excursionEvents = () => {
  $('body').on('click', '.deleteExcursion', deleteExcursionEvent);
};

export default { buildExcursion, excursionEvents };
