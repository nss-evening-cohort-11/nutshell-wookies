// import singleViewExcursionSpecies from '../singleViewExcursionSpecies/singleViewExcursionSpecies';

import excursionData from '../../helpers/data/excursionData';
import utils from '../../helpers/utils';

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
  console.error(excursionId);
  excursionData.getSingleExcursion(excursionId)
    .then((resp) => {
      const excursion = resp.data;
      let domString = '';
      domString += '<div class="d-flex flex-wrap">';
      domString += '<button class="btn btn-info m-3" id="close-single-view-excursion"><i class="fas fa-window-close"></i></button>';
      domString += `<h2>${excursion.excursionName}</h2>`;
      domString += '</div>';
      utils.printToDom('single-view-excursion', domString);
    })
    .catch((err) => console.error('could not get singe excursion', err));
};

export default { buildSingleViewExcursion, closeSingleView };
