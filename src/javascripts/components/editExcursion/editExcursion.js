import utils from '../../helpers/utils';
import excursionData from '../../helpers/data/excursionData';

const editExcursionCards = (e) => {
  const excursionId = e.target.closest('.card').id;
  $('#edit-excursion-modal').modal('show');
  excursionData.getExcursionInfo(excursionId)
    .then((resp) => {
      const excursionPlaceholder = resp.data;
      let domString = '';
      domString += `<form id="excursionEdit" data-id="${excursionId}">`;
      domString += '<div class="form-group">';
      domString += '<label for="excursionChange">Name</label>';
      domString += `<input type="text" class="form-control" id="excursionChange" placeholder="${excursionPlaceholder.excursionName}">`;
      domString += '</div>';
      domString += '<div class="form-group">';
      domString += '<label for="editExcursionDate">Date</label>';
      domString += '<input type="date" class="form-control" id="editExcursionDate" value="2020-05-30" min="2020-05-15" max="2021-01-31">';
      domString += '</div>';
      domString += '</form>';

      utils.printToDom('edit-excursion-modal-form', domString);
    })
    .catch((err) => console.error('editExcursionForm', err));

  // .catch((err) => console.error('edit excursion has failed', err));
};

export default { editExcursionCards };
