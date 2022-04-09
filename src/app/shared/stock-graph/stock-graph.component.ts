import { DatePipe } from '@angular/common';
import { Component, Input, OnInit } from '@angular/core';
import { StockChart } from 'angular-highcharts';
import { faCalendarAlt } from '@fortawesome/free-solid-svg-icons';

import { ApiService } from 'src/app/services/api.service';
import { MatSnackBar } from '@angular/material/snack-bar';
@Component({
  selector: 'app-stock-graph',
  templateUrl: './stock-graph.component.html',
  styleUrls: ['./stock-graph.component.scss']
})
export class StockGraphComponent implements OnInit {
  @Input('data') data: any;
  site_slug: any;
  minDate: Date = new Date();
  maxDate: Date = new Date();
  pipe = new DatePipe('en-GB');
  chart: any;
  consumptionTotals: any[] = [];
  stockChartData: any = {};
  selectedMonth: any = {month: this.pipe.transform(new Date(), 'MMMM','UTC'),year: this.pipe.transform(new Date(), 'YYYY','UTC')};
  selectedDate: Date = new Date((new Date()).setMonth(this.minDate.getMonth() - 1));
  selectedType : string = 'energy';
  selectedGraph: string = '';
  unit: string = 'kWh'
  typeList: string[] = [
    'energy',
    'power',
    'current',
    'voltage',
    'power_factor'
  ];
  loading: boolean = true;
  faCalendar = faCalendarAlt;
  
  constructor(private apiService: ApiService,  private _snackBar: MatSnackBar) {
    const x = sessionStorage.getItem('onboarding')?.split('-') || [];      
    if (x.length > 0) this.minDate.setFullYear(+x[0], +x[1]-1, +x[2]);
      this.maxDate.setMonth(this.maxDate.getMonth());
   }

  getStockChartDetails(selectedMonth: any, selectedYear: any, selectedType: String, selectedGraph: String, site_slug: String){
    this.apiService.getStockChartData(selectedMonth,selectedYear,selectedType,selectedGraph,site_slug).subscribe((data : any) => {
      this.stockChartData = data.data;
      
      // if(selectedGraph == 'consumption'){
      //   for (let i=0; i<this.stockChartData.values.length; i++){
      //     this.stockChartData.values[i][1] = (this.stockChartData.values[i][1]);
      //    }
      // }
      // if(selectedGraph == 'phase'){
      //   for (let i=0; i<this.stockChartData.values_r.length; i++){
      //     if(this.stockChartData.values_r && this.stockChartData.values_s && this.stockChartData.values_t)
      //     {
      //       this.stockChartData.values_r[i][1] = (this.stockChartData.values_r[i][1]);
      //     this.stockChartData.values_s[i][1] = (this.stockChartData.values_s[i][1]);
      //     this.stockChartData.values_t[i][1] = (this.stockChartData.values_t[i][1]);

      //     }
          
      //    }
      // }      
      this.setStockGraphData();
    }, (err: any) => this.openSnackBar(err.error?.message, 'Dismiss'));
  }
  updateType(){
    this.chart = undefined;
    this.getStockChartDetails(this.selectedMonth.month,this.selectedMonth.year,this.selectedType,this.selectedGraph, this.site_slug);
  }

  updateMonth() {
    this.chart = undefined;
    this.selectedMonth = {month: this.pipe.transform(this.selectedDate, 'MMMM','UTC'),year: this.selectedDate.getFullYear()};
    this.getStockChartDetails(this.selectedMonth.month,this.selectedMonth.year,this.selectedType,this.selectedGraph, this.site_slug);
    
  }
  ngOnInit(): void {
    this.selectedGraph = this.data.graphType;
    this.site_slug = this.data.site_slug;
  }

  ngOnChages(){
    this.updateMonth();
  }

  setStockGraphData() {
    if(this.stockChartData.seq[1] == 'power'){
      this.unit = 'kW'
    }
    if(this.stockChartData.seq[1] == 'energy'){
      this.unit = 'kWh'
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
      { type:'Peak Consumption', value: (this.stockChartData.peak).toLocaleString()+' '+ this.unit, date: this.pipe.transform(new Date(this.stockChartData.peak_time), 'medium','UTC'), color: 'var(--color6'},
      { type:'Average Consumption', value: (this.stockChartData.avg).toLocaleString() +' '+ this.unit, color: 'var(--color8'},
      { type:'Lowest Consumption', value: (this.stockChartData.lowest).toLocaleString() +' '+ this.unit,date: this.pipe.transform(new Date(this.stockChartData.lowest_time),'medium','UTC'), color:'var(--color5'},
    ];
  }
  if(this.selectedGraph == 'phase')
  {
      this.chart = new StockChart({
        chart:{
          marginTop: 40,
          height: 500,
          events: {
            load: function() {
              var chart = this;
              chart.renderer.text('Click on legends to modify chart',this.chartWidth/2.3,this.chartHeight-2)
              .attr({
                zIndex: 3,
                fill: 'black'
              })
              .add();
            }
          }
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
      //           type: 'minute',
      //           count: 1500,
      //           text: '5 Min',
      //           dataGrouping: {
      //               forced: true,
      //               units: [['minute', [5]]]
      //           }
      //       },{
                  type: 'day',
                  count: 1,
                  text: 'Hour',
                  dataGrouping: {
                      forced: true,
                      units: [['hour', [1]]]
                  }
              },{
                type: 'month',
                count: 1,
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
        name: 'Phase L1',
        data: this.stockChartData.values_r,
        type: 'line',
        threshold: null,
        color:'#4164AD',
      },
      {
        name: 'Phase L2',
        data: this.stockChartData.values_s,
        type: 'line',
        threshold: null,
        color:'#F3837A',
      },
      {
        name: 'Phase L3',
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
        pointFormat: '{series.name} : <b>{point.y}</b> '+this.unit,
      },  
      rangeSelector: {
              allButtonsEnabled: true,
              buttons: [{
            //     type: 'minute',
            //     count: 1500,
            //     text: '5 Min',
            //     dataGrouping: {
            //         forced: true,
            //         units: [['minute', [5]]]
            //     }
            // },{
                  type: 'day',
                  count: 1,
                  text: 'Hour',
                  dataGrouping: {
                      forced: true,
                      units: [['hour', [1]]]
                  }
              },{
                type: 'month',
                count: 1,
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
        name: this.stockChartData.seq[1] ,
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
  openSnackBar(message: string, action: string = 'Cancel') {
    this._snackBar.open(message, action, { duration: 3000 });
  }
}

