import smash from '../../helpers/data/smash';

// import utils from '../../helpers/utils';

const addSpeciesExcursionForm = (e) => {
  const excursionId = e.target.closest('.card').id;
  smash.getAvailSpecies(excursionId)
    .then((species) => {
      console.error('available species', species);
    })
    .catch((err) => console.error('cannot get available species', err));
  // const domString = '<p>add a species to this excursion</p>';

  // $('#add-species-excursion-modal').modal('show');
  // utils.printToDom('add-species-excursion-modal-form', domString);
};

export default { addSpeciesExcursionForm };
