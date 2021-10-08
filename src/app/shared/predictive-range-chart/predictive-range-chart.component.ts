import { Component, Input, OnInit } from '@angular/core';
import { Chart } from 'angular-highcharts';

@Component({
  selector: 'app-predictive-range-chart',
  templateUrl: './predictive-range-chart.component.html',
  styleUrls: ['./predictive-range-chart.component.scss'],
})
export class PredictiveRangeChartComponent implements OnInit {
  @Input('data') data: any;
  chart: any = {};

  constructor() {}

  ngOnInit(): void {}

  ngOnChanges() {
    this.setYearlyConsumption();
  }

  setYearlyConsumption() {
    console.log('Data received from response', this.data);
    this.chart = new Chart({
      title: {
        text: '',
      },
      exporting: { enabled: false },
      legend: {
        enabled: false,
      },
      xAxis: {
        categories: this.data.x_axis
      },

      yAxis: {
        title: {
          text: null,
        },
      },

      tooltip: {
        shared: true,
        valueSuffix: 'kWH',
      },

      series: [
        {
          name: 'Actual',
          type: 'line',
          data: this.data.values,
          zIndex: 1,
          color: '#4164AD',
        },
        {
          name: 'Predicted Range',
          data: this.data.predictive_range,
          type: 'arearange',
          lineWidth: 0,
          linkedTo: ':previous',
          color: '#4164AD',
          fillOpacity: 0.3,
          zIndex: 0,
          marker: {
            enabled: false,
          },
        },
      ],
    });
  }
}
