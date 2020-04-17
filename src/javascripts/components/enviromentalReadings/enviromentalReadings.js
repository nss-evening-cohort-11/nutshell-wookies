import utils from '../../helpers/utils';

const envReadingMaker = (envReading) => {
  let domString = '';
  domString += '<div class="row">';
  domString += '<div class="col-sm-9">';
  domString += `<img src = "${envReading.Url}`;
  domString += '<div class="row">';
  domString += '<div class="col-sm-9">destination.name';
  domString += '<div class="col-8 col-sm-6">TimeStamp</div>';
  domString += `<div class="col-4 col-sm-6">${envReading.TimeStamp}</div>`;
  domString += '<div class="col-8 col-sm-6">Latitude</div>';
  domString += `<div class="col-4 col-sm-6">${envReading.Latitude}</div>`;
  domString += '<div class="col-8 col-sm-6">Longitude</div>';
  domString += `<div class="col-4 col-sm-6">${envReading.Longitude}</div>`;
  domString += '<div class="col-8 col-sm-6">Temperature</div>';
  domString += `<div class="col-4 col-sm-6"> ${envReading.Temperature}</div>`;
  domString += '<div class="col-8 col-sm-6">Depth</div>';
  domString += `<div class="col-4 col-sm-6"> ${envReading.Depth}</div>`;
  domString += '<div class="col-8 col-sm-6">Current</div>';
  domString += `<div class="col-4 col-sm-6"> ${envReading.Current}</div>`;
  domString += '<div class="col-8 col-sm-6">Pressure</div>';
  domString += `<div class="col-4 col-sm-6"> ${envReading.Pressure}</div>`;
  domString += '</div>';
  domString += '</div>';
  domString += '</div>';
  domString += '</div>';

  utils.printToDom('envReadings', domString);
};

export default { envReadingMaker };
