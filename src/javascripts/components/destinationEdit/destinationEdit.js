import utils from '../../helpers/utils';
import destinationsData from '../../helpers/data/destinationsData';

const showEditDestinationForm = (destinationId) => {
  destinationsData.getSingleDestination(destinationId)
    .then((response) => {
      const selectedDestination = response.data;
      console.log('single dest', destinationId);
      let domString = '';
      domString += `<form id="modalForm" class="edit-destination-form-tag" data-id="${destinationId}">`;
      domString += '<div class="form-group">';
      domString += '<label for="edit-destination-name">Name</label>';
      domString += `<input type="text" class="form-control" id="edit-destination-name" aria-describedby="name" placeholder="Enter a destination" value="${selectedDestination.name}">`;
      domString += '</div>';
      domString += '<div class="form-group">';
      domString += '<label for="edit-destination-country">Country</label>';
      domString += `<input type="text" class="form-control" id="edit-destination-country" aria-describedby="country" placeholder="Enter the country" value="${selectedDestination.country}">`;
      domString += '</div>';
      domString += '<div class="form-group">';
      domString += '<label for="edit-destination-latitude">Latitude</label>';
      domString += `<input type="text" class="form-control" id="edit-destination-latitude" aria-describedby="latitude" placeholder="Enter the latitude" value="${selectedDestination.latitude}">`;
      domString += '</div>';
      domString += '<div class="form-group">';
      domString += '<label for="edit-destination-longitude">Longitude</label>';
      domString += `<input type="text" class="form-control" id="edit-destination-longitude" aria-describedby="longitude" placeholder="Enter the longitude" value="${selectedDestination.longitude}">`;
      domString += '</div>';
      domString += '<div class="form-group">';
      domString += '<label for="edit-destination-imageUrl">Photo</label>';
      domString += `<input type="text" class="form-control" id="edit-destination-imageUrl" aria-describedby="photoUrl" placeholder="Enter a photo link" value="${selectedDestination.imageUrl}">`;
      domString += '</div>';
      domString += '<div class="form-group form-check">';
      if ($('#destination-beenThere:checked') !== null) {
        domString += '<input type="checkbox" class="form-check-input" id="edit-destination-beenThere" checked>';
      } else if ($('#destination-beenThere:checked') === null) {
        domString += '<input type="checkbox" class="form-check-input" id="edit-destination-beenThere">';
      }
      domString += '<label class="form-check-label" for="edit-destination-beenThere">Have we been there yet?</label>';
      domString += '</div>';
      domString += '</form>';
      utils.printToDom('modalBodyEditDestination', domString);
    })
    .catch((error) => console.error('could not edit the selected destination', error));
};

export default { showEditDestinationForm };
