
const buildSingleEnvReadExcursionCard = (reading) => {
  let domString = '';
  domString += `<div class ="card cardDisplay" id="${reading.envirReadExcursionId}" >`;
  domString += `<img id="envUrl" src="${reading.Url}">`;
  // domString += '<div class="row" id="env-card-read">';
  domString += `<h2 class="card-title">${reading.destinationId}</h2>`;
  domString += '<div class="row no-gutters">';
  domString += '<div class="col-8 col-sm-6">TimeStamp:</div>';
  domString += `<div class="col-4 col-sm-6">${reading.TimeStamp}</div>`;
  domString += '<div class="col-8 col-sm-6">Latitude:</div>';
  domString += `<div class="col-4 col-sm-6">${reading.Latitude}</div>`;
  domString += '<div class="col-8 col-sm-6">Longitude:</div>';
  domString += `<div class="col-4 col-sm-6"> ${reading.Longitude}</div>`;
  domString += '<div class="col-8 col-sm-6">Temperature:</div>';
  domString += `<div class="col-4 col-sm-6"> ${reading.Temperature} degrees C </div>`;
  domString += '<div class="col-8 col-sm-6">Depth:</div>';
  domString += `<div class="col-4 col-sm-6"> ${reading.Depth} ft </div>`;
  domString += '<div class="col-8 col-sm-6">Current:</div>';
  domString += `<div class="col-4 col-sm-6"> ${reading.Current} kph </div>`;
  domString += '<div class="col-8 col-sm-6">Pressure:</div>';
  domString += `<div class="col-4 col-sm-6">${reading.Pressure} atm </div>`;
  domString += `<button type="button" id="${reading.envirReadExcursionId}" class="delete-envir-read-excursion-btn col-11 btn-default btn-lg excursionRowCrudButtonColor glowing"><i class="fas fa-skull-crossbones"></i> </button>`;
  // domString += '</div>';
  domString += '</div>';
  return domString;
};

export default { buildSingleEnvReadExcursionCard };
