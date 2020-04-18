import firebase from 'firebase/app';
import destinationsData from '../../helpers/data/destinationsData';
import destinationCard from '../destinationCard/destinationCard';
import utils from '../../helpers/utils';
import destinationModalForm from '../destinationModalForm/destinationModalForm';

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
    beenThere: $('#destination-beenThere').val(),
    timestamp: $('#destination-timestamp').val(),
    uid: firebase.auth().currentUser.uid,
  };
  console.log('new destination', newDestination);
  destinationsData.addDestination(newDestination)
    .then(() => {
      $('#modalAddDestination').modal('hide');
      // eslint-disable-next-line no-use-before-define
      buildDestinationsContainer();
      // utils.printToDom('modalAddDestination', '');
    })
    .catch((error) => console.error('could not add a new destination', error));
};

const buildDestinationsContainer = () => {
  destinationsData.getDestinations()
    .then((destinations) => {
      let domString = '';
      domString += '<div class="pageDisplay">';
      domString += '<h1 class="headingDisplay softEmboss"><p class="typewriter">Destinations</p></h1>';
      domString += '<div class="text-center m-5">';
      domString += '<input id="button-add-destination" type="button" class="col-6 btn-default btn-lg crudButtonImage glowing" value="Add a New Destination">';
      // domString += '<button type="button" class="col-4 btn-default btn-lg crudButtonColor"><i class="fas fa-feather-alt"></i></button>';
      domString += '</div>';
      domString += '<div class="d-flex flex-wrap">';
      destinations.forEach((item) => {
        domString += '<div class="col-md-3">';
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
  $('body').on('click', '#button-add-destination', destinationModalForm.showDestinationModalForm);
  $('body').on('click', '#button-save-destination', makeDestination);
};

export default { buildDestinationsContainer, destinationEvents };
