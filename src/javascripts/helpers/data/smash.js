import speciesData from './speciesData';
import speciesExcursionData from './speciesExcursionData';
import envReadingsData from './envReadings';
import envirReadingExcursionData from './envirReadingExcursionData';


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

const getAvailEnvReadings = (excursionId) => new Promise((resolve, reject) => {
  envReadingsData.getEnvironmentalData()
    .then((envReadings) => {
      envirReadingExcursionData.getEnvirReadingExcursionbyExcursionId(excursionId)
        .then((envReadingExcursion) => {
          const availEnvReadings = [];
          envReadings.forEach((reading) => {
            const exists = envReadingExcursion.find((x) => x.envReadingId === reading.id);
            if (exists === undefined) {
              availEnvReadings.push(reading);
            }
          });
          resolve(availEnvReadings);
        });
    })
    .catch((err) => reject(err));
});

export default { getAvailSpecies, getSpeciesinExcursion, getAvailEnvReadings };
