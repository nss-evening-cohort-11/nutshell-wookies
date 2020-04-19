import firebase from 'firebase';
import './speciesCard.scss';

const buildSingleSpeciesCard = (species) => {
  let domString = '';
  const user = firebase.auth().currentUser;
  if (user != null) {
    domString += `
    <div class="card speciesCard text-center mb-5" id="${species.id}">
      <img src="${species.imageUrl}" alt="..." class="card-img-top"/>
      <h5 class="card-title">${species.type}</h5>
      <p class="card-text">${species.description}</p>
      <p class="card-text">Color: ${species.color}</p>
      <p class="card-text">Depth: ${species.depth}</p>
      <p class="card-text">Location: ${species.destinationId}</p>
      <div class="row justify-content-around">
        <button type="button" class="col-4 btn-default btn-lg crudButtonImage glowing"><i class="fas fa-feather-alt"></i></button>
        <button type="button" class="col-4 delete-button btn-default btn-lg crudButtonImage glowing"><i class="fas fa-skull-crossbones"></i></button>
      </div>
    </div>`;
  } else {
    domString += `
    <div class="card speciesCard text-center mb-5" id="${species.id}">
    <img src="${species.imageUrl}" alt="..." class="card-img-top"/>
    <h5 class="card-title">${species.type}</h5>
    <p class="card-text">${species.description}</p>
    <p class="card-text">Color: ${species.color}</p>
    <p class="card-text">Depth: ${species.depth}</p>
    <p class="card-text">Location: ${species.destinationId}</p>
    </div>`;
  }
  return domString;
};


export default { buildSingleSpeciesCard };
