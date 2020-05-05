import utils from '../../helpers/utils';

const newExcursionForm = () => {
  let domString = '';
  domString += '<form>';
  domString += '<div class="form-group">';
  domString += '<label for="new-excursion-name">Excursion Name</label>';
  domString += '<input type="text" class="form-control" id="new-excursion-name" placeholder="Swimming with Dolphins">';
  domString += '</div>';
  domString += '<div class="form-group">';
  domString += '<label for="new-excursion-date">Excursion Date</label>';
  domString += '<input type="date" class="form-control" id="new-excursion-date" value="2020-05-30" min="2020-05-15" max="2021-01-31">';
  domString += '</div>';
  domString += '<div class="form-group">';
  domString += '<label for="excursionDestination">Destination Name</label>';
  domString += '<input type="text" class="form-control" id="excursionDestination" placeholder="Hawaii">';
  domString += '</div>';
  domString += '<div class="form-group">';
  domString += '<label for="excursionDestinationImage">Destination Image</label>';
  domString += '<input type="text" class="form-control" id="excursionDestinationImage" placeholder="Image Url">';
  domString += '</div>';
  domString += '</form>';

  $('#add-excursion-modal').modal('show');
  utils.printToDom('add-excursion-modal-form', domString);
};

export default { newExcursionForm };
