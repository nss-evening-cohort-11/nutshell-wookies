import speciesData from '../../helpers/data/speciesData';
import speciesCard from '../SpeciesCard/speciesCard';
import './speciesContainer.scss';
import utils from '../../helpers/utils';

const deleteSpecies = (e) => {
  e.preventDefault();
  const { speciesId } = e.target.id;
  speciesData.deleteSpecies(e.target.id)
    .then(() => {
      // eslint-disable-next-line no-use-before-define
      buildSpeciesContainer(speciesId);
    })
    .catch((err) => console.error(err));
};

const buildSpeciesContainer = () => {
  let domString = '';
  domString += '<div class="pageDisplay">';
  domString += '<h1 class="headingDisplay softEmboss"><p class="typewriter">Species</p></h1>';
  domString += '<div class="text-center m-5">';
  domString += '<input type="button" class="col-6 btn-default btn-lg crudButtonImage glowing" value="Add a New Species">';
  domString += '</div>';
  domString += '<div class="d-flex flex-wrap justify-content-center">';
  speciesData.getAllSpecies()
    .then((species) => {
      species.forEach((animal) => {
        domString += speciesCard.buildSingleSpeciesCard(animal);
      });
      domString += '</div>';
      utils.printToDom('species', domString);
      $('#species').on('click', '.delete-button', deleteSpecies);
    })
    .catch((err) => console.error(err));
};


export default { buildSpeciesContainer };
