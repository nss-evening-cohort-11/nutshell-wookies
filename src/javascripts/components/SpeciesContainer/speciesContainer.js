import speciesData from '../../helpers/data/speciesData';
import speciesCard from '../SpeciesCard/speciesCard';
import './speciesContainer.scss';
import utils from '../../helpers/utils';

const buildSpeciesContainer = () => {
  let domString = '<h1 class="pageTitle text-center">Species</h1>';
  // const user = firebase.auth().currentUser;
  // if (user != null) {}
  domString += '<div class="d-flex flex-wrap justify-content-center">';
  speciesData.getAllSpecies()
    .then((species) => {
      species.forEach((animal) => {
        domString += speciesCard.buildSingleSpeciesCard(animal);
      });
      domString += '</div>';
      utils.printToDom('species', domString);
    })
    .catch((err) => console.error(err));
};

export default { buildSpeciesContainer };
