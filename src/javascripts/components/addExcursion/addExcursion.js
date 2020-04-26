import utils from '../../helpers/utils';

const newExcursionForm = () => {
  let domString = '';
  domString += '<form>';
  domString += '<div class="form-group">';
  domString += '<label for="new-excursion-name">Name</label>';
  domString += '<input type="text" class="form-control" id="new-excursion-name" placeholder="Swimming with Dolphins">';
  domString += '</div>';
  domString += '<div class="form-group">';
  domString += '<label for="new-excursion-date">Date</label>';
  domString += '<input type="date" class="form-control" id="new-excursion-date" value="2020-05-30" min="2020-05-15" max="2021-01-31">';
  domString += '</div>';
  domString += '</form>';

  $('#add-excursion-modal').modal('show');
  utils.printToDom('add-excursion-modal-form', domString);
};

export default { newExcursionForm };
