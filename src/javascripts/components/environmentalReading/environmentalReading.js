
import axios from 'axios';
import apiKeys from '../apiKeys.json';

const baseUrl = apiKeys.firebaseKeys.databaseURL;

const getCows = () => new Promise((resolve, reject) => {
  axios.get(`${baseUrl}/cows.json`)
    .then((response) => {
      const demCows = response.data;
      const cows = [];
      if (demCows) {
        Object.keys(demCows).forEach((cowId) => {
          demCows[cowId].id = cowId;
          cows.push(demCows[cowId]);
        });
      }

      resolve(cows);
    })
    .catch((err) => reject(err));
});

const getEnvironmentalData = () => new Promise((resolve, reject) => {
  axios.get(${baseUrl}/environmentalSeedData.json)
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