import utils from '../../helpers/utils';
import envReadings from '../../helpers/data/envReadings';

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
      domString += '<label for="edit-enviroment-Url">Image Url</label>';
      domString += `<input type="text" class="form-control" id="edit-enviroment-Url" placeholder="image Url" value ="${selectedEnviroment.Url}">`;
      domString += '</div>';
      domString += '<div class="form-group">';
      domString += '<label for="edit-enviroment-Timestamp">TimeStamp</label>';
      domString += `<input type="text" class="form-control" id="edit-enviroment-TimeStamp" placeholder="TimeStamp" value ="${selectedEnviroment.TimeStamp}">`;
      domString += '</div>';
      domString += '<div class="form-group">';
      domString += '<label for="edit-enviroment-Latitude">Latitude</label>';
      domString += `<input type="text" class="form-control" id="edit-enviroment-Latitude" placeholder="Latitude" value ="${selectedEnviroment.Latitude}">`;
      domString += '</div>';
      domString += '<div class="form-group">';
      domString += '<label for="edit-enviroment-Longitude">Longitude</label>';
      domString += `<input type="text" class="form-control" id="edit-enviroment-Longitude" placeholder="Longitude" value ="${selectedEnviroment.Longitude}">`;
      domString += '</div>';
      domString += '<div class="form-group">';
      domString += '<label for="edit-enviroment-Temperature">Temperature</label>';
      domString += `<input type="text" class="form-control" id="edit-enviroment-Temperature" placeholder="Temperature" value ="${selectedEnviroment.Temperature}">`;
      domString += '</div>';
      domString += '<div class="form-group">';
      domString += '<label for="edit-enviroment-Temperature">Temperature</label>';
      domString += `<input type="text" class="form-control" id="edit-enviroment-Temperature" placeholder="Temperature" value ="${selectedEnviroment.Temperature}">`;
      domString += '</div>';
      domString += '<div class="form-group">';
      domString += '<label for="edit-enviroment-Depth">Depth</label>';
      domString += `<input type="text" class="form-control" id="edit-enviroment-Depth" placeholder="Depth" value ="${selectedEnviroment.Depth}">`;
      domString += '</div>';
      domString += '<div class="form-group">';
      domString += '<label for="edit-enviroment-Current">Current</label>';
      domString += `<input type="text" class="form-control" id="edit-enviroment-Current" placeholder="Current" value ="${selectedEnviroment.Current}">`;
      domString += '</div>';
      domString += '<div class="form-group">';
      domString += '<label for="edit-enviroment-Pressure">Pressure</label>';
      domString += `<input type="text" class="form-control" id="edit-enviroment-Pressure" placeholder="Pressure" value ="${selectedEnviroment.Pressure}">`;
      domString += '</div>';
      utils.printToDom('modalBodyEditEnviroment', domString);
    })
    .catch((err) => console.error('could not edit enviro', err));
};
export default { editEnviroData };
