import { DatePipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { OwlOptions } from 'ngx-owl-carousel-o';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-basic-insights',
  templateUrl: './basic-insights.component.html',
  styleUrls: ['./basic-insights.component.scss'],
})
export class BasicInsightsComponent implements OnInit {
  pipe = new DatePipe('en-GB');
  historicalConsumptionData: any = [];
  currentDate: any = {
    month: this.pipe.transform(new Date(), 'MMMM'),
    year: this.pipe.transform(new Date(), 'YYYY'),
  };
  showMonthlyStats: boolean = false;
  selectedTileIndex: number = -1;
  dayAnalysisData: any = {};
  monthUsageData: any = {};
  cards: any[] = [];
  oakScore: number = 0;
  totalSize: any = {total:'1vw',text:'0.7vw',y:'-17'}

  customOptions: OwlOptions = {
    items:3,
    margin:30,
    loop: false,
    mouseDrag: true,
    touchDrag: true,
    pullDrag: true,
    dots: true,
    navSpeed: 700,
    navText: ['', ''],
    responsive: {
      0: {
        items: 1,
      },
      400: {
        items: 2,
      },
      740: {
        items: 2,
      },
      940: {
        items: 3,
      },
    },
    nav: false,
  };

  constructor(private apiService: ApiService) {}

  ngOnInit(): void {
    this.apiService
      .getHistoricalMonthlyConsumption(
        this.currentDate.month,
        this.currentDate.year
      )
      .subscribe((data: any) => {
        this.historicalConsumptionData = data.data;
        this.historicalConsumptionData.reverse();
      });
    this.getMonthUsageData();
  }

  getMonthlyStats(month: any, year: any) {
    this.apiService.getHomepageApi(month, year).subscribe((data: any) => {
      this.oakScore = data.data.oak_score;
      this.cards = [{
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
      {
        image: '/assets/icons/icon-energy-intensity.svg',
        title: 'Energy Intensity ',
        value: data.data.stats.energy_intensity,
        unit: 'kWh/m2',
        color: 'var(--color5)',
      },
      {
        image: '/assets/icons/icon-offset-planting.svg',
        title: 'Offset by Planting',
        value: data.data.stats.offset_planting,
        unit: 'Oak Trees',
        color: 'var(--color5)',
      },
      {
        image: '/assets/icons/icon-trend.svg',
        title: 'Trend vs Last Month',
        value: data.data.stats.trend_over_last,
        unit: '%',
        color: 'var(--color7)',
      }];
    });
  }

  getDayAnalysisData(month: any, year: any) {
    this.dayAnalysisData = {};
    this.apiService.getDayAnalysisData(month, year).subscribe((data: any) => {
      this.dayAnalysisData = data.data;
    });
  }

  openMonthlyStats(item: any, index: number) {
    this.showMonthlyStats = true;
    this.selectedTileIndex = index;
    this.getMonthlyStats(item.month, item.year);
    this.getDayAnalysisData(item.month, item.year);
  }

  closeMonthlyStats() {
    this.showMonthlyStats = false;
  }

setTrendIcon(value: number){
  if (value > 0)
  {
    return '/assets/icons/icon-up.svg';
  }
  else{
    return '/assets/icons/icon-down.svg';
  }
}

calculateTarget(target: number, actual: number)
{
    let value: number = Math.round((actual-target)/target*100);
    let color: String = '';
    let text: String = '';
    if(value>0)
    {
      color='#ee6259';
      text='Above Target'
    } else {
      color='#82c67c';
      text='Below Target'
    }
    return {
      value: Math.abs(value),
      color: color,
      text: text,
    };
    
}

  getMonthUsageData() {
    this.apiService.getMonthlyUsageData(this.currentDate.year).subscribe(data => {
      this.monthUsageData = data.data;
    });
  }
}
