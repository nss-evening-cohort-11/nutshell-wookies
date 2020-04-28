import excursionData from '../../helpers/data/excursionData';
import speciesExcursionData from '../../helpers/data/speciesExcursionData';

import addExcursion from '../addExcursion/addExcursion';
import addSpeciesExcursion from '../addSpeciesExcursion/addSpeciesExcursion';
import excursionCards from '../excursionCards/excursionCards';
import singleExcursionView from '../singleExcursion/singleExcursion';

import utils from '../../helpers/utils';

// Delete an Excursion
const deleteExcursionEvent = (e) => {
  const excursionId = e.target.closest('.excursionCard').id;
  excursionData.removeExcursion(excursionId)
    // eslint-disable-next-line no-use-before-define
    .then(() => buildExcursion())
    .catch((err) => console.error('Delete Excursion Event not working', err));
};

// Save a new Excursion
const saveNewExcursion = (e) => {
  e.preventDefault();
  const newExcursion = {
    name: $('#new-excursion-name').val(),
    date: $('#new-excursion-date').val(),
  };
  excursionData.addExcursion(newExcursion)
    .then(() => {
      $('#add-excursion-modal').modal('hide');
      // eslint-disable-next-line no-use-before-define
      buildExcursion();
    })
    .catch((err) => console.error('could not add excursion', err));
};

// add a new species to an excursion
const saveSpeciesExcursion = (e) => {
  e.preventDefault();
  const theExcursionId = $('.add-species-excursion-form-tag').data('excursion-id');
  const newSpeciesExcursion = {
    excursionId: theExcursionId,
    speciesId: $('#species-id').val(),
  };
  speciesExcursionData.addSpeciesExcursion(newSpeciesExcursion)
    .then(() => {
      $('#add-species-excursion-modal').modal('hide');
    })
    .catch();
};

// Build all Excursions
const buildExcursion = () => {
  excursionData.getExcursion()
    .then((excursions) => {
      let domString = '';
      domString += '<div class="pageDisplay">';
      domString += '<div class="row">';
      domString += '<h1 class="col-8 headingDisplay softEmboss"><p class="typewriter">Excursions</p></h1>';
      domString += '<button type="button" class="btn-default btn-lg buttonHeadingDisplay glowing col-2" id="add-new-excursions-btn"><i class="fas fa-plus"></i> Excursion</button>';
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
  $('body').on('click', '.single-view-excursion-btn', singleExcursionView.buildSingleViewExcursion);
  $('body').on('click', '.deleteExcursion', deleteExcursionEvent);
  $('body').on('click', '#add-new-excursions-btn', addExcursion.newExcursionForm);
  $('body').on('click', '#save-new-excursion-btn', saveNewExcursion);
  $('body').on('click', '.add-species-modal', addSpeciesExcursion.addSpeciesExcursionForm);
  $('body').on('click', '#add-species-excursion-btn', saveSpeciesExcursion);
};

export default { buildExcursion, excursionEvents };
