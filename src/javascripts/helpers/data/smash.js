import speciesData from './speciesData';
import speciesExcursionData from './speciesExcursionData';

const getAvailSpecies = (excursionId) => new Promise((resolve, reject) => {
  speciesData.getAllSpecies()
    .then((species) => {
      speciesExcursionData.getSpeciesExcursionbyExcursionId(excursionId)
        .then((speciesExcursion) => {
          const availSpecies = [];
          species.forEach((creature) => {
            const exists = speciesExcursion.find((x) => x.speciesId === creature.id);
            if (exists === undefined) {
              availSpecies.push(creature);
            }
          });
          resolve(availSpecies);
        });
    })
    .catch((err) => reject(err));
});

const getSpeciesinExcursion = (excursionId) => new Promise((resolve, reject) => {
  speciesData.getAllSpecies()
    .then((species) => {
      speciesExcursionData.getSpeciesExcursionbyExcursionId(excursionId)
        .then((speciesExcursion) => {
          const availSpecies = [];
          species.forEach((creature) => {
            const exists = speciesExcursion.find((x) => x.speciesId === creature.id);
            if (exists !== undefined) {
              const newCreature = { ...creature };
              newCreature.speciesExcursionId = speciesExcursion.id;
              availSpecies.push(newCreature);
            }
          });
          resolve(availSpecies);
        });
    })
    .catch((err) => reject(err));
});

export default { getAvailSpecies, getSpeciesinExcursion };
