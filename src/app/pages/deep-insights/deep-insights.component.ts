import { StockChart } from 'angular-highcharts';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-deep-insights',
  templateUrl: './deep-insights.component.html',
  styleUrls: ['./deep-insights.component.scss']
})
export class DeepInsightsComponent implements OnInit {

  constructor(private route: ActivatedRoute) { }
  site_slug: any={};
  consumption: any = {};
  loadCurveData: any = {};
  minMaxData: any ={};
  
  ngOnInit(): void {
    this.site_slug=this.route.parent?.parent?.snapshot.params.site_slug;
    this.consumption = {graphType:'consumption',site_slug:this.site_slug};
    this.loadCurveData = this.site_slug;
    this.minMaxData = this.site_slug;
  }

}
