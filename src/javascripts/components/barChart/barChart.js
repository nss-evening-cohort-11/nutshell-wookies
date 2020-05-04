import * as am4core from '@amcharts/amcharts4/core';
import * as am4charts from '@amcharts/amcharts4/charts';

/* Chart code */


// Create chart instance
const buildChart = (divId, chartData, yAxisTitle) => {
  const chart = am4core.create(divId, am4charts.XYChart);

  // Add data
  chart.data = chartData;

  // Create axes

  const categoryAxis = chart.xAxes.push(new am4charts.CategoryAxis());
  categoryAxis.dataFields.category = 'destination';
  categoryAxis.renderer.grid.template.location = 0;
  categoryAxis.renderer.minGridDistance = 30;

  categoryAxis.renderer.labels.template.adapter.add('dy', (dy, target) => {
    if (target.dataItem && target.dataItem.index) {
      return dy + 25;
    }
    return dy;
  });

  chart.yAxes.push(new am4charts.ValueAxis());

  // Create series
  const series = chart.series.push(new am4charts.ColumnSeries());
  series.dataFields.valueY = 'reading';
  series.dataFields.categoryX = 'destination';
  series.name = yAxisTitle;
  series.columns.template.tooltipText = '{categoryX}: [bold]{valueY}[/]';
  series.columns.template.fillOpacity = 0.8;

  const columnTemplate = series.columns.template;
  columnTemplate.strokeWidth = 2;
  columnTemplate.strokeOpacity = 1;
};

export default { buildChart };
