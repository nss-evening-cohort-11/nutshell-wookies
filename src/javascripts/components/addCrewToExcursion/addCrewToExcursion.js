import smash from '../../helpers/data/smash';
import utils from '../../helpers/utils';

const addCrewToExcursionForm = (e) => {
  const excursionId = e.target.closest('.card').id;
  smash.getAvailCrew(excursionId)
    .then((persons) => {
      let domString = '';
      domString += `<form id="add-crew-excursion-form" data-excursion-id="${excursionId}">`;
      domString += '<div class="form-group">';
      domString += '<label for="">Crew </label>';
      domString += '<select class="form-control" id="crew-id">';
      persons.forEach((person) => {
        domString += `<option value="${person.id}">${person.destinationId}, ${person.TimeStamp}</option>`;
      });
      domString += '</select>';
      domString += '</div>';
      domString += '</form>';

      $('#add-crew-excursion-modal').modal('show');
      utils.printToDom('add-crew-excursion-modal-form', domString);
    })
    .catch((err) => console.error('cannot get avail crew', err));
};

export default { addCrewToExcursionForm };
