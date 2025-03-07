import { DatePipe } from '@angular/common';
import { Component, Input, OnInit } from '@angular/core';
import { Chart } from 'angular-highcharts';

import { ApiService } from 'src/app/services/api.service';
@Component({
  selector: 'app-min-max',
  templateUrl: './min-max.component.html',
  styleUrls: ['./min-max.component.scss']
})
export class MinMaxComponent implements OnInit {
  loading: boolean = true;
  constructor(private apiService: ApiService) { }
  @Input('data') data: any= {};
  pipe = new DatePipe('en-GB');
  chart: any = {};
  minMaxData: any = {};
  selectedMonth: any = this.pipe.transform(new Date(), 'MMMM','UTC');
  selectedYear: any = this.pipe.transform(new Date(), 'YYYY','UTC');
  duration: any = 30;
  bntStyle1: String = 'open-days-button';
  bntStyle2: String = 'closed-days-button';
  bntStyle3: String = 'closed-days-button';
  bntStyle4: String = 'closed-days-button';
  
  ngOnInit(): void {
  }

  ngOnChanges() {
    this.loading = true;
    this.getMinMaxData(this.selectedMonth,this.selectedYear,this.duration,this.data);
  }

  getMinMaxData(selectedMonth: any, selectedYear: any, duration: String, site_slug: String){
    this.apiService.getMinMaxData(selectedMonth,selectedYear,duration,site_slug).subscribe((data : any) => {
      this.minMaxData = data.values;
      this.setMinMaxData();
      this.loading = false;
    });
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
      title: {
        text: 'Hours'
    },
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
        data: this.minMaxData,
        color:'#364096dd',
        type: 'columnrange',
    }]
    });
  }

  switchChart(switchType: string){
    this.loading = true;
    if(switchType === '1'){
      this.bntStyle1 = 'open-days-button'
      this.bntStyle2 = 'closed-days-button' 
      this.bntStyle3 = 'closed-days-button' 
      this.bntStyle4 = 'closed-days-button'
      this.duration = '30'
      this.getMinMaxData(this.selectedMonth,this.selectedYear,this.duration,this.data);    
    } 
    if(switchType === '3'){
      this.bntStyle1 = 'closed-days-button' 
      this.bntStyle2 = 'open-days-button'
      this.bntStyle3 = 'closed-days-button' 
      this.bntStyle4 = 'closed-days-button'  
      this.duration = '90'
      this.getMinMaxData(this.selectedMonth,this.selectedYear,this.duration,this.data);  
    }
    if(switchType === '6'){
      this.bntStyle1 = 'closed-days-button' 
      this.bntStyle2 = 'closed-days-button'
      this.bntStyle3 = 'open-days-button' 
      this.bntStyle4 = 'closed-days-button'
      this.duration = '180'
      this.getMinMaxData(this.selectedMonth,this.selectedYear,this.duration,this.data);
    }
    if(switchType === '12'){
      this.bntStyle1 = 'closed-days-button' 
      this.bntStyle2 = 'closed-days-button'
      this.bntStyle3 = 'closed-days-button' 
      this.bntStyle4 = 'open-days-button'
      this.duration = '360'
      this.getMinMaxData(this.selectedMonth,this.selectedYear,this.duration,this.data);
    }
  }

}
