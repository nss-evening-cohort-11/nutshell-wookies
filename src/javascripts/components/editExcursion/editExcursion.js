import utils from '../../helpers/utils';
import excursionData from '../../helpers/data/excursionData';

const editExcursionCards = (e) => {
  const excursionId = e.target.closest('.card').id;
  $('#edit-excursion-modal').modal('show');
  console.error('edit excursion', excursionId);
  excursionData.getExcursionInfo(excursionId)
    .then((resp) => {
      const excursionPlaceholder = resp.data;
      let domString = '';
      domString += '<form class="excursionEdit" data-id="testing">';
      domString += '<div class="form-group">';
      domString += '<label for="foodLocation">Locations Of Food:</label>';
      domString += '<select id="foodLocation" class="form-control" placeholder="">';
      domString += `<option value="">${excursionPlaceholder.excursionName}</option>`;
      domString += '<option value="Sight seeing: A mysterious sea monster">Sight seeing: A mysterious sea monster</option>';
      domString += '<option value="Sight seeing: Coral formations and sunken vessels from the Battle of Vigo Bay">Sight seeings: Coral and sunken vessels</option>';
      domString += '<option value="Question Panal with a Marine Biologist">Question Panal with a Marine Biologist</option>';
      domString += '</select>';
      domString += '</div>';
      domString += '<div class="form-group">';
      domString += '<label for="new-excursion-date">Date</label>';
      domString += '<input type="date" class="form-control" id="new-excursion-date" value="2020-05-30" min="2020-05-15" max="2021-01-31">';
      domString += '</div>';
      domString += '</form>';
      utils.printToDom('edit-excursion-modal-form', domString);
    })
    .catch();

  // .catch((err) => console.error('edit excursion has failed', err));
};

export default { editExcursionCards };
