import { Component, Input, OnInit} from '@angular/core';
import { Chart } from 'angular-highcharts';

@Component({
  selector: 'app-stacked-bar-chart',
  templateUrl: './stacked-bar-chart.component.html',
  styleUrls: ['./stacked-bar-chart.component.scss'],
})
export class StackedBarChartComponent implements OnInit {
  @Input('data') data: any = {};
  chart: any = {};
  chartValues: any[][] = [];
    prepArray: any[] = [];
    operArray: any[] = [];
    nonoperArray: any[] = [];
  setOperatingHoursData() {

    this.data.values.forEach((value: any, index1:any) => {
        value.forEach((item: any, index: any) => {
            this.chartValues[index1][index].push(item);
        })
    });

    console.log('This console',this.chartValues);


    this.chart = new Chart({
      title: {
        text: '',
      },
      exporting: { enabled: false },
      xAxis: {
        categories: this.data.x_axis,
      },
      yAxis: {
        min: 0,
        title: {
          text: 'Consumption (kwh)',
        },
        stackLabels: {
          enabled: false,
          style: {
            fontWeight: 'bold',
            color: 'gray',
          },
        },
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
        shadow: false,
      },
      tooltip: {
        headerFormat: '<b>{point.x}</b><br/>',
        pointFormat: '{series.name}: {point.y}<br/>Total: {point.stackTotal}',
      },
      plotOptions: {
        column: {
          stacking: 'normal',
          dataLabels: {
            enabled: false,
          },
        },
      },
      series: [
        {
          name: 'Non-Operating',
          type: 'column',
          color: '#cccccc',
          data: [1200, 3600, 4800, 6000, 2000, 2500, 4000],
        },
        {
          name: 'Operating',
          type: 'column',
          color: '#4164ADCC',
          data: [1400, 2400, 3600, 8000, 1000, 3500, 4200],
        },
        {
          name: 'Preparatory',
          type: 'column',
          color: '#7DC3BE',
          data: [300, 400, 400, 200, 500, 200, 500],
        },
      ],
    });
  }

  constructor() {}

  ngOnInit(): void {}

  ngOnChanges() {
    this.setOperatingHoursData();
  }
}
