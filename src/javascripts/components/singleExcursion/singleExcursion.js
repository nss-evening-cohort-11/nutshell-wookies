import singleViewExcursionSpecies from '../singleViewExcursionSpecies/singleViewExcursionSpecies';
import singleViewExcursionEnvReading from '../singleViewExcursionEnvirRead/singleViewExcursionEnvirRead';
import excursionData from '../../helpers/data/excursionData';
import utils from '../../helpers/utils';
import singleViewExcursionCrew from '../singleViewExcursionCrew/singleViewExcursionCrew';

// reveal single view excursion
const revealSingleView = () => {
  $('#single-view-excursion').removeClass('hide');
  $('#excursion').addClass('hide');
  $('#crew').addClass('hide');
  $('#destinations').addClass('hide');
  $('#envReadings').addClass('hide');
  $('#species').addClass('hide');
  $('#dashboard').addClass('hide');
};

// close single view excursion
const closeSingleView = () => {
  $('#single-view-excursion').addClass('hide');
  $('#excursion').removeClass('hide');
  $('#crew').addClass('hide');
  $('#destinations').addClass('hide');
  $('#envReadings').addClass('hide');
  $('#species').addClass('hide');
  $('#dashboard').addClass('hide');
};

// build single view excursion
const buildSingleViewExcursion = (e) => {
  revealSingleView();
  const excursionId = e.target.closest('.card').id;
  excursionData.getSingleExcursion(excursionId)
    .then((resp) => {
      const excursion = resp.data;
      let domString = '';
      domString += `<div class="pageDisplay" data-id="${excursionId}">`;
      domString += '<div class="row">';
      domString += `<h1 class="col-8 headingDisplay softEmboss"><p class="typewriter">${excursion.excursionName}</p></h1>`;
      domString += '<button type="button" class="btn-default btn-lg buttonHeadingDisplay glowing col-2" id="close-single-view-excursion"><i class="fas fa-window-close"></i></button>';
      domString += '</div>';
      domString += '<div id="single-view-crew"></div>';
      domString += singleViewExcursionCrew.buildCrewMemberExcursionCards(excursionId);
      domString += '<div id="build-the-dang-cards"></div>';
      singleViewExcursionSpecies.buildSpeciesExcursionView(excursionId);
      domString += '<div id="single-view-excursion-envir-read"></div>';
      singleViewExcursionEnvReading.buildAllEnvExcursionCards(excursionId);
      domString += '</div>';


      utils.printToDom('single-view-excursion', domString);
    })
    .catch((err) => console.error('could not get single excursion', err));
};

export default { buildSingleViewExcursion, closeSingleView };
