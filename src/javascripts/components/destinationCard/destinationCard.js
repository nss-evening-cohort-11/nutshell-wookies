const buildDestinationCard = (destination) => {
  let domString = '';
  domString += '<div class="card" style="width: 18rem;">';
  domString += '<img src="..." class="card-img-top" alt="...">';
  domString += '<div class="card-body">';
  domString += `<h5 class="card-title">${destination.name}</h5>`;
  domString += '<p class="card-text">Some quick example text to build on the card title and make up the bulk of the card content.</p>';
  domString += '<a href="#" class="btn btn-primary">Go somewhere</a>';
  domString += '</div>';
  domString += '</div>';

  return domString;
};

export default { buildDestinationCard };
