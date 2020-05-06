import smash from '../../helpers/data/smash';
import envirReadingExcursionData from '../../helpers/data/envirReadingExcursionData';
import envReadExcursionComponent from '../singleEnvirReadCard/singleEnvirReadCard';
// import envReadingData from '../../helpers/data/envReadings/envReadings';
import utils from '../../helpers/utils';
import barChart from '../barChart/barChart';

const removeEnvirReadExcursion = (e) => {
  const excursionId = e.target.closest('.pageDisplay').dataset.id;
  const envirReadExcursionId = e.target.closest('.card').id;
  envirReadingExcursionData.deleteEnvirReadExcursion(envirReadExcursionId)
    .then(() => {
      // eslint-disable-next-line no-use-before-define
      buildAllEnvExcursionCards(excursionId);
    })
    .catch((err) => console.error('cannot delete', err));
};

const createChart = (data, key) => {
  const chartData = [];
  data.forEach((dati) => {
    const newDataPoint = {
      destination: dati.destinationId,
      reading: dati[key],
    };
    chartData.push(newDataPoint);
  });
  return chartData;
};

const buildAllEnvExcursionCards = (excursionId) => {
  smash.getEnvirReadingInExcursion(excursionId)
    .then((envReading) => {
      let domString = '';
      domString += '<div id="single-view-envir-reading-excursion">';
      domString += '<h2> Log Readings </h2>';
      envReading.forEach((reading) => {
        domString += envReadExcursionComponent.buildSingleEnvReadExcursionCard(reading);
      });
      if (envReading.length > 0) {
        domString += '<h2> Depth Chart <span class="chart-unit"> (Feet) </span> </h2>';
        domString += '<div class="cardDisplay" id="chartDepthDiv"></div>';
        domString += '<h2> Temperature Chart <span class="chart-unit"> (Celsius) </span> </h2>';
        domString += '<div class="cardDisplay" id="chartTempDiv"></div>';
        domString += '<h2> Depth Current <span class="chart-unit"> (Kilometer Per Hour) </span> </h2>';
        domString += '<div class="cardDisplay" id="chartCurrentDiv"></div>';
      }
      domString += '</div>';
      utils.printToDom('single-view-excursion-envir-read', domString);
      barChart.buildChart('chartDepthDiv', createChart(envReading, 'Depth'), 'Depth');
      barChart.buildChart('chartTempDiv', createChart(envReading, 'Temperature'), 'Temperature');
      barChart.buildChart('chartCurrentDiv', createChart(envReading, 'Current'), 'Current');
    })
    .catch((err) => console.error('no env readings for you', err));
};

// const envExcursionEvent = () => {
//   $('body').on('click', '.delete-envir-read-excursion-btn', removeEnvirReadExcursion);
// };

export default { buildAllEnvExcursionCards, removeEnvirReadExcursion };
