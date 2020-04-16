import destinationData from '../../helpers/data/destinationsData';
import utils from '../../helpers/utils';
import destinationCard from '../destinationCard/destinationCard';

const buildDestinationsContainer = () => {
  destinationData.getDestinations()
    .then((destinations) => {
      let domString = '';
      destinations.forEach((item) => {
        domString += destinationCard.buildDestinationCard(item);
      });
      utils.printToDom('destinations', domString);
    })
    .catch((error) => console.error('get destinations broke', error));
};

export default { buildDestinationsContainer };
