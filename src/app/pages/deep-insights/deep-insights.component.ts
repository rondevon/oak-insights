import { StockChart } from 'angular-highcharts';
import { Component, OnInit } from '@angular/core';

import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-deep-insights',
  templateUrl: './deep-insights.component.html',
  styleUrls: ['./deep-insights.component.scss']
})
export class DeepInsightsComponent implements OnInit {


  constructor() { }
  
  consumption: any = {};
  loadCurveData: any = {};
  minMaxData: any ={};
  
  ngOnInit(): void {
    this.consumption = 'consumption';
    this.loadCurveData = 0;
    this.minMaxData = 0;
  }

}
