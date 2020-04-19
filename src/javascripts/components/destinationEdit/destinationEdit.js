import utils from '../../helpers/utils';
import destinationsData from '../../helpers/data/destinationsData';

const showEditDestinationForm = (destinationId) => {
  destinationsData.getSingleDestination(destinationId)
    .then((response) => {
      const selectedDestination = response.data;
      console.log('single dest', destinationId);
      let domString = '';
      domString += `<form class="edit-destination-form-tag" id="${destinationId}">`;
      domString += '<div class="form-group">';
      domString += '<label for="edit-destination-name">Name</label>';
      domString += `<input type="text" class="form-control" id="edit-destination-name" aria-describedby="name" placeholder="Enter a destination" value="${selectedDestination.name}">`;
      domString += '</div>';
      domString += '</form>';
      utils.printToDom('modalBodyEditDestination', domString);
    })
    .catch((error) => console.error('could not edit the selected destination', error));
};

export default { showEditDestinationForm };
