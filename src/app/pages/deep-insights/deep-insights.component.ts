import { StockChart } from 'angular-highcharts';
import { Component, OnInit } from '@angular/core';

import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-deep-insights',
  templateUrl: './deep-insights.component.html',
  styleUrls: ['./deep-insights.component.scss']
})
export class DeepInsightsComponent implements OnInit {


  constructor(private apiService: ApiService) { }
  
  loadCurveData: any = {};
  minMaxData: any ={};
  stockChartData: any={}
  
  ngOnInit(): void {
     
    this.loadCurveData = 0;
    this.minMaxData = 0;
  }

}
