import { Component, Input, OnInit } from '@angular/core';
import { Chart } from 'angular-highcharts';

@Component({
  selector: 'app-line-column',
  templateUrl: './line-column.component.html',
  styleUrls: ['./line-column.component.scss']
})
export class LineColumnComponent implements OnInit {
  @Input('data') data: any = {};

  chart: any = {};

  ngOnChanges() {
    this.setData();
  }

  setData() {
    this.chart = new Chart({
      title: {
        text: '',
      },
      legend: {
        enabled: false,
      },
      exporting: { enabled: false },
      xAxis: {
        title: {
          text: 'Hours',
        },
        tickInterval: 1,
      },
      yAxis: {
        title: {
          text: 'Energy (kwH)',
        },
      },
      plotOptions: {
        area: {
          fillColor: {
            linearGradient: { x1: 0, y1: 0, x2: 0, y2: 1 },
            stops: [
              [0, '#d7e6e991'],
              [1, '#d7e6e991'],
            ],
          },
          lineWidth: 2,
          marker: {
            enabled: true,
          },
          shadow: false,
          states: {
            hover: {
              lineWidth: 1,
            },
          },
          threshold: null,
        },
      },
      series: [
        {
          name: 'Cost (£)',
          type: 'area',
          data: this.data.predictive_values,
        },
        {
          name: 'Actual Consumption (kwH)',
          type: 'column',
          data: this.data.values,
          pointWidth:20,
          color: {
            linearGradient: {
              x1: 0,
              x2: 0,
              y1: 0,
              y2: 1
            },
            stops: [
              [0, '#70c49c'],
              [1, '#4164AD']
            ]
          }
        },
        {
          name: 'Predicted Consumtion (kwH)',
          type: 'line',
          data: this.data.predictive_values,
          color: {
            linearGradient: {
              x1: 0,
              x2: 0,
              y1: 0,
              y2: 1
            },
            stops: [
              [0, '#70c49c'],
              [1, '#4164AD']
            ]
          }
        },
      ],
    });
  }


  constructor() {}

  ngOnInit(): void {}
  
}
