import { DatePipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.scss'],
})
export class LandingComponent implements OnInit {
  cards: any[] = [];
  pipe = new DatePipe('en-GB');
  month = this.pipe.transform(new Date(), 'MMMM') as string;
  consumptionData: any;
  oakScore: number = 0;
  today= new Date();
  name: any;
  photo: any;
  monthUsageData: any;
  loading: boolean = true;

  constructor(private apiService: ApiService) {}

  ngOnInit(): void {
    this.apiService.getHomepageApi(this.month).subscribe((data: any) => {
      this.consumptionData = data.data.consumption_overview;
      this.oakScore = data.data.oak_score;
      this.cards= [
        {
          image: '/assets/icons/icon-energy-usage.svg',
          title: 'Energy Usage',
          value: data.data.stats.energy,
          unit: 'kWh',
          color: 'var(--color5)',
        },
        {
          image: '/assets/icons/icon-co2-emission.svg',
          title: 'CO2 Emission(kg)',
          value: data.data.stats.co2_emission,
          unit: 'kg',
          color: 'var(--color6)',
        },
        {
          image: '/assets/icons/icon-closed-hours.svg',
          title: 'Closed-hours',
          value: data.data.stats.closed_hour_energy,
          unit: 'kWh',
          color: 'var(--color8)',
        },
      ]
      this.loading= false;
    });

    this.apiService.getMyprofileApi().subscribe((data: any)=> {
      console.log(data.data);
      this.name= data.data.name;
      this.photo= data.data.photo;
    });
    
    this.getMonthUsageData();
  }

  getMonthUsageData() {
    this.apiService.getMonthlyUsageData().subscribe(data => {
      this.monthUsageData = data.data;
    });
  }
  
}
