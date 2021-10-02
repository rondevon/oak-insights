import { Component, OnInit } from '@angular/core';
import { Chart } from 'angular-highcharts';

@Component({
  selector: 'app-stacked-bar-chart',
  templateUrl: './stacked-bar-chart.component.html',
  styleUrls: ['./stacked-bar-chart.component.scss']
})
export class StackedBarChartComponent implements OnInit {
  chart = new Chart({
    title: {
      text: ''
  },
  xAxis: {
      categories: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday','Sunday']
  },
  yAxis: {
      min: 0,
      title: {
          text: 'Consumption (kwh)'
      },
      stackLabels: {
          enabled: true,
          style: {
              fontWeight: 'bold',
              color:  'gray'
          }
      }
  },
  legend: {
      align: 'right',
      x: -30,
      verticalAlign: 'top',
      y: 25,
      floating: true,
      backgroundColor: 'white',
      borderColor: '#CCC',
      borderWidth: 1,
      shadow: false
  },
  tooltip: {
      headerFormat: '<b>{point.x}</b><br/>',
      pointFormat: '{series.name}: {point.y}<br/>Total: {point.stackTotal}'
  },
  plotOptions: {
      column: {
          stacking: 'normal',
          dataLabels: {
              enabled: true
          }
      }
  },
  series: [{
      name: 'John',
      type: 'column',
      data: [5, 3, 4, 7, 2]
  }, {
      name: 'Jane',
      type: 'column',
      data: [2, 2, 3, 2, 1]
  }, {
      name: 'Joe',
      type: 'column',
      data: [3, 4, 4, 2, 5]
  }]
  });

  constructor() { }

  ngOnInit(): void {
  }

}