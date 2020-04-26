import axios from 'axios';
import apiKeys from '../apiKeys.json';

const baseUrl = apiKeys.firebaseKeys.databaseURL;

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

export default { getExcursion };
