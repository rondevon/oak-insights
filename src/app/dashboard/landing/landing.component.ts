import { DatePipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/services/api.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.scss'],
})
export class LandingComponent implements OnInit {
  site_slug: any;
  cards: any[] = [];
  pipe = new DatePipe('en-GB');
  month = this.pipe.transform(new Date(), 'MMMM') as String;
  year = this.pipe.transform(new Date(), 'YYYY') as String;
  role = localStorage.getItem('role');
  sites: any= {};
  LandingInsightsData: any = {};
  consumptionData: any;
  oakScore: number = 0;
  today= new Date();
  name: any;
  photo: any;
  monthUsageData: any;
  loading: boolean = true;

  constructor(private apiService: ApiService, private route: ActivatedRoute) {}

  ngOnInit(): void {
      this.site_slug = localStorage.getItem('site_slug');
      this.getProfile();   
      this.getSites();
      this.getHomeInsightCards();
      this.getMonthUsageData();
  }

  // ngOnChanges(){
  //   this.getHomeInsightCards();
  // }

  getMonthUsageData() {
    if(localStorage.getItem('role')==='Site Manager'){
    this.apiService.getMonthlyUsageData(this.year, this.site_slug).subscribe(data => {
      this.monthUsageData = data.data;
    });
  }

  if(localStorage.getItem('role')==='Account Manager'){
    this.apiService.getAccountMonthlyUsageData(this.year).subscribe(data => {
      this.monthUsageData = data.data;
    });
  }
    
  }

  getProfile(){
    this.apiService.getMyprofileApi().subscribe((data: any)=> {
      this.name= data.data.name;
      this.photo= data.data.photo;
    });
  }

  getSites(){
    this.apiService.getMultiSitesData(this.month,this.year).subscribe((data: any)=> {
      this.sites= data.data;
      console.log("multi",this.sites);
    });
  }

  getHomeInsightCards(){
    if(localStorage.getItem('role')==='Site Manager'){
      this.apiService.getHomepageApi(this.month, this.year, this.site_slug).subscribe((data: any) => {
      this.LandingInsightsData = data.data;
      console.log("landing",this.LandingInsightsData);
      this.setHomeInsightsCard();
      });
    }
    if(localStorage.getItem('role')==='Account Manager'){
      this.apiService.getAccountLandingInsightsData(this.month, this.year).subscribe((data: any) => {
      this.LandingInsightsData = data.data;
      console.log("landing",this.LandingInsightsData);
      this.setHomeInsightsCard();
      });
    }
  }

  setHomeInsightsCard(){
    this.consumptionData = this.LandingInsightsData.consumption_overview;
    console.log("cons", this.consumptionData);
    this.oakScore = this.LandingInsightsData.oak_score;
      this.cards= [
        {
          image: '/assets/icons/icon-energy-usage.svg',
          title: 'Energy Usage',
          value: this.LandingInsightsData.stats.energy,
          unit: 'kWh',
          color: 'var(--color5)',
        },
        {
          image: '/assets/icons/icon-co2-emission.svg',
          title: 'CO2 Emission(kg)',
          value: this.LandingInsightsData.stats.co2_emission,
          unit: 'kg',
          color: 'var(--color6)',
        },
        {
          image: '/assets/icons/icon-closed-hours.svg',
          title: 'Closed-hours',
          value: this.LandingInsightsData.stats.closed_hour_energy,
          unit: 'kWh',
          color: 'var(--color8)',
        },
      ]
      this.loading= false;
    
  }
  
}
