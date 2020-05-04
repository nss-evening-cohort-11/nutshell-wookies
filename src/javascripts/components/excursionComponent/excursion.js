import excursionData from '../../helpers/data/excursionData';
import speciesExcursionData from '../../helpers/data/speciesExcursionData';

import addExcursion from '../addExcursion/addExcursion';
import editExcursion from '../editExcursion/editExcursion';
import addSpeciesExcursion from '../addSpeciesExcursion/addSpeciesExcursion';
import excursionCards from '../excursionCards/excursionCards';
import singleExcursionView from '../singleExcursion/singleExcursion';
import addCrewToExcursion from '../addCrewToExcursion/addCrewToExcursion';

import utils from '../../helpers/utils';

import envirReadingData from '../../helpers/data/envirReadingExcursionData';
import addEnvReadExcursion from '../addEnvirReadingExcursion/addEnvirReadingExcursion';
import crewExcursionData from '../../helpers/data/crewExcursionData';

const editExcursionEvent = (e) => {
  e.preventDefault();
  const excursionId = $('#excursionEdit').data('id');
  const updateExcursion = {
    excursionName: $('#excursionChange').val(),
    date: $('#editExcursionDate').val(),
  };
  excursionData.updateExcursion(updateExcursion, excursionId)
    .then(() => {
      // document.getElementById('excursionEdit').reset();
      $('#edit-excursion-modal').modal('hide');
      // eslint-disable-next-line no-use-before-define
      buildExcursion();
    })
    .catch((err) => console.error('edit excursion failed', err));
};

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
    excursionName: $('#new-excursion-name').val(),
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
// save new crew to excursion
const saveCrewExcursion = (e) => {
  e.preventDefault();
  const theExcursionId = $('#add-crew-excursion-form').data('excursion-id');
  const newCrewExcursion = {
    excursionId: theExcursionId,
    crewId: $('#crew-id').val(),
  };
  crewExcursionData.addCrewExcursion(newCrewExcursion)
    .then(() => {
      $('#add-crew-excursion-modal').modal('hide');
    })
    .catch();
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
// adds a new environmental reading to an excursion
const saveEnvReadingsExcursion = (e) => {
  e.preventDefault();
  const theExcursionId = $('#add-envir-read-excursion-form').data('excursion-id');
  const newEnvReadingExcursion = {
    excursionId: theExcursionId,
    envirReadingId: $('#envir-reading-id').val(),
  };
  envirReadingData.addEnvReadingExcursion(newEnvReadingExcursion)
    .then(() => {
      $('#add-envir-read-excursion-modal').modal('hide');
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
  $('body').on('click', '.editExcursion', editExcursion.editExcursionCards);
  $('body').on('click', '#saveEditExcursion', editExcursionEvent);
  $('body').on('click', '#add-new-excursions-btn', addExcursion.newExcursionForm);
  $('body').on('click', '#save-new-excursion-btn', saveNewExcursion);
  $('body').on('click', '.add-species-modal', addSpeciesExcursion.addSpeciesExcursionForm);
  $('body').on('click', '#add-species-excursion-btn', saveSpeciesExcursion);
  $('body').on('click', '#close-single-view-excursion', singleExcursionView.closeSingleView);
  $('body').on('click', '#save-envir-read-excursion-btn', saveEnvReadingsExcursion);
  $('body').on('click', '#add-envir-reading-modal', addEnvReadExcursion.addEnvirReadingExcursionForm);
  $('body').on('click', '#add-crew-member', addCrewToExcursion.addCrewToExcursionForm);
  $('body').on('click', '#save-crew-excursion-btn', saveCrewExcursion);
};

export default { buildExcursion, excursionEvents };
