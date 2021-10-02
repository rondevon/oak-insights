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
    credits: {
      enabled: false
    },
    series: [
      {
        name: 'Line 1',
        type:'line',
        data: [3,2,4]
      }
    ]
  });

  constructor() { }

  ngOnInit(): void {
  }

}


