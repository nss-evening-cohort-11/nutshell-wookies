import firebase from 'firebase/app';
import moment from 'moment';
import destinationsData from '../../helpers/data/destinationsData';
import destinationCard from '../destinationCard/destinationCard';
import utils from '../../helpers/utils';
import destinationModalForm from '../destinationModalForm/destinationModalForm';
import destinationEdit from '../destinationEdit/destinationEdit';

const removeDestination = (e) => {
  const destinationId = e.target.closest('.card').id;
  destinationsData.deleteDestination(destinationId)
    .then(() => {
      // eslint-disable-next-line no-use-before-define
      buildDestinationsContainer();
    })
    .catch((error) => console.error('could not delete destination', error));
};

const makeDestination = (e) => {
  e.preventDefault();
  const newDestination = {
    name: $('#destination-name').val(),
    country: $('#destination-country').val(),
    latitude: $('#destination-latitude').val(),
    longitude: $('#destination-longitude').val(),
    imageUrl: $('#destination-imageUrl').val(),
    alt: $('#destination-name').val(),
    beenThere: $('#destination-beenThere:checked').val(),
    timestamp: moment().format(),
    uid: firebase.auth().currentUser.uid,
  };
  destinationsData.addDestination(newDestination)
    .then(() => {
      $('#modalBodyAddDestination input').val('');
      $('#modalAddDestination').modal('hide');
      // eslint-disable-next-line no-use-before-define
      buildDestinationsContainer();
    })
    .catch((error) => console.error('could not add a new destination', error));
};

const editDestinationEvent = (e) => {
  e.preventDefault();
  const destinationId = e.target.closest('.card').id;
  $('#modalEditDestination').modal('show');
  destinationEdit.showEditDestinationForm(destinationId);
};

const updateDestination = (e) => {
  e.preventDefault();
  const destinationId = $('.edit-destination-form-tag').data('id');
  console.error('dest id from update function', destinationId);
  const editedDestination = {
    name: $('#edit-destination-name').val(),
    country: $('#edit-destination-country').val(),
    latitude: $('#edit-destination-latitude').val(),
    longitude: $('#edit-destination-longitude').val(),
    imageUrl: $('#edit-destination-imageUrl').val(),
    alt: $('#edit-destination-name').val(),
    beenThere: $('#edit-destination-beenThere:checked').val(),
    timestamp: moment().format(),
    uid: firebase.auth().currentUser.uid,
  };
  console.log('edited dest', editedDestination);
  console.log('id of edited dest', destinationId);
  destinationsData.updateDestination(destinationId, editedDestination)
    .then(() => {
      // $('.modal-body input').val('');
      $('#modalEditDestination').modal('hide');
      // eslint-disable-next-line no-use-before-define
      buildDestinationsContainer();
    })
    .catch((error) => console.error('could not update the destination', error));
};

const buildDestinationsContainer = () => {
  destinationsData.getDestinations()
    .then((destinations) => {
      let domString = '';
      domString += '<div class="pageDisplay">';
      domString += '<div class="row">';
      domString += '<h1 class="headingDisplay softEmboss col-10"><p class="typewriter">Destinations</p></h1>';
      domString += '<button id="button-add-destination" type="button" class="btn-default btn-lg crudButtonColor glowing mt-5 mr-2" data-toggle="modal" data-target="#modalAddDestination"><i class="fas fa-calendar-plus"></i></button>';
      domString += '</div>';
      domString += '<div class="d-flex flex-wrap">';
      destinations.forEach((item) => {
        domString += '<div class="col-md-4">';
        domString += destinationCard.buildDestinationCard(item);
        domString += '</div>';
      });
      domString += '</div>';
      domString += '</div>';
      utils.printToDom('destinations', domString);
    })
    .catch((error) => console.error('get destinations broke', error));
};

const destinationEvents = () => {
  $('body').on('click', '.delete-destination', removeDestination);
  $('body').on('click', '.edit-destination', editDestinationEvent);
  $('body').on('click', '#button-add-destination', destinationModalForm.showAddDestinationModalForm);
  $('body').on('click', '#button-save-destination', makeDestination);
  $('body').on('click', '#button-save-edit-destination', updateDestination);
};

export default { buildDestinationsContainer, destinationEvents };
