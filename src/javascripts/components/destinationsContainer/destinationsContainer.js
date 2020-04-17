import destinationData from '../../helpers/data/destinationsData';
import utils from '../../helpers/utils';
import destinationCard from '../destinationCard/destinationCard';

const buildDestinationsContainer = () => {
  destinationData.getDestinations()
    .then((destinations) => {
      let domString = '';
      domString += '<div class="pageDisplay">';
      domString += '<h1 class="headingDisplay softEmboss"><p class="typewriter">Destinations</p></h1>';
      domString += '<div class="text-center m-5">';
      domString += '<input type="button" class="col-6 btn-default btn-lg crudButtonImage glowing" value="Add a New Destination">';
      domString += '</div>';
      domString += '<div class="d-flex flex-wrap">';
      destinations.forEach((item) => {
        domString += '<div class="col-md-3">';
        domString += destinationCard.buildDestinationCard(item);
        domString += '</div>';
      });
      domString += '</div>';
      domString += '</div>';
      utils.printToDom('destinations', domString);
    })
    .catch((error) => console.error('get destinations broke', error));
};

export default { buildDestinationsContainer };