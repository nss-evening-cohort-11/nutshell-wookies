import utils from '../../helpers/utils';
import speciesData from '../../helpers/data/speciesData';

const showEditSpeciesForm = (speciesId) => {
  speciesData.getSingleSpecies(speciesId)
    .then((response) => {
      const selectedSpecies = response.data;
      let domString = '';
      domString += `<form id="modalForm" class="edit-species-form-tag" data-id="${speciesId}">`;
      domString += '<div class="form-group">';
      domString += '<label for="edit-species-type">Type</label>';
      domString += `<input type="text" class="form-control" id="edit-species-type" aria-describedby="name" placeholder="Enter a species" value="${selectedSpecies.type}">`;
      domString += '</div>';
      domString += '<div class="form-group">';
      domString += '<label for="edit-species-depth">Depth</label>';
      domString += `<input type="text" class="form-control" id="edit-species-depth" aria-describedby="depth" placeholder="Enter the depth" value="${selectedSpecies.depth}">`;
      domString += '</div>';
      domString += '<div class="form-group">';
      domString += '<label for="edit-species-color">Color</label>';
      domString += `<input type="text" class="form-control" id="edit-species-color" aria-describedby="color" placeholder="Enter the color" value="${selectedSpecies.color}">`;
      domString += '</div>';
      domString += '<div class="form-group">';
      domString += '<label for="edit-species-description">Description</label>';
      domString += `<input type="text" class="form-control" id="edit-species-description" aria-describedby="description" placeholder="Enter the description" value="${selectedSpecies.description}">`;
      domString += '</div>';
      domString += '<div class="form-group">';
      domString += '<label for="edit-species-imageUrl">Image-Url</label>';
      domString += `<input type="text" class="form-control" id="edit-species-imageUrl" aria-describedby="imageUrl" placeholder="Enter an image link" value="${selectedSpecies.imageUrl}">`;
      domString += '</div>';
      domString += '<div class="form-group">';
      domString += '<label for="edit-species-location">Location</label>';
      domString += `<input type="text" class="form-control" id="edit-species-location" aria-describedby="location" placeholder="Enter a location name" value="${selectedSpecies.destinationId}">`;
      domString += '</div>';
      domString += '</form>';
      utils.printToDom('modalBodyEditSpecies', domString);
    })
    .catch((error) => console.error('could not edit the selected species', error));
};

export default { showEditSpeciesForm };
