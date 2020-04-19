import firebase from 'firebase';
import speciesData from '../../helpers/data/speciesData';
import speciesCard from '../SpeciesCard/speciesCard';
import './speciesContainer.scss';
import utils from '../../helpers/utils';

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
    uid,
  };
  speciesData.addNewSpecies(newSpecies)
    .then(() => {
      // eslint-disable-next-line no-use-before-define
      buildSpeciesContainer();
    })
    .catch((error) => console.error(error));
};

const speciesEvents = () => {
  $('#add-species-button').click(() => {
    $('#exampleModal').show();
  });
  $('#close-species-modal').click(() => {
    $('#exampleModal').hide();
    $('.modal-body input').val('');
  });
};


const buildSpeciesContainer = () => {
  let domString = '';
  domString += '<div class="pageDisplay">';
  domString += '<h1 class="headingDisplay softEmboss"><p class="typewriter">Species</p></h1>';
  const user = firebase.auth().currentUser;
  domString += '<div class="text-center m-5">';
  if (user != null) {
    domString += '<input type="button" class="col-6 btn-default btn-lg crudButtonImage glowing" id="add-species-button" value="Add a New Species">';
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
      speciesEvents();
    })
    .catch((err) => console.error(err));
};


export default { buildSpeciesContainer };
