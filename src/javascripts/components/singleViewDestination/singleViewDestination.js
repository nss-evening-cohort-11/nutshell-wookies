import destinationData from '../../helpers/data/destinationsData';
import utils from '../../helpers/utils';

const viewExcursionDestination = (excursionDestination) => {
  destinationData.getDestinations()
    .then((destination) => {
      const destinationId = excursionDestination;
      let domString = '';
      domString += '<h2>Destination</h2>';
      destination.forEach((location) => {
        if (location.id === destinationId) {
          domString += `<div class="card cardDisplay" id=${location.id}>`;
          domString += `<img src="${location.imageUrl}" class="card-img-top imageFit" alt="${destination.alt}">`;
          domString += '<div class="card-body">';
          domString += `<h5 class="card-title">${location.name}</h5>`;
          domString += `<p class="card-text font-italic">${location.country}</p>`;
          domString += '</div>';
          domString += '</div>';
        }
        utils.printToDom('singleViewDestination', domString);
      });
    })
    .catch((err) => console.error('could not display excrusion destination', err));
};

export default { viewExcursionDestination };
