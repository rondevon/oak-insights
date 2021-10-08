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
  chartValues: any[][] = [[],[],[],[]];
  
  operatingHoursTotals: any[] = [
    { type:'Open Hours', value: '4000 kWH', color: 'var(--color8'},
    { type:'Prep Hours', value: '800 kWH', color: 'var(--color5'},
    { type:'Non-Operating Hours', value: '1000 kWH', color:'var(--color11'},
    { type:'Closed Hours', value: '6000 kWH', color:'var(--color6'},
  ];

  setOperatingHoursData() {
    this.data && this.data.values && this.data.values.forEach((value: any []) => {
        value.forEach((item: any, index: any) => {
          this.chartValues[index].push(item);
        });
    });

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
          name: 'Operating',
          type: 'column',
          color: '#4164ADCC',
          data: this.data.values_open,
        },
        {
          name: 'Preparatory',
          type: 'column',
          color: '#7DC3BE',
          data: this.data.values_preparatory,
        },
        {
          name: 'Non-Operating',
          type: 'column',
          color: '#cccccc',
          data: this.data.values_non_operating,
        },
        {
          name: 'Closed',
          type: 'column',
          color: '#F8A992',
          data: this.data.values_closed,
        },
      ],
    });
  }

  ngOnInit(): void {}

  ngOnChanges() {
    this.setOperatingHoursData();
  }
}
