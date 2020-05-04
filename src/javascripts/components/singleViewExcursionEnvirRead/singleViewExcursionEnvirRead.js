import smash from '../../helpers/data/smash';
import envirReadingExcursionData from '../../helpers/data/envirReadingExcursionData';
import envReadExcursionComponent from '../singleEnvirReadCard/singleEnvirReadCard';
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

const chartData = [{
  destination: 'USA',
  reading: 2025,
}, {
  destination: 'China',
  reading: 1882,
}, {
  destination: 'Japan',
  reading: 1809,
}, {
  destination: 'Germany',
  reading: 1322,
}, {
  destination: 'UK',
  reading: 1122,
}, {
  destination: 'France',
  reading: 1114,
}, {
  destination: 'India',
  reading: 984,
}, {
  destination: 'Spain',
  reading: 711,
}, {
  destination: 'Netherlands',
  reading: 665,
}, {
  destination: 'Russia',
  reading: 580,
}, {
  destination: 'South Korea',
  reading: 443,
}, {
  destination: 'Canada',
  reading: 441,
}, {
  destination: 'Brazil',
  reading: 395,
}];
const createChart = (data, key) => {
// loop over the data
use key name data[key]
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
      domString += '<div id="chartDepthDiv"></div>';
      domString += '<div id="chartTempDiv"></div>';
      domString += '<div id="chartCurrentDiv"></div>';
      domString += '</div>';
      utils.printToDom('single-view-excursion-envir-read', domString);
      barChart.buildChart('chartDepthDiv', createChart(envReading, 'Temperature'), 'Depth');
      barChart.buildChart('chartTempDiv', chartData, 'Temperature');
      barChart.buildChart('chartCurrentDiv', chartData, 'Current');
    })
    .catch((err) => console.error('no env readings for you', err));
};

const envExcursionEvent = () => {
  $('body').on('click', '.delete-envir-read-excursion-btn', removeEnvirReadExcursion);
};

export default { buildAllEnvExcursionCards, envExcursionEvent };
