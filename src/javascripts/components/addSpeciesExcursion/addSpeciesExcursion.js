import utils from '../../helpers/utils';

const addSpeciesExcursionForm = () => {
  const domString = '<p>add a species to this excursion</p>';

  $('#add-species-excursion-modal').modal('show');
  utils.printToDom('add-species-excursion-modal-form', domString);
};

export default { addSpeciesExcursionForm };
