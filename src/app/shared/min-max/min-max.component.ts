import { Component, Input, OnInit } from '@angular/core';
import { Chart } from 'angular-highcharts';
@Component({
  selector: 'app-min-max',
  templateUrl: './min-max.component.html',
  styleUrls: ['./min-max.component.scss']
})
export class MinMaxComponent implements OnInit {

  constructor() { }
  @Input('data') data: any= {};
  chart: any = {};

  ngOnInit(): void {
  }

  ngOnChanges() {
    this.setMinMaxData();
  }
  
  setMinMaxData() {
    this.chart = new Chart({
      chart:{
        marginTop: 40,
        height: 800,
        inverted: true
      },
      exporting: { 
        enabled: false 
      },
      title: {
        text: ''
    },

    xAxis: {
      gridLineWidth: 1,
      tickInterval: 1,
    },

    yAxis: {
      gridLineWidth: 0,
        title: {
            text: 'Energy ( kWh )'
        },
        
    },

    tooltip: {
        valueSuffix: 'kWh'
    },

    plotOptions: {
        columnrange: {
            dataLabels: {
                enabled: false,
                format: '{y} kWh'
            },
              borderRadius: 5,
              pointStart: 1
        }
        
    },

    legend: {
        enabled: false
    },

    series: [{
        name: 'Energy Min Max',
        data: [
            [49, 103],
            [56, 125],
            [12, 118],
            [17, 122],
            [60, 231],
            [37, 254],
            [60, 262],
            [67, 214],
            [35, 195],
            [13, 160],
            [87, 194],
            [90, 186],
            [49, 103],
            [56, 125],
            [12, 118],
            [17, 122],
            [60, 231],
            [37, 254],
            [60, 262],
            [67, 214],
            [35, 195],
            [13, 160],
            [87, 194],
            [90, 186],
            [87, 194],
            [90, 186],
            [49, 103],
            [56, 125],
            [12, 118],
            [17, 122],
            [60, 231],
            
        ],
        color:'#364096dd',
        type: 'columnrange',
    }]
    });
  }

}
