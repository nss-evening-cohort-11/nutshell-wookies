import axios from 'axios';
import apiKeys from '../apiKeys.json';

const baseUrl = apiKeys.firebaseKeys.databaseURL;

const getAllCrew = () => new Promise((resolve, reject) => {
  axios.get(`${baseUrl}/crew.json`)
    .then((response) => {
      const demCrew = response.data;
      const crew = [];
      if (crew) {
        Object.keys(demCrew).forEach((crewId) => {
          demCrew[crewId].id = crewId;
          console.error('demCrews there?', demCrew);
          crew.push(demCrew[crewId]);
          console.error('resolve Crew?', crewId);
        });
      }
      resolve(crew);
    })
    .catch((error) => reject(error));
});

const deleteCrew = (crewId) => axios.delete(`${baseUrl}/crew/${crewId}.json`);

const addNewCrew = (newCrew) => axios.post(`${baseUrl}/species.json`, newCrew);

const getSingleCrew = (crewId) => axios.get(`${baseUrl}/crew/${crewId}.json`);

export default {
  getAllCrew,
  deleteCrew,
  addNewCrew,
  getSingleCrew,
};
