import firebase from 'firebase';
import speciesData from '../../helpers/data/speciesData';
import speciesCard from '../SpeciesCard/speciesCard';
import './speciesContainer.scss';
import utils from '../../helpers/utils';
import speciesModalForm from '../speciesModalForm/speciesModalForm';
import speciesEdit from '../speciesEdit/speciesEdit';

const deleteSpecies = (e) => {
  const speciesId = e.target.closest('.speciesCard').id;
  speciesData.removeSpecies(speciesId)
    .then(() => {
      // eslint-disable-next-line no-use-before-define
      buildSpeciesContainer();
    })
    .catch((err) => console.error(err));
};

const addNewSpecies = (e) => {
  e.stopImmediatePropagation();
  const uid = firebase.auth().currentUser;
  const newSpecies = {
    type: $('#type').val(),
    depth: $('#depth').val(),
    color: $('#color').val(),
    description: $('#description').val(),
    imageUrl: $('#species-image-url').val(),
    location: $('#species-location').val(),
    uid,
  };
  speciesData.addNewSpecies(newSpecies)
    .then(() => {
      $('.modal-body input').val('');
      $('#modalAddSpecies').modal('hide');
      // eslint-disable-next-line no-use-before-define
      buildSpeciesContainer();
    })
    .catch((error) => console.error(error));
};

const editSpeciesEvent = (e) => {
  e.preventDefault();
  const speciesId = e.target.closest('.card').id;
  $('#modalEditSpecies').modal('show');
  speciesEdit.showEditSpeciesForm(speciesId);
};

const updateSpecies = (e) => {
  e.preventDefault();
  const speciesId = $('.edit-species-form-tag').data('id');
  const editedSpecies = {
    type: $('#edit-species-type').val(),
    depth: $('#edit-species-depth').val(),
    color: $('#edit-species-color').val(),
    description: $('#edit-species-description').val(),
    location: $('#edit-species-location').val(),
    imageUrl: $('#edit-species-imageUrl').val(),
    uid: firebase.auth().currentUser.uid,
  };
  speciesData.updateSpecies(speciesId, editedSpecies)
    .then(() => {
      $('#modalEditSpecies').modal('hide');
      // eslint-disable-next-line no-use-before-define
      buildSpeciesContainer();
    })
    .catch((error) => console.error('could not update the species', error));
};

const buildSpeciesContainer = () => {
  let domString = '';
  domString += '<div class="pageDisplay">';
  domString += '<div class="row">';
  domString += '<h1 class="headingDisplay softEmboss col-8"><p class="typewriter">Species</p></h1>';
  const user = firebase.auth().currentUser;
  if (user != null) {
    domString += '<button id="add-species-button" type="button" class="btn-default btn-lg crudButtonColor glowing mt-5 col-2" data-toggle="modal" data-target="#modalAddSpecies"><i class="fas fa-calendar-plus"></i></button>';
    domString += '</div>';
  }
  domString += '<div class="d-flex flex-wrap justify-content-center">';
  speciesData.getAllSpecies()
    .then((species) => {
      species.forEach((animal) => {
        domString += speciesCard.buildSingleSpeciesCard(animal);
      });
      domString += '</div>';
      utils.printToDom('species', domString);
      $('#species').on('click', '.delete-button', deleteSpecies);
      $('#add-new-species').click(addNewSpecies);
      $('body').on('click', '.edit-species', editSpeciesEvent);
      $('body').on('click', '#button-add-species', speciesModalForm.showAddSpeciesModalForm);
      $('body').on('click', '#button-save-edit-species', updateSpecies);
    })
    .catch((err) => console.error(err));
};


export default { buildSpeciesContainer };
