import axios from 'axios';
import apiKeys from '../apiKeys.json';

const baseUrl = apiKeys.firebaseKeys.databaseURL;

const getAllCrew = () => new Promise((resolve, reject) => {
  axios.get(`${baseUrl}/crew.json`)
    .then((response) => {
      const demCrew = response.data;
      const crew = [];
      Object.keys(demCrew).forEach((crewId) => {
        demCrew[crewId].id = crewId;
        crew.push(demCrew[crewId]);
      });
      resolve(crew);
    })
    .catch((error) => reject(error));
});

const getCrewById = (crewId) => axios.get(`${baseUrl}/crew/${crewId}.json`);

const deleteCrew = (crewId) => axios.delete(`${baseUrl}/crew/${crewId}.json`);

export default { getAllCrew, deleteCrew, getCrewById };
