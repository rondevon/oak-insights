import { DatePipe } from '@angular/common';
import { Component, Input, OnInit } from '@angular/core';
import { StockChart } from 'angular-highcharts';

import { ApiService } from 'src/app/services/api.service';
@Component({
  selector: 'app-stock-graph',
  templateUrl: './stock-graph.component.html',
  styleUrls: ['./stock-graph.component.scss']
})
export class StockGraphComponent implements OnInit {
  pipe = new DatePipe('en-GB');
  //data: any= {};
  chart: any = {};
  consumptionTotals: any[] = [];
  stockChartData: any = {};
  selectedMonth: string = this.pipe.transform(new Date(), 'MMMM') || '';
  monthList: String[] = [
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
    'July',
    'August',
    'September',
    'October',
    'November',
    'December'
  ];


  constructor(private apiService: ApiService) { }

  getStockChartDetails(selectedMonth: String){
    this.apiService.getStockChartData(selectedMonth).subscribe((data : any) => {
      this.stockChartData = data.data;
      this.setStockGraphData();
    });
  }

  updateMonth() {
    this.getStockChartDetails(this.selectedMonth);
    
  }
  ngOnInit(): void {
    this.updateMonth();
  }

  setStockGraphData() {

    this.consumptionTotals = [
      { type:'Peak Consumption', value: 272 +'KwH', color: 'var(--color6'},
      { type:'Average Consumption', value: 230 +'KwH', color: 'var(--color8'},
      { type:'Lowest Consumption', value: 120 +'KwH', color:'var(--color5'},
    ];
    console.log('data', this.stockChartData.values)
    console.log('time',new Date(1630781400));
    this.chart = new StockChart({
      chart:{
        marginTop: 40,
        height: 500,
      },
      exporting: { 
        enabled: false 
      },
    title: {
        text: ''
    },
    rangeSelector: {
            allButtonsEnabled: true,
            buttons: [{
              type: 'minute',
              count: 1000,
              text: '5 Min',
              dataGrouping: {
                  forced: true,
                  units: [['minute', [5]]]
              }
          },{
                type: 'hour',
                count: 24,
                text: 'Hour',
                dataGrouping: {
                    forced: true,
                    units: [['hour', [1]]]
                }
            },{
              type: 'day',
              count: 31,
              text: 'Day',
              dataGrouping: {
                  forced: true,
                  units: [['day', [1]]]
              }
              }],
            buttonTheme: {
                width: 60
            },
            selected: 0
        },
    series: [{
        name: 'Consumption (kWh)',
        data: this.stockChartData.values,
        type: 'area',
        threshold: null,
        color:'#364096',
        fillColor: {
          linearGradient: {
              x1: 0,
              y1: 0,
              x2: 0,
              y2: 1
          },
          stops: [
              [0, '#465da430'],
              [1, '#7DC3BE20']
          ]
      }

    }]
    });
  }
}
