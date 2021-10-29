import { Component, Input, OnInit } from '@angular/core';
import { Chart } from 'highcharts';

@Component({
  selector: 'app-notification-chart',
  templateUrl: './notification-chart.component.html',
  styleUrls: ['./notification-chart.component.scss']
})
export class NotificationChartComponent implements OnInit {
  @Input('data') data: any;
  chart: any = {};
  constructor() { }

  ngOnChanges() {
    this.setHourlyCostData();
  }
  ngOnInit(): void {}
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
            data: this.data.values_open,
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
    series.data = this.data.values_open;
    this.chart.addSeries(series);
  }
}
