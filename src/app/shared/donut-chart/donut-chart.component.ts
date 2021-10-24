import { Component, Input, OnInit } from '@angular/core';
import { Chart } from 'angular-highcharts';
@Component({
  selector: 'app-donut-chart',
  templateUrl: './donut-chart.component.html',
  styleUrls: ['./donut-chart.component.scss'],
})
export class DonutChartComponent implements OnInit {
  constructor() {}
  @Input('data') data: any;
  @Input('total') total: any;
  chart: any = {};

  ngOnInit(): void {

  }

  ngOnChanges() {
    if(this.data && this.data.length > 0){
      this.setDonutChartData(this.total, this.data);
    }
  }

  setDonutChartData(total: string, seriesData: any) {
    this.chart = new Chart({
      chart: {
        height: 300,
      },
      title: {
        text: total,
        verticalAlign: 'middle',
        floating: true,
        style: {
          fontSize: '24px',
          fontWeight: 'bold',
        },
      },
      credits: { enabled: false },
      exporting: { enabled: false },
      tooltip: {
        pointFormat: '<b>{point.percentage:.1f}%</b>',
      },
      plotOptions: {
        pie: {
          colors: ['#364096', '#4164AD', '#F3837A', '#70c49c'],
          size: '100%',
          innerSize: '70%',
          depth: 45,
          dataLabels: {
            enabled: false,
          },
        },
      },
      series: [
        {
          type: 'pie',
          data: seriesData,
        },
      ],
    });
  }
}
