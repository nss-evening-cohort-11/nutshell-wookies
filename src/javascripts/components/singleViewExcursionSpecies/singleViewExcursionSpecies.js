import utils from '../../helpers/utils';

const buildSpeciesExcursionCards = () => {
  const domString = '<h3>Species</h3>';
  utils.printToDom('single-view-excursion-species', domString);
};

export default { buildSpeciesExcursionCards };
