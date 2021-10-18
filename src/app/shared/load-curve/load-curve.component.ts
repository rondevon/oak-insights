import { Component, Input, OnInit } from '@angular/core';
import { Chart } from 'angular-highcharts';

@Component({
  selector: 'app-load-curve',
  templateUrl: './load-curve.component.html',
  styleUrls: ['./load-curve.component.scss']
})
export class LoadCurveComponent implements OnInit {

  constructor() { }
  @Input('data') data: any= {};
  chart: any = {};
  bntStyle1: String = 'open-days-button';
  bntStyle2: String = 'closed-days-button';
  bntStyle3: String = 'closed-days-button';
  bntStyle4: String = 'closed-days-button';
  ngOnInit(): void {
  }


  ngOnChanges() {
    this.setLoadCurveData();
  }
  setLoadCurveData() {
    this.chart = new Chart({
      chart:{
        marginTop: 40,
        height: 500,
      },
    title: {
        text: ''
    },
    exporting: { 
      enabled: false 
    },
    legend: {
      enabled: false,
    },
    xAxis: {
      title: {
        text: 'Hours (%)',
      },
      tickInterval: 10,
    },
    yAxis: {
      title: {
        text: 'Cost (£)',
      },
    },
  
    series: [{
        name: "Cost (£)",
        data: [[0,100],[10,100],[20,100],[30,100],[30,90],[40,90],[50,90],[50,40],[60,40],[70,40],[70,10],[80,10],[90,10],[90,0],[100,0]],
        type: 'area',
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

  switchChart(switchType: string){
    if(switchType === '1'){
      this.bntStyle1 = 'open-days-button'
      this.bntStyle2 = 'closed-days-button' 
      this.bntStyle3 = 'closed-days-button' 
      this.bntStyle4 = 'closed-days-button'    
    } 
    if(switchType === '3'){
      this.bntStyle1 = 'closed-days-button' 
      this.bntStyle2 = 'open-days-button'
      this.bntStyle3 = 'closed-days-button' 
      this.bntStyle4 = 'closed-days-button'    
    }
    if(switchType === '6'){
      this.bntStyle1 = 'closed-days-button' 
      this.bntStyle2 = 'closed-days-button'
      this.bntStyle3 = 'open-days-button' 
      this.bntStyle4 = 'closed-days-button'
    }
    if(switchType === '12'){
      this.bntStyle1 = 'closed-days-button' 
      this.bntStyle2 = 'closed-days-button'
      this.bntStyle3 = 'closed-days-button' 
      this.bntStyle4 = 'open-days-button'
    }
  }
}
