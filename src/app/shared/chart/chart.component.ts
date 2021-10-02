import { Component, OnInit } from '@angular/core';
import { Chart } from 'angular-highcharts';

@Component({
  selector: 'app-chart',
  templateUrl: './chart.component.html',
  styleUrls: ['./chart.component.scss']
})
export class ChartComponent implements OnInit {

  chart = new Chart({
    title: {
      text: ''
    },
    legend: {
      enabled: false
    },
    xAxis: {
      title: {
          text: 'Hours',
      },
      tickInterval: 1
  },
  yAxis: {
      title: {
          text: 'Consumption (kwh)'
      }
  },
    plotOptions: {
      area: {
          fillColor: {
              linearGradient: { x1: 0, y1: 0, x2: 0, y2: 1},
              stops: [
                  [0, '#d7e6e991'],
                  [1, '#d7e6e991']
              ]
          },
          lineWidth: 2,
          marker: {
              enabled: true
          },
          shadow: false,
          states: {
              hover: {
                  lineWidth: 1
              }
          },
          threshold: null
      }
  },
    series: [
      {
        name: 'Consumption (kwh)',
        type:'area',
        pointInterval: 10,
        data: [[0,85],[1,88],[2,90],[3,80],[4,82],[5,85],[6,100],[7,110],[8,112],[9,100],[10,150],[11,155],[12,190],[13,185],[14,170],[15,185],[16,150],[17,145],[18,140],[19,130],[20,100],[21,90],[22,85],[23,90]]
      }
    ]
  });

  constructor() { }

  ngOnInit(): void {
  }

}


