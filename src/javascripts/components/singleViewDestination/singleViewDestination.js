import destinationData from '../../helpers/data/destinationsData';

const viewExcursionDestination = (excursionDestination) => {
  console.error('viewExcursionDestination', excursionDestination);
  destinationData.getDestinations()
    .then((destination) => {
      let domString = '';
      destination.forEach((location) => {
        console.error('locationId', location.id);
        if (location.Id === excursionDestination) {
          domString += `<div class="card cardDisplay" id=${location.id}>`;
          domString += `<img src="${location.imageUrl}" class="card-img-top imageFit" alt="${destination.alt}">`;
          domString += '<div class="card-body">';
          domString += `<h5 class="card-title">${location.name}</h5>`;
          domString += `<p class="card-text font-italic">${location.country}</p>`;
          domString += '</div>';
          domString += '</div>';
        }
        return domString;
      });
    })
    .catch((err) => console.error('could not display excrusion destination', err));
};

export default { viewExcursionDestination };
