import { Component, OnInit } from '@angular/core';

import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-deep-insights',
  templateUrl: './deep-insights.component.html',
  styleUrls: ['./deep-insights.component.scss']
})
export class DeepInsightsComponent implements OnInit {


  constructor(private apiService: ApiService) { }
  stockChartData: any = {};
  loadCurveData: any = {};
  minMaxData: any ={};

  getStockChartDetails(){
    this.apiService.getStockChartData().subscribe(data => {
      this.stockChartData = data;
    });
  }
  
  ngOnInit(): void {
    this.getStockChartDetails();
    this.loadCurveData = 0;
    this.minMaxData = 0;
  }

}
