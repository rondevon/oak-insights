import { Component, Input, OnInit } from '@angular/core';
import { Chart } from 'angular-highcharts';
import { ApiService } from 'src/app/services/api.service';
@Component({
  selector: 'app-load-curve',
  templateUrl: './load-curve.component.html',
  styleUrls: ['./load-curve.component.scss']
})
export class LoadCurveComponent implements OnInit {
  loading: boolean = true;
  constructor(private apiService: ApiService) { }
  @Input('data') data: any= {};
  chart: any = {};
  loadCurveData: any={};
  duration: any = 30;
  bntStyle1: String = 'open-days-button';
  bntStyle2: String = 'closed-days-button';
  bntStyle3: String = 'closed-days-button';
  bntStyle4: String = 'closed-days-button';
  ngOnInit(): void {
  }


  ngOnChanges() {
    this.loading = true;
    this.getLoadCurveDetails(this.duration,this.data);
  }

  getLoadCurveDetails(duration: any, site_slug: any){
    this.apiService.getLoadCurveData(duration,site_slug).subscribe((data : any) => {
      this.loadCurveData = data.data;
      this.setLoadCurveData();
      this.loading = false;
    });
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
        data: this.loadCurveData.values,
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
      this.duration = '30'
      this.getLoadCurveDetails(this.duration,this.data);    
    } 
    if(switchType === '3'){
      this.bntStyle1 = 'closed-days-button' 
      this.bntStyle2 = 'open-days-button'
      this.bntStyle3 = 'closed-days-button' 
      this.bntStyle4 = 'closed-days-button'
      this.duration = '60'
      this.getLoadCurveDetails(this.duration,this.data);    
    }
    if(switchType === '6'){
      this.bntStyle1 = 'closed-days-button' 
      this.bntStyle2 = 'closed-days-button'
      this.bntStyle3 = 'open-days-button' 
      this.bntStyle4 = 'closed-days-button'
      this.duration = '90'
      this.getLoadCurveDetails(this.duration,this.data);
    }
    if(switchType === '12'){
      this.bntStyle1 = 'closed-days-button' 
      this.bntStyle2 = 'closed-days-button'
      this.bntStyle3 = 'closed-days-button' 
      this.bntStyle4 = 'open-days-button'
      this.duration = '120'
      this.getLoadCurveDetails(this.duration,this.data);
    }
  }
}
