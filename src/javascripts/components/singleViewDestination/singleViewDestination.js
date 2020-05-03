import destinationData from '../../helpers/data/destinationsData';

const viewExcursionDestination = (excursionId) => {
  console.error('view excursion destination', excursionId);
  destinationData.getDestinations()
    .then((destination) => {
      let domString = '';
      destination.forEach((location) => {
        console.error(location.id);
        if (location.excursionId === excursionId) {
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
