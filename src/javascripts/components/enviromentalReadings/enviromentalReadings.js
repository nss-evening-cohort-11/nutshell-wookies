import firebase from 'firebase/app';

const envReadingMaker = (envReading) => {
  let domString = '';
  const user = firebase.auth().currentUser;
  if (user != null) {
    domString += `<div class ="card cardDisplay" id="${envReading.id}" >`;
    // domString += `<div class ="enviroReadingDiv">`;
    domString += `<img id="envUrl" src="${envReading.Url}">`;
    // domString += '<div class="row" id="env-card-read">';
    domString += `<h2>${envReading.destinationId}</h2>`;
    domString += '<div class="row no-gutters">';
    domString += '<div class="col-8 col-sm-6">TimeStamp:</div>';
    domString += `<div class="col-4 col-sm-6">${envReading.TimeStamp}</div>`;
    domString += '<div class="col-8 col-sm-6">Latitude:</div>';
    domString += `<div class="col-4 col-sm-6">${envReading.Latitude}</div>`;
    domString += '<div class="col-8 col-sm-6">Longitude:</div>';
    domString += `<div class="col-4 col-sm-6"> ${envReading.Longitude}</div>`;
    domString += '<div class="col-8 col-sm-6">Temperature:</div>';
    domString += `<div class="col-4 col-sm-6"> ${envReading.Temperature} degrees C</div>`;
    domString += '<div class="col-8 col-sm-6">Depth:</div>';
    domString += `<div class="col-4 col-sm-6"> ${envReading.Depth} ft </div>`;
    domString += '<div class="col-8 col-sm-6">Current:</div>';
    domString += `<div class="col-4 col-sm-6"> ${envReading.Current} kph </div>`;
    domString += '<div class="col-8 col-sm-6">Pressure:</div>';
    domString += `<div class="col-4 col-sm-6">${envReading.Pressure} atm </div>`;
    domString += '<button type="button" id="edit-enviroment-button" class="col-2 btn-default btn-lg crudButtonColor glowing "><i class="fas fa-feather-alt"></i> Reading</button>';
    domString += '<button type="button" class="delete-enviroment col-2 btn-default btn-lg crudButtonColor glowing"><i class="fas fa-skull-crossbones"></i> Reading</button>';
    // domString += '</div>';
    domString += '</div>';
    // domString += '</div>';
  } else {
    domString = '';
    domString += `<div class ="card cardDisplay" id="${envReading.id}" >`;
    // domString += `<div class ="enviroReadingDiv">`;
    domString += `<img id="envUrl" src="${envReading.Url}>`;
    domString += '<div class="row" id="env-card-read">';
    domString += `<h2>${envReading.destinationId}</h2>`;
    domString += '<div class="row no-gutters">';
    domString += '<div class="col-8 col-sm-6">TimeStamp:</div>';
    domString += `<div class="col-4 col-sm-6">${envReading.TimeStamp}</div>`;
    domString += '<div class="col-8 col-sm-6">Latitude:</div>';
    domString += `<div class="col-4 col-sm-6">${envReading.Latitude}</div>`;
    domString += '<div class="col-8 col-sm-6">Longitude:</div>';
    domString += `<div class="col-4 col-sm-6"> ${envReading.Longitude}</div>`;
    domString += '<div class="col-8 col-sm-6">Temperature:</div>';
    domString += `<div class="col-4 col-sm-6"> ${envReading.Temperature}</div>`;
    domString += '<div class="col-8 col-sm-6">Depth:</div>';
    domString += `<div class="col-4 col-sm-6"> ${envReading.Depth}</div>`;
    domString += '<div class="col-8 col-sm-6">Current:</div>';
    domString += `<div class="col-4 col-sm-6"> ${envReading.Current}</div>`;
    domString += '<div class="col-8 col-sm-6">Pressure:</div>';
    domString += `<div class="col-4 col-sm-6">${envReading.Pressure}</div>`;
  }

  return domString;
};

export default { envReadingMaker };
