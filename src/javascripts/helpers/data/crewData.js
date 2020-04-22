import axios from 'axios';
import apiKeys from './apiKeys.json';

const baseUrl = apiKeys.firebaseKeys.databaseURL;

const getAllCrew = () => new Promise((resolve, reject) => {
  axios.get(`${baseUrl}/crew.json`)
    .then((response) => {
      const demCrew = response.data;
      const crew = [];
      if (crew) {
        Object.keys(demCrew).forEach((crewId) => {
          demCrew[crewId].id = crewId;
          crew.push(demCrew[crewId]);
        });
      }
      resolve(crew);
    })
    .catch((error) => reject(error));
});

const deleteCrew = (crewId) => axios.delete(`${baseUrl}/crew/${crewId}.json`);

const addNewCrew = (newCrew) => axios.post(`${baseUrl}/crew.json`, newCrew);

const getSingleCrew = (crewId) => axios.get(`${baseUrl}/crew/${crewId}.json`);

const updateCrew = (crewId, editedCrew) => axios.put(`${baseUrl}/crew/${crewId}.json`, editedCrew);

export default {
  getAllCrew,
  deleteCrew,
  addNewCrew,
  getSingleCrew,
  updateCrew,
};
