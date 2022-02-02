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
  bntStyle1: String = 'open-days-button';
  bntStyle2: String = 'closed-days-button';
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
          text: 'Cost (£)',
        },
        plotLines: [{
          id: 'limit-max',
          color: 'var(--heatmap-color5)',
          dashStyle: 'ShortDash',
          width: 2,
          value: this.data.max_open,
          zIndex: 10,
          label: {
            text: 'Max',
            align: 'right',
            x: 0
        }
      },
      {
        id: 'limit-avg',
        color: 'var(--heatmap-color4)',
        dashStyle: 'ShortDash',
        width: 2,
        value: this.data.avg_open,
        zIndex: 10,
        label: {
          text: 'Avg',
          align: 'right',
          x: 0
        }
      }, 
      {
          id: 'limit-min',
          color: 'var(--heatmap-color2)',
          dashStyle: 'ShortDash',
          width: 2,
          value: this.data.min_open,
          zIndex: 10,
          label: {
            text: 'Min',
            align: 'right',
            x: 0
        }
      }]
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
            enabled: false,
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
          pointInterval: 10,
          data: this.data.data.values_open,
        },
      ],
    });
  }

  switchChart(switchType: string){

    this.chart.removeSeries(0);
    let series = {
        name: 'Cost (£)',
        type: 'area',
        pointInterval: 10,
        data: {}
    };
    if(switchType === 'Open'){
      series.data = this.data.data.values_open;
      this.bntStyle2 = 'closed-days-button' 
      this.bntStyle1 = 'open-days-button'
      this.chart.options.yAxis.plotLines[0].value = this.data.max_open
      this.chart.options.yAxis.plotLines[1].value = this.data.avg_open 
      this.chart.options.yAxis.plotLines[2].value = this.data.min_open 
    } else {
      series.data = this.data.data.values_closed;
      this.bntStyle2 = 'open-days-button' 
      this.bntStyle1 = 'closed-days-button'
      this.chart.options.yAxis.plotLines[0].value = this.data.max_closed
      this.chart.options.yAxis.plotLines[1].value = this.data.avg_closed 
      this.chart.options.yAxis.plotLines[2].value = this.data.min_closed 
    }
    this.chart.addSeries(series);
    
  }

  constructor() {}

  ngOnInit(): void {}
  
}


