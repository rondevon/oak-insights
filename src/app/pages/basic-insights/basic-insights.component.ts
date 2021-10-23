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
  showMonthlyStats: boolean = true;
  selectedTile: any = {};
  selectedMonthStats: any = {};

  customOptions: OwlOptions = {
    loop: false,
    mouseDrag: false,
    touchDrag: false,
    pullDrag: false,
    dots: false,
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
        items: 3,
      },
      940: {
        items: 4,
      },
    },
    nav: true,
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
    this.getMonthlyStats(this.currentDate.month, this.currentDate.year);
  }

  getMonthlyStats(month: any, year: any) {
    this.apiService.getHomepageApi(month, year).subscribe((data: any) => {
      this.selectedMonthStats = data.data;
    });
  }

  openMonthlyStats(item: any) {
    this.showMonthlyStats = true;
    this.selectedTile = item;
    this.getMonthlyStats(item.month, item.year);
  }

  closeMonthlyStats() {
    this.showMonthlyStats = false;
  }
}
