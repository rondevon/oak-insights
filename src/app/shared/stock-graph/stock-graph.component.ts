import { DatePipe } from '@angular/common';
import { Component, Input, OnInit } from '@angular/core';
import { StockChart } from 'angular-highcharts';
import { Chart } from 'angular-highcharts';

import { ApiService } from 'src/app/services/api.service';
@Component({
  selector: 'app-stock-graph',
  templateUrl: './stock-graph.component.html',
  styleUrls: ['./stock-graph.component.scss']
})
export class StockGraphComponent implements OnInit {
  @Input('data') data: any;
  pipe = new DatePipe('en-GB');
  //data: any= {};
  chart: any = {};
  consumptionTotals: any[] = [];
  stockChartData: any = {};
  selectedMonth: string = this.pipe.transform(new Date(), 'MMMM') || '';
  selectedType : string = 'energy';
  selectedGraph: string = '';
  unit: string = 'KwH'
  typeList: String[] = [
    'energy',
    'power',
    'current',
    'voltage',
    'power_factor'
  ];
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

  getStockChartDetails(selectedMonth: String, selectedType: String, selectedGraph: String){
    this.apiService.getStockChartData(selectedMonth,selectedType,selectedGraph).subscribe((data : any) => {
      this.stockChartData = data.data;
      this.setStockGraphData();
    });
  }
  updateType(){
    this.getStockChartDetails(this.selectedMonth,this.selectedType,this.selectedGraph);
  }

  updateMonth() {
    this.getStockChartDetails(this.selectedMonth,this.selectedType,this.selectedGraph);
    
  }
  ngOnInit(): void {
    this.selectedGraph = this.data;
    this.updateMonth();
  }

  setStockGraphData() {
    if(this.stockChartData.seq[1] == 'power'){
      this.unit = 'KW'
    }
    if(this.stockChartData.seq[1] == 'energy'){
      this.unit = 'KwH'
    }
    if(this.stockChartData.seq[1] == 'current'){
      this.unit = 'A'
    }
    if(this.stockChartData.seq[1] == 'voltage'){
      this.unit = 'V'
    }
    if(this.stockChartData.seq[1] == 'power_factor'){
      this.unit = ''
    }
    if(this.selectedGraph == 'consumption'){
      this.consumptionTotals = [
      { type:'Peak Consumption', value: this.stockChartData.peak +' '+ this.unit, date: this.pipe.transform(new Date(this.stockChartData.peak_time), 'medium'), color: 'var(--color6'},
      { type:'Average Consumption', value: this.stockChartData.avg +' '+ this.unit, color: 'var(--color8'},
      { type:'Lowest Consumption', value: this.stockChartData.lowest +' '+ this.unit,date: this.pipe.transform(new Date(this.stockChartData.lowest_time), 'medium'), color:'var(--color5'},
    ];
  }
    
    if(this.selectedGraph == 'phase')
    {
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
      legend: {
        enabled:true,
        align: 'center',
        symbolPadding: 10,
        symbolWidth: 70,
        itemDistance: 50,
        itemStyle:{
          fontSize:'14px',
          fontWeight:'bold',
          textOverflow:'ellipsis',
          padding:'30px'
          }
      },
      tooltip: {
        pointFormat: '{series.name}: <b>{point.y}</b> '+this.unit,
      },
      rangeSelector: {
              allButtonsEnabled: true,
              buttons: [{
                type: 'minute',
                count: 1500,
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
        name: 'Phase R',
        data: this.stockChartData.values_r,
        type: 'line',
        threshold: null,
        color:'#4164AD',
      },
      {
        name: 'Phase S',
        data: this.stockChartData.values_s,
        type: 'line',
        threshold: null,
        color:'#F3837A',
      },
      {
        name: 'Phase T',
        data: this.stockChartData.values_t,
        type: 'line',
        threshold: null,
        color:'#7DC3BE',
      }]
      });
    }
    else{
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
      tooltip: {
        pointFormat: '{series.name}: <b>{point.y}</b> '+this.unit,
      },  
      rangeSelector: {
              allButtonsEnabled: true,
              buttons: [{
                type: 'minute',
                count: 1500,
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
        name: this.stockChartData.seq[1],
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
}
