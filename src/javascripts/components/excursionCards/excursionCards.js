const buildExcursionCards = (excursionCardInfo) => {
  let domString = '';
  domString += `<div class="card excursionCard text-center mb-5 p-3" id="${excursionCardInfo.id}">`;
  domString += `<h5 class="card-title">${excursionCardInfo.excursionName}</h5>`;
  domString += '<div class="row justify-content-around">';
  domString += '<button type="button" class="col-5 btn-default btn-lg crudButtonColor glowing edit-species"><i class="fas fa-feather-alt"></i></button>';
  domString += '<button type="button" class="col-5 delete-button btn-default btn-lg crudButtonColor glowing"><i class="fas fa-skull-crossbones"></i></button>';
  domString += '<button type="button" class="col-5 btn-default btn-lg crudButtonColor glowing edit-species"><i class="fas fa-feather-alt"></i></button>';
  domString += '<button type="button" class="col-5 delete-button btn-default btn-lg crudButtonColor glowing"><i class="fas fa-skull-crossbones"></i></button>';
  domString += '<button type="button" class="col-11 btn-default btn-lg crudButtonColor glowing edit-species"><i class="fas fa-feather-alt"></i></button>';
  domString += '<button type="button" class="col-11 delete-button btn-default btn-lg crudButtonColor glowing"><i class="fas fa-skull-crossbones"></i></button>';
  domString += '</div>';
  domString += '</div>';

  return domString;
};

export default { buildExcursionCards };
