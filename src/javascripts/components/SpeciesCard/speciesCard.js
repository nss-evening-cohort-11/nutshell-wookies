import './speciesCard.scss';

const buildSingleSpeciesCard = (species) => {
  let domString = '';
  domString += `
    <div class="card speciesCard text-center mb-5" id="${species.id}">
      <img src="${species.imageUrl}" class="card-img-top" alt="..."/>
      <h4 class="card-title">${species.type}</h4>
      <p class="card-text">${species.description}</p>
      <p class="card-text">Color: ${species.color}</p>
      <p class="card-text">Depth: ${species.depth}</p>
      <p class="card-text">Location: ${species.destinationId}</p>
    </div>`;
  return domString;
};

export default { buildSingleSpeciesCard };
