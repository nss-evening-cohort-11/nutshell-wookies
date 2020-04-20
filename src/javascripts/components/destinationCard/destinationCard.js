import firebase from 'firebase/app';

const buildDestinationCard = (destination) => {
  let domString = '';
  domString += `<div class="card cardDisplay" id=${destination.id}>`;
  domString += `<img src="${destination.imageUrl}" class="card-img-top imageFit" alt="${destination.alt}">`;
  domString += '<div class="card-body">';
  domString += `<h5 class="card-title">${destination.name}</h5>`;
  domString += `<p class="card-text font-italic">${destination.country}</p>`;
  domString += `<p class="card-text">${destination.latitude} ${destination.longitude}</p>`;
  const user = firebase.auth().currentUser;
  if (user !== null) {
    domString += '<div class="row justify-content-around">';
    domString += '<button type="button" class="col-4 btn-default btn-lg crudButtonColor glowing edit-destination"><i class="fas fa-feather-alt"></i></button>';
    domString += '<button type="button" class="col-4 btn-default btn-lg crudButtonColor glowing delete-destination"><i class="fas fa-skull-crossbones"></i></button>';
    domString += '</div>';
  }
  domString += '</div>';
  domString += '</div>';

  return domString;
};

export default { buildDestinationCard };
