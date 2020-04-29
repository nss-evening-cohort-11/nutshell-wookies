import smash from '../../helpers/data/smash';
import utils from '../../helpers/utils';

const addEnvirReadingExcursionForm = (e) => {
  const excursionId = e.target.closest('.card').id;
  smash.getAvailEnvReadings(excursionId)
    .then((readings) => {
      let domString = '';
      domString += `<form id="add-envir-read-excursion-form" data-excursion-id="${excursionId}">`;
      domString += '<div class="form-group">';
      domString += '<label for="">Log Readings </label>';
      domString += '<select class="form-control" id="envir-reading-id">';
      readings.forEach((reading) => {
        domString += `<option value="${reading.id}">${reading.destinationId}, ${reading.TimeStamp}</option>`;
      });
      domString += '</select>';
      domString += '</div>';
      domString += '</form>';

      $('#add-envir-read-excursion-modal').modal('show');
      utils.printToDom('add-envir-read-excursion-modal-form', domString);
    })
    .catch((err) => console.error('cannot get avail env readings', err));
};

export default { addEnvirReadingExcursionForm };
