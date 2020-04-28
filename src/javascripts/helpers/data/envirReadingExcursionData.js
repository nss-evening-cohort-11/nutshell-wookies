import axios from 'axios';
import apiKeys from '../apiKeys.json';

const baseUrl = apiKeys.firebaseKeys.databaseURL;

const getEnvirReadingExcursionbyExcursionId = (excursionId) => new Promise((resolve, reject) => {
  axios.get(`${baseUrl}/envReadExcursion.json?orderBy="excursionId"&equalTo="${excursionId}"`)
    .then((response) => {
      const allEnvReadingExcursions = response.data;
      const envReadingExcursions = [];
      Object.keys(allEnvReadingExcursions).forEach((envReadingExcursionsId) => {
        allEnvReadingExcursions[envReadingExcursionsId].id = envReadingExcursionsId;
        envReadingExcursions.push(allEnvReadingExcursions[envReadingExcursionsId]);
      });
      resolve(envReadingExcursions);
    })
    .catch((err) => reject(err));
});

const addEnvReadingExcursion = (newEnvReadingExcursion) => axios.post(`${baseUrl}/envReadExcursions.json`, newEnvReadingExcursion);

export default { getEnvirReadingExcursionbyExcursionId, addEnvReadingExcursion };
