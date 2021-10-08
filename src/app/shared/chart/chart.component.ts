import { Component, Input, OnInit } from '@angular/core';
import { Chart } from 'angular-highcharts';

@Component({
  selector: 'app-chart',
  templateUrl: './chart.component.html',
  styleUrls: ['./chart.component.scss'],
})


export class ChartComponent implements OnInit {
  @Input('data') data: any = {};
  @Input('showButtons') showButtons: boolean = false;
  chart: any = {};
  openValues: any[][] = [[],[]];
  
  ngOnChanges() {
    this.setHourlyCostData();
  }

  setHourlyCostData() {
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
          text: 'Consumption (kwh)',
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
          name: 'Consumption (kwh)',
          type: 'area',
          pointInterval: 10,
          data: this.data.values_open,
        },
      ],
    });
  }

  switchChart(switchType: string){
    if(switchType === 'Open'){
      this.chart.options.series[0].data = this.data.values_open;
    } else {
      this.chart.options.series[0].data = this.data.values_closed;
    }
    this.chart.redraw();
  }

  constructor() {}

  ngOnInit(): void {}
}


