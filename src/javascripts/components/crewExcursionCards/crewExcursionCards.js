const buildCrewExcursionCards = (crew) => {
  let domString = '';
  domString += `<div id="${crew.crewExcursionId}" class="crewDiv d-flex flex-start crewCard">`;
  domString += `<img class="crewImg" src="${crew.imgUrl}" alt="">`;
  domString += '<div class="card text-center w-75 cardDisplay">';
  domString += '<div class="card-header headingDisplay">';
  domString += `${crew.title}`;
  domString += '</div>';
  domString += '<div class="card-body card-display">';
  domString += `<div class=""><h5 class="card-title">${crew.firstName} ${crew.lastName}</h5></div>`;
  domString += `<div class="><p class="card-text">Age: ${crew.age}</p></div>`;
  domString += `<div class="><p class="card-text">${crew.description}</p></div>`;
  domString += '</div>';
  domString += '<div class="card-footer text-muted">';
  domString += `<button type="button" id="${crew.id}" class="delete-crew-excursion-btn col-11 btn-default btn-lg excursionRowCrudButtonColor glowing"><i class="fas fa-skull-crossbones"></i> Remove from excursion</button>`;
  domString += '</div>';
  domString += '</div>';
  domString += '</div>';
  return domString;
};

export default { buildCrewExcursionCards };
