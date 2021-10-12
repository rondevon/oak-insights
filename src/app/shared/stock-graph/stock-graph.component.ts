import { DatePipe } from '@angular/common';
import { Component, Input, OnInit } from '@angular/core';
import { StockChart } from 'angular-highcharts';
@Component({
  selector: 'app-stock-graph',
  templateUrl: './stock-graph.component.html',
  styleUrls: ['./stock-graph.component.scss']
})
export class StockGraphComponent implements OnInit {
  pipe = new DatePipe('en-GB');
  @Input('data') data: any= {};
  chart: any = {};
  consumptionTotals: any[] = [];
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


  constructor() { }
  ngOnInit(): void {
    
    

  }
  ngOnChanges() {
    this.setStockGraphData();
  }
  setStockGraphData() {

    this.consumptionTotals = [
      { type:'Peak Consumption', value: 272 +'KwH', color: 'var(--color6'},
      { type:'Average Consumption', value: 230 +'KwH', color: 'var(--color8'},
      { type:'Lowest Consumption', value: 120 +'KwH', color:'var(--color5'},
    ];

    this.chart = new StockChart({
      rangeSelector: {
        selected: 1
    },
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
    series: [{
        name: 'Consumption (kWh)',
        data: this.data,
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
