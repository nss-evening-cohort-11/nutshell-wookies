
import axios from 'axios';
import apiKeys from '../apiKeys.json';

const baseUrl = apiKeys.firebaseKeys.databaseURL;

const getEnvironmentalData = () => new Promise((resolve, reject) => {
  axios.get(`${baseUrl}/envReadings.json`)
    .then((response) => {
      const demEnviroData = response.data;
      const enviroData = [];
      console.error(demEnviroData);
      if (demEnviroData) {
        Object.keys(demEnviroData).forEach((enviroId) => {
          demEnviroData[enviroId].id = enviroId;
          enviroData.push(demEnviroData[enviroId]);
        });
      }
      resolve(enviroData);
    })
    .catch((err) => reject(err));
});

const deleteEnviroRead = (enviroId) => axios.delete(`${baseUrl}/envReadings/${enviroId}.json`);

const addEnviroData = (newEnviroData) => axios.post(`${baseUrl}/envReadings.json`, newEnviroData);

export default {
  getEnvironmentalData,
  deleteEnviroRead,
  addEnviroData,
};
