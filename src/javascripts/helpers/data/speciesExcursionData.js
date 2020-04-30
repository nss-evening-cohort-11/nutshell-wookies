import axios from 'axios';
import apiKeys from '../apiKeys.json';

const baseUrl = apiKeys.firebaseKeys.databaseURL;

const getSpeciesExcursionbyExcursionId = (excursionId) => new Promise((resolve, reject) => {
  axios.get(`${baseUrl}/speciesExcursion.json?orderBy="excursionId"&equalTo="${excursionId}"`)
    .then((response) => {
      const allSpeciesExcursions = response.data;
      const speciesExcursions = [];
      Object.keys(allSpeciesExcursions).forEach((speciesExcursionId) => {
        allSpeciesExcursions[speciesExcursionId].id = speciesExcursionId;
        speciesExcursions.push(allSpeciesExcursions[speciesExcursionId]);
      });
      resolve(speciesExcursions);
    })
    .catch((err) => reject(err));
});

const addSpeciesExcursion = (newSpeciesExcursion) => axios.post(`${baseUrl}/speciesExcursion.json`, newSpeciesExcursion);

export default { getSpeciesExcursionbyExcursionId, addSpeciesExcursion };
