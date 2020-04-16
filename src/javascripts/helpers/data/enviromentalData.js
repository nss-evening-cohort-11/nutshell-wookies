
import axios from 'axios';
import apiKeys from '../apiKeys.json';

const baseUrl = apiKeys.firebaseKeys.databaseURL;

const getEnvironmentalData = () => new Promise((resolve, reject) => {
  axios.get(`${baseUrl}/envReadings.json`)
    .then((response) => {
      const demEnviroData = response.data;
      const enviroData = [];
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

const getSingleReading = (enviroId) => axios.get(`${baseUrl}/envReadings/${enviroId}.json`);

const deleteReading = (enviroId) => axios.delete(`${baseUrl}/envReadings/${enviroId}.json`);

const addReading = (newCow) => axios.post(`${baseUrl}/envReadings.json`, newCow);

const updateReading = (enviroId, modifiedCow) => axios.put(`${baseUrl}/envReadings/${enviroId}.json`, modifiedCow);

export default {
  getEnvironmentalData,
  getSingleReading,
  deleteReading,
  addReading,
  updateReading,

};
