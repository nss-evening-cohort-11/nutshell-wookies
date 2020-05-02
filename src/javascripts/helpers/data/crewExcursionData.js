import axios from 'axios';
import apiKeys from '../apiKeys.json';

const baseUrl = apiKeys.firebaseKeys.databaseURL;

const getCrewByExcursionId = (excursionId) => new Promise((resolve, reject) => {
  axios.get(`${baseUrl}/crewMembersExcursion.json?orderBy="excursionId"&equalTo="${excursionId}"`)
    .then((response) => {
      const allCrewExcursions = response.data;
      const crewExcursions = [];
      Object.keys(allCrewExcursions).forEach((crewExcursionId) => {
        allCrewExcursions[crewExcursionId].id = crewExcursionId;
        crewExcursions.push(allCrewExcursions[crewExcursionId]);
      });
      resolve(crewExcursions);
    })
    .catch((err) => reject(err));
});

export default { getCrewByExcursionId };
