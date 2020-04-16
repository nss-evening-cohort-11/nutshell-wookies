const buildDestinationCard = (destination) => {
  let domString = '';
  domString += '<div class="card cardDisplay" style="width: 18rem;">';
  domString += `<img src="${destination.imageUrl}" class="card-img-top" alt="${destination.alt}">`;
  domString += '<div class="card-body">';
  domString += `<h5 class="card-title">${destination.name}</h5>`;
  domString += '<p class="card-text">Some quick example text to build on the card title and make up the bulk of the card content.</p>';
  // domString += '<button type="button" class="btn btn-primary crudButtonImage">Go somewhere</button>';
  domString += '<div class="row justify-content-around">';
  domString += '<button type="button" class="col-4 btn-default btn-lg crudButtonImage glowing"><i class="fas fa-feather-alt"></i></button>';
  domString += '<button type="button" class="col-4 btn-default btn-lg crudButtonImage glowing"><i class="fas fa-skull-crossbones"></i></button>';
  domString += '</div>';
  domString += '</div>';
  domString += '</div>';

  return domString;
};

export default { buildDestinationCard };
