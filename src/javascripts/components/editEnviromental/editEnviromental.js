import utils from '../../helpers/utils';
import envReadings from '../../helpers/data/envReadings';
import destinationsData from '../../helpers/data/destinationsData';

const editEnviroData = (enviroId) => {
  envReadings.getSingleEnviroment(enviroId)
  .then((response) => {
    const selectedEnviroment = response.data;
      let domString = '';
      domString += `<form id="modalForm" class="edit-enviroment-form-tag" data-id="${enviroId}">`; 
  domString += '<h2 class = text-center>New Enviromental Data</h2>';
  domString += '<form class="col-10 offset-1">';
  domString += '<div class="form-group">';
  domString += '<label for="edit-enviroment-destinationId">Destination Id</label>';
  domString += `<input type="text" class="form-control" id="edit-enviroment-destinationId" placeholder="destination" value ="${selectedEnviroment.destinationId}">`;
  domString += '</div>';
  domString += '<div class="form-group">';
//   domString += '<label for="Url-pic">Insert Pic here</label>';
//   domString += '<input type="text" class="form-control" id="Url-pic" placeholder="url-pic">';
//   domString += '</div>';
//   domString += '<div class="form-group">';
//   domString += '<label for="TimeStamp">TimeStamp:</label>';
//   domString += '<input type="text" class="form-control" id="TimeStamp" placeholder="1/01/2019">';
//   domString += '</div>';
//   domString += '<div class="form-group">';
//   domString += '<label for="Latitude">Latitude:</label>';
//   domString += '<input type="text" class="form-control" id="Latitude" placeholder="20.1356°">';
//   domString += '</div>';
//   domString += '<div class="form-group">';
//   domString += '<label for="Longitude">Longitude:</label>';
//   domString += '<input type="text" class="form-control" id="Longitude" placeholder="100.256°">';
//   domString += '</div>';
//   domString += '<div class="form-group">';
//   domString += '<label for="Temperature">Temperature - Celsius</label>';
//   domString += '<input type="number" class="form-control" id="Temperature" placeholder="24°">';
//   domString += '</div>';
//   domString += '<div class="form-group">';
//   domString += '<label for="Depth">Depth:</label>';
//   domString += '<input type="text" class="form-control" id="Depth" placeholder="1,600ft">';
//   domString += '</div>';
//   domString += '<div class="form-group">';
//   domString += '<label for="Current">Longitude:</label>';
//   domString += '<input type="text" class="form-control" id="Current" placeholder="GulStream">';
//   domString += '</div>';
//   domString += '<div class="form-group">';
//   domString += '<label for="Pressure">Pressure</label>';
//   domString += '<input type="number" class="form-control" id="Pressure" placeholder="37.25 atm">';
//   domString += '</div>';
//   domString += '<button type="submit" class="btn btn-dark" id="data-creator">Add Enviromental Data</button>';
//   domString += '</form>';

  utils.printToDom('modalBodyEditEnviroment', domString);
});


export default { editEnviroData };
