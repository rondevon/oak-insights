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
  operatingHoursTotals: any[] = [];
  
    setOperatingHoursData() {
    this.data && this.data.values && this.data.values.forEach((value: any []) => {
        value.forEach((item: any, index: any) => {
          this.chartValues[index].push(item);
        });
    });
    this.operatingHoursTotals = [
      { type:'Open Hours', value: this.data.open_total +'KwH', color: 'var(--color8'},
      { type:'Prep Hours', value: this.data.preparatory_total +'KwH', color: 'var(--color5'},
      { type:'Non-Operating Hours', value: this.data.non_operating_total +'KwH', color:'var(--color11'},
      { type:'Closed Hours', value: this.data.closed_total +'KwH', color:'var(--color6'},
    ];

    this.chart = new Chart({
      title: {
        text: '',
      },
      chart:{
        marginTop: 40,
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
        pointFormat: '{series.name}: {point.y} kWh<br/>Total: {point.stackTotal} kWh',
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
