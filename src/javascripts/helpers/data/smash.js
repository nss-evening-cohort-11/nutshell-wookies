import speciesData from './speciesData';
import speciesExcursionData from './speciesExcursionData';
import envReadingsData from './envReadings';
import envirReadingExcursionData from './envirReadingExcursionData';
import crewExcursionData from './crewExcursionData';
import crewData from './crewData';


const getAvailCrew = (excursionId) => new Promise((resolve, reject) => {
  crewData.getAllCrew()
    .then((crew) => {
      crewExcursionData.getCrewByExcursionId(excursionId)
        .then((crewExcursions) => {
          console.error('crew excursion', crewExcursions);
          const availCrew = [];
          crew.forEach((person) => {
            const exists = crewExcursions.find((x) => x.crewMembersId === person.id);
            console.error(exists);
            if (exists === undefined) {
              availCrew.push(person);
            }
          });
          resolve(availCrew);
        });
    })
    .catch((err) => reject(err));
});

const getCrewInExcursion = (excursionId) => new Promise((resolve, reject) => {
  crewData.getAllCrew()
    .then((crew) => {
      crewExcursionData.getCrewByExcursionId(excursionId)
        .then((crewExcursion) => {
          const availCrewExcursion = [];
          crew.forEach((person) => {
            const exists = crewExcursion.find((x) => x.crewMembersId === person.id);
            if (exists !== undefined) {
              const newPerson = { ...person };
              console.error('new person', newPerson);
              availCrewExcursion.push(newPerson);
            }
          });
          resolve(availCrewExcursion);
        });
    })
    .catch((err) => reject(err));
});

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
            const exists = envReadingExcursion.find((x) => x.envirReadingId === reading.id);
            if (exists === undefined) {
              availEnvReadings.push(reading);
            }
          });
          resolve(availEnvReadings);
        });
    })
    .catch((err) => reject(err));
});

const getEnvirReadingInExcursion = (excursionId) => new Promise((resolve, reject) => {
  envReadingsData.getEnvironmentalData()
    .then((readings) => {
      envirReadingExcursionData.getEnvirReadingExcursionbyExcursionId(excursionId)
        .then((envirReadExcursion) => {
          const availReadings = [];
          readings.forEach((reading) => {
            const exists = envirReadExcursion.find((x) => x.envirReadingId === reading.id);
            if (exists !== undefined) {
              const newReading = { ...reading };
              newReading.envirReadExcursionId = envirReadExcursion.id;
              availReadings.push(newReading);
            }
          });
          resolve(availReadings);
        });
    })
    .catch((err) => reject(err));
});
export default {
  getAvailSpecies,
  getAvailEnvReadings,
  getEnvirReadingInExcursion,
  getSpeciesinExcursion,
  getCrewInExcursion,
  getAvailCrew,
};
