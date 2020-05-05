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

const addCrewExcursion = (newCrewExcursion) => axios.post(`${baseUrl}/crewMembersExcursion.json`, newCrewExcursion);

const deleteCrewExcursion = (crewExcursionId) => axios.delete(`${baseUrl}/crewMembersExcursion/${crewExcursionId}.json`);

export default { getCrewByExcursionId, addCrewExcursion, deleteCrewExcursion };
