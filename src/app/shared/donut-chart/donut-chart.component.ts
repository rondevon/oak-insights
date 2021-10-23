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
  chart: any = {};

  ngOnInit(): void {

  }

  ngOnChanges() {
    if (Object.keys(this.data[1]).length > 0) {
      if (this.data[0] == 'cost') {
        this.setDonutChartData('Total<br>2469', this.data[1].values_cost);
      }
      if (this.data[0] == 'consumption') {
        this.setDonutChartData(
          'Total<br>6052',
          this.data[1].values_consumption
        );
      }
      if (this.data[0] == 'emission') {
        this.setDonutChartData('Total<br>955', this.data[1].values_c02);
      }
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
