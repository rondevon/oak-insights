import { Component, Input, OnInit } from '@angular/core';
import { Chart } from 'angular-highcharts';

@Component({
  selector: 'app-multi-consumption-cost',
  templateUrl: './multi-consumption-cost.component.html',
  styleUrls: ['./multi-consumption-cost.component.scss']
})
export class MultiConsumptionCostComponent implements OnInit {
  loading: boolean = true;
  @Input('data') chart: any;
  @Input('title') title: string = '' ;
  @Input('description') description: string = '';
  // chart: any = {};

  constructor() { }

  ngOnInit(): void {
    this.setLoadCurveData();
  }

  setLoadCurveData() {
    this.chart = new Chart(
  {
    chart: {
        // plotBackgroundColor: null,
        // plotBorderWidth: 0,
        // plotShadow: false
    },
    title: {
        text: '',
        align: 'center',
        verticalAlign: 'middle',
        y: 60
    },
    tooltip: {
        pointFormat: '{series.name}: <b>{point.percentage:.1f}%</b>'
    },
    accessibility: {
        point: {
            valueSuffix: '%'
        }
    },
    plotOptions: {
        pie: {
            dataLabels: {
                enabled: true,
                distance: -50,
                style: {
                    fontWeight: 'bold',
                    color: 'white'
                }
            },
            startAngle: 360,
            endAngle: 360,
            center: ['50%', '50%'],
            size: '100%'
        }
    },
    series: [{
        type: 'pie',
        name: '',
        innerSize: '50%',
        data: [
           ['Chrome', 58.9],
            ['Firefox', 13.29],
            ['Internet Explorer', 13],
            ['Edge', 3.78],
            ['Safari', 3.42],
            {
              name: 'Other',
                y: 7.61,
                dataLabels: {
                    enabled: false
                }
            }
        ]
    }]
});
  }
}



