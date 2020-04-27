import axios from 'axios';
import apiKeys from '../apiKeys.json';

const baseUrl = apiKeys.firebaseKeys.databaseURL;

const removeExcursion = (excursionId) => axios.delete(`${baseUrl}/excursions/${excursionId}.json`);

const getExcursion = () => new Promise((resolve, reject) => {
  axios.get(`${baseUrl}/excursions.json`)
    .then((response) => {
      const allExcursions = response.data;
      const excursions = [];
      if (allExcursions) {
        Object.keys(allExcursions).forEach((excursionsId) => {
          allExcursions[excursionsId].id = excursionsId;
          excursions.push(allExcursions[excursionsId]);
        });
        resolve(excursions);
      }
    })
    .catch((err) => reject(err));
});

const addExcursion = (newExcursion) => axios.post(`${baseUrl}/excursions.json`, newExcursion);

export default { getExcursion, removeExcursion, addExcursion };
