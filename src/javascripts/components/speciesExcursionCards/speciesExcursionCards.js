const buildSpeciesExcursionCards = (species) => {
  let domString = '';
  domString += `
  <div class="card speciesCard text-center mb-5" id="${species.speciesExcursionId}">
  <img src="${species.imageUrl}" alt="..." class="card-img-top"/>
  <h5 class="card-title">${species.type}</h5>
  <p class="card-text">${species.description}</p>
  <p class="card-text">Color: ${species.color}</p>
  <p class="card-text">Depth: ${species.depth}</p>
  <p class="card-text">Location: ${species.location}</p>
  <div class="text-center">
  <button type="button" class="delete-species-excursion-btn btn-default btn-lg crudButtonColor glowing"><i class="fas fa-skull-crossbones"></i> Species</button>
  </div>
  </div>`;
  return domString;
};

export default { buildSpeciesExcursionCards };
