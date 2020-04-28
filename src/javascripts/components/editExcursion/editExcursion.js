import utils from '../../helpers/utils';
// import excursionData from '../../helpers/data/excursionData';

const editExcursionCards = () => {
  // const excursionId = e.target.closest('card').id;
  // excursionData.getExcursion(excursionId);
  console.error('excursion id??');
  let domString = '';
  domString += '<form class="excursionEdit" data-id="testing">';
  domString += '<div class="form-group">';
  domString += '<label for="new-excursion-name">Name</label>';
  domString += '<input type="text" class="form-control" id="new-excursion-name" placeholder="an attempt">';
  domString += '</div>';
  domString += '<div class="form-group">';
  domString += '<label for="new-excursion-date">Date</label>';
  domString += '<input type="date" class="form-control" id="new-excursion-date" value="2020-05-30" min="2020-05-15" max="2021-01-31">';
  domString += '</div>';
  domString += '</form>';

  // .catch((err) => console.error('edit excursion has failed', err));
  $('#edit-excursion-modal').modal('show');
  utils.printToDom('edit-excursion-modal-form', domString);
};

export default { editExcursionCards };
