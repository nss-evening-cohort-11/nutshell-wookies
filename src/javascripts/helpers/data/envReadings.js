
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

// const getSingleEnviroRead = (enviroId) => axios.get(`${baseUrl}/envReadings/${enviroId}.json`);
const deleteEnviroRead = (enviroId) => axios.delete(`${baseUrl}/envReadings/${enviroId}.json`);
// const addEnviroRead = (newData) => axios.post(`${baseUrl}/envReadings.json`, newData);
// const updataRead = (enviroId, modifiedData) => axios.put(`${baseUrl}envReadings/${enviroId},json`, modifiedData);

export default { getEnvironmentalData, deleteEnviroRead };
