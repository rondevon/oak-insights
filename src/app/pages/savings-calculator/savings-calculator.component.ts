import { Component, OnInit } from '@angular/core';
import { DatePipe } from '@angular/common';
import { ApiService } from 'src/app/services/api.service';
import { ActivatedRoute } from '@angular/router';
import { MatSnackBar } from '@angular/material/snack-bar';
import { OwlOptions } from 'ngx-owl-carousel-o';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-savings-calculator',
  templateUrl: './savings-calculator.component.html',
  styleUrls: ['./savings-calculator.component.scss'],
})
export class SavingsCalculatorComponent implements OnInit {
  constructor(
    private apiService: ApiService,
    private route: ActivatedRoute,
    private _snackBar: MatSnackBar
  ) {}

  site_slug: any;
  donutLegends: any[] = [];
  pipe = new DatePipe('en-GB');
  historicalConsumptionData: any = [];
  selectedDate: Date = new Date(new Date().setMonth(new Date().getMonth() - 1));
  selectedMonth: any = this.pipe.transform(this.selectedDate, 'MMMM', 'UTC');

  selectedYear: any = this.pipe.transform(this.selectedDate, 'YYYY', 'UTC');

  currentDate: any = {
    month: this.pipe.transform(this.selectedDate, 'MMMM', 'UTC'),
    year: this.pipe.transform(this.selectedDate, 'YYYY', 'UTC'),
  };
  date = this.pipe.transform(new Date(), 'dd', 'UTC') as string;

  showMonthlyStats: boolean = false;
  selectedTileIndex: number = -1;
  dayAnalysisData: any = {};
  monthUsageData: any = {};
  cards: any[] = [];
  oakScore: number = 0;
  totalSize: any = { total: '1vw', text: '0.7vw', y: '-17' };

  savingsResponseData: any = {};
  savingsProjectedData: any = {};
  loading: boolean = true;
  smallLoading: boolean[] = [];
  totalEnergySavings: number = 0;
  totalSavings: any = {};

  customOptions: OwlOptions = {
    items: 3,
    margin: 24,
    loop: false,
    mouseDrag: true,
    touchDrag: true,
    pullDrag: true,
    dots: true,
    navSpeed: 700,
    navText: [
      '<i class="fa fa-angle-left"></i>',
      '<i class="fa fa-angle-right"></i>',
    ],
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
    nav: true,
  };

  ngOnInit(): void {
    this.site_slug = this.route.parent?.parent?.snapshot.params.site_slug;
    this.donutLegends = [
      { text: 'Preparatory Hours', color: 'var(--color3)' },
      { text: 'Operating Hours', color: 'var(--color8)' },
      { text: 'Non Operating Hours', color: 'var(--color2)' },
      { text: 'Closed Hours', color: 'var(--color5)' },
    ];
    this.totalSavings.petrol = 0;
    this.totalSavings.distance = 0;
    this.totalSavings.smartphone = 0;
    this.totalSavings.trees = 0;
    this.totalSavings.electricity = 0;
    this.totalSavings.trash = 0;
    this.getSavingsResponseData(
      this.selectedMonth,
      this.selectedYear,
      this.site_slug
    );

    this.apiService
      .getHistoricalMonthlyConsumption(
        this.currentDate.month,
        this.currentDate.year,
        this.site_slug
      )
      .subscribe(
        (data: any) => {
          this.historicalConsumptionData = data.data;
          this.historicalConsumptionData.reverse();
          // if (environment.production === false) {
            this.historicalConsumptionData = this.historicalConsumptionData.slice(0, 3);
            this.smallLoading = new Array(3).fill(false);
          // }
          this.historicalConsumptionData.forEach((monthData: any) => {
            if (
              monthData.month ===
                this.pipe.transform(new Date(), 'MMMM', 'UTC') &&
              monthData.year == this.pipe.transform(new Date(), 'YYYY', 'UTC')
            ) {
              monthData.consumption_overview.isCurrrentMonth = true;
            } else {
              monthData.consumption_overview.isCurrrentMonth = false;
            }
          });
          this.loading = false;
        },
        (err) => this.openSnackBar(err.error.message, 'Dismiss')
      );
    this.getMonthUsageData();
  }

  getMonthlyStats(month: any, year: any, site_slug: String) {
    this.oakScore = -1;
    this.apiService.getHomepageApi(month, year, site_slug).subscribe(
      (data: any) => {
        this.oakScore = data.data.oak_score;
        this.cards = [
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
            unit: '%',
            color: 'var(--color8)',
          },
          {
            image: '/assets/icons/icon-energy-intensity.svg',
            title: 'Energy Intensity ',
            value: 'DR',
            unit: '',
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
          },
        ];
      },
      (err) => this.openSnackBar(err.error.message, 'Dismiss')
    );
  }

  getDayAnalysisData(month: any, year: any, site_slug: String) {
    this.dayAnalysisData = undefined;
    this.apiService.getDayAnalysisData(month, year, site_slug).subscribe(
      (data: any) => {
        this.dayAnalysisData = data.data;
      },
      (err) => this.openSnackBar(err.error.message, 'Dismiss')
    );
  }

  openMonthlyStats(item: any, index: number) {
    this.showMonthlyStats = true;
    this.selectedTileIndex = index;
    this.getMonthlyStats(item.month, item.year, this.site_slug);
    this.getDayAnalysisData(item.month, item.year, this.site_slug);
  }

  closeMonthlyStats() {
    this.showMonthlyStats = false;
    this.selectedTileIndex = -1;
  }

  setTrendIcon(value: number) {
    if (value > 0) {
      return '/assets/icons/icon-down.svg';
    } else {
      return '/assets/icons/icon-up.svg';
    }
  }

  onUpdateSavings(event: any, index: number) {
    var projectedData = this.savingsProjectedData;
    var percentage =
      event && event.target && event.target.value
        ? (100 - parseInt(event.target.value)) * 0.01
        : 1;
    projectedData.values_cost[index].y =
      percentage * this.savingsResponseData.values_cost[index].y;
    projectedData.values_consumption[index].y =
      percentage * this.savingsResponseData.values_consumption[index].y;
    projectedData.values_c02[index].y =
      percentage * this.savingsResponseData.values_c02[index].y;
    projectedData.total_cost = this.getGroupTotals(projectedData.values_cost);
    projectedData.total_consumption = this.getGroupTotals(
      projectedData.values_consumption
    );
    projectedData.total_c02 = this.getGroupTotals(projectedData.values_c02);
    this.savingsProjectedData = projectedData;
    this.totalEnergySavings = this.getSavingsTotal(
      this.savingsResponseData.values_consumption,
      this.savingsProjectedData.values_consumption
    );
    this.totalSavings.petrol = Math.round(
      (this.totalEnergySavings * 0.000709) / 0.01018
    ).toLocaleString();
    this.totalSavings.distance = Math.round(
      (this.totalEnergySavings * 0.000709) / 0.000398
    ).toLocaleString();
    this.totalSavings.smartphone = Math.round(
      (this.totalEnergySavings * 0.000709) / 0.00000822
    ).toLocaleString();
    this.totalSavings.trees = Math.round(
      (this.totalEnergySavings * 0.000709) / 0.06
    ).toLocaleString();
    this.totalSavings.electricity = Math.round(
      ((this.totalEnergySavings * 0.000709) / 5.505) * 365
    ).toLocaleString();
    this.totalSavings.trash = Math.round(
      (this.totalEnergySavings * 0.000709) / 0.023
    ).toLocaleString();
  }

  getSavingsTotal(
    actualConsumption: any[],
    projectedConsumption: any[]
  ): number {
    var total = 0;
    for (let i = 0; i < actualConsumption.length; i++) {
      total += actualConsumption[i].y - projectedConsumption[i].y;
    }
    return total;
  }

  getGroupTotals(arr: any[]) {
    return arr
      .map((item: any) => item.y)
      .reduce((prev: any, next: any) => prev + next);
  }

  getSavingsResponseData(
    selectedMonth: any,
    selectedYear: any,
    site_slug: String
  ) {
    this.loading = true;
    this.apiService
      .getSavingsData(selectedMonth, selectedYear, site_slug)
      .subscribe(
        (data: any) => {
          this.savingsResponseData = data.data;
          this.savingsProjectedData = JSON.parse(
            JSON.stringify(this.savingsResponseData)
          );
          this.loading = false;
        },
        (err) => this.openSnackBar(err.error.message, 'Dismiss')
      );
  }
  openSnackBar(message: string, action: string = 'Cancel') {
    this._snackBar.open(message, action, { duration: 3000 });
  }

  getMonthUsageData() {
    this.apiService
      .getMonthlyUsageData(this.currentDate.year, this.site_slug)
      .subscribe(
        (data) => {
          this.monthUsageData = data.data;
        },
        (err) => this.openSnackBar(err.error.message, 'Dismiss')
      );
  }

  calculateTarget(target: number, actual: number, month: String) {
    let value: number;
    if (month == this.pipe.transform(new Date(), 'MMMM', 'UTC')) {
      let currentTargetValue = (Number(target) / 30) * Number(this.date);
      value = Math.round(
        ((actual - currentTargetValue) / currentTargetValue) * 100
      );
    } else {
      value = Math.round(((actual - target) / target) * 100);
    }

    let color: String = '';
    let text: String = '';
    if (value > 0) {
      color = '#ee6259';
      text = 'Above Target';
    } else {
      color = '#82c67c';
      text = 'Below Target';
    }
    return {
      value: Math.abs(value),
      color: color,
      text: text,
    };
  }

  calc(val: any, index: number) {
    this.smallLoading[index] = true;
    setTimeout(() => {
      this.historicalConsumptionData[index].consumption_overview.target = val;
      this.smallLoading[index] = false;
    }, 0);
  }
}
