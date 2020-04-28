import smash from '../../helpers/data/smash';

import utils from '../../helpers/utils';

const addSpeciesExcursionForm = (e) => {
  const excursionId = e.target.closest('.card').id;
  smash.getAvailSpecies(excursionId)
    .then((species) => {
      let domString = '';
      domString += `<form class="add-species-excursion-form-tag" data-excursion-id="${excursionId}">`;
      domString += '<div class="form-group">';
      domString += '<label for="">What species was discovered?</label>';
      domString += '<select class="form-control" id="species-id">';
      species.forEach((creature) => {
        domString += `<option value="${creature.id}">${creature.type}</option>`;
      });
      domString += '</select>';
      domString += '</div>';
      domString += '</form>';

      $('#add-species-excursion-modal').modal('show');
      utils.printToDom('add-species-excursion-modal-form', domString);
    })
    .catch((err) => console.error('cannot get available species', err));
};

export default { addSpeciesExcursionForm };
