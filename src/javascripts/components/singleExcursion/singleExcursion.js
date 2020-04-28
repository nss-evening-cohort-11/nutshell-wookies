// import singleViewExcursionSpecies from '../singleViewExcursionSpecies/singleViewExcursionSpecies';

import excursionData from '../../helpers/data/excursionData';
import utils from '../../helpers/utils';

const revealSingleView = () => {
  $('#single-view-excursion').removeClass('hide');
  $('#excursion').addClass('hide');
  $('#crew').addClass('hide');
  $('#destinations').addClass('hide');
  $('#envReadings').addClass('hide');
  $('#species').addClass('hide');
  $('#dashboard').addClass('hide');
};

const buildSingleViewExcursion = (e) => {
  revealSingleView();
  const excursionId = e.target.closest('.card').id;
  console.error(excursionId);
  excursionData.getSingleExcursion(excursionId)
    .then((resp) => {
      const excursion = resp.data;
      let domString = '';
      domString += `<h2>${excursion.excursionName}</h2>`;
      utils.printToDom('single-view-excursion', domString);
    })
    .catch((err) => console.error('could not get singe excursion', err));
};

export default { buildSingleViewExcursion };
